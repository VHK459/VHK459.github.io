import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import Stats from "stats.js";
import * as dat from "dat.gui";
import Mustache from "mustache";
import vertexShader from '../shaders/vertex.glsl?raw';
import raytracerTemplate from '../shaders/raytracer.glsl?raw';
import tt from '../shaders/tt.frag?raw';

// --- SHADERS AS STRINGS ---
// In a real project, put these in .glsl files and import them via vite-plugin-glsl or raw-loader



// Note: You must provide the content of 'raytracer.glsl' here as a string
// or import it if using Vite/Webpack. I am using a placeholder.


const DitherColorShader = {
    name: 'DitherColorShader',
    uniforms: {
        'tDiffuse': { value: null }, // The previous frame
        'uResolution': { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
uColor1: { value: new THREE.Color(0x020205) }, // Absolute black
uColor2: { value: new THREE.Color(0x0A0A2E) }, // Deep navy
uColor3: { value: new THREE.Color(0x0033A0) }, // Electric blue
uColor4: { value: new THREE.Color(0x00C8FF) }, // Cyan glow
uColor5: { value: new THREE.Color(0x6CFFFA) }, // Neon aqua
uColor6: { value: new THREE.Color(0xE6FFFF) }, // White core

    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: tt
};
// --- PHYSICS CLASSES ---

const aspect = window.innerWidth / window.innerHeight;

class Observer {
  constructor() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.orientation = new THREE.Matrix3();
    this.time = 0.0;
  }

  orbitalFrame() {
    const orbital_y = new THREE.Vector3()
      .subVectors(
        this.velocity.clone().normalize().multiplyScalar(4.0),
        this.position
      )
      .normalize();

    const orbital_z = new THREE.Vector3()
      .crossVectors(this.position, orbital_y)
      .normalize();

    const orbital_x = new THREE.Vector3()
      .crossVectors(orbital_y, orbital_z)
      .normalize();

    const m4 = new THREE.Matrix4();
    m4.makeBasis(orbital_x, orbital_y, orbital_z);
    const m3 = new THREE.Matrix3();
    m3.setFromMatrix4(m4);
    return m3;
  }

  move(dt, shaderParams) {
    dt *= shaderParams.time_scale;
    let r, v = 0;
    // console.log(shaderParams.observer.motion);
    if (shaderParams.observer.motion) {
      r = shaderParams.observer.distance;
      
      v = 1.0 / Math.sqrt(2.0 * (r - 1.0));
      const ang_vel = v / r;
      const angle = this.time * ang_vel;
      // console.log(angle)
      const s = Math.sin(angle), c = Math.cos(angle);

      this.position.set(c * r, s * r, 1);
      this.velocity.set(-s * v, c * v, 0);

      const degToRad = (a) => (Math.PI * a) / 180.0;
      const alpha = degToRad(shaderParams.observer.orbital_inclination);
      const orbit_coords = new THREE.Matrix4().makeRotationY(alpha);

      this.position.applyMatrix4(orbit_coords);
      this.velocity.applyMatrix4(orbit_coords);
    } else {
      r = this.position.length();
    }

    if (shaderParams.gravitational_time_dilation) {
      dt = Math.sqrt((dt * dt * (1.0 - v * v)) / (1 - 1.0 / r));
    }

    this.time += dt;
  }
}

class ShaderManager {
  constructor(mustacheTemplate) {
    this.template = mustacheTemplate;
    this.parameters = {
      n_steps: 100,
      quality: "medium",
      accretion_disk: true,
      planet: { enabled: true, distance: 7.0, radius: 0.4 },
      lorentz_contraction: true,
      gravitational_time_dilation: true,
      aberration: true,
      beaming: true,
      doppler_shift: true,
      light_travel_time: true,
      time_scale: 5.0,
      observer: { motion: true, distance: 30, orbital_inclination: -1.0 },
      planetEnabled: function () {
        return this.planet.enabled && this.quality !== "fast";
      },
      observerMotion: function () {
        return this.observer.motion;
      },
      camera: {
        cinematic: true,
        roll: 0.0
      }
    };
    this.needsUpdate = true;
  }

  hasMovingParts() {
    return this.parameters.planet.enabled || this.parameters.observer.motion;
  }

  compile() {
    return Mustache.render(this.template, this.parameters);
  }
}

const degToRad = (a) => (Math.PI * a) / 180.0;

// --- REACT COMPONENT ---

const BlackHoleSimulation = () => {
  const mountRef = useRef(null);
  
  // We use Refs for logic that doesn't trigger UI re-renders, 
  // but needs to persist across renders
  const sceneRef = useRef(null);
  const shaderMgrRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // --- INITIALIZATION ---
    const container = mountRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(90, width / height, 1, 8000);
    const renderer = new THREE.WebGLRenderer();
    
    console.log(aspect);
    if (aspect < 1.0) {
      renderer.setPixelRatio( 0.9);
    }
    else {
      renderer.setPixelRatio(0.6)
    }

    // renderer.setPixelRatio(0.6); // Limit pixel ratio for performance
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.top = "0px";
    container.appendChild(stats.domElement);

    const observer = new Observer();
    observerRef.current = observer;
    
    // Shader Manager init
    const shaderMgr = new ShaderManager(raytracerTemplate);
    shaderMgrRef.current = shaderMgr;

    // Load Textures
    const texLoader = new THREE.TextureLoader();
    if (aspect < 1.0) {
      var path = "/img/gradient3.png";
    }
    else{
      path = "/img/gradient7.png";
    }
    const textures = {
      galaxy: texLoader.load("/img/gradient7.png"), // Ensure these files exist in public/img/
      spectra: texLoader.load("/img/spectra.png"),
      moon: texLoader.load("/img/berserk.jpg"),
      accretion_disk: texLoader.load(path),
      stars: texLoader.load("/img/stars1.png"),
    };
    
    // Set filters
    textures.galaxy.magFilter = THREE.NearestFilter;
    textures.galaxy.minFilter = THREE.NearestFilter;

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(width, height) },
      cam_pos: { value: new THREE.Vector3() },
      cam_x: { value: new THREE.Vector3() },
      cam_y: { value: new THREE.Vector3() },
      cam_z: { value: new THREE.Vector3() },
      cam_vel: { value: new THREE.Vector3() },
      planet_distance: { value: shaderMgr.parameters.planet.distance },
      planet_radius: { value: shaderMgr.parameters.planet.radius },
      star_texture: { value: textures.stars },
      accretion_disk_texture: { value: textures.accretion_disk },
      galaxy_texture: { value: textures.galaxy },
      planet_texture: { value: textures.moon },
      spectrum_texture: { value: textures.spectra },
    };
// console.log(uniforms)
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: shaderMgr.compile(),
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Controls
    const cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);

    // Camera Init Logic
    const initializeCamera = () => {
      const pitchAngle = 0.0, yawAngle = 0.0;
      camera.matrixWorldInverse.makeRotationX(degToRad(-pitchAngle));
      camera.matrixWorldInverse.multiply(new THREE.Matrix4().makeRotationY(degToRad(-yawAngle)));
      const m = camera.matrixWorldInverse.elements;
      camera.position.set(m[2], m[6], m[10]);
    };
    initializeCamera();

    // Post Processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      .1 , // Strength
      0.1, // Radius
      0.0  // Threshold
    );
    composer.addPass(bloomPass);

    const ditherPass = new ShaderPass(DitherColorShader);
    ditherPass.uniforms["uResolution"].value.set(width, height);
    composer.addPass(ditherPass);

    // GUI Setup
    const gui = new dat.GUI({ autoPlace: false });
    gui.domElement.style.position = "absolute";
    gui.domElement.style.top = "0px";
    gui.domElement.style.right = "0px";
    container.appendChild(gui.domElement);

    // const setupGUI = () => {
    //     const p = shaderMgr.parameters;
    //     const updateShader = () => {
    //         material.fragmentShader = shaderMgr.compile();
    //         material.needsUpdate = true;
    //         shaderMgr.needsUpdate = true;
    //     };

    //     gui.add(p, 'quality', ['fast', 'medium', 'high']).onChange((val) => {
    //         switch(val) {
    //             case 'fast': p.n_steps = 40; break;
    //             case 'medium': p.n_steps = 100; break;
    //             case 'high': p.n_steps = 200; break;
    //         }
    //         updateShader();
    //     });
        
    //     const folderOb = gui.addFolder('Observer');
    //     folderOb.add(p.observer, 'motion').onChange(updateShader);
    //     folderOb.add(p.observer, 'distance', 1.5, 30).onChange(() => {}); // camera updates in loop
    //     folderOb.open();
    //     // Add other GUI params here...
    // };
    // setupGUI();

    // --- HELPER FUNCTIONS ---

    const updateCamera = () => {
        const m = camera.matrixWorldInverse.elements;
        let camera_matrix;
        // console.log(m);
        if (shaderMgr.parameters.observer.motion) {
            camera_matrix = new THREE.Matrix3();
        } else {
            camera_matrix = observer.orientation;
        }

        camera_matrix.set(
            m[0], m[1], m[2],
            m[8], m[9], m[10],
            m[4], m[5], m[6]
        );
        // camera_matrix.set(1, 0, 0, 0, 0, 1, 0, 1, 0);

        // console.log(camera_matrix);

        if (shaderMgr.parameters.observer.motion) {
            observer.orientation = observer.orbitalFrame().multiply(camera_matrix);
            // console.log(observer.orbitalFrame());
        } else {
            const p = new THREE.Vector3(m[6], m[7], m[8]);
            const dist = shaderMgr.parameters.observer.distance;
            observer.position.set(-p.x * dist, -p.y * dist, -p.z * dist);
            observer.velocity.set(0, 0, 0);
        }
    };

    cameraControls.addEventListener('change', updateCamera);
    updateCamera(); // Initial call

    const updateUniforms = () => {
        uniforms.planet_distance.value = shaderMgr.parameters.planet.distance;
        uniforms.planet_radius.value = shaderMgr.parameters.planet.radius;
        uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
        uniforms.time.value = observer.time;
        
        uniforms.cam_pos.value.copy(observer.position);
        uniforms.cam_vel.value.copy(observer.velocity);
        
        const e = observer.orientation.elements;
        // console.log(e)
        uniforms.cam_x.value.set(e[0], e[1], e[2]);
        uniforms.cam_y.value.set(e[3], e[4], e[5]);
        uniforms.cam_z.value.set(e[6], e[7], e[8]);
    };

    // --- ANIMATION LOOP ---
    let lastCameraMat = new THREE.Matrix4().identity();
    let lastTimestamp = performance.now();
    let reqId;

    const frobeniusDistance = (m1, m2) => {
        let sum = 0.0;
        for (let i = 0; i < 16; i++) {
            const diff = m1.elements[i] - m2.elements[i];
            sum += diff * diff;
        }
        return Math.sqrt(sum);
    };

    const animate = () => {
        reqId = requestAnimationFrame(animate);
        
        const now = performance.now();
        const dt = (now - lastTimestamp) / 1000.0;
        lastTimestamp = now;

        observer.move(dt, shaderMgr.parameters);
        if (shaderMgr.parameters.observer.motion) updateCamera();

        updateUniforms();

        camera.updateMatrixWorld();
        camera.matrixWorldInverse.copy(camera.matrixWorld).invert();

        // Check if we need to re-render
        if (shaderMgr.needsUpdate || 
            shaderMgr.hasMovingParts() || 
            frobeniusDistance(camera.matrixWorldInverse, lastCameraMat) > 1e-10) {
            
            shaderMgr.needsUpdate = false;
            composer.render();
            lastCameraMat.copy(camera.matrixWorldInverse);
        }
        
        stats.update();
    };

    // Start loop
    animate();

    // Resize Handler
    const handleResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        composer.setSize(w, h);
        bloomPass.resolution.set(w, h);
        ditherPass.uniforms["uResolution"].value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      cameraControls.dispose();
      gui.destroy();
      renderer.dispose();
      // Remove elements appended to container
      if (container) container.innerHTML = ""; 
    };
  }, []); // Empty dependency array = run once on mount

  return <div ref={mountRef} style={{ width: "100%", height: "100vh", overflow: "hidden" ,  pointerEvents: "none",
    touchAction: "none"}} />;
};

export default BlackHoleSimulation;
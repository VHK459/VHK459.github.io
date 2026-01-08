
"use strict"

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { Effect,EffectPass  } from "postprocessing";
var composer;
import tt from './tt.frag?raw';
const DitherColorShader = {
    name: 'DitherColorShader',
    uniforms: {
        'tDiffuse': { value: null }, // The previous frame
        'uResolution': { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        'uColor1': { value: new THREE.Color(0x005f08) }, // Dark Purple
        'uColor2': { value: new THREE.Color(0xfffff0) }  // Bright Green
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 uResolution;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec2 vUv;

        // Simple 4x4 Bayer Matrix for ordered dithering
        float dither4x4(vec2 position, float brightness) {
            int x = int(mod(position.x, 4.0));
            int y = int(mod(position.y, 4.0));
            int index = x + y * 4;
            float limit = 0.0;

            if (x < 8) {
                if (index == 0) limit = 0.0625;
                if (index == 1) limit = 0.5625;
                if (index == 2) limit = 0.1875;
                if (index == 3) limit = 0.6875;
                if (index == 4) limit = 0.8125;
                if (index == 5) limit = 0.3125;
                if (index == 6) limit = 0.9375;
                if (index == 7) limit = 0.4375;
                if (index == 8) limit = 0.25;
                if (index == 9) limit = 0.75;
                if (index == 10) limit = 0.125;
                if (index == 11) limit = 0.625;
                if (index == 12) limit = 1.0;
                if (index == 13) limit = 0.5;
                if (index == 14) limit = 0.875;
                if (index == 15) limit = 0.375;
            }
            return brightness < limit ? 0.0 : 1.0;
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            
            // 1. Calculate Luminance (Brightness)
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));

            // 2. Apply Dithering
            // We map the pixel coord to the bayer matrix
            vec2 pixelCoord = gl_FragCoord.xy;
            float dithered = dither4x4(pixelCoord, gray);

            // 3. Map to Color Scheme
            // If dither returns 0, use Color1, else Color2
            vec3 finalColor = mix(uColor1, uColor2, dithered);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `
};


export class MyMultiDitherEffect extends Effect {
  constructor({
    colorShades = 4,
    ditherScale = 1.0,
    bias = 0.0
  } = {}) {
    super("MyMultiDitherEffect", tt, {
      uniforms: new Map([
        ["colorShades", new THREE.Uniform(colorShades)],
        ["ditherScale", new THREE.Uniform(ditherScale)],
        ["bias", new THREE.Uniform(bias)],
        ["resolution", new THREE.Uniform(new THREE.Vector2())]
      ])
    });
  }

  update(renderer) {
    this.uniforms
      .get("resolution")
      .value
      .set(renderer.domElement.width, renderer.domElement.height);
  }
}







if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

function Observer() {
    this.position = new THREE.Vector3(10,0,0);
    this.velocity = new THREE.Vector3(1,0,0);
    this.orientation = new THREE.Matrix3();
    this.time = 0.0;
}


Observer.prototype.orbitalFrame = function() {

    const orbital_y = new THREE.Vector3()
        .subVectors(
            observer.velocity.clone().normalize().multiplyScalar(4.0),
            observer.position
        )
        .normalize();

    const orbital_z = new THREE.Vector3()
        .crossVectors(observer.position, orbital_y)
        .normalize();

    const orbital_x = new THREE.Vector3()
        .crossVectors(orbital_y, orbital_z)
        .normalize();

    // Build Matrix4 basis
    const m4 = new THREE.Matrix4();
    m4.makeBasis(orbital_x, orbital_y, orbital_z);

    // Extract rotation into Matrix3 (replacement for linearPart)
    const m3 = new THREE.Matrix3();
    m3.setFromMatrix4(m4);

    return m3;
};

Observer.prototype.move = function(dt) {

    dt *= shader.parameters.time_scale;

    var r;
    var v = 0;

    // motion on a pre-defined cirular orbit
    if (shader.parameters.observer.motion) {

        r = shader.parameters.observer.distance;
        v =  1.0 / Math.sqrt(2.0*(r-1.0));
        var ang_vel = v / r;
        var angle = this.time * ang_vel;

        var s = Math.sin(angle), c = Math.cos(angle);

        this.position.set(c*r, s*r, 0);
        this.velocity.set(-s*v, c*v, 0);

        var alpha = degToRad(shader.parameters.observer.orbital_inclination);
        var orbit_coords = (new THREE.Matrix4()).makeRotationY(alpha);

        this.position.applyMatrix4(orbit_coords);
        this.velocity.applyMatrix4(orbit_coords);
    }
    else {
        r = this.position.length();
    }

    if (shader.parameters.gravitational_time_dilation) {
        dt = Math.sqrt((dt*dt * (1.0 - v*v)) / (1-1.0/r));
    }

    this.time += dt;
};

var container, stats;
var camera, scene, renderer, cameraControls, shader = null;
var observer = new Observer();

function Shader(mustacheTemplate) {
    // Compile-time shader parameters
    this.parameters = {
        n_steps: 100,
        quality: 'medium',
        accretion_disk: true,
        planet: {
            enabled: true,
            distance: 7.0,
            radius: 0.4
        },
        lorentz_contraction: true,
        gravitational_time_dilation: true,
        aberration: true,
        beaming: true,
        doppler_shift: true,
        light_travel_time: true,
        time_scale: .5,
        observer: {
            motion: true,
            distance: 5,
            orbital_inclination: -10
        },

        planetEnabled: function() {
            return this.planet.enabled && this.quality !== 'fast';
        },

        observerMotion: function() {
            return this.observer.motion;
        }
    };
    var that = this;
    this.needsUpdate = false;

    this.hasMovingParts = function() {
        return this.parameters.planet.enabled || this.parameters.observer.motion;
    };

    this.compile = function() {
        return Mustache.render(mustacheTemplate, that.parameters);
    };
}

function degToRad(a) { return Math.PI * a / 180.0; }

(function(){
    var textures = {};

    function whenLoaded() {
        init(textures);
        $('#loader').hide();
        $('.initially-hidden').removeClass('initially-hidden');
        animate();
    }

    function checkLoaded() {
        if (shader === null) return;
        for (var key in textures) if (textures[key] === null) return;
        whenLoaded();
    }

    SHADER_LOADER.load(function(shaders) {
        shader = new Shader(shaders.raytracer.fragment);
        checkLoaded();
    });

    var texLoader = new THREE.TextureLoader();
    function loadTexture(symbol, filename, interpolation) {
        textures[symbol] = null;
        texLoader.load(filename, function(tex) {
            tex.magFilter = interpolation;
            tex.minFilter = interpolation;
            textures[symbol] = tex;
            checkLoaded();
        });
    }

    loadTexture('galaxy', 'img/dark_img.png', THREE.NearestFilter);
    loadTexture('spectra', 'img/spectra.png', THREE.LinearFilter);
    loadTexture('moon', 'img/beach-ball.png', THREE.LinearFilter);
    loadTexture('stars', 'img/dark_img.png', THREE.LinearFilter);
    loadTexture('accretion_disk', 'img/gradient1.png', THREE.LinearFilter);
})();

var updateUniforms;

function init(textures) {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneGeometry( 2, 2 );

    var uniforms = {
        time: { type: "f", value: 0 },
        resolution: { type: "v2", value: new THREE.Vector2() },
        cam_pos: { type: "v3", value: new THREE.Vector3() },
        cam_x: { type: "v3", value: new THREE.Vector3() },
        cam_y: { type: "v3", value: new THREE.Vector3() },
        cam_z: { type: "v3", value: new THREE.Vector3() },
        cam_vel: { type: "v3", value: new THREE.Vector3() },

        planet_distance: { type: "f" },
        planet_radius: { type: "f" },

        star_texture: { type: "t", value: textures.stars },
        accretion_disk_texture: { type: "t",  value: textures.accretion_disk },
        galaxy_texture: { type: "t", value: textures.galaxy },
        planet_texture: { type: "t", value: textures.moon },
        spectrum_texture: { type: "t", value: textures.spectra }
    };

    updateUniforms = function() {
        uniforms.planet_distance.value = shader.parameters.planet.distance;
        uniforms.planet_radius.value = shader.parameters.planet.radius;

        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;

        uniforms.time.value = observer.time;
        uniforms.cam_pos.value = observer.position;

        var e = observer.orientation.elements;

        uniforms.cam_x.value.set(e[0], e[1], e[2]);
        uniforms.cam_y.value.set(e[3], e[4], e[5]);
        uniforms.cam_z.value.set(e[6], e[7], e[8]);

        function setVec(target, value) {
            uniforms[target].value.set(value.x, value.y, value.z);
        }

        setVec('cam_pos', observer.position);
        setVec('cam_vel', observer.velocity);
    };

    var material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: $('#vertex-shader').text(),
    });

    scene.updateShader = function() {
        material.fragmentShader = shader.compile();
        material.needsUpdate = true;
        shader.needsUpdate = true;
    };

    scene.updateShader();

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild( renderer.domElement );

 // Orbit camera from three.js
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
    initializeCamera(camera);

    cameraControls = new OrbitControls( camera, renderer.domElement );
    cameraControls.target.set( 0, 0, 0 );
    cameraControls.addEventListener( 'change', updateCamera );
    updateCamera();


    

//  neww part
 composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        .1,  // Strength (higher is brighter bloom)
        0.1,  // Radius (spread of the bloom)
        .0  // Threshold (how bright something needs to be to start blooming. Lower = more things bloom)
    );
    composer.addPass(bloomPass);

const ditherPass = new ShaderPass(DitherColorShader);
composer.addPass(ditherPass);
// 3. Add your Custom Dither Pass
    // const ditherPass = new ShaderPass(MyMultiDitherShader);
// Optional: Set default values here
// ditherPass.uniforms['ditherMode'].value = 1; // 1 = Bayer (Retro Grid), 0 = Noise
// ditherPass.uniforms['colorShades'].value = 4.0;
    // composer.addPass(ditherPass);// 3. Add the Dithering/DotScreen pass

// 3. Add postprocessing Effect-based dithering (CORRECT)
// const ditherEffect = new MyMultiDitherEffect();

// const ditherEffectPass = new EffectPass(camera, ditherEffect);
// ditherEffectPass.renderToScreen = true;

// composer.addPass(ditherEffectPass);





    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild( stats.domElement );
    $(stats.domElement).addClass('hidden-phone');

   

    onWindowResize();

    window.addEventListener( 'resize', onWindowResize, false );

    setupGUI();
}

function setupGUI() {

    var hint = $('#hint-text');
    var p = shader.parameters;

    function updateShader() {
        hint.hide();
        scene.updateShader();
    }

    var gui = new dat.GUI();

    gui.add(p, 'quality', ['fast', 'medium', 'high']).onChange(function (value) {
        $('.planet-controls').show();
        switch(value) {
        case 'fast':
            p.n_steps = 40;
            $('.planet-controls').hide();
            break;
        case 'medium':
            p.n_steps = 100;
            break;
        case 'high':
            p.n_steps = 200;
            break;
        }

        updateShader();
    });
    gui.add(p, 'accretion_disk').onChange(updateShader);

    var folder = gui.addFolder('Observer');
    folder.add(p.observer, 'motion').onChange(function(motion) {
        updateCamera();
        updateShader();
        if (motion) {
            hint.text('Moving observer; drag to rotate camera');
        } else {
            hint.text('Stationary observer; drag to orbit around');
        }
        hint.fadeIn();
    });
    folder.add(p.observer, 'distance').min(1.5).max(30).onChange(updateCamera);
    folder.open();

    folder = gui.addFolder('Planet');
    folder.add(p.planet, 'enabled').onChange(function(enabled) {
        updateShader();
        var controls = $('.indirect-planet-controls').show();
        if (enabled) controls.show();
        else controls.hide();
    });
    folder.add(p.planet, 'distance').min(1.5).onChange(updateUniforms);
    folder.add(p.planet, 'radius').min(0.01).max(2.0).onChange(updateUniforms);
    $(folder.domElement).addClass('planet-controls');
    //folder.open();

    function setGuiRowClass(guiEl, klass) {
        $(guiEl.domElement).parent().parent().addClass(klass);
    }

    folder = gui.addFolder('Relativistic effects');
    folder.add(p, 'aberration').onChange(updateShader);
    folder.add(p, 'beaming').onChange(updateShader);
    folder.add(p, 'doppler_shift').onChange(updateShader);
    setGuiRowClass(
        folder.add(p, 'gravitational_time_dilation').onChange(updateShader),
        'planet-controls indirect-planet-controls');
    setGuiRowClass(
        folder.add(p, 'lorentz_contraction').onChange(updateShader),
        'planet-controls indirect-planet-controls');

    folder.open();

    folder = gui.addFolder('Time');
    folder.add(p, 'light_travel_time').onChange(updateShader);
    folder.add(p, 'time_scale').min(0);
    //folder.open();

}

// function onWindowResize( event ) {
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     updateUniforms();
// }

// function onWindowResize( event ) {
//     renderer.setSize( window.innerWidth, window.innerHeight );

//     if (composer) {
//         composer.setSize(
//             window.innerWidth,
//             window.innerHeight
//         );
//     }

//     updateUniforms();
// }


function onWindowResize( event ) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Update Composer resolution
    if (composer) {
        composer.setSize( width, height );

        // FIX: Find the bloom pass and update its resolution too
        for (const pass of composer.passes) {
             if (pass.isUnrealBloomPass) {
                 pass.resolution.set(width, height);
             }
        }
    }

    updateUniforms();
}

// function onWindowResize( event ) {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     renderer.setSize( width, height );
//     // ... camera updates ...
    
//     if (composer) {
//         composer.setSize( width, height );

//         // Update the screen size uniform for the Dither Shader
//         ditherPass.uniforms['tSize'].value.set(width, height);
//     }
    
//     updateUniforms();
// }



function initializeCamera(camera) {

    var pitchAngle = 10.0, yawAngle = 0.0;

   
    camera.matrixWorldInverse.makeRotationX(degToRad(-pitchAngle));
    camera.matrixWorldInverse.multiply(new THREE.Matrix4().makeRotationY(degToRad(-yawAngle)));

    var m = camera.matrixWorldInverse.elements;
    console.log(m);
    camera.position.set(m[2], m[6], m[10]);
    // camera.position.set(0,0,0);

}

function updateCamera( event ) {

    var zoom_dist = camera.position.length();
    var m = camera.matrixWorldInverse.elements;
    var camera_matrix;

    if (shader.parameters.observer.motion) {
        camera_matrix = new THREE.Matrix3();
    }
    else {
        camera_matrix = observer.orientation;
    }

    camera_matrix.set(
        // row-major, not the same as .elements (nice)
        // y and z swapped for a nicer coordinate system
        m[0], m[1], m[2],
        m[8], m[9], m[10],
        m[4], m[5], m[6]
    );

    if (shader.parameters.observer.motion) {

        observer.orientation = observer.orbitalFrame().multiply(camera_matrix);

    } else {

        var p = new THREE.Vector3(
            camera_matrix.elements[6],
            camera_matrix.elements[7],
            camera_matrix.elements[8]);

        var dist = shader.parameters.observer.distance;
        observer.position.set(-p.x*dist, -p.y*dist, -p.z*dist);
        observer.velocity.set(0,0,0);
    }
}

function frobeniusDistance(matrix1, matrix2) {
    var sum = 0.0;
    for (var i in matrix1.elements) {
        var diff = matrix1.elements[i] - matrix2.elements[i];
        sum += diff*diff;
    }
    return Math.sqrt(sum);
}

function animate() {
    requestAnimationFrame( animate );

    camera.updateMatrixWorld();
    camera.matrixWorldInverse.copy( camera.matrixWorld ).invert();

    if (shader.needsUpdate || shader.hasMovingParts() ||
        frobeniusDistance(camera.matrixWorldInverse, lastCameraMat) > 1e-10) {

        shader.needsUpdate = false;
        render();
        lastCameraMat = camera.matrixWorldInverse.clone();
    }
    stats.update();
}

var lastCameraMat = new THREE.Matrix4().identity();

var getFrameDuration = (function() {
    var lastTimestamp = new Date().getTime();
    return function() {
        var timestamp = new Date().getTime();
        var diff = (timestamp - lastTimestamp) / 1000.0;
        lastTimestamp = timestamp;
        return diff;
    };
})();

// console.log("render tick");

function render() {
    observer.move(getFrameDuration());
    if (shader.parameters.observer.motion) updateCamera();
    updateUniforms();
    // renderer.render(scene, camera);
    composer.render();
}

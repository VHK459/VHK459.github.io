import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="close-button" onClick={() => navigate('/')} aria-label="Close">
        ×
      </button>
      <div className="about-content">
        <div className="grid-section hero-section">
          <h1 className="section-title">About This Project</h1>
          <p className="section-text">
            Exploring the intersection of astrophysics and interactive visualization.
          </p>
        </div>

        <div className="grid-layout">
          <div className="grid-item card-1">
            <h2>The Black Hole Simulation</h2>
            <p>
              This interactive visualization uses real-time ray-tracing to simulate
              gravitational lensing around a Schwarzschild black hole. Watch as light
              bends around the event horizon, creating stunning visual effects.
            </p>
          </div>

          <div className="grid-item card-2">
            <h2>Physics Behind It</h2>
            <p>
              The simulation accounts for general relativistic effects including
              gravitational lensing, Doppler shifting, and the warping of spacetime
              around massive objects.
            </p>
          </div>

          <div className="grid-item card-3">
            <h2>Technical Features</h2>
            <ul>
              <li>Real-time GLSL Ray Tracing</li>
              <li>Accretion Disk Rendering</li>
              <li>Interactive Camera Controls</li>
              <li>WebGL Powered Graphics</li>
            </ul>
          </div>

          <div className="grid-item card-4">
            <h2>How to Interact</h2>
            <p>
              Use your mouse to drag and rotate the view. The simulation runs
              continuously, showing the orbital dynamics around the black hole.
            </p>
          </div>

          <div className="grid-item card-5 full-width">
            <h2>Learn More</h2>
            <p>
              This visualization is inspired by real astrophysics research and
              demonstrates the power of modern web technologies to bring complex
              scientific concepts to life.
            </p>
            <div className="contact-buttons">
              <button className="btn-primary">Back to Simulation</button>
              <button className="btn-secondary">Technical Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

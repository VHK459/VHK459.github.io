import { useState, useEffect } from 'react';
import ThreeScene from '../components/ThreeScene';
import CornerLinks from '../components/CornerLinks';
import './Landing.css';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate shader compilation time
    const timer = setTimeout(() => {
      const loader = document.querySelector('.shader-loader');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => setLoading(false), 600);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      {loading && (
        <div className="shader-loader">
          <div className="loader-content">
            <div className="loader-spinner"></div>
            <div className="loader-text">Initializing </div>
          </div>
        </div>
      )}
      <div className="three-scene-wrapper">
        <ThreeScene />
      </div>
    
      <CornerLinks />
    </div>
  );
};

export default Landing;

import ThreeScene from '../components/ThreeScene';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="three-scene-wrapper">
        <ThreeScene />
      </div>
      <div className="landing-overlay">
        <h1 className="landing-title"></h1>
        <p className="landing-subtitle"></p>
      </div>
    </div>
  );
};

export default Landing;

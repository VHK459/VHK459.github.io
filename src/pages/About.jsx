import './About.css';

const About = () => {
  

  return (
    <div className="about-container">
      
       
      <div className="about-content">
        <div className="grid-section hero-section">
          <h1 className="section-title">About Me</h1>
          <p className="section-text">
            Master's student at IISER Pune specializing in Deep Learning.
          </p>
        </div>

        <div className="grid-layout">
          <div className="grid-item card-1">
            <h2>Stuff I like to do</h2>
            <ul>
              <li>Deep Learning</li>
              <li>Web development</li>
              <li>Anything random that I find interesting</li>
            </ul>
          </div>

         

          <div className="grid-item card-3">
            <h2>Projects</h2>
            <ul>
              <li>Deep Learning for Weather prediction</li>
              <li>Implementing Diffusion Models</li>
              <li>Graph Convolution Neural Network for protein protein interaction</li>
            </ul>
          </div>

          

          <div className="grid-item card-5 full-width">
            <h2>Learn More</h2>
            <div className="flexboxes">
            
            <p>Read about the home page shader here</p>
            <div className="contact-buttons">
              <button className="btn-primary">shader</button>
            </div>
            <p>More stuff can be found here</p>
            <div className="contact-buttons">
              <button className="btn-primary">Blogs</button>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

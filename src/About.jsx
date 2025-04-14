import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="container py-5">
        <h2 className="text-center mb-4 about-title">About Me</h2>
        <div className="row align-items-center">
          
          {/* Text Section */}
          <div className="col-lg-7">
            <p className="about-text">
              Hello! I'm <span className="highlight">Arun Kumar</span>, a passionate <strong>MERN Stack Developer</strong> who loves turning ideas into real-world applications.
            </p>
            <p className="about-text">
              I specialize in building fast, scalable, and full-stack web apps using <strong>MongoDB, Express, React, and Node.js</strong>.Writing reusable code, and building website that solve real problems.
            </p>
            <p className="about-text">
              I'm always open to new challenges, collaborating with teams, and exploring new technologies.
            </p>
            <ul className="skills-list">
              <li><span>✓</span> React.js / Vite</li>
              <li><span>✓</span> Node.js & Express</li>
              <li><span>✓</span> MongoDB & Mongoose</li>
              <li><span>✓</span> REST APIs</li>
              <li><span>✓</span> Bootstrap & Media Queries</li>
              <li><span>✓</span> Git / GitHub / Render / Vs code</li>
            </ul>
          </div>

          {/* Side Card */}
          <div className="col-lg-5 mt-4 mt-lg-0 text-center">
            <div className="about-card p-4">
              <h4 className="mb-3">MERN Stack Developer</h4>
              <p className="mb-1">📍 Coimbatore, India</p>
              <p className="mb-1">📧 arunmsc63@gmail.com</p>
{/* Add this instead */}
<p className="mb-1">
  🔗 <a href="https://www.linkedin.com/in/arun-kumar-09b547317" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-decoration-none text-info">
    LinkedIn Profile
  </a>
</p>

              <p className="mb-0">📞 +91 6369702012 </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

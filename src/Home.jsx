import React from 'react';
import img1 from './assets/myimg2.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container" id="home">
        <div className="row align-items-center text-light py-5">
          {/* Text Section */}
          <div className="col-lg-8 mb-4 mb-lg-0 text-section">
            <h1 className="intro-text mb-3 hover-effect">Hi,</h1>
            <h1 className="intro-text mb-3 hover-effect">
              I'm <span className="highlight-name hover-glow">Arun Kumar</span>
            </h1>
            <h2 className="role-text mb-4 hover-effect">Web Developer</h2>
            <p className="description hover-paragraph">
              Passionate about building responsive websites  using modern technologies.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-lg-4 text-center">
            <img
              src={img1}
              alt="Arun"
              className="img-fluid profile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

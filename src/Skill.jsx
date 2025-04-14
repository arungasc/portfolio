import React from 'react';
import img1 from './assets/img3.png';
import img2 from './assets/img9.png';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

const Skill = () => {
  return (
    <div style={{ backgroundColor: '#171717' }} className="py-5">
      <div className="container" id="skills">
        <div className="text-center mb-5">
          <h2 className="text-white fw-bold display-5">
            Skills <img src={img1} alt="Skill icon" style={{ width: '70px', height: '70px' }} />
          </h2>
          <p className="text-secondary">Technologies I work with</p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* Skill Card 1 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <FaHtml5 className="fs-1 text-danger" />
              <h5 className="mt-2">HTML</h5>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <FaCss3Alt className="fs-1 text-primary" />
              <h5 className="mt-2">CSS</h5>
            </div>
          </div>

          {/* Skill Card 3 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <IoLogoJavascript className="fs-1 text-warning" />
              <h5 className="mt-2">JavaScript</h5>
            </div>
          </div>

          {/* Skill Card 4 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <FaBootstrap className="fs-1" style={{ color: '#720e9e' }} />
              <h5 className="mt-2">Bootstrap</h5>
            </div>
          </div>

          {/* Skill Card 5 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <FaReact className="fs-1 text-info" />
              <h5 className="mt-2">React</h5>
            </div>
          </div>

          {/* Skill Card 6 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <FaNodeJs className="fs-1 text-success" />
              <h5 className="mt-2">Node.js</h5>
            </div>
          </div>

          {/* Skill Card 7 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <DiMongodb className="fs-1 text-success" />
              <h5 className="mt-2">MongoDB</h5>
            </div>
          </div>

          {/* Skill Card 8 */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="skill-card text-center">
              <img src={img2} alt="Express JS" style={{ width: '60px', height: '50px' }} />
              <h5 className="mt-2">Express.js</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skill;

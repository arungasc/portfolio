import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div style={{ backgroundColor: '#171717' }} className="py-5">
      <div className="container" id="education">
        <h2 className="text-center text-warning display-5 mb-5">Education</h2>
        
        <div className="row g-4 justify-content-center">
          {/* UG */}
          <div className="col-12 col-md-6">
            <div className="edu-card bg-light text-center p-4 rounded shadow">
              <FaGraduationCap className="fs-1 text-warning mb-2" />
              <h5 className="text-dark fw-bold">Gobi Arts & Science College</h5>
              <p className="text-secondary mb-1">Bachelor of Science - Computer Science</p>
              <p className="text-secondary mb-3">2019 - 2022</p>

              <div className="progress mb-2">
                <div
                  className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  80%
                </div>
              </div>
            </div>
          </div>

          {/* PG */}
          <div className="col-12 col-md-6">
            <div className="edu-card bg-light text-center p-4 rounded shadow">
              <FaGraduationCap className="fs-1 text-warning mb-2" />
              <h5 className="text-dark fw-bold">Gobi Arts & Science College</h5>
              <p className="text-secondary mb-1">Master of Science - Computer Science</p>
              <p className="text-secondary mb-3">2022 - 2024</p>

              <div className="progress mb-2">
                <div
                  className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

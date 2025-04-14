import React from 'react'
import './Project.css';
import img1 from './assets/img5.jpg';
import img2 from './assets/img6.jpg';

const Project = () => {
  return (
    <div style={{ backgroundColor: '#171717' }} className="py-5">
      <div className="container" id="project">
        <h2 className="text-center mb-5 fw-bold project-title">My MERN Stack Projects</h2>
        <div className="row g-4 justify-content-center">

          {/* Project 1 */}
          <div className="col-12 col-md-4">
            <div className="card custom-card text-center">
              <img src={img1} className="card-img-top project-img" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Gym Template Website  </h5>
                <p className="card-text text-muted">A full MERN shopping app with admin panel.</p>
                <a href="https://arungasc.github.io/projecttwo/" className="btn btn-run" target="_blank" rel="noreferrer">Run</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-12 col-md-4">
            <div className="card custom-card text-center">
              <img src={img2} className="card-img-top project-img" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">CoffeeShop Website</h5>
                <p className="card-text text-muted">Showcase portfolio using React + Node.</p>
                <a href="https://arungasc.github.io/projectone/" className="btn btn-run" target="_blank" rel="noreferrer">Run</a>
              </div>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  )
}

export default Project;

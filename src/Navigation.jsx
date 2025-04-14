import React, { useState } from 'react';
import "./Navigation.css";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // hamburger icons

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12">
            <div className='container d-flex justify-content-between align-items-center py-3 nav-inner'>
              <p className="brand-name">ARUN</p>

              {/* Menu Icon */}
              <div className="menu-icon d-md-none" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={28} color="#fff" /> : <FaBars size={28} color="#fff" />}
              </div>

              {/* Navigation Links */}
              <ul className={`navbar-nav nav-links ${menuOpen ? 'show' : ''}`}>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={closeMenu}><b>Home</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" onClick={closeMenu}><b>About</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/skill" className="nav-link" onClick={closeMenu}><b>Skill</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/education" className="nav-link" onClick={closeMenu}><b>Education</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/project" className="nav-link" onClick={closeMenu}><b>Project</b></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

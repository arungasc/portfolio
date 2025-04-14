import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="floating-shapes"></div>

      <footer className="footer fancy-footer animate-footer glass-footer text-light">
        <div className="container py-4">
          <div className="row text-center text-md-start align-items-center">
            {/* Brand Info */}
            <div className="col-md-6 mb-3 mb-md-0">
              <h4 className="brand-footer neon-text">ARUN</h4>
              <p className="footer-tagline">Bringing creativity & code to life 💻✨</p>

              {/* Social Media Icons */}
              <div className="social-icons mt-3">
                <a href="https://www.facebook.com/" className="social-icon"><FaFacebookF /></a>
                <a href="https://www.instagram.com/" className="social-icon"><FaInstagram /></a>
                <a href="https://github.com/login" className="social-icon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/arun-kumar-09b547317" className="social-icon"><FaLinkedin /></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 text-md-end">
              <h6 className="contact-title">Reach Out</h6>
              <p className="footer-contact"><FaEnvelope className="me-2" /> arunmsc63@gmail.com</p>
              <p className="footer-contact"><FaPhoneAlt className="me-2" /> +91 6369702012 </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="footer-line my-4" />

          {/* Footer Credit */}
          <p className="text-center footer-credit mb-0">
             Developed by <span className="credit-name">Arunkumar</span> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

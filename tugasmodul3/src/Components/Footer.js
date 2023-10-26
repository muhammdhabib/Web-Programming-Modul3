import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <div className="footer-elements">
        <div className="footer-column">
          <img src="images/logo-ilab.png" alt="Gambar Kolom 1" />
        </div>
        <div className="footer-ilab">
          <div className="serviceAbout">
            <div className="footer-service">
              <a className="footer-title">Service</a>
              <a>Marketing</a>
              <a>Campaign</a>
              <a>Branding</a>
              <a>Offline</a>
            </div>
            <div className="footer-about">
              <div className="footer-title">About</div>
              <a href="#">Our Story</a>
              <a href="#">Benefits</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div className="footer-follow">
            <div className="footer-title">Follow Us</div>
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
              <span className="icon-text">Facebook</span>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-twitter"></i>
              <span className="icon-text">Twitter</span>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram"></i>
              <span className="icon-text">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; by Habib 2023
      </div>
    </footer>
  );
}

export default Footer;

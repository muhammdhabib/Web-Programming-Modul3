import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-elements">
        <div className="logo">
          <img src="images/logo-ilab.png" alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="buttons">
          <button className="transparent-button">SIGN UP</button>
          <button className="blue-button">LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Navbar.css'; 
import tiktokLogo from '../home/tiktok.png'

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={tiktokLogo} alt="Logo" className="logo" />
      <div className="navbar-text">
        <p>Welcome to our Website</p>
      </div>
    </div>
  );
}

export default Navbar;

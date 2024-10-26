// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo"><span>Peenaz Shaikh</span></div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li> {/* Added Home link */}
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#internships">Internships</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#leadership">Responsibilities</a></li>
        <li><a href="#contact">Contact</a></li> {/* Changed Achievements to Contact */}
      </ul>
    </nav>
  );
};

export default Navbar;

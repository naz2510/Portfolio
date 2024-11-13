import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open or closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Peenaz Shaikh</span>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item"><a className="nav-link" href="#hero" onClick={closeMenu}>Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#aboutme" onClick={closeMenu}>About Me</a></li>
        <li className="nav-item"><a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#education" onClick={closeMenu}>Education</a></li>
        <li className="nav-item"><a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="#internships" onClick={closeMenu}>Internships</a></li>
        <li className="nav-item"><a className="nav-link" href="#certifications" onClick={closeMenu}>Certifications</a></li>
        <li className="nav-item"><a className="nav-link" href="#leadership" onClick={closeMenu}>Responsibilities</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

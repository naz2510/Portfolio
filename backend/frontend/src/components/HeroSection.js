import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    github: '',
    linkedin: '',
  });

  useEffect(() => {
    // Fetch personal info from the backend API
    axios.get('/api/user') // Replace with your server URL as needed
      .then((response) => {
        setPersonalInfo(response.data); // Set the personal info fetched from the database
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  return (
    <div id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="name-highlight">{personalInfo.name || 'Peenaz Shaikh'}</span></h1>
          <p>I'm a passionate developer skilled in Java, Python, Data Structures, and Analytics. Explore my work and certifications below!</p>
          
          <div className="hero-buttons">
            {/* GitHub Button */}
            <a href={personalInfo.github || "https://github.com/naz2510"} target="_blank" rel="noopener noreferrer" className="hero-button">
              <FontAwesomeIcon icon={faGithub} className="icon-spacing" /> GitHub
            </a>
            {/* LinkedIn Button */}
            <a href={personalInfo.linkedin || "https://www.linkedin.com/in/peenaz-shaikh"} target="_blank" rel="noopener noreferrer" className="hero-button">
              <FontAwesomeIcon icon={faLinkedin} className="icon-spacing" /> LinkedIn
            </a>
          </div>

          {/* View Resume Button with Icon */}
          <a href="logo/Peenaz_Shaikh_RESUME_2025.pdf" target="_blank" rel="noopener noreferrer" className="hero-button">
            <FontAwesomeIcon icon={faFileAlt} className="icon-spacing" /> View Resume
          </a>

          {/* Contact Me Button with Icon */}
          <a href="#contact" className="hero-button">
            <FontAwesomeIcon icon={faEnvelope} className="icon-spacing" /> Contact Me
          </a>
        </div>
        <div className="hero-image">
          <img src="logo/img1.jpg" alt="Coder Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

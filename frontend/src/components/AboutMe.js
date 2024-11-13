import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-container">
        <div className="aboutme-text">
          <p>
            Hi! I'm Peenaz Shaikh, currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at Sanjay Ghodawat University, Kolhapur. I have a passion for solving real-world problems through technology and have honed my skills in Java, Python, React.js, Spring Boot, and MongoDB. I thrive in dynamic environments where creativity and collaboration meet, and I always look forward to contributing to exciting projects.
          </p>
          <p>
            Beyond coding, I take on leadership roles, such as serving as a Student Representative and Secretary of the ACSES Club at my university. These experiences have sharpened my ability to manage teams, foster collaboration, and drive innovation. When I'm not coding or leading teams, I enjoy exploring new technologies and continuously challenging myself to grow as a developer and leader.
          </p>
          <p>
            Let's connect and build something amazing together!
          </p>
        </div>
        <div className="aboutme-photo">
          <img src="logo/myid2.jpg" alt="Peenaz Shaikh" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

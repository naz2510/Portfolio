import React from "react";
import "./Internships.css"; // Import the CSS file for styling

const Internships = () => (
  <div id="internships">
    <h2>INTERNSHIPS</h2>
    <div className="card">
      <h3>Software Engineer Intern | ABC Technologies</h3>
      <ul>
        <li>
          Developed scalable web applications using React.js and Node.js,
          resulting in a significant increase in page load speed, enhancing user
          experience and engagement.
        </li>
        <li>
          Collaborated with a team of five developers to implement robust APIs,
          which streamlined system integration and enhanced overall efficiency.
        </li>
        <li>
          Played a key role in optimizing backend processes, leading to a
          noticeable reduction in system downtime and a boost in overall
          productivity.
        </li>
      </ul>
      <a href="#" className="card-link-button">
        View Details
      </a>
    </div>
  </div>
);

export default Internships;

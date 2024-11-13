import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', logo: './logo/java.png' },
      { name: 'Python', logo: './logo/python.png' },
      { name: 'C', logo: "./logo/c.png" },
      { name: 'C++', logo: './logo/cpp.png' }
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML', logo: './logo/html.png' },
      { name: 'CSS', logo: './logo/css.png' },
      { name: 'JavaScript', logo: './logo/js.png' },
      { name: 'React.js', logo: './logo/react.png' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', logo: './logo/sql.png' },
      { name: 'MongoDB', logo: './logo/mongodb.png' },
      { name: 'JDBC', logo: './logo/jdbc.png' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Tailwind CSS', logo: './logo/tailwind.png' }
    ]
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', logo: './logo/git.png' },
      { name: 'GitHub', logo: './logo/github.png' },
      { name: 'VSCode', logo: './logo/vscode.png' },
      { name: 'NetBeans', logo: './logo/netbeans.png' },
      { name: 'Jupyter Notebook', logo: './logo/jupyter.png' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skillsData.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3>{skillCategory.category}</h3>
          <div className="skill-logos-row">
            {skillCategory.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

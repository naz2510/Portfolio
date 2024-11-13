import "./Projects.css";

const Projects = () => (
  <div id="projects">
    <h2>ACADEMIC PROJECTS</h2>
    <div className="project-container">
      <div className="project-card">
        <h3>DairyKeeper | Java-Based Desktop Application</h3>
        <ul>
          <li>
            A management tool for dairy farms to track milk production, sales,
            and expenses, offering insights to optimize operations.
          </li>
        </ul>
        <a href="https://github.com/naz2510/DairyKeeper" className="project-link-button">
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>NotesInsight | Task Management Application</h3>
        <ul>
          <li>
            A smart note-taking app that helps organize, search, and tag notes
            for efficient study and work management.
          </li>
        </ul>
        <a href="https://github.com/naz2510/NoteIngisht" className="project-link-button">
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>E-FoodCourt | Online Food Ordering Platform</h3>
        <ul>
          <li>
            A web platform for easy food ordering at food courts, with real-time
            menus, order tracking, and integrated payment options.
          </li>
        </ul>
        <a href="https://e-foodcourt-frontend.onrender.com" className="project-link-button">
          View Project
        </a>
      </div>
    </div>
  </div>
);

export default Projects;

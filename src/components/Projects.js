import React from "react";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Unauthorized Construction Detection System",
        description: "Developed an alert system using OpenCV, Streamlit and remote sensing techniques to analyze changes in buffer zones. Implemented automated email and Telegram alerts for detected unauthorized constructions, integrating APIs for real-time notifications",
        image: "/alarm.png",  // Reference from public folder
        liveDemo: "https://alert-system-c7zlsykswlaf9srhsxnant.streamlit.app/",
        github: "https://github.com/tejasmb03/Alert-System.git",
      }
      ,
  {
    id: 2,
    title: "Placement Assistance Platform",
    description: "Implemented using HTML, CSS and PHP to track placement activities and workshops. Facilitates tracking of placement activities, workshops, and other related events.",
    image: "/placement.png",
    github: "https://github.com/tejasmb03/placement-assistance.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website with React and Three.js.",
    image: "https://via.placeholder.com/300",
    liveDemo: "https://your-portfolio-demo.com",
    github: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="view-btn">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

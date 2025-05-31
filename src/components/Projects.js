import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Unauthorized Construction Detection System",
    description:
      "Developed an alert system using OpenCV, Streamlit and remote sensing techniques to analyze changes in buffer zones. Implemented automated email and Telegram alerts for detected unauthorized constructions, integrating APIs for real-time notifications.",
    image: "/alarm.png",
    liveDemo: "https://alert-system-c7zlsykswlaf9srhsxnant.streamlit.app/",
    github: "https://github.com/tejasmb03/Alert-System.git",
  },
  {
    id: 2,
    title: "Placement Assistance Platform",
    description:
      "Implemented using HTML, CSS and PHP to track placement activities and workshops. Facilitates tracking of placement activities, workshops, and other related events.",
    image: "/placement.png",
    github: "https://github.com/tejasmb03/placement-assistance.git",
  },
  {
    id: 3,
    title: "Detection of Brain Diseases Using Deep Learning Models",
    description:
      "Developed a deep learning-based system to detect multiple brain diseases using 4-5 pre-trained models for comparative analysis. Used Python for model training and analysis of MRI/CT images. Implemented a web interface with HTML and CSS and integrated a chatbot for user interaction.",
    image: "/brain.png",
    github: "https://github.com/tejasmb03/Multi-Brain-Disease-Detection-.git",
  },
];

const Projects = () => (
  <section className="projects-section">
    <h1 className="projects-title">My Projects</h1>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className="project-card"
          style={{ animationDelay: `${0.2 + idx * 0.18}s` }}
        >
          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  <span>🚀</span> Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <span>💻</span> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

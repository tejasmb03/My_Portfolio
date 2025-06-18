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
  {
    id: 4,
    title: "Smart Environmental Monitoring",
    description:
      "EnviroDash is a web-based dashboard that visualizes environmental changes using satellite and ground imagery. It offers modules for NDVI analysis, urbanization tracking, and data-driven visualizations. The app empowers users to monitor and compare ecological trends over time.",
    image: "/envirodash.png",
    liveDemo: "https://smart-environmental-monitoring.onrender.com",
    github: "https://github.com/tejasmb03/Smart-Environmental-Monitoring.git",
  },
  {
    id: 5,
    title: "Guess the Number",
    description:
      "A Flask-based Guess the Number web application where users have limited chances to guess a randomly generated number based on difficulty level. It features dynamic hints, session-based score tracking, and a responsive frontend interface.",
    image: "/game.png",
    liveDemo: "https://guess-the-number-ealt.onrender.com/",
    github: "https://github.com/tejasmb03/guess_the_number.git",

  },
   {
    id: 6,
    title: "Weather App",
    description:
      "A React-based weather application that displays real-time weather conditions including temperature, feels-like temperature, cloud status, humidity, and min/max temperature. It fetches live data from a weather API and dynamically shows localized weather details like broken clouds and humidity for any searched city.",
    image: "/weather.png",
    liveDemo: "https://tejas2003.netlify.app/",
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

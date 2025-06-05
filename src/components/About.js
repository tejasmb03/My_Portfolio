import "./About.css";
import {
  FaMapMarkerAlt,
  FaLanguage,
  FaBirthdayCake,
  FaLightbulb,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';

const About = () => (
  <section className="about-section">
    <h1 className="section-title">About Me</h1>

    <div className="about-card">
      <p className="intro-text">
        I'm a final-year CSE student passionate about cutting-edge technologies and problem-solving.
      </p>
      <div className="about-details">
        <p><FaBirthdayCake className="about-icon" /> <strong>Date of Birth:</strong> 22/03/2003</p>
        <p><FaLanguage className="about-icon" /> <strong>Languages:</strong> English, Kannada</p>
        <p><FaMapMarkerAlt className="about-icon" /> <strong>Location:</strong> Bangalore, India</p>
      </div>
    </div>

    <div className="about-card">
      <h2 className="card-title">Why Me?</h2>
      <p><FaLightbulb className="about-icon" /> <strong>Creative Thinking:</strong> Solving problems with a blend of creativity and logic.</p>
      <p><FaChartLine className="about-icon" /> <strong>Tech-Savvy:</strong> Continuously learning and adapting to new technologies.</p>
      <p><FaUsers className="about-icon" /> <strong>Team Player:</strong> Collaborative and communicative in diverse teams.</p>
    </div>

    <div className="about-card">
      <h2 className="card-title">Education</h2>
      <div className="timeline">
        <div className="timeline-entry">
          <h3>Jyothy Institute of Technology</h3>
          <p>B.E in Computer Science (2021 - 2025) — GPA: 8</p>
        </div>
        <div className="timeline-entry">
          <h3>Deeksha College</h3>
          <p>PUC - Computer Science (2019 - 2021) — 70%</p>
        </div>
      </div>
    </div>

    <div className="about-card">
      <h2 className="card-title">Extracurricular Activities</h2>
      <ul className="activities">
        <li>🏆 National-Level Hackathon (Mysore)</li>
        <li>🎮 Gameathon & Marathon Participation</li>
        <li>🎭 Cultural Events</li>
        <li>🏏 College Cricket Team</li>
        <li>💻 Project Exhibition & Programmer’s Day</li>
        <li>🤝 Volunteering in Hackathons & Events</li>
      </ul>
    </div>
  </section>
);

export default About;

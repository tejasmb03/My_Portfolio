import "./Home.css";

const Home = () => (
  <div className="home-container">
    <img src="/profile.jpg" alt="Profile" className="profile-pic" />
    <h1>Welcome to My Portfolio</h1>
    <p>I’m a passionate developer crafting modern, performant, and elegant web experiences.</p>
    <br></br>
    <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
  </div>
);

export default Home;

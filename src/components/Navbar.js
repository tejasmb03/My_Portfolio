import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ logoPath }) => (
  <nav className="navbar slide-down">
    <div className="logo-container">
      {/* Display logo if logoPath is provided */}
      {logoPath && <img src={logoPath} alt="Logo" className="logo-img" />}
      <h1 className="logo-text">Tejas M Bharadwaj</h1>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;

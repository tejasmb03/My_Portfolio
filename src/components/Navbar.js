import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = ({ logoPath }) => (
  <nav className="navbar slide-down">
    <div className="logo-container">
      {logoPath && <img src={logoPath} alt="Logo" className="logo-img" />}
      <h1 className="logo-text">Tejas M Bharadwaj</h1>
    </div>
    <div className="nav-links">
      <ScrollLink to="home" smooth={true} duration={500} spy={true} offset={-70}>Home</ScrollLink>
      <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-70}>About</ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500} spy={true} offset={-70}>Projects</ScrollLink>
      <ScrollLink to="experience" smooth={true} duration={500} spy={true} offset={-70}>Experience</ScrollLink>
      <ScrollLink to="skills" smooth={true} duration={500} spy={true} offset={-70}>Skills</ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} spy={true} offset={-70}>Contact</ScrollLink>
    </div>
  </nav>
);

export default Navbar;

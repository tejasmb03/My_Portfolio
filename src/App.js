import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <div className="container fade-in">
            {/* Pass the correct logo path */}
            <Navbar logoPath="/logo-name.jpg" />  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;


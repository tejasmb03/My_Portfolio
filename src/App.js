import React from "react";
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
        <div className="container fade-in">
          <Navbar logoPath="/logo-name.jpg" />

          {/* Scrollable Sections with IDs */}
          <section id="home" className="section"><Home /></section>
          <section id="about" className="section"><About /></section>
          <section id="projects" className="section"><Projects /></section>
          <section id="experience" className="section"><Experience /></section>
          <section id="skills" className="section"><Skills /></section>
          <section id="contact" className="section"><Contact /></section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

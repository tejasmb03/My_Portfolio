import React from "react";
import "./Skills.css";

const programmingSkills = [
  "Python",
  "HTML",
  "CSS",
  "Reactjs",
  "Machine Learning",
  "Deep Learning",
];

const softSkills = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Time Management",
  "Adaptability",
];

const technologiesSkills = [
  "Visual Studio Code",
  "Google Colab"
];

const operatingSystemsSkills = [
  "Windows",
  "MacOS",
  "Ubuntu"
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="section-title">Publications</h1>
      <div className="publications">
        <div className="pub-card animate-fade-in">
          <h3>
            Land Use Classification using Ensemble Hybrid Model: A Study on the UC Merced Dataset 
            <br></br>(Accepted in IEEE)
          </h3>
          <p>
            Worked on deep learning-based remote sensing image classification using a hybrid model called FusionNetRS. Combined MobileNet and DenseNet121 through feature fusion to improve both accuracy and efficiency on the PatternNet dataset. Achieved a mean classification accuracy of 95.98% using five-fold cross-validation.
          </p>
        </div>
        <div className="pub-card animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3>
            A Smart, Patient-Centric Healthcare Portal for Brain Disorder Prediction Using MRI/CT Scans and Deep Learning Models (Accepted in IEEE)
          </h3>
          <p>
            Developed a smart healthcare portal using deep learning to detect brain disorders such as Alzheimer's, stroke, and tumors from MRI/CT scans. The system integrates MobileNetV2 for real-time diagnosis and InceptionV3 for high-precision detection. It features a Flask-based web interface enabling patient registration, scan upload, and result visualization.
          </p>
          </div>
          <div className="pub-card animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3>FusionNet-RS: A Deep Feature Fusion Model for Remote Sensing Image Classification on PatternNet 
          (Accepted in IEEE)</h3>
          <p>Acknowledged for contributions to a research project on remote sensing image classification using a feature 
          fusion model combining MobileNet and DenseNet121, achieving 95.98% accuracy on the PatternNet dataset. </p>
        </div>
      </div>

      <hr />

      <h1 className="section-title">My Skills</h1>

      <div className="skills-grid">
        <section className="skills-section animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2>Programming</h2>
          <div className="skills-list">
            {programmingSkills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="skills-section animate-fade-in" style={{ animationDelay: "0.18s" }}>
          <h2>Technologies</h2>
          <div className="skills-list">
            {technologiesSkills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="skills-section animate-fade-in" style={{ animationDelay: "0.26s" }}>
          <h2>Operating Systems</h2>
          <div className="skills-list">
            {operatingSystemsSkills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="skills-section animate-fade-in" style={{ animationDelay: "0.34s" }}>
          <h2>Soft Skills</h2>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

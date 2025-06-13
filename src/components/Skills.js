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
            Developed a deep learning-based hybrid model combining MobileNet and DenseNet121 for high-accuracy land-use classification using aerial imagery. Implemented feature fusion and linear SVM with SMOTE balancing, achieving 96.57% accuracy on the UC Merced dataset. Validated model performance with stratified 5-fold cross-validation, optimizing for both accuracy and computational efficiency.
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
          <p>
            Acknowledged for contributing to a deep learning research project involving a hybrid CNN model (MobileNet + DenseNet121) for classifying remote sensing images. Supported the development and evaluation of the FusionNet-RS model, which achieved 95.98% accuracy on the PatternNet dataset using five-fold cross-validation. Assisted in optimizing preprocessing and feature fusion techniques for robust and efficient land-use classification.
          </p>
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

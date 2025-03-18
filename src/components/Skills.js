import React from "react";
import "./Skills.css";

const programmingSkills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Machine Learning",
  "Deep Learning",
];

const liveSkills = [
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
  
  const operatingsystemsSkills = [
    "Windows",
    "MAC",
    "Ubuntu"
  ];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="section-title">Publications</h1>
      <h3><strong>Multilabel Remote Sensing Image Classification Using Deep Learning Model 			 (In Progress)</strong></h3>
      <p>The project uses MobileNet, DenseNet121, VGG16, VGG19, NASNetLarge, and InceptionV3 for land use classification on the UCMerced dataset, applying SMOTE and K-Fold cross-validation. A comparative analysis was done based on accuracy, precision, recall, and F1-score.</p>

      <h1 className="section-title">My Skills</h1>

      {/* Programming Skills */}
      <div className="skills-section">
        <h2>Programming Skills</h2>
        <div className="skills-list">
          {programmingSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

     {/* Technologies */}
     <div className="skills-section">
        <h2>Technologies</h2>
        <div className="skills-list">
          {technologiesSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>     

     {/* Operating System */}
     <div className="skills-section">
        <h2>Operating Systems</h2>
        <div className="skills-list">
          {operatingsystemsSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>          

      {/* Live Skills */}
      <div className="skills-section">
        <h2>Live Skills</h2>
        <div className="skills-list">
          {liveSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

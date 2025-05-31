import { motion } from "framer-motion";
import "./Experience.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => (
  <motion.div 
    className="section experience-section"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h1 variants={itemVariants}>Experience</motion.h1>

    <motion.div className="experience-item" variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(37, 99, 235, 0.25)" }}>
      <h3>Researcher Intern</h3>
      <p><strong>Centre for Incubation, Innovation, Research, and Consultancy</strong> | Sept 2024 - Jan 2025</p>
      <p>Conducted remote sensing analysis to track seasonal variations in urbanization and water bodies using satellite imagery.</p>  
      <p>Evaluated potability parameters and correlated findings with ground data for validation.</p>  
      <p>Applied geospatial techniques to assess environmental changes and their potential impacts.</p>
    </motion.div>

    <motion.div className="experience-item" variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(37, 99, 235, 0.25)" }}>
      <h3>AI/ML Intern</h3>
      <p><strong>TestAIng, India</strong> | Nov - Dec 2024</p>
      <p>Developed a regression model on sports financial datasets, performed bias detection and mitigation using the AIF360 library, and implemented datasets through a classification pipeline in Python.</p>
    </motion.div>

    <motion.div className="experience-item" variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(37, 99, 235, 0.25)" }}>
      <h3>Chatbot Intern</h3>
      <p><strong>Appzera (OTC) Pvt Ltd, India</strong> | Mar 2025</p>
      <p>Currently engaged in the development of an intelligent chatbot tailored for the Human Resources (HR) management domain. The solution is designed to streamline HR processes, enhance employee engagement, and provide instant support for HR-related queries. The chatbot leverages advanced natural language processing (NLP) techniques to facilitate efficient communication between employees and HR teams, automate routine tasks, and improve overall organizational productivity.</p>
    </motion.div>
  </motion.div>
);

export default Experience;

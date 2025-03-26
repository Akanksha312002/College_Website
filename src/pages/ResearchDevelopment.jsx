
import React from "react";
import { motion } from "framer-motion";
import "../Styles/ResearchDevelopment.css";

const researchProjects = [
  {
    title: "AI-based Smart Campus",
    description: "Developing AI models to enhance campus automation and student experience.",
    faculty: "Dr. A. Sharma",
    students: ["Rohan Mehta", "Priya Verma"],
    link: "#",
    image: "/images/ai-campus.jpg"
  },
  {
    title: "Blockchain for Secure Education Records",
    description: "A research project focused on implementing blockchain for secure academic records.",
    faculty: "Dr. R. Iyer",
    students: ["Amit Kumar", "Neha Singh"],
    link: "#",
    image: "/images/blockchain-education.png"
  }
];

const collaborations = [
  {
    name: "Google Research India",
    description: "Collaborating on AI and ML projects for education enhancement.",
    link: "#",
    image: "/images/google-research.jpeg"
  },
  {
    name: "SGM Computer Department",
    description: "Joint research in quantum computing and cybersecurity.",
    link: "#",
    image: "/images/iit-bombay.jpeg"
  }
];

const Card = ({ title, description, info, link, image }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      {info && <p className="card-info">{info}</p>}
      <a href={link} className="card-link">Read More</a>
    </div>
  </motion.div>
);




const ResearchDevelopment = () => {
  return (
    <div className="research-container">
      

      {/* Header Image */}
      <div className="header">
        <img src="/images/research-header.jpg" alt="Research & Development" className="header-image" />
        <h1 className="header-title">Research & Development</h1>
      </div>

      <section className="section">
        <h2 className="subtitle">Ongoing Research Projects</h2>
        <div className="grid-container">
          {researchProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              info={`Faculty Lead: ${project.faculty} | Students: ${project.students.join(", ")}`}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Collaborations</h2>
        <div className="grid-container">
          {collaborations.map((collab, index) => (
            <Card
              key={index}
              title={collab.name}
              description={collab.description}
              link={collab.link}
              image={collab.image}
            />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default ResearchDevelopment;
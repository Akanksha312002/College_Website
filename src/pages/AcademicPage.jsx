import React, { useState } from "react";
import { motion } from "framer-motion";

import "../Styles/AcademicPage.css";
import ugImage from "../images/Academic/ug.jpeg";
import pgImage from "../images/Academic/pg.jpeg";
import specImage from "../images/Academic/pg.jpeg";
import scholarImage from "../images/Academic/scholer.jpeg";
import placeImage from "../images/Academic/Placement.jpg";

const academicData = [
  {
    id: "ug-programs",
    title: "Undergraduate Programs",
    image: ugImage,
    programs: [
      "Bachelor of Science (B.Sc)",
      "Bachelor of Arts (B.A)",
      "Bachelor of Commerce (B.Com)",
      "Bachelor of Computer Applications (BCA)",
      "Bachelor of Business Administration (BBA)",
    ],
  },
  {
    id: "pg-programs",
    title: "Postgraduate Programs",
    image: pgImage,
    programs: [
      "Master of Science (M.Sc)",
      "Master of Arts (M.A)",
      "Master of Commerce (M.Com)",
      "Master of Computer Applications (MCA)",
      "Master of Business Administration (MBA)",
    ],
  },
  {
    id: "specializations",
    title: "Specializations",
    image: specImage,
    programs: [
      "Major: Computer Science, Physics, Chemistry",
      "Minor: Mathematics, Economics, Psychology",
      "Specialization: Data Science, Artificial Intelligence, Finance",
    ],
  },
  {
    id: "scholarships",
    title: "Scholarships",
    image: scholarImage,
    programs: [
      "Merit-based Scholarships",
      "Need-based Scholarships",
      "Sports Scholarships",
      "Government-funded Scholarships",
    ],
  },
];

const placements = [
  { name: "Rohan Mohite", program: "BSC(C.S.)", company: "Infosys" },
  { name: "Shivam Kadam", program: "M.sc.(C.S.)", company: "TCS" },
];

const AcademicPage = () => {
  const [search, setSearch] = useState("");

  const filteredSections = academicData
    .map((section) => ({
      ...section,
      programs: section.programs.filter((program) =>
        program.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.programs.length > 0 || search === "");

  return (
    <div className="academic-container">
     

      {/* Header Section */}
      <header className="header">
        <h1>Academic Programs</h1>
        <input
          type="text"
          placeholder="Search programs..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Dynamic Sections */}
      {filteredSections.length > 0 ? (
        filteredSections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{section.title}</h2>
            <img src={section.image} alt={section.title} className="section-img" />
            <ul >
              {section.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </motion.section>
        ))
      ) : (
        <p className="no-results">No programs found.</p>
      )}

      {/* Placements Section */}
      <motion.section
        id="placements"
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Successfully Placed Students</h2>
        <img src={placeImage} alt="Placements" className="section-img" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.program}</td>
                <td>{student.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

     
    </div>
  );
};

export default AcademicPage;
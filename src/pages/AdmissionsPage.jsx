import React from "react";

import "../Styles/Admissionpage.css";
import admissionImage from "../images/Admission/admissions.jpeg";
import scholarshipImage from "../images/Admission/scholarships.jpg";
import counselorImage from "../images/Admission/counselor.jpg";
import principalImage from "../images/Admission/principal.jpg"; 
import hodImage from "../images/Admission/hod.jpeg"; 
import teacherImage from "../images/Admission/teacher.jpg"; 

const admissionsData = [
  {
    id: "requirements",
    title: "Admission Requirements",
    image: admissionImage,
    details: [
      "Completed application form",
      "High school diploma or equivalent",
      "Entrance test scores (if applicable)",
      "Letters of recommendation",
      "Personal statement",
    ],
  },
  {
    id: "process",
    title: "Application Process",
    image: admissionImage,
    details: [
      "Step 1: Fill out the online application form",
      "Step 2: Submit required documents",
      "Step 3: Attend an admission interview (if required)",
      "Step 4: Receive admission decision",
      "Step 5: Complete enrollment formalities",
    ],
  },
  {
    id: "scholarships",
    title: "Financial Aid & Scholarships",
    image: scholarshipImage,
    details: [
      "Merit-based Scholarships",
      "Need-based Financial Aid",
      "Sports Scholarships",
      "Government & Private Scholarships",
    ],
  },
  {
    id: "counselor",
    title: "Meet with an Admission Counselor",
    image: counselorImage,
    details: [
      "Schedule a one-on-one meeting with an admission counselor to discuss your options.",
      "Get guidance on course selection and career pathways.",
      "Ask questions about financial aid and scholarships.",
    ],
  },
];

const facultyData = [
  {
    id: "principal",
    name: "Dr. Rajmane Sir",
    title: "Principal",
    image: principalImage,
    description: "Leading the institution with a vision for academic excellence and innovation.",
  },
  {
    id: "hod",
    name: "Prof. Dr. S.A. Patil",
    title: "Head of Computer Science Department",
    image: hodImage,
    description: "Expert in AI and Data Science, guiding students in research and projects.",
  },
  {
    id: "teacher",
    name: "Prof. Dr. Chavan Mama",
    title: "Senior Faculty, Admissions Counselor",
    image: teacherImage,
    description: "Assisting students in course selection and admission procedures.",
  },
];

const AdmissionsPage = () => {
  return (
    <div className="admissions-container">
      
      {/* Header Section */}
      <header className="header">
        <h1>Admissions</h1>
        <a href="/apply" className="apply-button">Apply Now</a>
      </header>

      {/* Announcements Section */}
      <section className="announcements">
        <h2>Latest Admission Announcements</h2>
        <p>Applications for Fall 2025 are now open! Deadline: July 15, 2025.</p>
        <p>Next open house: March 10, 2025. Register now!</p>
      </section>

      {/* Admissions Information Section */}
      <div className="admissions-content">
        {admissionsData.map((section) => (
          <div key={section.id} className="admission-card">
            <img src={section.image} alt={section.title} className="admission-img" />
            <h2>{section.title}</h2>
            <ul>
              {section.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Faculty Section */}
      <section className="faculty-section">
        <h2>College Leadership & Faculty</h2>
        <div className="faculty-list">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <img src={faculty.image} alt={faculty.name} className="faculty-img" />
              <h3>{faculty.name}</h3>
              <p><strong>{faculty.title}</strong></p>
              <p>{faculty.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AdmissionsPage;
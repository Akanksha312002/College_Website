import React from "react";
import { Link } from "react-router-dom";
import "../Styles/StudentCorner.css"
import studentBg from "../images/StudentCorner/student-bg (1).jpg"; // Background image
import libraryImg from "../images/StudentCorner/library.jpg";
import eventsImg from "../images/StudentCorner/events.jpg";
import clubsImg from "../images/StudentCorner/clubs.jpeg";
import examsImg from "../images/StudentCorner/exams.jpg";
import calendarImg from "../images/StudentCorner/calendar.jpg";
import loginImg from "../images/StudentCorner/login.jpeg";

const StudentCorner = () => {
  return (
    <div className="student-corner" style={{ backgroundImage: `url(${studentBg})` }}>
      {/* Page Header */}
      <header className="page-header">
        <h1>Student Corner</h1>
        <p>Your gateway to academic & extracurricular resources</p>
      </header>

      {/* Student Resources */}
      <section className="resources">
        <h2>Resources for Students</h2>
        <ul>
          <li><Link to="/academic-calendar">Academic Calendar</Link></li>
          <li><Link to="/exams-results">Examination & Results</Link></li>
          <li><Link to="/library">Library & E-Books</Link></li>
          <li><Link to="/student-login">Student Login</Link></li>
          <li><Link to="/clubs">Clubs & Organizations</Link></li>
          <li><Link to="/events">Events & Cultural Activities</Link></li>
        </ul>
      </section>

      {/* Sections with Images */}
      <div className="student-sections">
        <div className="section">
          <img src={calendarImg} alt="Academic Calendar" />
          <h3>Academic Calendar</h3>
          <p>Stay updated with important dates and schedules.</p>
        </div>
        <div className="section">
          <img src={examsImg} alt="Examinations & Results" />
          <h3>Examinations & Results</h3>
          <p>Check exam schedules and view results online.</p>
        </div>
        <div className="section">
          <img src={libraryImg} alt="Library Resources" />
          <h3>Library & E-Books</h3>
          <p>Access thousands of e-books and research papers.</p>
        </div>
        <div className="section">
          <img src={clubsImg} alt="Clubs & Organizations" />
          <h3>Clubs & Organizations</h3>
          <p>Join student clubs and explore leadership opportunities.</p>
        </div>
        <div className="section">
          <img src={eventsImg} alt="Events & Activities" />
          <h3>Events & Cultural Activities</h3>
          <p>Participate in college events and cultural programs.</p>
        </div>
        <div className="section">
          <img src={loginImg} alt="Student Login" />
          <h3>Student Login</h3>
          <p>Access your student dashboard and academic records.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
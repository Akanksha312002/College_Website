import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import "../../src/Styles/HomePage.css"


import Science from "../images/Departments/Science.jpg";
import Commerce from "../images/Departments/commerce.png";
import ArtsandHumanities from "../images/Departments/arts.png";
import Undergraduate from "../images/Departments/Undergraduate.jpg";
import Postgraduate from "../images/Departments/Postgraduation.jpg";
import Addon from "../images/Departments/Specialcourses.jpg";
import PRO_4 from "../images/Departments/PRO_4.jpg";
import PRO_5 from "../images/Departments/PRO_5.jpg";
import PRO_6 from "../images/Departments/PRO_6.jpg";


// Department Data
const departments = [
  {
    id: "science",
    img: Science,
    title: "Science",
    desc: "The Science Department fosters curiosity and innovation through research, experimentation, and hands-on learning in physics, chemistry, and biology.",
  },
  {
    id: "commerce",
    img: Commerce,
    title: "Commerce",
    desc: "Develop business acumen and financial expertise for a successful career.",
  },
  {
    id: "arts",
    img: ArtsandHumanities,
    title: "Arts & Humanities",
    desc: "Discover creativity and cultural studies with our expert faculty.",
  },
];

// Course Data
const courses = [
  {
    img: Undergraduate,
    title: "Undergraduate",
    desc: "Foundation courses blending theory and practical skills for career and higher studies.",
  },
  {
    img: Postgraduate,
    title: "Postgraduate",
    desc: "Advanced learning and research for specialization and expertise.",
  },
  {
    img: Addon,
    title: "Addon",
    desc: "Short-term programs to enhance skills and career prospects.",
  },
];

// Features Data
const Faculty = [
  {
    img: PRO_5,
    title: "Prof.Chavan Archana",
    description: "Professor & Head.",
    Qualification: " M.Tech, ",
    Experience: "UG: 15 Years, PG: 05 Years",
  },
  {
    img: PRO_6,
    title: "Prof. Suryawanshi Megha",
    description: " Professor",
    Qualification: "M.Tech",
    Experience: "UG: 15 years",
  },
  {
    img: PRO_4,
    title: "Prof. Patil Bhagyashri",
    description: "Assistant Professor",
    Qualification: "M.Tech",
    Experience: "UG: 10 years",
  },
];

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Department = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return (
    <div className="department-container">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Explore Our College Departments</h1>
        <p>Find the perfect course for your future!</p>
      </section>

      {/* Department Cards Section */}
      <div className="department-section container">
        <h2
          className="text-center"
          style={{ color: "Black", fontSize: "35px", fontWeight: "bold", fontFamily:"Georgia, sans-serif", marginBottom:"40px" }}>
          Our Departments
        </h2>
        <div className="row mt-4">
          {departments.map((dept) => (
            <div className="col-md-4" key={dept.id} id={dept.id}>
              <div className="department-card card">
                <img src={dept.img} alt={dept.title} className="card-img-top" />
                <div className="card-body text-center">
                  <h5>{dept.title}</h5>
                  <p>{dept.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses-section container">
        <h2 className="text-center"style={{ color: "Black", fontSize: "35px", fontWeight: "bold", fontFamily:"Georgia, sans-serif", marginBottom:"40px" }}>Our Variety of Courses</h2>
        <div className="row mt-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="course-card card">
                <img
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5>{course.title}</h5>
                  <p>{course.desc}</p>
                  {course.title === "Undergraduate" ? (
                    <Link to="/undergraduate">
                      <button className="btn btn-primary">Learn More</button>
                    </Link>
                  ) : course.title === "Postgraduate" ? (
                    <Link to="/postgraduate">
                      <button className="btn btn-primary">Learn More</button>
                    </Link>
                  ) : course.title === "Addon" ? (
                    <Link to="/addon">
                      <button className="btn btn-primary">Learn More</button>
                    </Link>
                  ) : (
                    <button className="btn btn-primary">Learn More</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <section className="faculty-section">
        <div className="text-center">
          <div id="faculty">
            <h3  style={{ color: "Black", fontSize: "35px", fontWeight: "bold", fontFamily:"Georgia, sans-serif", marginBottom:"10px" }}>Our Faculty</h3>
            <h4 style={{marginBottom:"20px"}}>FOR SGM</h4>
          </div>
          <div className="container">
            <div className="row-mt-4">
              <Slider {...settings}>
                {Faculty.map((faculty, index) => (
                  <div key={index} className="col-md-3 card-box-slider">
                    <Card className="card1"style={{padding:"20px",textAlign:"center", gap:"5px",marginRight:"25px",alignItems:"center"}}>
                      <Card.Img variant="top" style={{width:"280px",height:"250px",objectFit:"cover"}} src={faculty.img} />
                      <Card.Body>
                        <Card.Title>{faculty.title}</Card.Title>
                        <Card.Text>
                          <strong>{faculty.description}</strong>
                        </Card.Text>
                        <Card.Text>
                          <strong>Qualification:</strong>{" "}
                          {faculty.Qualification}
                        </Card.Text>
                        <Card.Text>
                          <strong>Experience:</strong> {faculty.Experience}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Department;
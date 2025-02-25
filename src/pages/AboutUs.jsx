import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../images/HomePage/about.png";
import alumniImage1 from "../images/HomePage/alumini1.jpg";
import alumniImage2 from "../images/HomePage/alumni2.jpg";
import alumniImage3 from "../images/HomePage/alumini3.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="about">
        <div className="main" data-aos="fade-up">
          <img src={aboutImage} alt="About Us" />
          <div className="all-text">
            <h4 data-aos="fade-right">About Us</h4>
            <h1 data-aos="fade-left">Our History</h1>
            <p data-aos="fade-up">
              The Rayat Shikshan Sanstha is one of the largest and the leading educational institutes in India, 
              imparting education in different disciplines of Arts, Commerce, Science, Law, Engineering, 
              Management, etc. Founded by the eminent educationist and social reformer, Late Padmabhushan 
              Dr. Karmaveer Bhaurao Patil in the year 1919...
            </p>
            <div className="btn flex space-x-4" data-aos="zoom-in">
              <Link to="/department#faculty">
                <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
                  Our Faculty
                </button>
              </Link>
              <Link to="/#who-we-are">
                <button type="button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="about-1">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down">
                <h2 style={{ fontFamily: "Croissant One, sans-serif", fontWeight: "bold" }}>About College</h2>
              </div>
              <div className="col-md-4" data-aos="flip-left">
                <div className="about-item text-center">
                  <i className="fa fa-book"></i>
                  <h3>Mission</h3>
                  <hr />
                  <ul className="text-left list-disc pl-6">
                    <li>Deliver quality education aligned with regional, national, and global standards.</li>
                    <li>Empower underprivileged sections by making education accessible to all.</li>
                    <li>Promote value-based learning for holistic personality development.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4" data-aos="flip-up">
                <div className="about-item text-center">
                  <i className="fa fa-globe"></i>
                  <h3>Vision</h3>
                  <hr />
                  <p>
                    Quality education to all, especially the rural, semi-rural, and socio-economically deprived students to make them self-reliant.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="flip-right">
                <div className="about-item text-center">
                  <i className="fa fa-pencil"></i>
                  <h3>Achievements</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus tempore, modi ea aspernatur...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alumni-box">
        <div className="alumni-section-title" data-aos="fade-up">
          Our Alumni Network
          <h5>Alumni Association establishment: 21/11/2003</h5>
        </div>
        <div className="alumni-container">
          <div className="alumni-card" data-aos="zoom-in">
            <img src={alumniImage1} alt="Alumni 1" />
            <h4>Hon. Adv. Ravindra Keshavrao Pawar</h4>
            <div className="alumni-card-title">Successful & Impactful</div>
            <div className="alumni-card-text">
              Our alumni excel in various fields, making a significant impact in industries, academia, and beyond.
            </div>
          </div>
          <div className="alumni-card" data-aos="zoom-in" data-aos-delay="200">
            <img src={alumniImage2} alt="Alumni 2" />
            <h4>Hon'ble Prof. Shivaji Anant Patil</h4>
            <div className="alumni-card-title">Global Connections</div>
            <div className="alumni-card-text">
              With a presence across the world, our alumni contribute to international innovation and leadership.
            </div>
          </div>
          <div className="alumni-card" data-aos="zoom-in" data-aos-delay="400">
            <img src={alumniImage3} alt="Alumni 3" />
            <h4>Hon'ble Prof. Dr. Shivajirao Shripatrao Kadam</h4>
            <div className="alumni-card-title">Giving Back</div>
            <div className="alumni-card-text">
              Our alumni mentor, guide, and support students, ensuring the next generation’s success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

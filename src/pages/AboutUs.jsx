import React from 'react';
import "../../src/Styles/HomePage.css"
import aboutImage from '../images/HomePage/about.png'; 
import alumniImage1 from '../images/HomePage/alumini1.jpg';
import alumniImage2 from '../images/HomePage/alumni2.jpg';
import alumniImage3 from '../images/HomePage/alumini3.png';


const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="main">
          <img src={aboutImage} alt="About Us" />
          <div className="all-text">
            <h4>About Us</h4>
            <h1>Our History</h1>
            <p>
              The Rayat Shikshan Sanstha is one of the largest and the leading educational institutes in India,
              imparting education in different disciplines of Arts, Commerce, Science, Law, Engineering, Management, etc.
              Founded by the eminent educationist and social reformer, Late Padmabhushan Dr. Karmaveer Bhaurao Patil
              in the year 1919...
            </p>
            <div className="btn">
              <button type="button">Our Faculty</button>
              <button type="button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About College Section */}
      <div id="about-1">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
              <h2 style={{ fontFamily: 'Croissant One, sans-serif',fontWeight:'bold' }}>
                About College
                </h2>

              </div>
              <div className="col-md-4">
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
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-globe"></i>
                  <h3>Vision</h3>
                  <hr />
                  <p>Quality education to all, especially the rural, semi-rural, and socio-economically deprived students to make them self-reliant.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-pencil"></i>
                  <h3>Achievements</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus tempore, modi ea aspernatur...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* Alumni Section */}
 <div className="alumni-box">
 <div className="alumni-section-title">
   Our Alumni Network
   <h5>Alumni Association establishment: 21/11/2003</h5>
 </div>
 <div className="alumni-container">
   <div className="alumni-card">
     <img src={alumniImage1} alt="Alumni 1" />
     <h4 style={{ fontSize: '14px', color: 'black' }}>
     Hon. Adv. Ravindra Keshavrao Pawar</h4>
     <div className="alumni-card-title">Successful & Impactful</div>
     <div className="alumni-card-text">Our alumni excel in various fields, making a significant impact in industries, academia, and beyond.</div>
   </div>
   <div className="alumni-card">
     <img src={alumniImage2} alt="Alumni 2" />
     <h4 style={{ fontSize: '14px', color: 'black' }}>
     Hon'ble Prof. Shivaji Anant Patil</h4>
     <div className="alumni-card-title">Global Connections</div>
     <div className="alumni-card-text">With a presence across the world, our alumni contribute to international innovation and leadership.</div>
   </div>
   <div className="alumni-card">
     <img src={alumniImage3} alt="Alumni 3" />
     <h4 style={{ fontSize: '14px', color: 'black' }}>
       Hon'ble Prof. Dr. Shivajirao Shripatrao Kadam
   </h4>
     <div className="alumni-card-title">Giving Back</div>
     <div className="alumni-card-text">Our alumni mentor, guide, and support students, ensuring the next generation’s success.</div>
   </div>
 </div>
</div>
</>

  );
};

export default AboutUs;
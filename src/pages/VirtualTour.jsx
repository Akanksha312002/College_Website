import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Styles/VirtualTour.css";
import KeyBuildings from './KeyBuildings';
import video from "../images/CampusFacilities/video2.mp4";
import CampusFacilites from './CampusFacilites';
import CampusMap from "../images/CampusFacilities/map.jpeg";
const VirtualTour = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="virtual-tour-container">
      <aside className="sidebar" data-aos="fade-right">
        <ul>
          <li className={activeSection === 'intro' ? 'active' : ''} onClick={() => setActiveSection('intro')}>Introduction</li>
          <li className={activeSection === 'photo' ? 'active' : ''} onClick={() => setActiveSection('photo')}>Campus Photo Tour</li>
          <li className={activeSection === 'facilities' ? 'active' : ''} onClick={() => setActiveSection('facilities')}>Campus Facilities</li>
          <li className={activeSection === 'map' ? 'active' : ''} onClick={() => setActiveSection('map')}>Campus Map</li>
        </ul>
      </aside>

      <main className="content">
        {activeSection === 'intro' && (
          <section className="intro">
            <div className="virtual-tour-container">
              <div className="heading" data-aos="fade-up">Explore Our Campus Virtually</div>
              <h5 data-aos="fade-up">
                Explore our campus from anywhere in the world. Discover our stunning architecture,
                lush green spaces, and state-of-the-art facilities.
              </h5>
              <h5 data-aos="fade-up">
                The best way to experience our campus is in person. The second-best way is to take
                our virtual tour. If you have any questions or need more information, give us a call
                at <strong>1-800-872-1787</strong> or send us an email.
              </h5>

              <div className="video-section" data-aos="zoom-in">
                <video autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'photo' && (
          <section className="photo-tour">
            <h1 data-aos="fade-up" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "40px", fontFamily: "Georgia, sans-serif", marginTop: '30px' }}>✨Explore Our Campus in Pictures✨</h1>
            <div className="photo-gallery" data-aos="fade-up">
              <KeyBuildings />
            </div>
          </section>
        )}
        {activeSection === 'facilities' && (
          <section className="facilities">
            <h1 data-aos="fade-up" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "40px", fontFamily: "Georgia, sans-serif", marginTop: "20px" }}>More About Our Facilities</h1>
            <div className="facilities-photos" data-aos="fade-up">
              <CampusFacilites />
            </div>
          </section>
        )}
        {activeSection === 'map' && (
          <div className="campus-map">
            <h1 data-aos="fade-up" style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "45px",
              fontFamily: "Georgia, sans-serif",
              marginTop: "50px",
              marginBottom: "50px"
            }}>
              Campus Map
            </h1>

            <div data-aos="zoom-in" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                width: "80%",
                maxWidth: "800px",
                height: "500px",
                border: "3px solid #000",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
              }}>
                <img
                  src={CampusMap}
                  alt="Campus Map"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  data-aos="zoom-in"
                />

              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VirtualTour;

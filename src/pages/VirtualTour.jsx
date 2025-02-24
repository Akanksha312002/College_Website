import React, { useState } from 'react';
import "../Styles/VirtualTour.css"
import KeyBuildings from './KeyBuildings';
import video from "../images/CampusFacilities/video.mp4"
import CampusFacilites from './CampusFacilites';

/*import CampusFacilities from './CampusFacilities';*/


const VirtualTour = () => {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="virtual-tour-container">
      <aside className="sidebar">
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
              
                <div className="heading">Welcome to Our Virtual Tour</div>
                <h5>
                  Explore our campus from anywhere in the world. Discover our stunning architecture,
                  lush green spaces, and state-of-the-art facilities.
                </h5>
                <h5>
                  The best way to experience our campus is in person. The second-best way is to take
                  our virtual tour. If you have any questions or need more information, give us a call
                  at <strong>1-800-872-1787</strong> or send us an email.
                </h5>
              
              <div className="video-section">
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
            <h1 style={{ textAlign: "center", fontWeight: "bolder",fontSize:"40px", fontFamily: "Georgia, sans-serif" }}>Campus Photo Tour</h1>
            <div className="photo-gallery">
              <KeyBuildings />
            </div>
          </section>
        )}
        {activeSection === 'facilities' && (
          <section className="facilities">
            <h1 style={{ textAlign: "center", fontWeight: "bolder",fontSize:"40px", fontFamily: "Georgia, sans-serif", marginTop:"20px"}}>More About Our Facilities</h1>
            <div className="facilities-photos">
                <CampusFacilites/>
            </div>
          </section>
        )}
        {activeSection === 'map' && (
          <section className="campus-map">
            <h1 style={{ textAlign: "center", fontWeight: "bolder",fontSize:"40px", fontFamily: "Georgia, sans-serif", marginTop:"20px", marginBottom:"20px"}}>Campus Map</h1>
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509125!2d144.96305791567847!3d-37.81362797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577328fc0b6b76d!2sUniversity!5e0!3m2!1sen!2sus!4v1613949650171!5m2!1sen!2sus"
              width="100vh"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </section>
        )}
      </main>
    </div>
  );
};

export default VirtualTour;

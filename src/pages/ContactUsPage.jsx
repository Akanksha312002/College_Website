import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ContactUs.css"; // Import the updated CSS file
import { Mail, Phone, MapPin } from "lucide-react"; // Icons from Lucide

const ContactUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-content">
        
        {/* Left Side */}
        <div className="contact-left">
          <h1 className="contact-title" data-aos="fade-down">Get In Touch With Us</h1>
          
          <div className="contact-info">
            <div className="contact-card" data-aos="fade-up">
              <MapPin size={30} />
              <h3>Our Address</h3>
              <p>Vidyanagar, Karad, Maharashtra - 415110</p>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
              <Phone size={30} />
              <h3>Call Us</h3>
              <p>02164271346</p>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
              <Mail size={30} />
              <h3>Email Us</h3>
              <p>sgmkarad@yahoo.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-in">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required data-aos="fade-right" />
              <input type="email" placeholder="Your Email" required data-aos="fade-left" />
              <textarea placeholder="Your Message" required data-aos="fade-up"></textarea>
              <button type="submit" data-aos="zoom-in">Submit</button>
            </form>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="contact-map" data-aos="fade-left">
          <div className="map-container">
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.261875035636!2d74.1894353!3d17.302909500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc18222d3b22c5f%3A0xe40dd2974cca6922!2sSadguru%20Gadage%20Maharaj%20College%2C%20Karad!5e0!3m2!1sen!2sin!4v1740404328021!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;

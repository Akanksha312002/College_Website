import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ContactUs.css"; // Import your CSS file
import { Mail, Phone, MapPin } from "lucide-react"; // Icons from Lucide

const ContactUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-container">
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
  );
};

export default ContactUsPage;

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../src/Styles/HomePage.css";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        {/* Left Section */}
        <div>
          <Link to="/"className="text-white decoration-none">
          <h2 className="text-3xl font-extrabold tracking-widest font-serif italic ">
            <span className="font-sans">SGM</span>
          </h2>
          </Link>
          <p className="mt-2">Sadguru Gadge Maharaj College,<br/> Motto : Education through self-help</p>
          
        </div>

        {/* Office Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Office</h3>
          <p>MASUR Road<br/>Vidyanagar, Karad-415110<br/>Contact: 02164271346</p>
          <p className="mt-2">Email: sgmkarad@yahoo.com</p>
        </div>

        {/* Quick Links Section with Hover Effect */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b-2 border-transparent hover:border-gray-400 transition duration-300 inline-block">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1">
     <li><Link to="/virtualtour" className="hover:underline transition duration-300">Campus</Link></li>
     <li><Link to="/placements" className="hover:underline transition duration-300">Placements</Link></li>
    <li><Link to="/about-us" className="hover:underline transition duration-300">About Us</Link></li>
    <li><Link to="/contact-us" className="hover:underline transition duration-300">Contact Us</Link></li>
    <li><Link to="/student" className="hover:underline transition duration-300">Student Corner</Link></li>
    <li><Link to="/academic" className="hover:underline transition duration-300">Academics</Link></li>
    <li><Link to="/gallery" className="hover:underline transition duration-300">Gallery</Link></li>
    <li><Link to="/r&d" className="hover:underline transition duration-300">Research</Link></li>



   </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Newsletter</h3>
          <div className="flex items-center border-b border-gray-400 py-2">
            <input type="email" placeholder="Enter your email" className="bg-transparent outline-none text-white px-2 w-full"/>
            <button className="text-gray-400 hover:text-white">➝</button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-start space-x-6 mt-6 social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-gray-400"><FaFacebookF /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-gray-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-gray-400"><FaInstagram /></a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-gray-400"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4 footer-bottom">
        <p>Hey, SGM &copy; {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
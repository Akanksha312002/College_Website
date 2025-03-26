import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoimg from "../images/NavBar/logo.png";
import logo2 from "../images/NavBar/logo1.png";


const MainNavBar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const megaMenuRef = useRef(null);
  const homeTabRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  let closeTimeout = null;

  // Open Mega Menu
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setShowMegaMenu(true);
  };

  // Close Mega Menu with a slight delay to prevent accidental disappearance
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setShowMegaMenu(false), 300); // Short delay
  };

  return (
    <div className="main-navbar-div">
      <div className="navbar">
        <img src={logoimg} alt="Logo" className="logo" />
        <div className="center-text">
          <h2 style={{ fontFamily: "Croissant One, sans-serif"}}>SGM COLLEGE KARAD</h2>
          <h6 >Education through self-help is our main motto</h6>
        </div>
        <img src={logo2} alt="Logo 2" className="logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-list">
        {/* HOME TAB WITH MEGA MENU */}
        <li
          className="nav-link home-tab"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={homeTabRef}
        >
          <Link to="/">Home</Link>

          {/* Mega Menu appears only on Home Page */}
          {location.pathname === "/" && showMegaMenu && (
            <div
              className="mega-menu"
              ref={megaMenuRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mega-menu-content">
                {/* Home Sections */}
                <div className="menu-section">
                  <h4>Home</h4>
                  <ul>
                    <li><Link to="/" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Features</Link></li>
                    <li><Link to="/" onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}>Who We Are</Link></li>
                    <li><Link to="/virtualtour" onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}>Campus Overview</Link></li>
                  </ul>
                </div>

                {/* About Us Page */}
                <div className="menu-section">
                  <h4>About Us</h4>
                  <ul>
                    <li><Link to="/about">Our History</Link></li>
                    <li><Link to="/about#college-info">About College</Link></li>
                    <li><Link to="/about#alumni">Our Alumni</Link></li>
                  </ul>
                </div>

                {/* Department Section with Sub-pages */}
                <div className="menu-section">
                  <h4>Departments</h4>
                  <ul>
                    <li><Link to="/department">All Departments</Link></li>
                    <li><Link to="/undergraduate">Graduate</Link></li>
                    <li><Link to="/postgraduate">Postgraduate</Link></li>
                    <li><Link to="/addon">Add-on Courses</Link></li>
                  </ul>
                </div>

                {/* Footer Page */}
                <div className="menu-section">
                  <h4>More</h4>
                  <ul>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/footer">Footer Page</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* OTHER NAVIGATION LINKS */}
        {[
          { name: "About Us", path: "/about" },
          { name: "Departments", path: "/department" },
          { name: "Gallery", path: "/newsevent" },
          { name: "Contact Us", path: "/contactus" },
          { name: "FAQ", path: "/faq" },
          { name: "Admission", path: "/admission" },
        ].map((item, index) => (
          <li key={index} className="nav-link">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNavBar;
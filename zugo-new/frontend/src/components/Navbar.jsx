import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "/zugo-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO SECTION */}
      <div className="logo">
        <img src={logo} alt="Zugo Logo" />

        <div className="logo-text">
          <h1>Zugo Private Limited</h1>
          <p>Tirupur, Tamil Nadu</p>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* NAVIGATION LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>
        <li><NavLink to="/works">Our Works</NavLink></li>
        <li><NavLink to="/packages">Packages</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

        {/* Mobile Button */}
        <NavLink to="/contact">
          <button className="contact-btn mobile-btn">Contact Us</button>
        </NavLink>

      </ul>

      {/* Desktop Button */}
      <NavLink to="/contact" className="desktop-btn">
        <button className="contact-btn">Contact Us</button>
      </NavLink>

    </nav>
  );
}

export default Navbar;
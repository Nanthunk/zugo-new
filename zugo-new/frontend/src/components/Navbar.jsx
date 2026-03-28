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

        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/service" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/works" onClick={() => setMenuOpen(false)}>Our Works</NavLink></li>
        <li><NavLink to="/packages" onClick={() => setMenuOpen(false)}>Packages</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>

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
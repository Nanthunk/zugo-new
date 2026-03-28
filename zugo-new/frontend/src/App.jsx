import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

import Navbar from "./components/Navbar";
import StackScroll from "./pages/StackScroll";
import Clients from "./pages/Clients";
import AdminClients from "./pages/AdminClients";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import Works from "./pages/Works";
import WorksAdmin from "./pages/WorksAdmin";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import MD from "./assets/MD.jpeg";

import "./App.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const skillsRef = useRef(null);

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const items = gsap.utils.toArray(".skills-list h2");

    gsap.to(".skills-top", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 70%",
      },
    });

    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });

    function setActive(index) {
      items.forEach((el) => el.classList.remove("active"));
      items[index].classList.add("active");
    }
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          <span>Z</span>
          <span>U</span>
          <span>G</span>
          <span>O</span>
        </h1>

        <p className="hero-subtitle">
          WE ARE A CREATIVE AGENCY, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPMENT.
          <br />
          OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
        </p>

        <div
          className="scroll-down"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Scroll Down to Explore ↓
        </div>
      </section>

      <StackScroll />

      {/* Welcome */}
      <div className="welcome">
        <h1>Welcome to Zugo</h1>
        <p>
          Where your brand's next big chapter begins.
        </p>
      </div>

      {/* Skills */}
      <section className="skills" ref={skillsRef}>
        <p className="skills-top">OUR SKILLS COVER</p>

        <div className="skills-list">
          <h2>Strategic Brand Positioning & Storytelling</h2>
          <h2>Data-Driven Campaign Planning & Execution</h2>
          <h2>Creative Content Ideation & Production</h2>
          <h2>Performance Analytics & ROI Optimization</h2>
          <h2>Multi-Platform Audience Targeting</h2>
          <h2>Conversion Rate Optimization (CRO)</h2>
        </div>
      </section>

      {/* MD Section */}
      <section className="aboutmd-wrapper">
        <div className="aboutmd-container">
          <div className="aboutmd-image">
            <img src={MD} alt="Managing Director" />
          </div>

          <div className="aboutmd-content">
            <h2>About Our MD</h2>
            <h3>Mr. Bharathraj CR</h3>

            <p>
              Our Managing Director is a visionary leader...
            </p>

            <div className="md-contact">
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:zugochairman@gmail.com">
                  zugochairman@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <Instagram size={18} />
                <a
                  href="https://www.instagram.com/zugo_chairman"
                  target="_blank"
                  rel="noreferrer"
                >
                  @zugo_chairman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="page-container"> {/* ✅ MAIN FIX */}

        <Navbar />

        <div className="content"> {/* ✅ MAIN FIX */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<Service />} />
            <Route path="/clients/add" element={<AdminClients />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/add" element={<WorksAdmin />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
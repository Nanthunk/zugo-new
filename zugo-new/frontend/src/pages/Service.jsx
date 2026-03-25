import React, { useEffect, useRef, useState } from "react";
import "../styles/Service.css";
import Blog from "../assets/Blogs.jpeg";
import Brand from "../assets/Brand.jpeg";
import Branding from "../assets/Branding.jpeg";
import Business from "../assets/Business.jpeg";
import CrAds from "../assets/Cr-ads.jpeg";
import Ecommerce from "../assets/E-com.jpeg";
import Email from "../assets/Email.jpeg";
import Influencer from "../assets/Influencer.jpeg";
import Landing from "../assets/Landing.jpeg";
import MGReels from "../assets/MG Reels.jpeg";
import ORM from "../assets/ORM.jpeg";
import PayAds from "../assets/Pay Ads.jpeg";
import perform from "../assets/perfm.jpeg";
import Portfolio from "../assets/Portfolio.jpeg";
import SocialMedia from "../assets/Social Media.jpeg";
import SEO from "../assets/SEO.jpeg";
import SMK from "../assets/SMK.jpeg";
import Wtsapp from "../assets/Whtapp.jpeg";


const ServiceSection = ({ title, items }) => {
  const [active, setActive] = useState(0);
  const sectionsRef = useRef([]);
  const menuRef = useRef(null);
  const isClicking = useRef(false);  
  

  sectionsRef.current = [];

  // ✅ SCROLL TO SECTION (PERFECT)
  const scrollToSection = (index) => {
  const el = sectionsRef.current[index];
  if (!el) return;

  isClicking.current = true;

  const yOffset = -120; // 👈 adjust based on your header height
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  setActive(index);

  setTimeout(() => {
    isClicking.current = false;
  }, 800);
};

  // ✅ 🔥 ONLY ONE SCROLL LOGIC (NO LAG)
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        let newIndex = 0;

        sectionsRef.current.forEach((section, index) => {
          if (!section) return;

          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.5) {
            newIndex = index;
          }
        });

        setActive(newIndex);
      }, 100); // 👈 sweet spot (fast + no lag)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ MENU AUTO SCROLL
  useEffect(() => {
  if (!isClicking.current) return; // ❌ STOP on manual scroll

  const activeEl = document.querySelector(".service-option.active");

  if (activeEl && menuRef.current) {
    activeEl.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
}, [active]);

  return (
    <div className="service-wrapper">
      <h2 className="service-title">{title}</h2>

      <div className="service-layout">
        
        {/* LEFT */}
        <div className="service-left" ref={menuRef}>
          <h3 className="service-left-title">{title}</h3>

          {items.map((item, index) => (
            <div
              key={index}
              className={`service-option ${
                active === index ? "active" : ""
              }`}
              onClick={() => scrollToSection(index)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="service-right">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className="service-content"
            >
              <img src={item.image} alt="" className="service-banner" />

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <hr className="service-line" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const Service = () => {

  const digitalServices = [
    {
      title: "Social Media Marketing",
      image: SocialMedia,
      description:
        "We build engaging social media campaigns that grow your brand visibility and create meaningful customer engagement."
    },
    {
      title: "Search Engine Optimization",
      image: SEO,
      description:
        "SEO strategies designed to improve rankings, drive organic traffic, and increase conversions."
    },
    {
      title: "Pay Per Click Advertising",
      image: PayAds,
      description:
        "Highly optimized paid advertising campaigns to generate leads and maximize ROI."
    },
    {
      title: "Content Marketing & Blogging",
      image: Blog,
      description:
        "We craft compelling brand stories and creative assets that connect with audiences."
    },
    {
      title: "Email Marketing & Automation",
      image: Email,
      description:
        "Specialized digital strategies for real estate builders and developers."
    },
    {
      title: "Influencer Marketing",
      image: Influencer,
      description:
        "Specialized digital strategies for real estate builders and developers."
    },
    {
      title: "Online Reputation Management (ORM)",
      image: ORM,
      description:
        "Specialized digital strategies for real estate builders and developers."
    },
    {
      title: "WhatsApp & SMS Marketing",
      image: Wtsapp,
      description:
        "Specialized digital strategies for real estate builders and developers."
    }

  ];

  const webServices = [
    {
      title: "Business Website",
      image: Business,
      description:
        "Professional websites designed for brand credibility and business growth."
    },
    {
      title: "Ecommerce Website",
      image: Ecommerce,
      description:
        "High converting ecommerce stores with seamless shopping experience."
    },
    {
      title: "Landing Pages",
      image: Landing,
      description:
        "Conversion focused landing pages designed for campaigns."
    },
    {
      title: "Portfolio Websites",
      image: Portfolio,
      description:
        "Beautiful portfolio websites to showcase work and projects."
    },
    
  ];

  const brandingServices = [
    {
      title: "Premium Branding",
      image: Branding,
      description:
        "Unique brand logos that represent your company identity."
    },
    {
      title: "Brand Identity",
      image: Brand,
      description:
        "Complete brand identity packages including colors, fonts and style."
    },
    {
      title: "Social Media Kit",
      image: SMK,
      description:
        "Modern UI design focused on user experience and conversion."
    },
    {
      title: "Creative Ads",
      image: CrAds,
      description:
        "High impact ad creatives for social media and digital campaigns."
    },
    {
      title: "Performance Marketing Assets",
      image: perform,
      description:
        "Brochures, posters and brand marketing materials."
    },
    {
      title: "Motion Graphics & Reels",
      image: MGReels,
      description:
        "Brochures, posters and brand marketing materials."
    }
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <div className="service-hero">
        <h1>We Don’t Just Market — We Make You Unmissable</h1>
        <p>
          From data-driven campaigns to engaging social strategies, our digital
          marketing experts help your brand connect, convert and conquer the
          digital space.
        </p>

        <button className="cta">Boost Visibility, Leads & Sales Online</button>
      </div>

      {/* SERVICE SECTIONS */}

      <ServiceSection
        title="Digital Marketing"
        items={digitalServices}
      />

      <ServiceSection
        title="Website Development"
        items={webServices}
      />

      <ServiceSection
        title="Branding & Creative"
        items={brandingServices}
      />

    </div>
  );
};

export default Service;
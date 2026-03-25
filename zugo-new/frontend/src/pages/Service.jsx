import React, { useEffect, useRef } from "react";
import "../styles/Service.css";

/* IMPORTS */
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
import SocialMedia from "../assets/social-media.jpeg";
import SEO from "../assets/SEO.jpeg";
import SMK from "../assets/SMK.jpeg";
import Wtsapp from "../assets/Whtapp.jpeg";

/* ================= COMPONENT ================= */

const ServiceBlock = ({ title, items }) => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-section">
      <h2 className="section-title">{title}</h2>

      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className={`service-row hidden ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="service-img">
            <img src={item.image} alt={item.title} />
          </div>

          {/* TEXT */}
          <div className="service-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button className="service-btn">Get This Service via WhatsApp</button>

            <hr className="fancy-hr hidden-hr" />
          </div>
        </div>
      ))}
    </div>
  );
};

/* ================= MAIN ================= */

const Service = () => {
  const digitalServices = [
    { title: "Social Media Marketing", image: SocialMedia, description: "We build engaging campaigns that grow your brand." },
    { title: "Search Engine Optimization", image: SEO, description: "Improve rankings and drive organic traffic." },
    { title: "Pay Per Click Advertising", image: PayAds, description: "Optimized ads for maximum ROI." },
    { title: "Content Marketing & Blogging", image: Blog, description: "Creative storytelling for your brand." },
    { title: "Email Marketing", image: Email, description: "Automation strategies for conversions." },
    { title: "Influencer Marketing", image: Influencer, description: "Boost reach using influencers." },
    { title: "ORM", image: ORM, description: "Manage your online reputation." },
    { title: "WhatsApp Marketing", image: Wtsapp, description: "Direct user engagement strategies." }
  ];

  const webServices = [
    { title: "Business Website", image: Business, description: "Professional websites for growth." },
    { title: "Ecommerce Website", image: Ecommerce, description: "High converting stores." },
    { title: "Landing Pages", image: Landing, description: "Conversion focused pages." },
    { title: "Portfolio Websites", image: Portfolio, description: "Showcase your work beautifully." }
  ];

  const brandingServices = [
    { title: "Premium Branding", image: Branding, description: "Unique brand identity." },
    { title: "Brand Identity", image: Brand, description: "Complete branding kit." },
    { title: "Social Media Kit", image: SMK, description: "Modern UI kits." },
    { title: "Creative Ads", image: CrAds, description: "High impact creatives." },
    { title: "Performance Assets", image: perform, description: "Marketing materials." },
    { title: "Motion Graphics", image: MGReels, description: "Reels & animations." }
  ];

  return (
    <div>
      {/* HERO */}
      <div className="service-hero">
        <h1>We Don’t Just Market — We Make You Unmissable</h1>
        <p>Grow faster with data-driven strategies.</p>
        <button className="cta">Boost Sales</button>
      </div>

      <ServiceBlock title="Digital Marketing" items={digitalServices} />
      <ServiceBlock title="Website Development" items={webServices} />
      <ServiceBlock title="Branding & Creative" items={brandingServices} />
    </div>
  );
};

export default Service;
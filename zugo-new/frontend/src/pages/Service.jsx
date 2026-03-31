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

            <button
  className="service-btn"
  onClick={() => window.open(
    "https://wa.me/919585541589?text=Hi%20I%20Visit%20your%20website%20and%20I%20am%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20details?",
    "_blank"
  )}
>
  Get This Service via WhatsApp
</button>

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
    { title: "Social Media Marketing", image: SocialMedia, description: "We help your brand grow across platforms like Instagram, Facebook, and LinkedIn with engaging content and strategic campaigns. Our focus is on building audience trust, increasing engagement, and driving real business results. From content creation to ad management, we handle everything end-to-end." },
    { title: "Search Engine Optimization", image: SEO, description: "We help your brand grow across platforms like Instagram, Facebook, and LinkedIn with engaging content and strategic campaigns. Our focus is on building audience trust, increasing engagement, and driving real business results. From content creation to ad management, we handle everything end-to-end." },
    { title: "Pay Per Click Advertising", image: PayAds, description: "Get instant traffic and leads with targeted ad campaigns on Google and social media platforms. We create high-converting ads, optimize budgets, and track performance to ensure maximum ROI. Every click is optimized to bring you closer to your business goals." },
    { title: "Content Marketing & Blogging", image: Blog, description: "Get instant traffic and leads with targeted ad campaigns on Google and social media platforms. We create high-converting ads, optimize budgets, and track performance to ensure maximum ROI. Every click is optimized to bring you closer to your business goals." },
    { title: "Email Marketing", image: Email, description: "Reach your audience directly with personalized and impactful email campaigns. We design and automate email sequences that nurture leads and boost conversions. From newsletters to promotional campaigns, we ensure higher open and click rates." },
    { title: "Influencer Marketing", image: Influencer, description: "Reach your audience directly with personalized and impactful email campaigns. We design and automate email sequences that nurture leads and boost conversions. From newsletters to promotional campaigns, we ensure higher open and click rates." },
    { title: "ORM", image: ORM, description: "Protect and enhance your brand’s online reputation with strategic monitoring and response. We manage reviews, feedback, and brand mentions across platforms. Build trust and maintain a positive brand image in the digital space." },
    { title: "WhatsApp Marketing", image: Wtsapp, description: "Connect with your customers instantly through personalized WhatsApp campaigns. We help you send updates, offers, and notifications directly to your audience. Fast, direct, and highly effective communication for better conversions." }
  ];

  const webServices = [
    { title: "Business Website", image: Business, description: "We design professional and responsive websites that represent your brand perfectly. Focused on user experience, speed, and performance to convert visitors into customers. A strong digital presence for your business growth." },
    { title: "Ecommerce Website", image: Ecommerce, description: "Launch your online store with a seamless shopping experience and secure payment integration. We build scalable and user-friendly e-commerce platforms tailored to your business. Designed to maximize sales and customer satisfaction." },
    { title: "Landing Pages", image: Landing, description: "High-converting landing pages designed for campaigns, ads, and lead generation. We focus on clean design, clear messaging, and strong call-to-actions. Perfect for turning visitors into leads or customers." },
    { title: "Portfolio Websites", image: Portfolio, description: "Showcase your work beautifully with professional portfolio websites. We create visually stunning platforms that highlight your skills and achievements." }
  ];

  const brandingServices = [
    { title: "Premium Branding", image: Branding, description: "High-converting landing pages designed for campaigns, ads, and lead generation. We focus on clean design, clear messaging, and strong call-to-actions. Perfect for turning visitors into leads or customers." },
    { title: "Brand Identity", image: Brand, description: "From logos to color palettes, we craft a consistent and unique brand identity. Everything is designed to reflect your business values and personality. Make your brand instantly recognizable." },
    { title: "Social Media Kit", image: SMK, description: "Get ready-to-use social media designs that maintain a consistent brand look. Includes templates, highlights, banners, and post designs. Perfect for maintaining a professional and cohesive online presence." },
    { title: "Creative Ads", image: CrAds, description: "Get ready-to-use social media designs that maintain a consistent brand look. Includes templates, highlights, banners, and post designs. Perfect for maintaining a professional and cohesive online presence." },
    { title: "Performance Assets", image: perform, description: "Design assets optimized for marketing performance and conversions. From banners to ad creatives, everything is built with data-driven strategy. Boost your campaign results with high-quality visuals." },
    { title: "Motion Graphics", image: MGReels, description: "Bring your brand to life with engaging animations and motion visuals. Perfect for ads, reels, and promotional videos. Capture attention quickly and deliver your message effectively." }
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
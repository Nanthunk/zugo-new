import React from "react";
import "../styles/Packages.css";

/* DIGITAL MARKETING */
const digitalMarketingPlans = [ 
    { name: "Bronze Package", 
      price: "₹10,000/Month", 
      recommended: false,
      features: ["5 Static Posters", 
        "3 Reels", 
        "Facebook, Instagram Handling", 
        "Google Presence", 
        "Monthly Report"] 
    }, 
    
    { name: "Silver Package", 
      price: "₹25,000/Month", 
      recommended: false,
      features: ["10 Posters, 6 Reels", 
        "Facebook, Instagram Ads Setup", 
        "1 Premium Content Shoot", 
        "Lead Generation Setup", 
        "Strategy Discussion for every 15 Days"] 
    }, 
    
    { name: "Gold Package", 
      price: "₹45,000/Month", 
      recommended: true,
      features: ["18 Posters, 12 Reels", 
        "2 Premium Content Shoots", 
        "SEO Optimations", 
        "Whatsapp Integration", 
        "Paid Advertsing", 
        "Performance Analysis"] 
    }, 
    
    { name: "Platinum Package", 
      price: "₹75,000/Month", 
      recommended: false,
      features: ["25+ Advanced Creative Contents", 
        "4 Premium Content Shoots", 
        "Website Optimization", 
        "CRM Integration", 
        "Ads Srategy & Management",]
    }, 
    
    { name: "Diamond Package", 
      price: "₹1,00,000/Month", 
      recommended: false,
      features: ["40+ Advanced Creative Contents", 
        "8 Premium Content Shoots", 
        "Daily Monitoring", 
        "All SEO Services", 
        "Paid Campaigns ", 
        "Dedicated Account Manager"] 
    } 
];

/* PRODUCT SHOOT */
const productPlans = [
  { name: "Basic", price: "₹8,000", recommended: false, features: ["10 Products", "3 angles per Product", "White Background", "Basic Lighting Setup"] },

  { name: "Standard", price: "₹15,000", recommended: true, features: ["20 Products", "5 angles per Product", "2 lifestyle images", "Colour Correction"] },

  { name: "Advanced", price: "₹30,000", recommended: false, features: ["40 Products", "5-8 angles", "Creative Backgrounds", "Professional Retouching"] },

  { name: "Premium", price: "₹50,000", recommended: false, features: ["60 Products", "8-12 angles", "Themed Shoot Setup", "Commercial Usage Licence"] }
];

/* REAL ESTATE */
const realEstatePlans = [
  { name: "Basic", price: "₹15,000", recommended: false, features: ["10 high-resolution property images", "Basic Editing"] },

  { name: "Standard", price: "₹30,000", recommended: false, features: ["10 HDR images", "5 Videos (interior + exterior)"] },

  { name: "Premium", price: "₹50,000", recommended: true, features: ["25 images + 7 Videos", "60 sec Walkthrough video"] },

  { name: "Luxury", price: "₹80,000", recommended: false, features: ["40+ images", "Cinematic Property Video", "Drone Coverage"] }
];

/* DRONE */
const dronePlans = [
  { name: "Basic", price: "₹10,000", recommended: false, features: ["5-8 Aerial Shots", "Basic Editing"] },

  { name: "Standard", price: "₹20,000", recommended: true, features: ["10-15 Aerial Shots", "Cinematic transitions"] },

  { name: "Pro", price: "₹35,000", recommended: false, features: ["20+ Aerial Shots", "60-90 sec Edited video"] },

  { name: "Premium", price: "₹55,000", recommended: false, features: ["Full Day Shoot", "Premium Edit"] }
];

/* WEBSITE */
const webPlans = [
  { name: "Basic", price: "₹15,000", recommended: false, features: ["Mobile Responsive", "Basic UI"] },

  { name: "Standard", price: "₹25,000", recommended: false, features: ["Multiple Pages", "Responsive"] },

  { name: "Business Webpage", price: "₹40,000", recommended: false, features: ["Dynamic Site", "Admin Panel"] },

  { name: "Premium", price: "₹70,000", recommended: false, features: ["Full Stack", "SEO", "API"] },
  
  { name: "Shopify E-Commerce", price: "₹16,000", recommended: false, features: ["Shopify store setup", "Adding products", "Basic Design Customization"] }
];

const Packages = () => {
  const renderSection = (title, data) => (
    <div className="service-section">
      <h2 className="section-title">{title}</h2>

      <div className="grid-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            {item.recommended && (
               <span className="recommended-badge">Recommended</span>
               )}
            <h3>{item.name}</h3>
            <h1 className="price">{item.price}</h1>

            <ul>
              {item.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <a href="/contact">
              <button className="btn">Choose Plan</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="packages-section">
      <h1 className="packages-title">Our Packages</h1>

      {renderSection("Digital Marketing Services", digitalMarketingPlans)}
      {renderSection("Product Shoots", productPlans)}
      {renderSection("Real Estate Management", realEstatePlans)}
      {renderSection("Drone Shoots", dronePlans)}
      {renderSection("Web Development", webPlans)}
    </section>
  );
};

export default Packages;
import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message Sent ✅");

        // ✅ Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          message: ""
        });

      } else {
        alert("Error sending mail ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-container">

      {/* LEFT SECTION */}
      <div className="contact-left">
        <h1>Lets Reach Us</h1>
        <p className="subtitle">Lets Grow Together</p>

        <div className="contact-info">
          <a href="tel:+919585541589">
            <p>📞 +91 95855 41589</p>
          </a>
          <a href="mailto:zugoprivatelimited@gmail.com">
            <p>✉️ zugoprivatelimited@gmail.com</p>
          </a>
          <p>📍11(3), PN Road, 4th Street, Kumar Nagar, Tiruppur, Tamil Nadu</p>
        </div>

        <div className="map-box">
          <iframe
  title="zugo-map"
  src="https://www.google.com/maps?q=11.120529,77.3398681&hl=en&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>

      <div className="contact-right">

        <form onSubmit={handleSubmit}>

          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>

        {/* SOCIAL SECTION */}
        <div className="social-section">
          <h2>Stay Connect With Us</h2>

          <div className="social-grid">

            <div className="social-item">
              <FontAwesomeIcon icon={faInstagram} />
              <a href="https://www.instagram.com/zugo_pvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <p>@zugo_pvt</p>
              </a>
            </div>

            <div className="social-item">
              <FontAwesomeIcon icon={faFacebook} />
              <a href="https://www.facebook.com/share/1C6WAB2ZYQ/">
                <p>Zugo Digi</p>
              </a>
            </div>

            <div className="social-item">
              <FontAwesomeIcon icon={faYoutube} />
              <a href="https://www.youtube.com/@ZugoPrivatelimited">
                <p>@ZugoPrivatelimited</p>
              </a>
            </div>

            <div className="social-item">
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="https://www.linkedin.com/company/zugo-private-limited">
                <p>Zugo Private Limited</p>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
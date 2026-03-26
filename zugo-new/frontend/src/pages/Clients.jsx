import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Clients.css";

gsap.registerPlugin(ScrollTrigger);

function Clients() {

  const [logos, setLogos] = useState([]);
  const rowsRef = useRef([]);

  // ✅ SAME RENDER BACKEND
  const BASE_URL = "https://zugo-new-1-oavu.onrender.com";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/clients`)
      .then(res => setLogos(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {

    rowsRef.current.forEach((row, index) => {

      gsap.to(row, {
        x: index % 2 === 0 ? -150 : 150,
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    });

  }, [logos]);

  // split logos into rows of 5
  const rows = [];
  for (let i = 0; i < logos.length; i += 5) {
    rows.push(logos.slice(i, i + 5));
  }

  return (
    <section className="clients">

      <div className="clients-header">
        <h1>Our Trusted Clients</h1>
        <p>
          We proudly collaborate with 30+ Clients who have successfully elevated their Brand Presence and Grow their Online Identity with Us.
        </p>
      </div>

      <div className="clients-container">

        {rows.map((row, rowIndex) => (

          <div
            key={rowIndex}
            className="logo-row"
            ref={el => rowsRef.current[rowIndex] = el}
          >

            {row.map((item) => (

              <img
                key={item._id}
                src={
                  item.logo.startsWith("http")
                    ? item.logo
                    : `${BASE_URL}/uploads/${item.logo}`
                }
                alt="client"
              />

            ))}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Clients;
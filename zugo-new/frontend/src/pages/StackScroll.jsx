import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/StackScroll.css";

import Digi from "../assets/DM.jpeg";
import Content from "../assets/Content.jpeg";
import SocialMedia from "../assets/social-media.jpeg";
import Ads from "../assets/Ads.jpeg";
import Web from "../assets/Web.jpeg"; 

import DigiMobile from "../assets/DM Mob.jpeg";
import ContentMobile from "../assets/Content Mob.jpeg";
import SocialMediaMobile from "../assets/Social Med Mob.jpeg";
import AdsMobile from "../assets/Ads Mob.jpeg";
import WebMobile from "../assets/Web Mob.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function StackScroll() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const images = gsap.utils.toArray(".stack-image");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${images.length * 700}`,
          scrub: true,
          pin: true,
        }
      });

      images.forEach((img, i) => {
        if (i !== images.length - 1) {
          tl.to(img, {
            scale: 0.8,
            opacity: 0,
            duration: 1
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section className="stack-section" ref={sectionRef}>
      <div className="stack-wrapper">

        <picture>
          <source srcSet={DigiMobile} media="(max-width: 768px)" />
          <img className="stack-image" src={Digi} alt="Digital Marketing" />
        </picture>

        <picture>
          <source srcSet={ContentMobile} media="(max-width: 768px)" />
          <img className="stack-image" src={Content} alt="Content Creation" />
        </picture>

        <picture>
          <source srcSet={SocialMediaMobile} media="(max-width: 768px)" />
          <img className="stack-image" src={SocialMedia} alt="Social Media" />
        </picture>

        <picture>
          <source srcSet={AdsMobile} media="(max-width: 768px)" />
          <img className="stack-image" src={Ads} alt="Advertising" />
        </picture>

        <picture>
          <source srcSet={WebMobile} media="(max-width: 768px)" />
          <img className="stack-image" src={Web} alt="Web Development" />
        </picture>

      </div>
    </section>
  );
}
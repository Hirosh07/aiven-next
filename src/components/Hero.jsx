"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "@/img/hero-img.svg"; // Next.js alias import

const Hero = () => {
  const myElement = useRef(null);

  // GSAP floating animation
  useEffect(() => {
    if (myElement.current) {
      gsap.to(myElement.current, {
        duration: 2,
        y: -100,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      
      {/* Left Content */}
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-white drop-shadow-lg md:text-5xl text-3xl font-semibold relative z-10">
          Come with us to be a Brand
        </h1>

        <p className="text-gray-100 mt-5 text-xl primary-font relative z-10 drop-shadow-md">
          Branding & Advertising Services in Chennai | Aiven Creatives
        </p>

        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#contact">
            <CtaButton name="Get Started" />
          </a>
        </div>
      </div>

      {/* Right Floating Image */}
      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img
          ref={myElement}
          className="w-full animate opacity-0"
          src={img?.src || img}
          alt="hero"
        />
      </div>

    </div>
  );
};

export default Hero;

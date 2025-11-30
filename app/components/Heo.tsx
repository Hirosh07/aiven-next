"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import hero1 from "../../public/assets/hero/hero.png";
import hero2 from "../../public/assets/hero/hero2.jpg";
import CtaButton from "../ui/components/CtaButton";

const Hero = () => {
  const slidesRef : any = useRef([]);

  // GSAP Slideshow
  useEffect(() => {
    const slides = slidesRef.current;

    // initially hide all except first
    gsap.set(slides.slice(1), { autoAlpha: 0 });

    const tl = gsap.timeline({ repeat: -1 });

    slides.forEach((slide : any, i : any) => {
      tl.to(slide, {
        duration: 1.5,
        autoAlpha: 1,
        ease: "power2.inOut",
      })
        .to(
          slide,
          {
            duration: 1.5,
            autoAlpha: 0,
            ease: "power2.inOut",
          },
          "+=3"
        );
    });
  }, []);

  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {[hero1, hero2].map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`slide-${index}`}
            ref={(el : any) => (slidesRef.current[index] = el)}
            fill
            priority
            className="object-cover w-full h-full absolute inset-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-32 text-white">
        <h1
          data-aos="fade-right"
          className="text-4xl md:text-6xl font-semibold drop-shadow-lg"
        >
          Come with us to be a Brand
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-lg md:text-2xl mt-4 max-w-xl drop-shadow-md"
        >
          Branding & Advertising Services in Chennai | Aiven Creatives
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
          <a href="#contact">
            <CtaButton name="Quote Us" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

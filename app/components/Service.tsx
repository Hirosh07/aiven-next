"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineChartPie } from "react-icons/hi2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRouter } from "next/navigation";
import Card from "../ui/components/Card";

// All Services Data
const allServices = [
  {
    path: "/app-development",
    title: "Apps Development",
    desc: "App Development process is like a signature recipe — clean code, intuitive UI, and powerful backend.",
  },
  {
    path: "/web-development",
    title: "Web Development",
    desc: "Professional web development ensures your site is fast, mobile-responsive, and optimized.",
  },
  {
    path: "/campagin-creation",
    title: "Digital Marketing",
    desc: "We boost brand awareness and visibility using Meta Ads & Google Ads.",
  },
  {
    path: "/advertising",
    title: "O-O-H Ads",
    desc: "We deliver powerful outdoor campaigns including metro and billboard ads.",
  },
  {
    path: "/cvs",
    title: "Corporate Video Shoots",
    desc: "High-quality shoots that showcase your brand identity and culture.",
  },
  {
    path: "/trad-ads",
    title: "Traditional Advertisements",
    desc: "TV, radio & OTT ads across leading platforms like Sun, Vijay, Zee, Hotstar, etc.",
  },
  {
    path: "/graphics-design",
    title: "Graphics Design",
    desc: "We deliver stunning graphic designs that make your brand stand out.",
  },
  {
    path: "/ve-mg",
    title: "Video Editing/Motion Graphics",
    desc: "High-quality video edits and motion graphics to elevate your brand presence.",
  },
  {
    path: "/Event-management",
    title: "Event Management",
    desc: "End-to-end event management from planning to flawless execution.",
  },
];

const Services = () => {
  const router = useRouter();

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Move right
  const handleMoveRight = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % allServices.length);
  };

  // Move left
  const handleMoveLeft = () => {
    setDirection("left");
    setStartIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
  };

  /* -------------------------------------------
     🌟 RESPONSIVE CARD COUNT LOGIC
     sm → 1 card
     md → 2 cards
     lg+ → 3 cards
  -------------------------------------------- */
  let cardsToShow =
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? 1
        : window.innerWidth < 1024
        ? 2
        : 3
      : 3;

  // Build visible cards dynamically
  const visibleServices = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleServices.push(allServices[(startIndex + i) % allServices.length]);
  }

  return (
    <div className="text-[#7A6960] relative px-5 sm:px-10 lg:px-10 py-20">

      {/* Title */}
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-10 text-lg max-w-3xl mx-auto px-4">
        Services are everywhere… but direction and execution are rare. Before you choose what we offer, choose why it matters.
      </p>

      {/* Main Section */}
      <div className="flex items-center justify-center gap-5">

        {/* Left Arrow (Desktop) */}
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition hidden lg:block"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Container */}
        <div
          className={`grid gap-5 w-full max-w-[1800px]
            grid-cols-1 sm:grid-cols-1 px-2 lg:grid-cols-3 slide-${direction}`}
        >
          {visibleServices.map((service) => (
            <div key={service.title} onClick={() => router.push(service.path)}>
              <Card
                img={<HiOutlineChartPie />}
                title={service.title}
                desc={service.desc}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow (Desktop) */}
        <button
          onClick={handleMoveRight}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition hidden lg:block"
        >
          <FaArrowRight />
        </button>

      </div>

      {/* Mobile Arrows */}
      <div className="flex justify-center gap-4 mt-6 lg:hidden">
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleMoveRight}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        .slide-right {
          animation: slideRight 0.4s ease forwards;
        }
        .slide-left {
          animation: slideLeft 0.4s ease forwards;
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(25px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-25px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Services;

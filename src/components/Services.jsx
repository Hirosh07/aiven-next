"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRouter } from "next/navigation";

// All 9 services
const allServices = [
  {
    path: "/app-development",
    title: "Apps Development",
    desc: "App Development process is like a signature recipe — clean code, intuitive UI, and powerful backend, all seasoned with strategy.",
  },
  {
    path: "/web-development",
    title: "Web Development",
    desc: "Professional web development ensures your site is fast, mobile-responsive, and optimized for user experience.",
  },
  {
    path: "/campagin-creation",
    title: "Digital Marketing",
    desc: "We provide digital marketing solutions that increase brand awareness, drive traffic, and boost online visibility using meta ads & Google ads.",
  },
  {
    path: "/advertising",
    title: "O-O-H Ads",
    desc: "We deliver bold billboard campaigns and metro ads in Chennai & Bangalore to help brands stand out effectively.",
  },
  {
    path: "/cvs",
    title: "Corporate Video Shoots",
    desc: "A powerful way to showcase your brand identity, values, and offerings through high-quality corporate videos.",
  },
  {
    path: "/trad-ads",
    title: "Traditional Advertisements",
    desc: "Classic branding via TV & Radio ads. We access major networks like Sun, Vijay, Zee & OTT platforms including Prime Video, Hotstar, and more.",
  },
  {
    path: "/graphics-design",
    title: "Graphics Design",
    desc: "Aiven Creatives delivers stunning graphic design services that leave a memorable impact.",
  },
  {
    path: "/ve-mg",
    title: "Video Editing/Motion Graphics",
    desc: "We deliver high-quality video editing and motion graphics that captivate your audience and tell your brand story effectively.",
  },
  {
    path: "/Event-management",
    title: "Event Management",
    desc: "Complete event management solutions — from concept to flawless execution.",
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

  // Current visible 3 services
  const visibleServices = [];
  for (let i = 0; i < 3; i++) {
    const serviceIndex = (startIndex + i) % allServices.length;
    visibleServices.push(allServices[serviceIndex]);
  }

  // Animation styles (same as your Vite version)
  const animationStyles = `
    .slide-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, minmax(280px, 1fr));
      gap: 1.25rem;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    @media (min-width: 1024px) {
      .slide-container {
        grid-template-columns: repeat(3, minmax(320px, 1fr));
      }
    }

    @keyframes slide-right-animation {
      from {
        transform: translateX(20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slide-left-animation {
      from {
        transform: translateX(-20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .slide-container.right {
      animation-name: slide-right-animation;
    }

    .slide-container.left {
      animation-name: slide-left-animation;
    }
  `;

  return (
    <div className="text-[#7A6960] relative">
      <style>{animationStyles}</style>

      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Services are everywhere… but direction and execution are rare. Before you choose what we offer, choose why it matters.
      </p>

      {/* Services Row */}
      <div
        className="flex flex-col lg:flex-row items-center gap-5 justify-center"
        data-aos="fade-up"
      >
        {/* Left Arrow */}
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition hidden lg:block"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div className={`slide-container ${direction}`}>
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

        {/* Right Arrow */}
        <button
          onClick={handleMoveRight}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition hidden lg:block"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Mobile Arrows */}
      <div className="flex justify-center gap-4 mt-5 lg:hidden">
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
    </div>
  );
};

export default Services;

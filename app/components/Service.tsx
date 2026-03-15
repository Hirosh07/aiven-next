"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineChartPie } from "react-icons/hi2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Card from "../ui/components/Card";
import { servicesData as allServices } from "../data/services";

const Services = () => {
  const router = useRouter();

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animateKey, setAnimateKey] = useState(0);

  // FIX 1 → Safe client-only responsive card count
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleMoveRight = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % allServices.length);
    setAnimateKey((prev) => prev + 1);
  };

  const handleMoveLeft = () => {
    setDirection("left");
    setStartIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
    setAnimateKey((prev) => prev + 1);
  };

  // Build visible cards dynamically
  const visibleServices = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleServices.push(allServices[(startIndex + i) % allServices.length]);
  }

  return (
    <div className="text-[#7A6960] relative px-5 sm:px-10 lg:px-10 py-20">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-10 text-lg max-w-3xl mx-auto px-4">
        Services are everywhere… but direction and execution are rare.
      </p>

      {/* Main Section */}
      <div className="flex items-center justify-center gap-5">

        {/* Left Arrow */}
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition hidden lg:block"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div key={animateKey} className={`grid gap-5 w-full max-w-[1800px] grid-cols-1 sm:grid-cols-1 px-2 lg:grid-cols-3 slide-${direction}`} >
          {visibleServices.map((service) => (
            <div key={service.title} onClick={() => router.push(service.path)}>
              <Card img={<HiOutlineChartPie />} title={service.title} desc={service.desc} />
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
      <div className="flex justify-center gap-4 mt-6 lg:hidden">
        <button onClick={handleMoveLeft} className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700">
          <FaArrowLeft />
        </button>
        <button onClick={handleMoveRight} className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700">
          <FaArrowRight />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        .slide-right { animation: slideRight 0.4s ease forwards; }
        .slide-left { animation: slideLeft 0.4s ease forwards; }

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

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



// Images
import app1 from "../../public/assets/portfolio/app-1.jpg";
import app2 from "../../public/assets/portfolio/app-2.jpg";
import app3 from "../../public/assets/portfolio/app-3.jpg";
import product1 from "../../public/assets/portfolio/product-1.jpg";
import product3 from "../../public/assets/portfolio/product-3.jpg";
import branding1 from "../../public/assets/portfolio/branding-1.jpg";
import book1 from "../../public/assets/portfolio/books-1.jpg";
import book2 from "../../public/assets/portfolio/books-2.jpg";
import book3 from "../../public/assets/portfolio/books-3.jpg";

import PortfolioProduct from "../ui/components/PortfolioProduct";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const images = [
    app1,
    product1,
    branding1,
    book1,
    app2,
    book3,
    product3,
    book2,
    app3,
  ];

  return (
    <div className="text-[#7A6960] px-5 sm:px-10 lg:px-20 py-20">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center">Portfolio</h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-14 text-lg max-w-3xl mx-auto">
        “From concept to creation — we craft impactful videos, striking designs,
        and memorable events that bring your brand to life.”
      </p>

      {/* Responsive Portfolio Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        data-aos="fade-up"
      >
        {images.map((img, idx) => (
          <PortfolioProduct key={idx} image={img} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

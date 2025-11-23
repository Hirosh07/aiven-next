"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PortfolioProduct from "./PortfolioProduct";

// Using your alias imports (works with jsconfig / tsconfig)
import app1 from "@/img/portfolio/portfol.jpg";
import app2 from "@/img/portfolio/portfolio2.png";
import app3 from "@/img/portfolio/portfolio3.png";
import product1 from "@/img/portfolio/portfolio4.jpg";
import product3 from "@/img/portfolio/portfolio5.jpg";
import branding1 from "@/img/portfolio/portfolio6.jpg";
import book1 from "@/img/portfolio/portfolio7.jpg";
import book2 from "@/img/portfolio/portfolio9.png";
import book3 from "@/img/portfolio/portfolio8.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Portfolio</h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        “From concept to creation — we craft impactful videos, striking designs,
        and memorable events that bring your brand to life.”
      </p>

      {/* Portfolio Rows */}
      <div className="flex flex-col justify-center items-center lg:-gap-6 gap-3 p-5 mb-10">

        {/* Row 1 */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row lg:-gap-6 gap-3">
          <PortfolioProduct image={app1} />
          <PortfolioProduct image={product1} />
          <PortfolioProduct image={branding1} />
        </div>

        {/* Row 2 — hidden on small screens */}
        <div data-aos="fade-left" className="hidden md:flex lg:-gap-6 gap-3">
          <PortfolioProduct image={book1} />
          <PortfolioProduct image={app2} />
          <PortfolioProduct image={book3} />
        </div>

        {/* Row 3 — hidden on small screens */}
        <div data-aos="fade-up" className="hidden md:flex lg:-gap-6 gap-3">
          <PortfolioProduct image={product3} />
          <PortfolioProduct image={book2} />
          <PortfolioProduct image={app3} />
        </div>

      </div>
    </div>
  );
};

export default Portfolio;

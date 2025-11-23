"use client";

import React from "react";

const PortfolioProduct = ({ image }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img
        src={image?.src || image}
        alt="portfolio"
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );
};

export default PortfolioProduct;

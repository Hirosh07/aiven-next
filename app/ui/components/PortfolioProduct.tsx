"use client";

import React from "react";
import Image from "next/image";

const PortfolioProduct = ({ image } : any) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full h-64 sm:h-72 lg:h-80">
      
      {/* Portfolio Image */}
      <Image
        src={image}
        alt="Portfolio work"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        priority
      />

      {/* Dark Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );
};

export default PortfolioProduct;

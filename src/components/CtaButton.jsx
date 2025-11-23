"use client";

import React from "react";

const CtaButton = ({ name = "Quote Us" }) => {
  return (
    <button
      className="
        bg-orange-600 
        hover:bg-orange-500 
        hover:shadow 
        hover:shadow-orange-500 
        text-lg 
        text-white 
        rounded-3xl 
        px-4 
        py-2 
        w-fit 
        transition-all 
        duration-300
      "
    >
      {name}
    </button>
  );
};

export default CtaButton;

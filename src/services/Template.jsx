"use client";

import React from "react";
import CtaButton from "../components/CtaButton";
import Link from "next/link";

const Template = ({ title, desc, image }) => {
  return (
    <div className="secondary-font bg-red-900">
      <div className="md:py-14 lg:px-32 border-b border-orange-100">
        <div className="flex flex-col md:flex-row gap-10 justify-center bg-[#FEFAF8] items-center md:border md:shadow-xl rounded overflow-hidden md:p-16 p-10">
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
              {title}
            </h1>

            <p className="text-xl mt-10 text-gray-600 primary-font whitespace-pre-line">
              {desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10 mt-10">
              <Link href="/hireus">
                <CtaButton name="Hire Us" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Template;

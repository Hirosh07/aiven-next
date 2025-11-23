"use client";

import React, { useEffect } from "react";
import CtaButton from "./CtaButton";

import img from "@/img/about-img.svg"; 
import { MdWeb } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiMegaphone } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative lg:mx-32">
      
      {/* Section Heading */}
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        About Us
      </h1>

      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        
        {/* Image */}
        <div data-aos="fade-up" className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
          <img
            className="w-full"
            src={img?.src || img}
            alt="About Aiven Creatives"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] md:text-3xl font-semibold">
              Aiven Creatives
            </h1>

            <p className="text-lg mt-5 text-gray-600 primary-font leading-relaxed">
              Aiven Creatives is a trusted advertising agency in Chennai,
              offering complete branding and marketing solutions to elevate your 
              brand’s presence and deliver impactful results.
            </p>
          </div>

          {/* Services List */}
          <div className="mt-8 space-y-6">
            
            {/* Web & Creative */}
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row items-center gap-5"
            >
              <div className="bg-orange-600 p-4 md:p-5 rounded text-white flex items-center justify-center">
                <MdWeb size={28} className="md:text-4xl" />
              </div>

              <div className="w-full">
                <h2 className="text-[#7A6960] text-xl font-medium">
                  Web & Creative Services
                </h2>
                <p className="text-base text-gray-600 primary-font mt-2">
                  Website Development, Graphic & Logo Design, and Video Editing 
                  to craft a strong and memorable brand identity.
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row items-center gap-5"
            >
              <div className="bg-orange-600 p-4 md:p-5 rounded text-white flex items-center justify-center">
                <AiOutlineLineChart size={28} className="md:text-4xl" />
              </div>

              <div className="w-full">
                <h2 className="text-[#7A6960] text-xl font-medium">
                  Digital Marketing
                </h2>
                <p className="text-base text-gray-600 primary-font mt-2">
                  Social Media Marketing, SEO, PPC, Content & Email Marketing,
                  and Influencer Campaigns to grow your online presence.
                </p>
              </div>
            </div>

            {/* Outdoor Ads */}
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row items-center gap-5"
            >
              <div className="bg-orange-600 p-4 md:p-5 rounded text-white flex items-center justify-center">
                <GiMegaphone size={28} className="md:text-4xl" />
              </div>

              <div className="w-full">
                <h2 className="text-[#7A6960] text-xl font-medium">
                  Outdoor Advertising
                </h2>
                <p className="text-base text-gray-600 primary-font mt-2">
                  Hoardings, Billboards, Bus Shelters, Metro Branding, Mobile 
                  Vans, City Cabs & Autos, and Traffic Signal Ads across 
                  Chennai & Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-10 mt-12">
            <a href="#contact">
              <CtaButton name="Get Started" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

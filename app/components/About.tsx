"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import aboutImg from "../../public/assets/about/about.png";

import { MdWeb } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiMegaphone } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
import CtaButton from "../ui/components/CtaButton";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative lg:mx-32 px-5 sm:px-10 py-20">

      {/* Section Title */}
      <h1
        data-aos="fade-down"
        className="text-3xl sm:text-4xl font-semibold text-center text-[#7A6960]"
      >
        About Us
      </h1>

      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-14 gap-10 secondary-font">

        {/* Left Image */}
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full flex justify-center"
        >
          <Image
            src={aboutImg}
            alt="About Aiven Creatives"
            className="w-full max-w-[450px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 w-full">

          {/* About Title + Text */}
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] text-2xl sm:text-3xl font-semibold">
              Aiven Creatives
            </h1>

            <p className="text-base sm:text-lg mt-4 text-gray-600 primary-font leading-relaxed">
              Aiven Creatives is a trusted advertising agency in Chennai,
              offering complete branding and marketing solutions to elevate
              your brand’s presence and deliver impactful results.
            </p>
          </div>

          {/* Services List */}
          <div className="mt-8 space-y-6">

            {/* Web & Creative */}
            <div
              data-aos="zoom-in"
              className="flex items-start gap-5"
            >
              <div className="bg-orange-600 p-4 rounded text-white flex items-center justify-center">
                <MdWeb size={28} />
              </div>

              <div>
                <h2 className="text-[#7A6960] text-lg sm:text-xl font-medium">
                  Web & Creative Services
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mt-1">
                  Website Development, Graphic & Logo Design, and Video Editing
                  to craft a strong and memorable brand identity.
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div
              data-aos="zoom-in"
              className="flex items-start gap-5"
            >
              <div className="bg-orange-600 p-4 rounded text-white flex items-center justify-center">
                <AiOutlineLineChart size={28} />
              </div>

              <div>
                <h2 className="text-[#7A6960] text-lg sm:text-xl font-medium">
                  Digital Marketing
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mt-1">
                  Social Media Marketing, SEO, PPC, Content & Email Marketing,
                  and Influencer Campaigns to grow your online presence.
                </p>
              </div>
            </div>

            {/* Outdoor Ads */}
            <div
              data-aos="zoom-in"
              className="flex items-start gap-5"
            >
              <div className="bg-orange-600 p-4 rounded text-white flex items-center justify-center">
                <GiMegaphone size={28} />
              </div>

              <div>
                <h2 className="text-[#7A6960] text-lg sm:text-xl font-medium">
                  Outdoor Advertising
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mt-1">
                  Hoardings, Billboards, Bus Shelters, Metro Branding, Mobile
                  Vans, City Cabs & Autos, and Traffic Signal Ads across
                  Chennai & Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-start">
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

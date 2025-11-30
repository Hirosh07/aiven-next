"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

import logo from "../../public/assets/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="bg-white text-[#7A6960] px-6 py-12 md:px-12 lg:px-20">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div data-aos="fade-right">
          <Image
            src={logo}
            alt="Aiven Creatives Logo"
            className="rounded-lg"
            width={60}
            height={60}
            priority
          />

          <h1 className="text-xl font-light mt-4 mb-2">Aiven Creatives</h1>

          <p className="mb-1">Anna Nagar, Chennai</p>

          <p className="font-medium">
            Phone:
            <span className="font-normal ml-1">+91 1122334455</span>
          </p>

          <p className="font-medium">
            Email:
            <span className="font-normal ml-1">info@aivencreatives.com</span>
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-lg font-medium mb-3">Useful Links</h1>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="#about" className="hover:text-orange-600">About Us</Link></li>
            <li><Link href="#services" className="hover:text-orange-600">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-orange-600">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-orange-600">Blogs</Link></li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div data-aos="fade-right" data-aos-delay="400">
          <h1 className="text-lg font-medium mb-3">Our Services</h1>
          <ul className="space-y-2">
            <li><Link href="/app-development" className="hover:text-orange-600">App Development</Link></li>
            <li><Link href="/web-development" className="hover:text-orange-600">Web Development</Link></li>
            <li><Link href="/campagin-creation" className="hover:text-orange-600">Digital Marketing</Link></li>
            <li><Link href="/graphics-design" className="hover:text-orange-600">Graphics Designing</Link></li>
            <li><Link href="/trad-ads" className="hover:text-orange-600">Advertising</Link></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div data-aos="fade-right" data-aos-delay="600">
          <h1 className="text-lg font-medium mb-3">Follow Us</h1>
          <p className="text-sm mb-5">
            Stay connected with Aiven Creatives for updates and insights.
          </p>

          <div className="flex gap-4">
            {/* Whatsapp */}
            <a
              href="https://wa.me/911122334455"
              target="_blank"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition"
            >
              <IoLogoWhatsapp size={28} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition"
            >
              <IoLogoFacebook size={28} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition"
            >
              <IoLogoInstagram size={28} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition"
            >
              <IoLogoLinkedin size={28} />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} Aiven Creatives — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

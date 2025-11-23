"use client";

import React, { useEffect } from "react";
import Link from "next/link";  // ✅ Required for internal routing

import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

import logo from "../img/assets/logo_AC.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">

      {/* Brand */}
      <div data-aos="fade-right">
        <img src={logo.src} alt="Logo" className="h-12 w-12 object-contain" />
        <h1 className="text-xl font-light mb-3">Aiven-Creatives</h1>
        <p className="mb-1">Anna Nagar, Chennai</p>

        <div>
          <p className="font-medium">
            Phone: <span className="font-normal ml-1">+91 1122334455</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">info@aivencreatives.com</span>
          </p>
        </div>
      </div>

      {/* Useful Links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Useful Links</h1>
        <ul>
          <li className="mb-2 arrow">
            <Link href="/" className="text-zinc-700">Home</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="#about" className="text-zinc-700">About Us</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="#services" className="text-zinc-700">Service</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="#portfolio" className="text-zinc-700">Portfolio</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="/blog" className="text-zinc-700">Blogs</Link>
          </li>
        </ul>
      </div>

      {/* Services Links */}
      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Our Services</h1>
        <ul>
          <li className="mb-2 arrow">
            <Link href="/app-development" className="text-zinc-700">App Development</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="/web-development" className="text-zinc-700">Web Development</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="/campagin-creation" className="text-zinc-700">Digital Marketing</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="/graphics-design" className="text-zinc-700">Graphics Designing</Link>
          </li>
          <li className="mb-2 arrow">
            <Link href="/trad-ads" className="text-zinc-700">Advertising</Link>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
          Stay connected with Aiven Creatives. Follow us on social media for the latest updates.
        </p>

        <div className="flex justify-between pr-5 mt-5">
          <a
            href="https://wa.me/911122334455"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-400 p-1.5 rounded-full hover:border-orange-600 hover:text-orange-600"
          >
            <IoLogoWhatsapp size={30} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-400 p-1.5 rounded-full hover:border-orange-600 hover:text-orange-600"
          >
            <IoLogoFacebook size={30} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-400 p-1.5 rounded-full hover:border-orange-600 hover:text-orange-600"
          >
            <IoLogoInstagram size={30} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-400 p-1.5 rounded-full hover:border-orange-600 hover:text-orange-600"
          >
            <IoLogoLinkedin size={30} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;

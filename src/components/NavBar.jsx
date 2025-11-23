"use client";

import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CtaButton from "./CtaButton";
import logo from "@/img/assets/Log.png";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  const clickHandler = () => {
    setShow(!show);
  };

  // Smooth scroll to page sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false);
  };

  // Scroll hide/show navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 bg-transparent backdrop-blur-sm text-orange-500 secondary-font transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="lg:text-3xl text-2xl tracking-wide font-light flex items-center gap-2"
      >
        <img src={logo.src} alt="Logo" className="h-12 w-15 object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <Link href="/" className="nav-link">Home</Link>

        <button onClick={() => scrollToSection("about")} className="nav-link">
          About
        </button>

        <button onClick={() => scrollToSection("services")} className="nav-link">
          Services
        </button>

        <button onClick={() => scrollToSection("portfolio")} className="nav-link">
          Portfolio
        </button>

        <Link href="/blog" className="nav-link">Blog</Link>

        <button onClick={() => scrollToSection("contact")}>
          <CtaButton name={"Contact"} />
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {/* Mobile Dropdown */}
      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-black/60 text-white backdrop-blur-md transition-all duration-300">
          <Link href="/" className="nav-link" onClick={() => setShow(false)}>
            Home
          </Link>

          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>

          <button onClick={() => scrollToSection("services")} className="nav-link">
            Services
          </button>

          <button onClick={() => scrollToSection("portfolio")} className="nav-link">
            Portfolio
          </button>

          <Link href="/blog" className="nav-link" onClick={() => setShow(false)}>
            Blog
          </Link>

          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;

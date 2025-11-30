"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "../ui/components/CtaButton";
import logo from "../../public/assets/logo.png";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollYRef = useRef(0);

  const clickHandler = () => setShow(prev => !prev);

  // Smooth scroll
  const scrollToSection = (id : any) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  // Hide/show on scroll
  const handleScroll = () => {
    if (typeof window === "undefined") return;

    const currentScroll = window.scrollY;

    // Show when scrolling up or very top
    if (currentScroll < lastScrollYRef.current || currentScroll < 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    lastScrollYRef.current = currentScroll;
  };

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 
      backdrop-blur-md bg-black/20 
      text-white font-light 
      transition-transform duration-500
      ${visible ? "translate-y-0" : "-translate-y-full"}
      xl:h-24 lg:h-20 h-16 flex items-center justify-between
      lg:px-32 sm:px-20 px-10`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Logo"
          className="h-12 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-14">
        <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
        <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
        <button onClick={() => scrollToSection("services")} className="nav-link">Services</button>
        <button onClick={() => scrollToSection("portfolio")} className="nav-link">Portfolio</button>

        <Link href="/blog" className="nav-link">Blog</Link>

        <CtaButton name="Quote Us" onClickAction={() => scrollToSection("contact")} />
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <RxHamburgerMenu size="28px" onClick={clickHandler} />
      </div>

      {/* Mobile Dropdown */}
      {show && (
        <div className="
          absolute top-[70px] left-0 w-full 
          p-5 flex flex-col gap-4 text-center
          bg-black/70 backdrop-blur-xl
          shadow-xl lg:hidden text-white"
        >
          <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
          <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
          <button onClick={() => scrollToSection("services")} className="nav-link">Services</button>
          <button onClick={() => scrollToSection("portfolio")} className="nav-link">Portfolio</button>

          <Link href="/blog" className="nav-link" onClick={() => setShow(false)}>Blog</Link>

          <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>

          <CtaButton name="Get Started" onClickAction={() => scrollToSection("contact")} />
        </div>
      )}
    </div>
  );
};

export default NavBar;

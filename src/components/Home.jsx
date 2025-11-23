"use client";
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'

// Import multiple images for slideshow
import img1 from '../img/assets/Picture1.jpg'
import img2 from '../img/assets/hero2.jpg'
const Home = () => {
  const images = [img1, img2]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />

      {/* 🔹 Background Slideshow for Hero */}
      <section
        className="relative w-full h-screen overflow-hidden pt-16 lg:px-32"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/* Dark overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Hero content always above */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <section id="about" className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <About />
      </section>

      <section id="services" className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Services />
      </section>

      <section id="portfolio" className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Portfolio />
      </section>

      <section id="contact" className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Contact />
      </section>

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Newsletter />
      </section>

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  )
}

export default Home

"use client";

import React from "react";
import Template from "../../components/Template";
import appImage from "../../img/Cv.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const CvsPage = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="Corporate Video Shoot"
        desc={`A well-produced corporate video is a powerful way to showcase your brand’s identity, values, and offerings. We specialize in creating high-quality video content that captures your story with clarity and impact.

From company profiles to client testimonials and behind-the-scenes shoots, our team ensures every frame reflects professionalism.

These videos enhance brand credibility, boost audience engagement, and serve as strong marketing assets across platforms around major cities like Bangalore, Chennai, Coimbatore.

With the right visuals and sound, we help your business connect emotionally and leave a lasting impression.

Let us bring your brand story to life through compelling corporate films.`}
        image={appImage}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default CvsPage;

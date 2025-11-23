import React from "react";
import Template from "./Template";
import appImage from "../img/Ve.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const VeMg = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Video Editing/Motion Graphics"}
        desc={
          "We deliver high-quality video editing and motion graphics that captivate and convert.We transform raw footage into polished, engaging content that tells your brand story with impact.Our editors specialize in corporate videos, ads, testimonials, reels, and social media content.With custom motion graphics, animations, and smooth transitions, we add life to your visuals.Every frame is edited with precision to maintain rhythm, clarity, and emotional connection.We ensure your content stands out with professional color grading, sound mixing, and effects.Whether it’s for YouTube, Instagram, or campaigns — we make every second count.Partner with the best video editing team near Chennai & Bangalore to bring your ideas to life on screen."
        }
        image={appImage}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default VeMg;

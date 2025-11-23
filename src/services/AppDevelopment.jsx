import React from "react";
import Template from "./Template";
import appImage from "../img/Ad.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const AppDevelopment = () => {
  return (
    <div className="secondary-font">
      <NavBar />
      <Template
        title="App Development"
        desc="At Aiven Creatives, we craft custom mobile apps with a perfect blend of functionality, design, and performance.
        Our app development process is like a signature recipe — clean code, intuitive UI, and powerful backend, all seasoned with strategy.
        From concept to launch, we build both Android and iOS apps tailored to your business needs.
        We use frameworks like Flutter, React Native, or native code, depending on performance goals and scalability.
        Every app is optimized for speed, security, and seamless user experience across devices.
        As a trusted app development agency in Chennai & Bangalore, we focus on solving real problems through clean, smart design.
        We don’t just develop apps — we build tools that users love and businesses rely on.
        Let’s turn your idea into an app that delivers value, every tap of the way.
"
        image={appImage}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default AppDevelopment;

"use client";

import React from "react";
import Template from "../../components/Template";
import appImage from "../../img/Gd.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const GraphicsDesignPage = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="Graphics Design"
        desc={`At Aiven Creatives, we deliver stunning and strategic graphic design services that leave a lasting impression.

Our team creates powerful visuals — from logo design and brand identity to social media posts, brochures, and print ads.

We blend creativity with marketing insight to produce designs that are both beautiful and effective.

As a trusted design agency in Chennai and Bangalore, we focus on clarity, impact, and audience engagement.

Whether you need fresh branding or high-impact campaign graphics, we’ve got you covered.

We turn ideas into visuals that spark connection, emotion, and brand recognition.

Choose Aiven Creatives — where design meets strategy, and your vision becomes visual.`}
        image={appImage}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default GraphicsDesignPage;

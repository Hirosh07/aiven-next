"use client";

import React from "react";
import Template from "../../components/Template";
import image from "../../img/DM.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const DigitalMarketingPage = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="Digital Marketing"
        desc={`To build brand awareness, increase customer engagement, and boost online visibility through strategic social media marketing, search engine optimization (SEO), and creative content.

We craft compelling branding campaigns and analyze it through tools like Google Analytics that connect emotionally and deliver real conversions & organic rankings.

We optimize every touchpoint – from landing pages to sales funnels for measurable ROI with organic SEO.

Choose a top digital marketing agency near Chennai and Bangalore that focuses on real growth.`}
        image={image}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default DigitalMarketingPage;

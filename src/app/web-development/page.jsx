"use client";

import React from "react";
import Template from "../../components/Template";
import image from "../../img/Wd.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const WebDevelopmentPage = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="Web Development"
        desc={`In today’s digital world, a strong web presence is essential for business success. 
Professional web development ensures your website is fast, mobile-responsive, and optimized for user experience. 

At Aiven Creatives, we offer end-to-end services — from UI/UX design to hosting and deployment.

A well-built website helps increase brand credibility, improve online visibility, and attract organic traffic through better Google rankings. 
We create custom designs with SEO-friendly structure, fast-loading pages, and user-friendly layouts that convert visitors into customers across Tamil Nadu and India.

Whether you're starting fresh or revamping an existing website, a high-performing site is key to standing out in a competitive digital market.

We build:
• Custom Landing Pages  
• Business Websites  
• E-Commerce Websites  
• Progressive Web Apps  

As a top web development agency near Chennai & Bangalore, we build scalable and secure websites that grow with your business.

Our SEO services boost Google search rankings, increase organic traffic, and improve website visibility. 
We specialize in:
• On-Page SEO  
• Technical SEO  
• Keyword Research  
• High-quality Backlink Building  

We optimize page speed, enhance core web vitals, and create a strong SEO foundation — whether you need local SEO or national reach.`}
        image={image}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default WebDevelopmentPage;

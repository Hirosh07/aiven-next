"use client";

import React from "react";
import Template from "../../components/Template";
import appImage from "../../img/Td.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const TraditionalAdsPage = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="Traditional Ads"
        desc={`Traditional advertising methods such as TV ads and radio broadcasting remain one of the strongest and most trusted branding tools.

At Aiven Creatives, we have direct partnerships with major mainstream television networks including Sun Network, Vijay TV, Zee Network, and more — along with high-engagement OTT platforms like Amazon Prime Video, JioCinema, Hotstar, and Aha.

For radio advertising, we collaborate with Suryan FM, BIG FM, Hello FM, Red FM, and several other leading stations across Tamil Nadu and nearby states.

We also create compelling campaigns for newspaper ads, magazine layouts, and memorable radio jingles that resonate with diverse audiences.

These formats are ideal for:
• Brand credibility  
• Regional reach  
• Strengthening your message across trusted media platforms  

Our creative team blends impactful visuals with persuasive copywriting to deliver maximum brand recall — whether it’s a full-page print ad or a catchy 30-second jingle.

Let your brand voice be heard loud and clear through the power of traditional media. Aiven Creatives is your trusted and affordable advertising agency near Chennai & Bangalore.`}
        image={appImage}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default TraditionalAdsPage;

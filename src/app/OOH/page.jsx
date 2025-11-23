"use client";

import React from "react";
import Template from "../../components/Template";
import appImage from "../../img/ooh.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Ooh = () => {
  return (
    <div className="secondary-font">
      <NavBar />

      <Template
        title="O-O-H Advertisement"
        desc={`As a leading OOH agency in Chennai, we help brands achieve a wide range of visibility and reach through billboard advertising.

Our methods include mobile van shows, barricade ads, metro train ads, city parks LED boards, city cab wraps, traffic signal boards, and centre median ads across Chennai, Tamil Nadu & India.

We at Aiven provide budget-friendly hoardings, and as a leading OOH Branding agency near Chennai & Bangalore, we deliver bold billboard campaigns and eye-catching metro train advertisements.

We help brands make a strong impression in high-traffic areas through strategic outdoor marketing.

Our O-O-H agency ensures your message stands out and builds brand recall instantly.

OOH media offers round-the-clock exposure, making it ideal for local targeting and mass awareness.

We handle everything from design to execution, ensuring maximum impact and ROI.

With us, your brand won’t just be seen — it will be remembered.`}
        image={appImage}
      />

      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default Ooh;

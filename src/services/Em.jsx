import React from "react";
import Template from "./Template";
import appImage from "../img/Em.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Em = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Event Management"}
        desc={
          "At Aiven Creatives, we offer complete event management solutions in Chennai, from concept to flawless execution.Whether it’s a corporate event, product launch, seminar, or brand activation, we handle it all with precision.From venue selection and stage setup to lighting, branding, and AV support — we manage every detail.Our experienced team ensures smooth coordination, timely delivery, and zero last-minute surprises.We blend creativity with logistics to deliver impactful experiences that reflect your brand's professionalism.As one of the best event organizers near Chennai & bangalore, we focus on both aesthetics and execution.We also capture every moment with professional photo and video coverage if needed.Trust us to turn your vision into a memorable event that impresses and inspires."
        }
        image={appImage}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default Em;

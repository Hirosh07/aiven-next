import React from "react";
import Template from "./Template";
import appImage from "../img/ooh.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Ooh = () => {
  return (
    <div className="secondary-font">
      <NavBar />
      <Template
        title="O-O-H Advertisement"
        desc="As a leading OOH agency in Chennai, we help brands to achieve a wide range of visibility & reach through bill board advertising. 
        Our methods includes  mobile van show, barricade ads, metro train ads, city parks LED Boards, city cabs wraps and traffic signal boards, 
        centre median ads across Chennai, Tamil nadu & India. 
        We at aiven provide a budget friendly Hoardings and as a leading OOH Branding agency near Chennai & bangalore, 
        we provide bold billboard campaigns to eye-catching metro train advertisements, 
        we help brands make a strong impression in high-traffic areas by our outdoor marketing strategies. 
        Our O-O-H agency ensure your message stands out and builds brand recall instantly. 
        OOH media offers round-the-clock exposure, making it ideal for local targeting and mass awareness. 
        We handle everything from design to execution, ensuring maximum impact and ROI. With us, your brand won’t just be seen — it will be remembered."
        image={appImage}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default Ooh;

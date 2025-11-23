import React from "react";
import Template from "./Template";
import appImage from "../img/Td.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Td = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Traditional Ads"}
        desc={
          "Traditional methods of advertising like Tv ads and Radio broadcasting ads in main stream-platforms is one of the classic branding we offer aiven, we have a direct contact with the main stream platforms like television networks like sun networks, vijay television, zee network and more from high engaged ott platforms like prime video , jio hotstar aha etc.. For radio broadcasting we have partnered with Suryan FM, BiG FM, Hello Fm, Red Fm and More to spread your growth across tamil nadu and other states. For connecting diverse audiences across trusted media platforms. We create compelling campaigns for newspaper ads, magazine layouts, and memorable radio jingles that resonate with listeners and readers alike. These formats are perfect for brand credibility, regional reach, and targeting audiences beyond digital screens. Our creative team blends impactful visuals with persuasive copy to ensure maximum brand recall. Whether it's a full-page print ad or a catchy 30-second jingle, we deliver messages that stick. Let your brand voice be heard loud and clear through the power of traditional media we are the affordable advertising agency near Chennai and bangalore."
        }
        image={appImage}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default Td;

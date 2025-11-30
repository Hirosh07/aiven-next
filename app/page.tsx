import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Heo";
import About from "./components/About";
import Services from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar/>
      <Hero />
      <section id="about" className="overflow-hidden border-b border-orange-100">
        <About />
      </section>
      <section id="services" className="overflow-hidden border-b border-orange-100">
        <Services />
      </section>
      <section id="portfolio" className="overflow-hidden border-b border-orange-100">
        <Portfolio/>
      </section>
      <section id="contact" className="overflow-hidden border-b border-orange-100">
        <Contact/>
      </section>
      <section id="newsletter" className="overflow-hidden border-b border-orange-100">
        <Newsletter/>
      </section>
      <section id="footer" className="overflow-hidden border-b border-orange-100">
        <Footer/>
      </section>
    </div>
  );
}

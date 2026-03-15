"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { servicesData, Service } from "../data/services";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetailClientPage = () => {
  const { path } = useParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // In strict next.js Catch-all routing or direct folder routing, the path will likely match the folder name
    // However, since we define multiple paths like /app-development in the data, let's match the URL pathname.
    if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const found = servicesData.find((s: Service) => s.path === currentPath);
        setService(found || null);
    }
  }, [path]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8f3]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#fcf8f3] min-h-screen text-[#222]">
      <div className="bg-[#222]">
        <NavBar />
      </div>
      
      {/* Hero Header */}
      <div className="w-full h-[60vh] relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-black/80 to-transparent z-10"></div>
        <img src={service.image} alt={service.title} className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-80" />
        
        <div className="relative z-20 container mx-auto px-5 lg:px-20 h-full flex flex-col justify-center items-start">
             <Link href="/#services" className="group flex items-center text-white/90 hover:text-white mb-6 text-sm bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-md transition-all border border-white/20">
               <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
             </Link>
             
             <div className="inline-block px-3 py-1 mb-4 rounded text-xs font-bold uppercase tracking-widest text-orange-600 bg-white/90" data-aos="fade-down">
                Our Expertise
             </div>
             
             <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight drop-shadow-2xl mb-6" data-aos="fade-up">
                {service.title}
             </h1>
             
             <p className="text-xl text-gray-200 max-w-2xl font-light border-l-4 border-orange-500 pl-4" data-aos="fade-up" data-aos-delay="100">
                {service.desc}
             </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 lg:px-20 py-24 mb-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7" data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    {service.longDesc}
                </p>
                
                <h2 className="text-3xl font-bold mb-8 text-gray-800">What We Deliver</h2>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                    {service.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-start">
                            <div className="mt-1 bg-orange-100 p-1.5 rounded-full text-orange-600 mr-3 shadow-sm border border-orange-200">
                                <FaCheck size={12} />
                            </div>
                            <p className="text-gray-700 font-medium">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="lg:col-span-5 relative" data-aos="fade-left">
                <div className="sticky top-32 bg-white rounded-3xl shadow-xl p-10 border border-gray-100 text-center">
                    <div className="w-20 h-20 bg-orange-50 rounded-2xl mx-auto mb-6 flex items-center justify-center -rotate-6 shadow-sm border border-orange-100">
                        <span className="text-4xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to elevate your {service.title.toLowerCase()}?</h3>
                    <p className="text-gray-500 mb-8">Let's discuss how we can tailor our services to meet your specific business goals.</p>
                    
                    <Link href="/#contact" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all transform hover:-translate-y-1">
                        Request a Consultation
                    </Link>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetailClientPage;

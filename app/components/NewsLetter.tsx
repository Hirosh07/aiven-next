"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("You subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <div data-aos="fade-down" className="text-[#7A6960] mt-20 px-5 py-10">
      <h1 className="text-3xl font-semibold text-center">
        Join Our Newsletter
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-10 p-3 md:p-0">
        Subscribe to our newsletter and receive the latest news about our
        products and services!
      </p>

      {/* Newsletter Input Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            md:w-1/2 w-11/12 
            px-6 py-3 
            rounded-3xl 
            outline-none 
            border border-zinc-300 
            focus:border-orange-600 
            transition
          "
        />

        <button
          onClick={handleSubscribe}
          className="
            px-6 py-[10px]
            bg-orange-600 
            hover:bg-orange-500 
            rounded-3xl 
            text-white 
            text-lg 
            hover:shadow 
            hover:shadow-orange-500 
            transition-all duration-300
          "
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

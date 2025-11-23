"use client";

import React, { useEffect } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";

import AOS from "aos";
import "aos/dist/aos.css";

import emailjs from "@emailjs/browser";  // ✅ FIXED
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent Successfully");
      reset();
    } catch (err) {
      toast.error("Failed to send message!");
      console.error(err);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Reach out for a new project or just say hello
      </p>

      <div className="lg:flex gap-6">
        {/* Left Side */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
        >
          <div className="flex gap-3 mt-3 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-3xl">
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Address
              </h2>
              <p className="text-sm text-slate-800">
                Anna Nagar West Extension, Chennai
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-3xl">
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Call Us
              </h2>
              <p className="text-sm text-slate-800">+91 1122334455</p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-3xl">
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-slate-800">
                info@aivencreatives.com
              </p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side Form */}
        <div
          data-aos="fade-up"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <label>Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full h-10 px-3 my-3 border rounded"
                  placeholder="John Doe"
                />
              </div>

              <div className="md:w-[50%]">
                <label>Your Email</label>
                <input
                  {...register("email", { required: true })}
                  className="w-full h-10 px-3 my-3 border rounded"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>

            <div>
              <label>Subject</label>
              <input
                {...register("subject", { required: true })}
                className="w-full h-10 px-3 my-3 border rounded"
                placeholder="Your subject"
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full h-60 p-3 my-3 border rounded"
                placeholder="Enter your message"
              />
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

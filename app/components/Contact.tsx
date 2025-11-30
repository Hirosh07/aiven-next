"use client";

import React, { useEffect, useState } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


import AOS from "aos";
import "aos/dist/aos.css";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import CtaButton from "../ui/components/CtaButton";

const Contact = () => {
    // -------------------------
    // FORM STATES
    // -------------------------
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handle input change
    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Submit handler
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // try {
        //   await emailjs.send(
        //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        //     form,
        //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        //   );

        //   toast.success("Message sent successfully!");

        //   // Reset form
        //   setForm({
        //     name: "",
        //     email: "",
        //     subject: "",
        //     message: "",
        //   });

        // } catch (error) {
        //   toast.error("Failed to send message!");
        //   console.error(error);
        // }
    };

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="text-[#7A6960] px-5 sm:px-10 lg:px-20 py-20">
            {/* Title */}
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
                {/* LEFT SIDE */}
                <div
                    data-aos="fade-up"
                    className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-10 lg:mb-0"
                >
                    {/* Address */}
                    <div className="flex gap-3 mt-3 mb-12">
                        <div className="rounded-full bg-orange-100 p-2 text-orange-600 text-3xl justify-center items-center flex">
                            <IoLocationOutline size={25}/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Address</h2>
                            <p className="text-sm text-slate-800">Anna Nagar West, Chennai</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3 mb-12">
                        <div className="rounded-full bg-orange-100 p-2 text-orange-600 text-3xl justify-center items-center flex">
                            <IoCallOutline size={25}/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Call Us</h2>
                            <p className="text-sm text-slate-800">+91 1122334455</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3 mb-12 cursor-pointer">
                        <div className="rounded-full bg-orange-100 p-2 text-orange-600 text-3xl justify-center items-center flex">
                            <TfiEmail size={25}/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Email Us</h2>
                            <p className="text-sm text-slate-800">info@aivencreatives.com</p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-64 rounded overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.52490843176!2d80.19956737584232!3d13.08268081337162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d7e5890bf5%3A0xb2c0d3a52db4b0c2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1733134748857!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div
                    data-aos="fade-up"
                    className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600"
                >
                    <form onSubmit={handleSubmit}>
                        {/* Name + Email */}
                        <div className="md:flex gap-6">
                            <div className="md:w-[50%]">
                                <label>Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full h-10 px-3 my-3 border-[0.1px] border-[#A0A0A030] rounded"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="md:w-[50%]">
                                <label>Your Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full h-10 px-3 my-3 border-[0.1px] border-[#A0A0A030] rounded"
                                    placeholder="johndoe@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label>Subject</label>
                            <input
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full h-10 px-3 my-3 border-[0.1px] border-[#A0A0A030] rounded"
                                placeholder="Your subject"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full h-60 p-3 my-3 border-[0.1px] border-[#A0A0A030] rounded"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-center mt-6">
                            <CtaButton name="Send Message" onClickAction={() => { }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

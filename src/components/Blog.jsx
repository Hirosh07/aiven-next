"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import img from "@/img/assets/blog1.jpg";
import img2 from "@/img/assets/blog2.jpg";
import img3 from "@/img/assets/blog3.jpg";

const Blog = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const posts = [
    {
      id: 1,
      slug: "high-converting-landing-page",
      title: "Key Elements of a High-Converting Landing Page",
      date: "September 20, 2025",
      image: img,
      summary:
        "A good landing page isn’t just about design — it’s about purpose. Here are 7 must-have elements.",
      link: "/blog/high-converting-landing-page",
    },
    {
      id: 2,
      slug: "digital-technology-growth-2025",
      title: "How to Grow Your Business Using Modern Digital Technology in 2025",
      date: "September 25, 2025",
      image: img2,
      summary:
        "Discover how brands in Chennai and Bangalore use modern tools to scale profitably.",
      link: "/blog/digital-technology-growth-2025",
    },
    {
      id: 3,
      slug: "building-trust-transparency-2025",
      title: "Building Trust in Business: Why Transparency Wins in 2025",
      date: "September 30, 2025",
      image: img3,
      summary:
        "Trust is the new currency of business. Learn why transparency wins in 2025.",
      link: "/blog/building-trust-transparency-2025",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#FEFAF8] py-16 lg:px-32 px-6">
      {/* 🔹 Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
      >
        ← Back to Home
      </button>

      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center text-[#7A6960]">
        Our Blog
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            data-aos="zoom-in"
            className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={post.image.src ? post.image.src : post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-semibold text-[#7A6960] mb-2">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm">{post.date}</p>

            <p className="text-base text-gray-600 mt-3">{post.summary}</p>

            <Link
              href={post.link}
              className="text-orange-600 font-medium hover:underline block mt-4"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

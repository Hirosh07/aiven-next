"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { blogs } from "../data/blogs";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#fcf8f3] min-h-screen text-[#222]">
      <div className="bg-[#222]">
        <NavBar />
      </div>
      
      <div className="pt-32 pb-20 px-5 sm:px-10 lg:px-32 max-w-[1800px] mx-auto min-h-[85vh]">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7A6960]">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with the latest trends, insights, and stories from our team of experts.</p>
          <div className="flex justify-center items-center mt-6">
            <div className="bg-orange-600 h-1 w-20 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    Articles
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors leading-tight">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                  
                  <div className="mt-auto flex items-center text-orange-600 font-semibold text-sm transition-all group-hover:translate-x-2">
                    Read Article 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

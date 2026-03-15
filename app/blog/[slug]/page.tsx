"use client";

import React, { useEffect, useState } from "react";
import { blogs, BlogPost } from "../../data/blogs";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Find the blog
    if (slug) {
      const found = blogs.find(b => b.slug === slug);
      setBlog(found || null);
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8f3]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">404 - Post not found</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center">We couldn't find the article you were looking for. It may have been moved or doesn't exist.</p>
        <Link href="/blog" className="text-white bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 shadow-lg hover:shadow-orange-600/30 transition-all font-medium">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fcf8f3] min-h-screen text-[#222]">
      <div className="bg-[#222]">
        <NavBar />
      </div>
      
      {/* Hero Header */}
      <div className="w-full h-[55vh] relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity"></div>
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover absolute inset-0 transform hover:scale-105 transition-transform duration-[10s]" />
        
        <div className="relative z-20 container mx-auto px-5 lg:px-20 h-full flex flex-col justify-end pb-16 items-start">
             <Link href="/blog" className="group flex items-center text-white/90 hover:text-white mb-8 text-sm bg-black/30 hover:bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-md transition-all">
               <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to all articles
             </Link>
             <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-5xl leading-tight tracking-tight drop-shadow-xl" data-aos="fade-up">
                {blog.title}
             </h1>
             <div className="flex items-center space-x-4 mt-8 text-white/90 text-sm md:text-base font-medium uppercase tracking-wide" data-aos="fade-up" data-aos-delay="100">
               <span className="bg-orange-600 px-3 py-1 rounded shadow-md">Insight</span>
               <span>{blog.date}</span>
               <span>•</span>
               <span className="font-semibold">{blog.author}</span>
             </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 lg:px-20 py-20 bg-white shadow-2xl rounded-t-[3rem] -mt-10 relative z-30 mb-20 max-w-5xl">
        <div className="prose prose-lg md:prose-xl mx-auto prose-orange text-gray-700 space-y-8" data-aos="fade-up">
           
           <p className="text-xl md:text-3xl text-gray-500 font-light leading-relaxed mb-12 italic border-l-8 border-orange-500 pl-8 bg-gray-50/50 py-4 rounded-r-2xl">
             "{blog.excerpt}"
           </p>
           
           {/* Rendering Content Paragraphs */}
           <div className="flex flex-col gap-6 text-[1.1rem] md:text-[1.2rem]">
            {blog.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="leading-relaxed whitespace-pre-line text-gray-800">
                {paragraph}
              </p>
            ))}
           </div>
        </div>

        <div className="mt-24 pt-10 border-t-2 border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/30 p-8 rounded-3xl" data-aos="fade-up">
          <div className="flex items-center mb-6 sm:mb-0">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg font-bold text-2xl mr-5">
                 {blog.author.charAt(0)}
             </div>
             <div>
               <p className="text-sm text-orange-600 font-bold uppercase tracking-widest mb-1">Author</p>
               <p className="font-bold text-gray-800 text-2xl">{blog.author}</p>
             </div>
          </div>
          <Link href="/blog" className="text-orange-600 hover:text-white hover:bg-orange-600 border-2 border-orange-600 px-8 py-3 rounded-full font-bold transition-all w-full sm:w-auto text-center shadow-lg hover:shadow-orange-600/40">
            Read Next Article
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;

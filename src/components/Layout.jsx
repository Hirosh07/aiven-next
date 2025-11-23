"use client";

import "./globals.css";
import "aos/dist/aos.css";                  // ✅ Required
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aiven Creatives",
  description: "Branding, Web & Advertising Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

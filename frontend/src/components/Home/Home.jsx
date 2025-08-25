import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Chatbot from "../Chatbot/Chatbot";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        {/* Left Content */}
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Empowering Lives, <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              One Beneficiary at a Time
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Welcome to our Beneficiary Management Portal — designed for NGOs to
            efficiently manage, support, and uplift communities with care,
            transparency, and impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/register"
              className="px-6 py-3 rounded-2xl bg-white text-red-600 font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Register Beneficiary
            </Link>
            <a
              href="#learnmore"
              className="px-6 py-3 rounded-2xl border border-white font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg"
            alt="Illustration of NGO community support"
            className="rounded-2xl shadow-2xl w-[90%] lg:w-[80%] border-4 border-white"
          />
        </motion.div>
      </div>

      {/* ✅ Chatbot Component */}
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* ✅ Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition flex items-center justify-center"
          aria-label="Open Chatbot"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </section>
  );
}

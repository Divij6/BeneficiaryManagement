import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative bg-blue-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Empowering Lives, <br />
            <span className="text-yellow-300">One Beneficiary at a Time</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Welcome to our Beneficiary Management Portal — designed for NGOs to
            efficiently manage, support, and uplift communities with care,
            transparency, and impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#register"
              className="px-6 py-3 rounded-2xl bg-yellow-400 text-gray-900 font-semibold shadow-lg hover:bg-yellow-300 transition"
            >
              Register Beneficiary
            </a>
            <a
              href="#learnmore"
              className="px-6 py-3 rounded-2xl border border-white font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg"
            alt="Beneficiary support"
            className="rounded-2xl shadow-2xl w-[90%] lg:w-[80%] border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}

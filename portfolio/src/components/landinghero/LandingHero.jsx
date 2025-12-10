import React from "react";
import { motion } from "framer-motion";
import MyPhoto from "../../assets/images/chamanoimg.jpeg";

export default function LandingHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-24">
      
      {/* Top Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm tracking-wide text-gray-600 dark:text-gray-300 mb-4"
      >
        Empowering Brands • Elevating Experience • Engineering Excellence
      </motion.p>

      {/* HEADLINE */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          text-center text-4xl md:text-5xl lg:text-5xl 
          font-extrabold leading-tight max-w-4xl mx-auto
          bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600
          bg-clip-text text-transparent
        "
      >
        I Build Digital Experiences That  
        <span className="block">Convert, Scale & Inspire.</span>
      </motion.h1>

      
      {/* TWO COLUMN SECTION */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:pr-10"
        >
        <p className="text-gray-700 dark:text-gray-300 text-[16px] leading-relaxed mb-4">
          I'm Chamano — a full-stack developer blending modern software, beautiful design,  
          and data-driven insights to build products that feel good and work even better.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-[16px] leading-relaxed">
            My focus is simple: clean, great UX, real impact.  
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="
                px-5 py-3 rounded-xl shadow-lg text-white 
                bg-gradient-to-r from-indigo-600 to-purple-600
                font-semibold text-sm tracking-wide
                hover:shadow-xl transition
              "
            >
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/projects"
              className="
                px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                text-gray-800 dark:text-gray-200 
                font-semibold text-sm 
                hover:bg-gray-100 dark:hover:bg-gray-700 transition
              "
            >
              View Projects
            </motion.a>
          </div>

          {/* Buy Me a Coffee */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              mt-5 inline-flex items-center gap-2 
              px-12 py-2 rounded-xl cursor-pointer
              bg-yellow-300 text-gray-900
              font-medium shadow hover:bg-yellow-400
              transition
            "
          >
            ☕ Buy Me a Coffee
          </motion.div>
        </motion.div>

        {/* RIGHT — PHOTO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
              bg-white/70 dark:bg-gray-800/40 
              backdrop-blur-xl p-4 rounded-3xl 
              border border-gray-200 dark:border-gray-700 
              shadow-xl w-full max-w-xs
            "
          >
            <img
              src={MyPhoto}
              alt="Chamano Dev"
              className="
                w-full h-72 object-cover object-top 
                rounded-2xl shadow-md
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

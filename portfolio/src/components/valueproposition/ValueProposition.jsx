import React from "react";
import { motion } from "framer-motion";

// ==== Icon Wrapper ====
const IconWrap = ({ children }) => (
  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg shadow-gray-400/20">
    {children}
  </div>
);

// ==== Icons ====
const IconDesign = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 4.354a4 4 0 014 0l4 2.309a4 4 0 010 7.078l-4 2.308a4 4 0 01-4 0l-4-2.308a4 4 0 010-7.078l4-2.309z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12v7" />
    </svg>
  </IconWrap>
);

const IconFast = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </IconWrap>
);

const IconRange = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M3 7v4h18V7H3zm0 6v4h12v-4H3z" />
    </svg>
  </IconWrap>
);

export default function ValueProposition() {
  return (
    <section id="value" className="mt-24 max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Why Choose Me
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          What Sets My Work Apart
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          I combine beautiful UI design, engineering precision, and execution
          discipline — giving you production-ready systems with real business value.
        </p>
      </motion.div>

      {/* Value Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="p-7 border rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            {IconDesign}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Clean, Modern Design
            </h3>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Interfaces that look professional, feel intuitive, and create trust.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="p-7 border rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            {IconFast}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Fast & Reliable Delivery
            </h3>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Expect clear communication, on-time delivery, and zero excuses.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-7 border rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            {IconRange}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Wide Technical Range
            </h3>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Frontend, backend, automation, analytics — I cover all layers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import ServiceCard from "../servicecard/ServiceCard";
import { motion } from "framer-motion";

// ==== Icons ====
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg shadow-gray-400/20">
    {children}
  </div>
);

const IconFullstack = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M12 4v16m8-8H4" />
    </svg>
  </IconWrap>
);

const IconBI = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M3 3v18h18M3 15h18" />
    </svg>
  </IconWrap>
);

const IconAutomation = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 8v8m4-4H8" />
    </svg>
  </IconWrap>
);

const IconTraining = (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z" />
    </svg>
  </IconWrap>
);

// ===== Component =====

export default function Service() {
  return (
    <section id="services" className="mt-24 md:mt-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-wide text-gray-500">
          What I Do
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Services I Offer
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
           I focus on delivering high-impact projects — from polished web apps to data solutions and automation that help teams make smarter decisions.
        </p>
      </motion.div>

      {/* Service Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={IconFullstack}
            title="Full-Stack Web Development"
            subtitle="React, Next.js, Node.js — production-ready apps with elegant UIs and clean, robust APIs."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={IconBI}
            title="Business Intelligence & Analytics"
            subtitle="Power BI dashboards, ETL pipelines, data visualization, and insights for decision-makers."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={IconAutomation}
            title="Automation & AI Integration"
            subtitle="Automate workflows, integrate AI agents, and build intelligent, scalable systems."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={IconTraining}
            title="Training, Mentorship & Guidance"
            subtitle="Coding lessons, BI tutoring, architecture reviews, and technical mentorship."
          />
        </motion.div>
      </div>
    </section>
  );
}

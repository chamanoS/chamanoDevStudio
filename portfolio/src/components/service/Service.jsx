
import React from "react";
import ServiceCard from "../servicecard/ServiceCard";

// Icons (use these or replace with Heroicons/any SVG you like)
const IconFullstack = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
  </svg>
);

const IconBI = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M3 15h18" />
  </svg>
);

const IconAutomation = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m4-4H8" />
  </svg>
);

const IconTraining = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z" />
  </svg>
);

export default function Service() {
  return (

<section id="services" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Services I Offer</h2>
        <p className="mt-2 text-gray-600 max-w-2xl text-center mx-auto">
          I focus on delivering high-impact projects — from polished web apps to data solutions and automation that help teams make smarter decisions.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={IconFullstack}
            title="Full-Stack Web Development"
            subtitle="React, Next.js, Node.js — production-ready web apps, responsive UIs, and clean backend APIs."
          />
          <ServiceCard
            icon={IconBI}
            title="Business Intelligence & Analytics"
            subtitle="Power BI dashboards, ETL pipelines, data visualization, and actionable insights for stakeholders."
          />
          <ServiceCard
            icon={IconAutomation}
            title="Automation & AI Integration"
            subtitle="Automate workflows, integrate AI tools, and build efficient, data-driven pipelines."
          />
          <ServiceCard
            icon={IconTraining}
            title="Training, Mentorship & Guidance"
            subtitle="Coding lessons, BI tutoring, code reviews, architecture advice, and interview preparation."
          />
        </div>
</section>
  )

}
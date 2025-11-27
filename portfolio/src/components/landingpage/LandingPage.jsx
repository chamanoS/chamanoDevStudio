import React from "react";
import LandingHero from "../landinghero/LandingHero";
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

export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <LandingHero />

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



      {/* Featured projects */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900">Featured Projects</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border p-5 hover:shadow-lg transition bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Interactive Dashboard</h4>
                <p className="text-sm text-gray-600 mt-1">A responsive BI dashboard with custom filters and CSV export.</p>
              </div>
              <span className="text-sm text-gray-400">React • Power BI</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">Short summary, impact, and link to case study or GitHub.</div>
          </article>

          <article className="rounded-2xl border p-5 hover:shadow-lg transition bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">E-commerce Frontend</h4>
                <p className="text-sm text-gray-600 mt-1">Fast, accessible shopping experience built with React + Vite.</p>
              </div>
              <span className="text-sm text-gray-400">React • Vite</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">Short summary, performance metrics and link to demo.</div>
          </article>
        </div>
      </section>

      {/* CTA / Testimonials */}
      <section className="mt-12 mb-12 grid md:grid-cols-2 gap-6 items-center">
        <div className="rounded-2xl p-8 bg-gradient-to-tr from-indigo-900 to-indigo-700 text-white shadow-lg">
          <h4 className="text-2xl font-bold">Ready to collaborate?</h4>
          <p className="mt-3 text-sm opacity-90">I take on freelance projects and long-term roles. Let’s talk about how I can help your team ship features faster and make data useful.</p>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-5 py-3 rounded-lg font-medium">Contact me</a>
          </div>
        </div>

        <div className="rounded-2xl border p-6 bg-white">
          <h5 className="text-lg font-semibold">What clients say</h5>
          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <blockquote className="italic">"Delivered excellent work — clear communication and a clean dashboard that our team uses daily."</blockquote>
            <div className="text-xs text-gray-500">— Product Manager, Acme Co.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
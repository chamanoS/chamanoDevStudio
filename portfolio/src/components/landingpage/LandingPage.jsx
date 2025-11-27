import React from "react";
import LandingHero from "../landinghero/LandingHero";
import ServiceCard from "../servicecard/ServiceCard";

const IconCode = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const IconChart = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 11V3m0 8l-4-4m4 4 4-4M21 21v-6M3 21v-4" />
  </svg>
);

const IconTeach = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z" />
  </svg>
);

const IconConsult = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3M3 11h18M5 21a4 4 0 004-4v-3a2 2 0 012-2h2a2 2 0 012 2v3a4 4 0 004 4" />
  </svg>
);

const IconAuto = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m4-4H8" />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <LandingHero />

      {/* Services */}
      <section id="services" className="mt-6">
        <h2 className="text-2xl font-bold text-gray-900">Services I offer</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          I focus on delivering high-impact projects — from polished frontend apps to data & BI solutions that help teams make smarter decisions.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={IconCode}
            title="Frontend & Fullstack Development"
            subtitle="React, Next.js, Node, REST/GraphQL — production-ready UIs, performant apps, and clean backend APIs."
          />
          <ServiceCard
            icon={IconChart}
            title="Business Intelligence & Analytics"
            subtitle="Dashboards, ETL pipelines, Power BI reports, data visualization, and metrics design for stakeholders."
          />
          <ServiceCard
            icon={IconAuto}
            title="Automation & AI Integration"
            subtitle="Automate workflows, integrate AI/ML APIs, build data pipelines and increase operational efficiency."
          />
          <ServiceCard
            icon={IconTeach}
            title="Tutoring & Mentoring"
            subtitle="Personalized lessons in JavaScript, React, data visualization, and interview prep — remote or recorded sessions."
          />
          <ServiceCard
            icon={IconConsult}
            title="Technical Consulting"
            subtitle="Architecture reviews, technical roadmaps, code audits, and advice to help shape product & engineering decisions."
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
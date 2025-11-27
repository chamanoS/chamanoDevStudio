import React from "react";
import LandingHero from "../landinghero/LandingHero";
import Service from "../service/Service";
import ValueProposition from "../valueproposition/ValueProposition";
import AboutMePreview from "../aboutmepreview/AboutMePreview";



export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <LandingHero />

      {/* Services */}
      <Service/>

    {/* value proposition */}
      <ValueProposition />
      
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
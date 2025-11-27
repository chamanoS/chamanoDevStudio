import React from "react";

export default function Testimonials() {
    return(
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
    )}
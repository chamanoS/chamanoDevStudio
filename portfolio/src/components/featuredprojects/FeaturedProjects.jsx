import React from "react";

export default function FeaturedProjects() {
  return (

 <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Featured Projects</h2>
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

          <article className="rounded-2xl border p-5 hover:shadow-lg transition bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Automation script - API</h4>
                <p className="text-sm text-gray-600 mt-1">Fast, accessible shopping experience built with React + Vite.</p>
              </div>
              <span className="text-sm text-gray-400">REST</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">Short summary, performance metrics and link to demo.</div>
          </article>

          <article className="rounded-2xl border p-5 hover:shadow-lg transition bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Portfolio Deep App</h4>
                <p className="text-sm text-gray-600 mt-1">Fast, accessible shopping experience built with React + Vite.</p>
              </div>
              <span className="text-sm text-gray-400">React • Vite</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">Short summary, performance metrics and link to demo.</div>
          </article>
        </div>
      </section>

  )}
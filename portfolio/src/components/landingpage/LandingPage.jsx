import React from "react";

export default function LandingPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Hi, I’m Chamano Ramashia.
      </h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        I write about modern JavaScript, React, and web development.  
        My goal is to make complex concepts simple and accessible.
      </p>
      <a
        href="#"
        className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        View Articles →
      </a>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="font-semibold text-xl mb-2 text-gray-900">Latest Post</h2>
          <p className="text-gray-600">
            “How to Build a React App with Vite” — a step-by-step guide on modern React development.
          </p>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="font-semibold text-xl mb-2 text-gray-900">Featured Project</h2>
          <p className="text-gray-600">
            Portfolio template built with React and Tailwind — open source on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}

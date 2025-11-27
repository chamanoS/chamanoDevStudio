import React from "react";

const IconDesign = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 014 0l4 2.309a4 4 0 010 7.078l-4 2.308a4 4 0 01-4 0l-4-2.308a4 4 0 010-7.078l4-2.309z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v7" />
  </svg>
);

const IconFast = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconRange = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4h18V7H3zm0 6v4h12v-4H3z" />
  </svg>
);

export default function ValueProposition() {
  return (
    <section id="value" className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Why Work With Me</h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        I focus on delivering high-quality projects with professional design, fast delivery, and a wide technical range.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-lg transition">
          {IconDesign}
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Clean, Modern Design</h3>
          <p className="mt-2 text-gray-600 text-sm">
            I build interfaces that feel professional, intuitive, and polished.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-lg transition">
          {IconFast}
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Fast & Reliable Delivery</h3>
          <p className="mt-2 text-gray-600 text-sm">
            I communicate clearly and deliver on time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-lg transition">
          {IconRange}
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Technical Range</h3>
          <p className="mt-2 text-gray-600 text-sm">
            From frontend to backend to data — I bring a full stack of skills.
          </p>
        </div>
      </div>
    </section>
  );
}

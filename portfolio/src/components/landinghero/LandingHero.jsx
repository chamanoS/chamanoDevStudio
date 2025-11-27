import React from "react";

export default function LandingHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14 md:py-[90px]">
      {/* Top centered tagline */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          Empowering businesses with clean, modern & scalable digital solutions.
        </p>
      </div>

      {/* Headline */}
      <h4 className="text-center text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
        I build beautiful, reliable web apps and turn data into decisions.
      </h4>

      {/* Two-column middle: left text, right illustration */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column: subtext (aligned left inside the centred block) */}
        <div className="md:pr-6 lg:pr-12">
          <p className="text-left text-gray-600 text-lg md:text-[15px] leading-relaxed max-w-xl">
          I'm Chamano, a Full-Stack Developer who builds fast, modern, and user-focused web applications, dashboards and automated systems.
          </p>
        <p className="text-left text-gray-600 text-lg md:text-[15px] leading-relaxed max-w-xl">
           I blend software engineering with data analytics to deliver solutions that are clean, scalable, and reliable—ready for production and built for maintainability.
        </p>

         

          {/* CTAs at the bottom (still within left column on large screens) */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium shadow hover:opacity-95 transition"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-1 rounded-lg border border-gray-200 text-gray-800 text-sm hover:bg-gray-50 transition"
            >
              View Projects
            </a>
          </div>
          <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
             <p className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 mb-4 font-medium">
              Available for hire • Remote-friendly
            </p>
          </div>
        </div>

        {/* Right column: Minimal line illustration (SVG) */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            {/* Illustration container */}
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              {/* Minimal line SVG */}
              <div className="w-full h-56 flex items-center justify-center">
                <svg
                  viewBox="0 0 420 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#111827" stopOpacity="0.06" />
                      <stop offset="1" stopColor="#111827" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* thin grid */}
                  <rect x="8" y="8" width="404" height="224" rx="12" stroke="url(#g1)" strokeWidth="1" fill="transparent"/>

                  {/* small "code" rounded rect */}
                  <rect x="36" y="40" width="160" height="36" rx="6" stroke="#111827" strokeWidth="1" fill="none" />
                  <path d="M52 58h6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M66 58h28" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />

                  {/* bracket symbol */}
                  <g transform="translate(210, 48)" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 0 L-14 20 L0 40" fill="none" />
                    <path d="M36 0 L22 20 L36 40" fill="none" />
                  </g>

                  {/* small chart */}
                  <g transform="translate(40, 96)">
                    <rect x="0" y="0" width="140" height="78" rx="8" stroke="#111827" strokeWidth="1" fill="none" />
                    <path d="M14 62 L34 40 L54 52 L74 28 L94 48" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="14" cy="62" r="2.8" fill="#111827" />
                    <circle cx="74" cy="28" r="2.8" fill="#111827" />
                  </g>

                  {/* stacked cards */}
                  <g transform="translate(210, 104)">
                    <rect x="0" y="0" width="120" height="60" rx="8" stroke="#111827" strokeWidth="1" fill="none" />
                    <rect x="-8" y="-10" width="120" height="60" rx="8" stroke="#111827" strokeWidth="1" fill="none" opacity="0.6" />
                    <rect x="-16" y="-20" width="120" height="60" rx="8" stroke="#111827" strokeWidth="1" fill="none" opacity="0.35" />
                  </g>

                  {/* small floating dots / accents */}
                  <circle cx="360" cy="44" r="2.5" fill="#111827" opacity="0.9" />
                  <circle cx="330" cy="76" r="1.8" fill="#111827" opacity="0.65" />
                  <circle cx="310" cy="34" r="1.8" fill="#111827" opacity="0.65" />
                </svg>
              </div>
            </div>

            {/* small caption under illustration */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
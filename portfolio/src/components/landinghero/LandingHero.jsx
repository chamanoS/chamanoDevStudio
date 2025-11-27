import React from "react";
import MyPhoto from "../../assets/images/chamanoimg.jpeg";

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
              className="inline-flex items-center justify-center px-5 py-1 rounded-lg bg-gray-900 text-white text-sm font-medium shadow hover:opacity-95 transition"
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
  <div className="w-full max-w-xs md:max-w-base bg-white p-3 rounded-2xl border border-gray-200 shadow">
    <img
      src={MyPhoto}
      alt="Chamano Dev"
      className="w-full h-72 rounded-xl object-cover object-top"
    />
  </div>
</div>

      </div>
    </section>
  );
}
import React from "react";

export default function AboutMePreview() {
  return (
    <section id="about" className="mt-16 max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Teaser Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I’m a passionate developer and data enthusiast who builds clean, modern, and efficient solutions. 
            I focus on combining technology and analytics to help businesses and teams make smarter decisions.
          </p>
          <p className="mt-2 text-gray-700 text-lg leading-relaxed">
            Whether it’s full-stack web development, BI dashboards, or automation, I deliver reliable and scalable results.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 transition"
            >
              Read Full About Me
            </a>
          </div>
        </div>

        {/* Right: Illustration / Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm">
            <img
              src="/profile-preview.svg" 
              alt="About Me Illustration"
              className="rounded-2xl shadow-lg"
            />
            {/* Replace the src with your profile image or abstract illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top row */}
        <div className="md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Contact Me</h3>
          <p className="mt-2 text-gray-400">
            Email: chamano.sr@gmail.com
            <br />
            Phone: +27 65 621 2377
            <br />
            Location: Johannesburg, South Africa
          </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-bold text-white">ChamanoDevStudio</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Full-Stack Developer & Data & AI Enthusiast
            </p>
          </div>
        </div>

        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#home" className="hover:text-indigo-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#value" className="hover:text-indigo-500 transition">
                Why Work With Me
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-700  py-4 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Siba Yahudah. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.867-3.062-1.867 0-2.153 1.459-2.153 2.965v5.701h-3v-10h2.884v1.367h.041c.402-.762 1.384-1.567 2.846-1.567 3.044 0 3.604 2.002 3.604 4.605v5.595z" />
            </svg>
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.119 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.625-5.475 5.921.43.37.814 1.096.814 2.209 0 1.594-.014 2.879-.014 3.271 0 .319.192.694.801.576 4.765-1.589 8.201-6.084 8.201-11.385 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l-10-7.065v12h20v-12l-10 7.065zm0-2.065l10-7h-20l10 7z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

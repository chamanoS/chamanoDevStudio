import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="md:text-left hidden lg:block w-64 h-[calc(100vh)]
        overflow-y-auto border-r border-gray-200 bg-gray-50 p-6 sticky top-0 h-screen ">
      <div className="space-y-8  ">

        {/* Profile */}
        <div className=" md:mt-20">
          <h1 className="text-xl font-bold text-gray-900">About Me</h1>
          <p className="text-sm text-gray-600 mt-1">
            Full-Stack Developer • Aspiring BI Analyst • Data Enthusiast • Tutor
          </p>
        </div>

        {/* Short Bio */}
        <div className="border-b border-gray-400 pb-7">
          <p className="text-gray-700 text-sm leading-relaxed">
            I'm consultant who build profitable solutions. This is my digital garden.
          </p>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-400 pb-7">
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Categories
          </h2>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Frontend Development</a></li>
            <li><a href="#" className="hover:text-gray-900">Backend & APIs</a></li>
            <li><a href="#" className="hover:text-gray-900">Data & BI</a></li>
            <li><a href="#" className="hover:text-gray-900">Dev Tips</a></li>
          </ul>
        </div>

        {/* Featured Work */}
        <div className="border-b border-gray-400 pb-7">
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Featured
          </h2>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Full Portfolio Website</a></li>
            <li><a href="#" className="hover:text-gray-900">Power BI Sales Dashboard</a></li>
            <li><a href="#" className="hover:text-gray-900">Node.js API Project</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="border-b border-gray-400 pb-7">
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Tech Stack
          </h2>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>React • Vite • Tailwind</li>
            <li>Node.js • Express</li>
            <li>SQL • Power BI</li>
            <li>Git • Linux • REST APIs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Connect
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-indigo-600">
                <FiMail /> Email
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-indigo-600">
                <FiLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" className="flex items-center gap-2 hover:text-indigo-600">
                <FiGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} ChamanoDevStudio
        </div>

      </div>
    </aside>
  );
}

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChartBar,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBriefcase,
  FaFileDownload,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div className="px-6 md:px-10 py-12 max-w-5xl mx-auto text-gray-800">
      {/* 🟦 HERO SECTION */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-indigo-600">Me</span>
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl">
          I'm a passionate developer who loves building clean, functional, and
          modern digital experiences. I enjoy solving problems, learning new
          tools, and turning ideas into real working products. I’ve worked with
          different teams, helped ship projects, and continuously improve my
          skill set.
        </p>

        <button className="mt-6 flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700">
          <FaFileDownload /> Download CV
        </button>
      </section>

      {/* 🟩 SKILLS SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Skill Item */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaReact className="text-4xl text-blue-500 mb-3" />
            <h3 className="font-semibold">React JS</h3>
            <p className="text-sm">Component architecture & UI development</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaNodeJs className="text-4xl text-green-600 mb-3" />
            <h3 className="font-semibold">Node.js</h3>
            <p className="text-sm">APIs & backend fundamentals</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaDatabase className="text-4xl text-purple-600 mb-3" />
            <h3 className="font-semibold">SQL / Databases</h3>
            <p className="text-sm">Data modelling & queries</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaChartBar className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-semibold">Power BI</h3>
            <p className="text-sm">Dashboards & data analytics</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaHtml5 className="text-4xl text-orange-600 mb-3" />
            <h3 className="font-semibold">HTML5</h3>
            <p className="text-sm">Semantic structure & layout</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaCss3Alt className="text-4xl text-blue-700 mb-3" />
            <h3 className="font-semibold">CSS3</h3>
            <p className="text-sm">Responsive styling & animations</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaJs className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-sm">Frontend logic & interactions</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <SiTailwindcss className="text-4xl text-teal-500 mb-3" />
            <h3 className="font-semibold">Tailwind CSS</h3>
            <p className="text-sm">Modern, utility-first styling</p>
          </div>

          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaGithub className="text-4xl text-gray-900 mb-3" />
            <h3 className="font-semibold">Git & GitHub</h3>
            <p className="text-sm">Version control & collaboration</p>
          </div>
        </div>
      </section>

      {/* 🟧 EXPERIENCE TIMELINE */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Junior Developer — Freelance</h3>
              <p className="text-sm text-gray-600">2022 - Present</p>
              <p className="mt-2 text-gray-700">
                Building web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React, HTML, CSS,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">IT Support — Local Company</h3>
              <p className="text-sm text-gray-600">2020 - 2022</p>
              <p className="mt-2 text-gray-700">
                Assisted clients with technical issues, managed computer systems,
                and supported basic networking and software troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟪 CERTIFICATIONS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>

        <ul classname="list-disc pl-5 space-y-2">
          <li>Google Data Analytics (Beginner – Advanced)</li>
          <li>Microsoft Power BI Essentials</li>
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>JavaScript Algorithms & Data Structures – FreeCodeCamp</li>
        </ul>
      </section>
    </div>
  );
}

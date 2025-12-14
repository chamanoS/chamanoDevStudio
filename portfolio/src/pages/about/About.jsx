import React from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChartBar,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaFileDownload,
  FaCloud,
  FaPython,
  FaJava,
  FaBullseye,
  FaPaintBrush,
  FaPenNib,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div className="px-6 md:px-10 py-[80px] max-w-6xl mx-auto text-gray-800">
      {/* 🟦 HERO SECTION */}
       {/* ================= HERO ================= */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-600">Chamano</span>
        </h1>

        <h2 className="text-xl md:text-2xl mb-6 text-indigo-500">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "BI & Data Analyst",
              "Problem Solver",
            ]}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="max-w-3xl mx-auto text-left leading-relaxed text-gray-700">
          I’m a developer who enjoys building clean, scalable web applications
          and turning raw data into meaningful insights. My work spans full-stack
          development, business intelligence, and automation — always focused
          on solving real problems.
          <br /><br />
          I enjoy working across the stack, collaborating with teams, and
          continuously learning new technologies. I value clarity, reliability,
          and building solutions people actually enjoy using.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-black transition"
          >
            <FaFileDownload /> Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
        </div>
      </section>

      <section className="mb-20">
  <h2 className="text-3xl font-semibold mb-6">Skills</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

    {/* JavaScript */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaJs className="text-3xl text-yellow-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">JavaScript</h3>
        <p className="text-sm text-gray-600">
          Frontend logic & interactions
        </p>
      </div>
    </div>

    {/* React */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaReact className="text-3xl text-blue-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">React JS</h3>
        <p className="text-sm text-gray-600">
          Component architecture & UI development
        </p>
      </div>
    </div>

    {/* Node */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaNodeJs className="text-3xl text-green-600 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">Node.js</h3>
        <p className="text-sm text-gray-600">
          APIs & backend fundamentals
        </p>
      </div>
    </div>

    {/* Python */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaPython className="text-3xl text-blue-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">Python</h3>
        <p className="text-sm text-gray-600">
          Scripting & automation
        </p>
      </div>
    </div>

    {/* Java */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaJava className="text-3xl text-red-600 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">Java / Spring Boot</h3>
        <p className="text-sm text-gray-600">
          OOP & backend development
        </p>
      </div>
    </div>

    {/* HTML */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaHtml5 className="text-3xl text-orange-600 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">HTML5</h3>
        <p className="text-sm text-gray-600">
          Semantic structure & layout
        </p>
      </div>
    </div>

    {/* Tailwind */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaCss3Alt className="text-3xl text-teal-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">CSS / Tailwind</h3>
        <p className="text-sm text-gray-600">
          Responsive utility-first styling
        </p>
      </div>
    </div>

    {/* Git */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaGithub className="text-3xl text-gray-900 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">Git & GitHub</h3>
        <p className="text-sm text-gray-600">
          Version control & collaborate
        </p>
      </div>
    </div>

    {/* AWS */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaCloud className="text-3xl text-orange-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">AWS Fundamentals</h3>
        <p className="text-sm text-gray-600">
          Cloud basics & deployment
        </p>
      </div>
    </div>

    {/* Databases */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaDatabase className="text-3xl text-purple-600 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">SQL / Databases</h3>
        <p className="text-sm text-gray-600">
          Data modelling & queries
        </p>
      </div>
    </div>

    {/* Power BI */}
    <div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
      <FaChartBar className="text-3xl text-yellow-500 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold">Power BI</h3>
        <p className="text-sm text-gray-600">
          Dashboards & analytics
        </p>
      </div>
    </div>

    {/* ETL Tools */}
<div className="p-5 bg-white shadow rounded-xl flex items-start gap-4">
  <FaBullseye className="text-3xl text-indigo-600 mt-1 shrink-0" />
  <div>
    <h3 className="font-semibold">ETL Tools</h3>
    <p className="text-sm text-gray-600">
      SSAS, SSIS & SSRS — data integration & reporting
    </p>
  </div>
</div>

  </div>
</section>


      {/* 🟧 EXPERIENCE TIMELINE */}
       <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        <div className="space-y-8">
          {[
            {
              role: "BI Analyst — FNB",
              time: "2024 – 2025",
              desc: "Designed Power BI dashboards, improved reporting workflows, and supported data-driven decision-making.",
            },
            {
              role: "Software Developer — Geeks4Learning",
              time: "2023 – 2024",
              desc: "Built web applications and dashboards using React, Tailwind, and Power BI.",
            },
            {
              role: "IT Support — Centenary Networks & Azania Data",
              time: "2023 – 2024",
              desc: "Provided technical support, system maintenance, and troubleshooting.",
            },
            {
              role: "Application Developer — M & T Development",
              time: "2022 – 2023",
              desc: "Developed full-stack solutions for internal tools and client projects.",
            },
            {
              role: "Junior developer — The Digital Academy",
              time: "2019 – 2020",
              desc: "Assisted in building web applications and learning best practices in software development.",
            }
            
          ].map((job, i) => (
            <div key={i} className="flex gap-4">
              <FaBriefcase className="text-2xl text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">{job.role}</h3>
                <p className="text-sm text-gray-500">{job.time}</p>
                <p className="mt-2 text-gray-700">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟪 CERTIFICATIONS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Example Card */}
          {[
            {
              logo: "https://i.gzn.jp/img/2025/05/13/google-g-logo-updated/09_m.png",
              title: "Google Data Analytics",
              desc: "Professional Certificate (8-course specialization)",
              issuer: "Google",
              year: "2023",
            },
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              title: "Microsoft Power BI Essentials",
              desc: "Data modelling • DAX • dashboards • report design",
              issuer: "Microsoft",
              year: "2022",
            },
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
              title: "Responsive Web Design",
              desc: "300-hour certification covering HTML, CSS, Flexbox, accessibility",
              issuer: "freeCodeCamp",
              year: "2021",
            },
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
              title: "JavaScript Algorithms & Data Structures",
              desc: "Algorithms, ES6, OOP, functional programming, data structures",
              issuer: "freeCodeCamp",
              year: "2021",
            },
          ].map((cert, i) => (
            <motion.div
              key={i}
              className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="font-semibold text-lg">{cert.title}</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">{cert.desc}</p>
              <p className="text-xs text-gray-500">
                Issued by {cert.issuer} • {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 🟪 FUN FACTS / COUNTERS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Fun Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 50, label: "Projects Completed" },
            { value: 200000, label: "Lines of Code" },
            { value: 500, label: "Cups of Coffee" },
            { value: 5, label: "Years Experience" },
          ].map((fact, i) => (
            <motion.div
              key={i}
              className="p-5 bg-indigo-50 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-indigo-600">
                <CountUp end={fact.value} duration={2} separator="," />
              </h3>
              <p className="text-gray-700 mt-1">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟪 CONTACT CTA */}
      <section className="text-center py-12 bg-indigo-50 rounded-xl shadow mt-12">
        <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
        <p className="text-gray-700 mb-6">
          I’m open to freelance, full-time, or collaboration opportunities.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}

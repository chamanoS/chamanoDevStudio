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
} from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 md:px-10 py-[80px] max-w-6xl mx-auto text-gray-800">

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
          development, business intelligence, and automation; always focused
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

      {/* ================= SKILLS ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-2">Skills</h2>
        <p className="text-gray-600 mb-8">
          Tools and technologies I use to build reliable products and
          data‑driven solutions
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FaJs />, title: "JavaScript", desc: "Frontend logic & interactions", color: "text-yellow-500" },
            { icon: <FaReact />, title: "React JS", desc: "Component architecture & UI development", color: "text-blue-500" },
            { icon: <FaNodeJs />, title: "Node.js", desc: "APIs & backend fundamentals", color: "text-green-600" },
            { icon: <FaPython />, title: "Python", desc: "Scripting & automation", color: "text-blue-500" },
            { icon: <FaJava />, title: "Java / Spring Boot", desc: "OOP & backend development", color: "text-red-600" },
            { icon: <FaHtml5 />, title: "HTML5", desc: "Semantic structure & layout", color: "text-orange-600" },
            { icon: <FaCss3Alt />, title: "CSS / Tailwind", desc: "Responsive utility‑first styling", color: "text-teal-500" },
            { icon: <FaGithub />, title: "Git & GitHub", desc: "Version control & collaborate", color: "text-gray-900" },
            { icon: <FaCloud />, title: "AWS Fundamentals", desc: "Cloud basics & deployment", color: "text-orange-500" },
            { icon: <FaDatabase />, title: "SQL / Databases", desc: "Data modelling & queries", color: "text-purple-600" },
            { icon: <FaChartBar />, title: "Power BI", desc: "Dashboards & analytics", color: "text-yellow-500" },
            { icon: <FaBullseye />, title: "ETL Tools", desc: "SSAS, SSIS & SSRS", color: "text-indigo-600" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-5 bg-white shadow-md rounded-xl flex items-start gap-4 border hover:shadow-xl transition"
            >
              <div className={`text-3xl mt-1 shrink-0 ${skill.color}`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="font-semibold">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="space-y-10">
          {[
            { role: "BI Analyst — FNB", time: "2024 – 2025", desc: "Designed Power BI dashboards and improved reporting workflows." },
            { role: "Software Developer — Geeks4Learning", time: "2023 – 2024", desc: "Built web applications using React, Tailwind, and Power BI." },
            { role: "IT Support — Centenary Networks", time: "2023 – 2024", desc: "Provided system support, troubleshooting, and maintenance." },
            { role: "Application Developer — M & T Development", time: "2022 – 2023", desc: "Developed full‑stack solutions for internal tools and clients." },
            {
              role: "Junior developer — The Digital Academy",
              time: "2019 – 2020",
              desc: "Assisted in building web applications and learning best practices in software development.",
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1 w-3 h-3 bg-indigo-600 rounded-full" />
              <div className="border-l-2 border-indigo-200 pl-6">
                <h3 className="font-semibold text-lg">{job.role}</h3>
                <p className="text-sm text-gray-500">{job.time}</p>
                <p className="mt-2 text-gray-700">{job.desc}</p>
              </div>
            </motion.div>
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

      {/* ================= FUN FACTS ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">Fun Facts</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 50, label: "Projects Completed" },
            { value: 200000, label: "Lines of Code" },
            { value: 500, label: "Cups of Coffee" },
            { value: 5, label: "Years Experience" },
          ].map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl text-center shadow"
            >
              <h3 className="text-2xl font-bold text-indigo-600">
                <CountUp end={fact.value} duration={2} separator="," />
              </h3>
              <p className="text-gray-700 mt-1">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-14 bg-indigo-50 rounded-xl shadow"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Build Something Meaningful?
        </h2>
        <p className="text-gray-700 mb-6">
          I’m open to full‑time roles, freelance work, and collaborations.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </motion.section>
    </div>
  );
}

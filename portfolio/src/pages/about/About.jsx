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
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-600">Chamano</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-4">
          <span className="text-indigo-400">
            <Typewriter
              words={[
                "Fullstack Developer",
                "Problem Solver",
                "Data Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-700 text-left max-w-3xl mx-auto leading-relaxed mb-6">
          I love creating web applications, dashboards, and interactive
          experiences that make life a little easier and more fun. Ever since I
          was young, I’ve been curious about how technology can solve real-world
          problems, and that curiosity naturally led me into coding, data, and
          building things that actually work. <br />
          <br />
          Over the years, I’ve dived deep into React, Node.js, and modern
          frontend and backend tools, while exploring cloud services,
          automation, and data visualization. I enjoy taking complex challenges
          and turning them into simple, elegant solutions that people can
          actually use and enjoy. <br />
          <br />
          What really drives me is learning new technologies, collaborating with
          creative minds, and constantly improving. I bring curiosity,
          persistence, and a positive, team-oriented attitude to every project.
          If you’re looking for someone who’s not just technically skilled, but
          also passionate about building things that matter and loves working
          with people who are driven and innovative, that’s me.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            <FaFileDownload /> Download CV
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-gray-600 text-2xl">
          <a href="https://github.com/" target="_blank">
            <FaGithub className="hover:text-gray-900 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* JavaScript */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaJs className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-sm">Frontend logic & interactions</p>
          </div>

          {/* React JS */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaReact className="text-4xl text-blue-500 mb-3" />
            <h3 className="font-semibold">React JS</h3>
            <p className="text-sm">Component architecture & UI development</p>
          </div>

          {/* Node.js */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaNodeJs className="text-4xl text-green-600 mb-3" />
            <h3 className="font-semibold">Node.js</h3>
            <p className="text-sm">APIs & backend fundamentals</p>
          </div>
          {/* Python */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaPython className="text-4xl text-blue-500 mb-3" />
            <h3 className="font-semibold">Python</h3>
            <p className="text-sm">Scripting, data analysis & automation</p>
          </div>

          {/* Java */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaJava className="text-4xl text-red-600 mb-3" />
            <h3 className="font-semibold">Java - SpringBoot</h3>
            <p className="text-sm">OOP & backend development</p>
          </div>

          {/* HTML5 */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaHtml5 className="text-4xl text-orange-600 mb-3" />
            <h3 className="font-semibold">HTML5</h3>
            <p className="text-sm">Semantic structure & layout</p>
          </div>

          {/* CSS3 / Tailwind */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaCss3Alt className="text-4xl text-teal-500 mb-3" />
            <h3 className="font-semibold">CSS3 / Tailwind</h3>
            <p className="text-sm">Responsive & modern utility-first styling</p>
          </div>

          {/* Git & GitHub */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaGithub className="text-4xl text-gray-900 mb-3" />
            <h3 className="font-semibold">Git & GitHub</h3>
            <p className="text-sm">Version control & collaboration</p>
          </div>

          {/* AWS */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaCloud className="text-4xl text-orange-500 mb-3" />
            <h3 className="font-semibold">AWS Fundamentals</h3>
            <p className="text-sm">Cloud services basics & deployment</p>
          </div>
          {/* SQL / Databases */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaDatabase className="text-4xl text-purple-600 mb-3" />
            <h3 className="font-semibold">SQL / Databases</h3>
            <p className="text-sm">Data modelling & queries</p>
          </div>

          {/* Power BI */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaChartBar className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-semibold">Power BI</h3>
            <p className="text-sm">Dashboards & data analytics</p>
          </div>

          {/* ETL / Data Tools */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaBullseye className="text-4xl text-green-700 mb-3" />
            <h3 className="font-semibold">ETL Tools</h3>
            <p className="text-sm">
              SSIS, SSRS, SSAS — Data integration & reporting
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaBullseye className="text-4xl text-indigo-600 mb-3" />
            <h3 className="font-semibold">Digital Marketing</h3>
            <p className="text-sm">SEO, social media & analytics basics</p>
          </div>

          {/* Figma / Design */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaPaintBrush className="text-4xl text-pink-500 mb-3" />
            <h3 className="font-semibold">Figma</h3>
            <p className="text-sm">UI/UX design & prototyping</p>
          </div>

          {/* Technical Writing */}
          <div className="p-5 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <FaPenNib className="text-4xl text-gray-800 mb-3" />
            <h3 className="font-semibold">Technical Writing</h3>
            <p className="text-sm">Documentation & clear communication</p>
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
              <h3 className="text-xl font-semibold">
                Junior Developer — Freelance
              </h3>
              <p className="text-sm text-gray-600">2019 - Present</p>
              <p className="mt-2 text-gray-700">
                Built web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Software developer Intern — The Digital Academy
              </h3>
              <p className="text-sm text-gray-600">2019 - 2020 </p>
              <p className="mt-2 text-gray-700">
                Built web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Application Developer — M & T Development
              </h3>
              <p className="text-sm text-gray-600">2022 - 2023</p>
              <p className="mt-2 text-gray-700">
                Built web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                IT Support — Centenary Networks and Azania Data
              </h3>
              <p className="text-sm text-gray-600">2023 - 2024</p>
              <p className="mt-2 text-gray-700">
                Assisted clients with technical issues, managed computer
                systems, and supported networking and software troubleshooting.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Software Developer — Geeks4learning
              </h3>
              <p className="text-sm text-gray-600">2023 - 2024</p>
              <p className="mt-2 text-gray-700">
                Built web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaBriefcase className="text-3xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">BI Analyst — FNB</h3>
              <p className="text-sm text-gray-600">2024 - 2025</p>
              <p className="mt-2 text-gray-700">
                Built web applications, dashboards, and responsive sites for
                small businesses and personal projects. Focus on React,
                Tailwind, Power BI, and modern UI design.
              </p>
            </div>
          </div>
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

      {/* 🟪 TESTIMONIALS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <div className="space-y-6">
          {[
            {
              quote:
                "Siba is a highly skilled developer who delivers quality projects on time.",
              name: "Jane Doe, Project Manager",
            },
            {
              quote: "Excellent problem solver and team player, very reliable.",
              name: "John Smith, Freelancer",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="p-5 bg-indigo-50 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <p className="mt-2 font-semibold text-indigo-600">— {t.name}</p>
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

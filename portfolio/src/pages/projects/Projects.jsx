import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartBar,
  FaServer,
  FaCheckCircle,
  FaReact,
  FaNode,
  FaPython,
  FaArrowRight,
  FaCode,
  FaDatabase, // New Icon: Database
  FaLeaf, // New Icon: MongoDB/NoSQL (or use other relevant one)
  FaClock, // New Icon: Automation
} from "react-icons/fa";

// Extended Icons for the Niche
const TechIcons = {
  React: <FaReact className="text-blue-500" title="React" />,
  Node: <FaNode className="text-green-500" title="Node.js" />,
  Python: <FaPython className="text-yellow-500" title="Python/ML" />,
  Database: <FaDatabase className="text-orange-500" title="SQL/Postgres" />,
  Chart: <FaChartBar className="text-red-500" title="Data Viz" />,
  Automation: <FaClock className="text-indigo-500" title="Automation" />,
};

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Retail Inventory Forecasting System",
      tag: "Data Automation", // New Tag
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
      description:
        "Built a full prediction engine using Python and deployed as a FastAPI backend. Fully automated the daily reporting workflow.",
      tech: [TechIcons.Python, TechIcons.Node, TechIcons.Database, TechIcons.Automation],
    },
    {
      id: 2,
      title: "Workforce Analytics Dashboard",
      tag: "Client Dashboard",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      description:
        "A real-time KPI dashboard (React) integrated with HR/finance APIs. Enabled leadership to make real-time decisions on staffing and cost allocation.",
      tech: [TechIcons.React, TechIcons.Chart, TechIcons.Node],
    }
  ];

  const skillData = [
    { name: "Frontend", percent: 95, color: "bg-blue-600" },
    { name: "Backend & APIs", percent: 90, color: "bg-green-600" },
    { name: "Data Engineering", percent: 85, color: "bg-yellow-600" },
    { name: "Cloud/DevOps", percent: 70, color: "bg-indigo-600" },
  ];

  const ProcessStep = ({ number, title, description, isLast }) => (
    <div className="flex items-start gap-4 relative">
      <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full z-10 font-bold shadow-md">
        {number}
      </div>
      {!isLast && (
        <div className="absolute top-10 left-5 w-0.5 bg-indigo-200 h-full -translate-y-4"></div>
      )}
      <div className="ml-2 pt-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO SECTION - Refined CTA */}
      <div className="text-center mb-20 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          I Build Systems That{" "}
          <span className="text-indigo-600">Drive Real Business Results</span>.
        </h1>
        <p className="text-gray-600 mt-14 max-w-2xl mx-auto text-lg">
          Websites, dashboards, automations, APIs, and full-stack apps —
          engineered with precision, performance, and clean design.
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
         Whether you’re launching a new product or improving an existing system, I build
          solutions that save time, increase revenue, and elevate your brand. Let’s build
          the digital product that moves your business forward.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-xl hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Start a Project Now
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            See My Work
          </a>
        </div>
      </div>

      <hr className="my-16" />

      {/* ========= PROJECT CARDS (Consolidated) ========= */}
      <div className="text-center mb-16" id="projects">
        <h2 className="text-3xl font-semibold mb-6">
          Projects & Case Studies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of systems, dashboards, automations, and business transformations I’ve built.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-7 space-y-4">
                {/* Project Tag */}
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-indigo-100 text-indigo-700">
                    {project.tag}
                </span>

              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-4 text-2xl pt-2">
                <span className="text-sm font-medium text-gray-500">Tech Stack:</span>
                {project.tech.map((icon, i) => (
                  <span key={i} className="hover:scale-110 transition duration-150">
                    {icon}
                  </span>
                ))}
              </div>

              <a
                href={`/case-study/${project.id}`}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition duration-200"
              >
                Read Full Case Study <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

     

          {/* FEATURED PROJECTS */}
      <h2 className="text-3xl font-semibold mb-6" id="portfolio">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {/* Project 1 */}
        <div className="rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden bg-white">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-60 object-cover"
            alt="Sales Intelligence Dashboard"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Business Analytics Dashboard
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              A full Power BI + API integrated dashboard for real-time
              reporting.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Automated data refresh</li>
              <li>• Predictive analytics modules</li>
              <li>• Used by 3 departments</li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden bg-white">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000"
            className="w-full h-60 object-cover"
            alt="E-Commerce Automation"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              E-Commerce Web App
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              A React + Node full-stack app with authentication and cart system.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• 10x faster load time</li>
              <li>• Stripe payment integration</li>
              <li>• Responsive & SEO optimized</li>
            </ul>
          </div>
        </div>
      </div>

   <hr className="my-16" />

{/* ================= SERVICES ================= */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          What I Can Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <FaLaptopCode className="text-3xl text-indigo-600 mb-3" />
            <h4 className="font-semibold">Web Applications</h4>
            <p className="text-sm text-gray-600 mt-2">
              Modern, responsive web apps built with clean architecture and UX
              best practices.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <FaServer className="text-3xl text-indigo-600 mb-3" />
            <h4 className="font-semibold">APIs & Automation</h4>
            <p className="text-sm text-gray-600 mt-2">
              Scalable backend services, integrations, and automated workflows.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <FaChartBar className="text-3xl text-indigo-600 mb-3" />
            <h4 className="font-semibold">Data & Dashboards</h4>
            <p className="text-sm text-gray-600 mt-2">
              Power BI, analytics systems, and reporting that drive decisions.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How I Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <ProcessStep
            step={1}
            title="Discovery"
            desc="Understanding your goals, users, and constraints."
          />
          <ProcessStep
            step={2}
            title="Design & Architecture"
            desc="Clear system design, data models, and UX flow."
          />
          <ProcessStep
            step={3}
            title="Build & Test"
            desc="Clean code, iterative delivery, and quality checks."
          />
          <ProcessStep
            step={4}
            title="Launch & Improve"
            desc="Deployment, optimization, and long-term support."
          />
        </div>
      </div>

      {/* ================= WHY ME ================= */}
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        <div className="space-y-4">
          {[
            "Business-focused engineering mindset",
            "Clean, maintainable, scalable code",
            "Clear communication & reliability",
            "Data-driven decision making",
          ].map((item, i) => (
            <p key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-indigo-600" />
              {item}
            </p>
          ))}
        </div>

        <div className="p-6 bg-indigo-50 rounded-xl border">
          <h4 className="font-semibold text-lg mb-2">My Mission</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            I don’t just build software — I build systems that help teams work
            smarter, scale faster, and make better decisions using technology
            and data.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div
        id="contact"
        className="text-center py-14 bg-gray-900 text-white rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Something Valuable
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Have an idea, challenge, or system you want to improve? Let’s talk.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block px-8 py-4 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>

  );
}
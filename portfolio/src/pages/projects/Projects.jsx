import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChartBar, FaServer, FaCheckCircle, FaReact, FaNode, FaPython, FaArrowRight,FaCode } from "react-icons/fa";

export default function Projects() {

    const projects = [
  {
    id: 1,
    title: "Retail Inventory Forecasting System",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
    description:
      "Built a full prediction engine using Python + Power BI for a national retail chain. Reduced stock-outs by 37% and automated the daily reporting workflow.",
    tech: [<FaReact />, <FaNode />, <FaPython />],
  },
  {
    id: 2,
    title: "Workforce Analytics Dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    description:
      "A cross-department KPI dashboard integrated with HR, finance, and operations APIs. Enabled leadership to make real-time decisions on staffing, overtime, and cost allocation.",
    tech: [<FaReact />, <FaChartBar />, <FaCode />],
  },
];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">


          {/* HERO SECTION */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          I Build Systems That <span className="text-indigo-600">Grow Businesses</span>.
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Websites, dashboards, automations, APIs, and full-stack apps —
          engineered with precision, performance, and clean design.  
          Let’s build the digital product that moves your business forward.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >
            Start a Project
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            View Portfolio
          </a>
        </div>
      </div>

         <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Projects & Case Studies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of systems, dashboards, automations, and business
          transformations I’ve built for clients and companies.
        </p>
      </div>

      {/* ========= TRUST LOGO BAR ========= */}
      <div className="flex items-center justify-center gap-10 opacity-70 grayscale mb-20 flex-wrap">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Shopify_logo_2018.svg" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-8" />
    </div>


      {/* ========= PROJECT CARDS ========= */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
  {projects.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition"
    >
      <img
        src={project.img}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex gap-3 text-xl text-blue-600 dark:text-blue-400">
          {project.tech.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>

        <a
          href={`/case-study/${project.id}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Read Case Study <FaArrowRight />
        </a>
      </div>
    </motion.div>
  ))}
</div>


    
      {/* FEATURED PROJECTS */}
      <h2 className="text-3xl font-semibold mb-6" id="portfolio">Featured Work</h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">

        {/* Project 1 */}
        <div className="rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden bg-white">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-60 object-cover"
            alt="Sales Intelligence Dashboard"
            />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Business Analytics Dashboard</h3>
            <p className="text-gray-600 mt-2 text-sm">
              A full Power BI + API integrated dashboard for real-time reporting.
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
            <h3 className="text-xl font-semibold text-gray-900">E-Commerce Web App</h3>
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

      {/* SERVICES */}
      <h2 className="text-3xl font-semibold mb-6">What I Can Build For You</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-20">

        {/* Service 1 */}
        <div className="p-6 border bg-white rounded-xl shadow-sm hover:shadow-lg transition">
          <FaLaptopCode className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Web Development</h3>
          <p className="text-gray-600 text-sm mt-2">
            Beautiful, fast, and responsive websites that make your brand stand out.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 border bg-white rounded-xl shadow-sm hover:shadow-lg transition">
          <FaServer className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Backend & APIs</h3>
          <p className="text-gray-600 text-sm mt-2">
            Scalable APIs, automation tools, dashboards, and system integrations.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 border bg-white rounded-xl shadow-sm hover:shadow-lg transition">
          <FaChartBar className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Data & Analytics</h3>
          <p className="text-gray-600 text-sm mt-2">
            Power BI dashboards, SQL data models, and business intelligence systems.
          </p>
        </div>
      </div>

      {/* WHY WORK WITH ME */}
      <h2 className="text-3xl font-semibold mb-6">Why Clients Choose Me</h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-indigo-600" /> Clean, modern, well-engineered solutions
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-indigo-600" /> Clear communication & reliability
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-indigo-600" /> Fast delivery & attention to detail
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-indigo-600" /> Business-focused mindset
          </p>
        </div>

        <div className="p-6 bg-indigo-50 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            My Mission
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            To help entrepreneurs and businesses grow through technology,
            automation, and clean design. Every project is built with long-term
            value and scalability in mind.
          </p>
        </div>
      </div>

      {/* PROCESS TIMELINE */}
      <h2 className="text-3xl font-semibold mb-6">How I Work</h2>

      <div className="space-y-10 mb-20">

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">1</div>
          <div>
            <h3 className="font-semibold text-lg">Discovery</h3>
            <p className="text-gray-600 text-sm mt-1">
              Understanding your goals, users, and requirements.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">2</div>
          <div>
            <h3 className="font-semibold text-lg">Design & Architecture</h3>
            <p className="text-gray-600 text-sm mt-1">
              Wireframes, UX flow, system structure, and planning.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">3</div>
          <div>
            <h3 className="font-semibold text-lg">Development</h3>
            <p className="text-gray-600 text-sm mt-1">
              Building your system with clean, modern code.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">4</div>
          <div>
            <h3 className="font-semibold text-lg">Launch & Support</h3>
            <p className="text-gray-600 text-sm mt-1">
              Deployment, optimization, and ongoing improvements.
            </p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center py-14 bg-gray-900 text-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          From small business websites to full enterprise systems — I help clients build powerful digital tools.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

// Example placeholder project images
const DashboardImg =
  "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80";

const EcommerceImg =
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80";

const ApiImg =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

const PortfolioImg =
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80";


export default function FeaturedProjects() {
  const projects = [
    {
      title: "Interactive Dashboard",
      desc: "A responsive BI dashboard with custom filters, drill-through, and export features.",
      stack: ["React", "Power BI", "DAX"],
      img: DashboardImg,
      link: "#",
      code: "#",
    },
    {
      title: "E-commerce Frontend",
      desc: "Lightning-fast shopping interface with cart state, filtering, and optimized rendering.",
      stack: ["React", "Vite", "Tailwind"],
      img: EcommerceImg,
      link: "#",
      code: "#",
    },
    {
      title: "Automation Script + API",
      desc: "Automated data ingestion pipeline integrated with a custom REST API.",
      stack: ["Node.js", "REST", "Automation"],
      img: ApiImg,
      link: "#",
      code: "#",
    },
    {
      title: "Portfolio Deep App",
      desc: "A rich, animated personal portfolio app with full CMS-like article management.",
      stack: ["React", "Framer Motion", "Custom CMS"],
      img: PortfolioImg,
      link: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="mt-24 max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-wider text-gray-500">
          My Work
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Featured Projects
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A curated selection of applications, dashboards, and automation
          systems built for real-world performance and clean user experience.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href={p.link}
                  className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg shadow hover:opacity-95 transition"
                >
                  View Demo
                </a>
                <a
                  href={p.code}
                  className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

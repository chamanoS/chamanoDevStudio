import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiFolder, FiLayers, FiBookOpen, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden lg:block w-72 h-[100vh] sticky top-0 overflow-y-auto 
        bg-gradient-to-b from-indigo-50 via-white to-indigo-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-r border-indigo-200 dark:border-gray-700 
        shadow-xl p-6 rounded-r-2xl
      "
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-10"
      >
        {/* Profile */}
        <div className="mt-10 md:mt-20">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Chamano Dev Studio
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
            Full-Stack Developer • BI Enthusiast • Automation Expert • Tutor
          </p>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Projects", value: "42" },
            { label: "Clients", value: "15+" },
            { label: "Articles", value: "30" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-3 rounded-xl bg-white dark:bg-gray-800 shadow 
                hover:shadow-md transition cursor-pointer
              "
            >
              <p className="text-lg font-bold text-indigo-600">{item.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <FiLayers className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm">
              Categories
            </h2>
          </div>

          <ul className="space-y-2 text-sm">
            {["Frontend Development", "Backend & APIs", "Data & BI", "Dev Tips"].map((cat, i) => (
              <motion.li
                whileHover={{ x: 5 }}
                key={i}
              >
                <a
                  href="#"
                  className="
                    block px-2 py-1 rounded-md 
                    text-gray-700 dark:text-gray-300 
                    hover:bg-indigo-100 dark:hover:bg-gray-700 
                    hover:text-indigo-700 dark:hover:text-indigo-400
                    transition
                  "
                >
                  {cat}
                </a>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Featured */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <FiStar className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm">
              Featured
            </h2>
          </div>

          <ul className="space-y-2 text-sm">
            {[
              "Full Portfolio Website",
              "Power BI Sales Dashboard",
              "Node.js API Project",
            ].map((item, i) => (
              <motion.li
                whileHover={{ x: 5 }}
                key={i}
              >
                <a
                  href="#"
                  className="
                    block px-2 py-1 rounded-md 
                    text-gray-700 dark:text-gray-300 
                    hover:bg-indigo-100 dark:hover:bg-gray-700 
                    hover:text-indigo-700 dark:hover:text-indigo-400
                    transition
                  "
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <FiBookOpen className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm">
              Tech Stack
            </h2>
          </div>

          <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>React • Vite • Tailwind</li>
            <li>Node.js • Express</li>
            <li>SQL • Power BI • Python</li>
            <li>Linux • REST APIs</li>
          </ul>
        </section>

        {/* Socials */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <FiFolder className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm">
              Connect
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { label: "Email", icon: <FiMail />, link: "mailto:your@email.com" },
              { label: "LinkedIn", icon: <FiLinkedin />, link: "https://linkedin.com" },
              { label: "GitHub", icon: <FiGithub />, link: "https://github.com" },
            ].map((item, i) => (
              <motion.a
                whileHover={{ x: 5, scale: 1.05 }}
                key={i}
                href={item.link}
                className="
                  flex items-center gap-3 text-gray-700 dark:text-gray-300 
                  hover:text-indigo-600 dark:hover:text-indigo-400 text-sm
                "
              >
                {item.icon} {item.label}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="pt-4 text-xs text-gray-500 dark:text-gray-400 ">
          © {new Date().getFullYear()} Chamano Dev Studio
        </div>
      </motion.div>
    </aside>
  );
}

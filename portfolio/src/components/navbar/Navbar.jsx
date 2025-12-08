import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="
        w-full fixed top-0 left-0 z-50 backdrop-blur-lg
        bg-white/70 dark:bg-gray-900/60 
        border-b border-indigo-100 dark:border-gray-800
        shadow-md
      "
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="
            text-xl font-extrabold tracking-wide 
           font-semibold text-gray-900
            bg-clip-text cursor-pointer
          "
        >
          ChamanoDevStudio
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ y: -2 }}
              className="
                relative text-gray-700 dark:text-gray-200 
                hover:text-indigo-600 dark:hover:text-indigo-400 
                transition font-medium
              "
            >
              {link.name}

              {/* Hover underline */}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px] 
                  bg-indigo-600 dark:bg-indigo-400 
                  hover:w-full transition-all duration-300
                  rounded-full
                "
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden bg-white/90 dark:bg-gray-900/90 
              backdrop-blur-lg border-b border-indigo-100 
              dark:border-gray-800 px-6 py-4 space-y-3 shadow-lg
            "
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block text-gray-700 dark:text-gray-200 py-2 
                  font-medium hover:text-indigo-600 dark:hover:text-indigo-400
                "
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

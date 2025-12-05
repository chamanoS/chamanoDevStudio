import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="min-h-screen px-6 md:px-14 py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Work Together
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether you want dashboards, automation, a website, or a full product — 
          I'm ready to help you build something exceptional.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">

        {/* CONTACT INFO */}
        <div className="space-y-6">
          {/* CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md"
          >
            <FaEnvelope className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold mb-1 text-lg">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">youremail@example.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md"
          >
            <FaGithub className="text-gray-700 dark:text-gray-300 text-3xl mb-3" />
            <h3 className="font-semibold mb-1 text-lg">GitHub</h3>
            <a
              href="https://github.com/"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/yourprofile
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md"
          >
            <FaLinkedin className="text-blue-700 text-3xl mb-3" />
            <h3 className="font-semibold mb-1 text-lg">LinkedIn</h3>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md"
          >
            <FaPhone className="text-green-600 dark:text-green-400 text-3xl mb-3" />
            <h3 className="font-semibold mb-1 text-lg">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+27 00 000 0000</p>
          </motion.div>
        </div>

        {/* CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6"
        >
          {submitted && (
            <div className="p-4 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
              🎉 Message sent! I’ll get back to you soon.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Your Name</label>
              <input
                type="text"
                required
                className="p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Email Address</label>
              <input
                type="email"
                required
                className="p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Subject</label>
            <input
              type="text"
              required
              className="p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Your Message</label>
            <textarea
              required
              rows="6"
              className="p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-center rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* MAP OR IMAGE PLACEHOLDER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 h-72 rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

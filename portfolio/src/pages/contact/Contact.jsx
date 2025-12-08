// src/pages/contact/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Default map location
const defaultPosition = { lat: -26.2041, lng: 28.0473 };

export default function Contact() {
  // Simple contact form fields (no EmailJS yet)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What services do you offer?", a: "Web apps, dashboards, APIs and automation systems." },
    { q: "How long does a project take?", a: "Depends on the scope: 1–6 weeks." },
    { q: "Do you work remotely?", a: "Yes, fully remote-friendly." },
  ];

  const faqVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    if (!message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    alert("Form submitted successfully (EmailJS disabled).");
  }

  return (
    <div className="min-h-screen px-6 md:px-14 py-20 bg-gray-50">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Let’s work together</h1>
        <p className="text-gray-600">Send me a message and I’ll reply soon.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* EMAIL */}
          <motion.div className="p-4 rounded-2xl bg-white shadow-md" whileHover={{ scale: 1.02 }}>
            <FaEnvelope className="text-3xl text-indigo-600 mb-3" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm text-gray-600">chamano.sr@gmail.com</p>
          </motion.div>

          {/* GITHUB */}
          <motion.div className="p-4 rounded-2xl bg-white shadow-md" whileHover={{ scale: 1.02 }}>
            <FaGithub className="text-3xl text-gray-700 mb-3" />
            <h3 className="font-semibold text-lg">GitHub</h3>
            <a className="text-blue-600" href="https://github.com/" target="_blank">github.com</a>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div className="p-4 rounded-2xl bg-white shadow-md" whileHover={{ scale: 1.02 }}>
            <FaLinkedin className="text-3xl text-blue-700 mb-3" />
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <a className="text-blue-600" href="https://linkedin.com" target="_blank">linkedin.com</a>
          </motion.div>

          {/* FAQ */}
          <div className="p-6 rounded-2xl bg-white shadow-md">
            <h4 className="text-lg font-semibold mb-4">FAQ</h4>
            {faqs.map((f, i) => (
              <div key={i} className="border rounded-lg mb-3 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3 flex justify-between"
                >
                  <span className="font-medium">{f.q}</span>
                  <span>{openFaq === i ? "–" : "+"}</span>
                </button>

                <motion.div
                  initial="closed"
                  animate={openFaq === i ? "open" : "closed"}
                  variants={faqVariants}
                  className="px-4"
                >
                  <div className="py-3 text-sm text-gray-700">{f.a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM + MAP */}
        <div className="lg:col-span-2 space-y-6">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {/* NAME */}
              <div>
                <label className="block text-sm mb-1">Name *</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1">Email *</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-4">
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
            </div>

            {/* SUBMIT */}
            <button type="submit" className="mt-6 px-6 py-3 rounded-lg bg-indigo-600 text-white">
              Send Message
            </button>
          </motion.form>

          {/* MAP */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden shadow-md">
            {/* <MapContainer
              center={[defaultPosition.lat, defaultPosition.lng]}
              zoom={11}
              style={{ height: 320 }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[defaultPosition.lat, defaultPosition.lng]}>
                <Popup>Based in Johannesburg — available worldwide.</Popup>
              </Marker>
            </MapContainer> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

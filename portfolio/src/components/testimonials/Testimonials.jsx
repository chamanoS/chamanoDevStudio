import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
   
    {
      quote:
        "Chamano brought structure, speed, and clarity to our frontend. One of the best dev experiences we’ve had.",
      author: "CTO, NexaTech",
    },
   
  ];

  return (
    <section className="mt-20 mb-20 grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT CTA CARD */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-10 bg-gradient-to-br from-indigo-900 to-indigo-600 text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20" />
        <h4 className="text-3xl font-extrabold tracking-tight">Ready to collaborate?</h4>
        <p className="mt-4 text-sm opacity-90 leading-relaxed">
          I take on freelance projects and long-term roles.  
          Let’s talk about how I can help your team ship features faster, build better UI,  
          and turn data into real decisions.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 mt-6 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition-all"
        >
          Contact Me
        </a>
      </motion.div>

      {/* RIGHT TESTIMONIALS CARD */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-8 bg-white border shadow-sm"
      >
        <h5 className="text-xl font-semibold">What clients say</h5>

        <div className="mt-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-gray-50 border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-indigo-600 text-indigo-600" />
                ))}
              </div>

              <blockquote className="italic text-sm text-gray-700">
                “{t.quote}”
              </blockquote>
              <div className="mt-2 text-xs text-gray-500">— {t.author}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

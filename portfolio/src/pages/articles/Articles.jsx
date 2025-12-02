import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaArrowRight } from "react-icons/fa";

export default function Articles() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web Dev", "Data", "Business", "AI", "Case Studies"];

  const articles = [
    {
      id: 1,
      title: "How I Built a Retail Inventory Forecasting System",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      excerpt:
        "A breakdown of the architecture, algorithms, and BI automation behind a 37% reduction in stock-outs.",
    },
    {
      id: 2,
      title: "Modern Frontend Architecture for 2025",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200",
      excerpt:
        "A clean explanation of scalable component-driven development and modern frontend patterns.",
    },
    {
      id: 3,
      title: "Power BI vs Looker vs Tableau — Which One Wins in 2025?",
      category: "Data",
      image: "https://images.unsplash.com/photo-1581092160562-040e91a31de7?q=80&w=1200",
      excerpt:
        "A practical comparison based on performance, cost, modeling, and real company use cases.",
    },
    {
      id: 4,
      title: "Automation Workflows That Save Teams 20+ Hours Weekly",
      category: "Business",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      excerpt:
        "From API connectors to background jobs — a look at how automation transforms teams.",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || article.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* PAGE TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Articles & Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Thoughts on web development, data, automation, business growth, and real project breakdowns.
        </p>
      </div>

      {/* FEATURED ARTICLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl overflow-hidden shadow-xl mb-16 bg-white dark:bg-gray-800"
      >
        <img
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1200"
          className="w-full h-72 object-cover"
        />
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold dark:text-white">
            The 2025 Guide to Building Scalable Digital Systems
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A deep dive into building robust architectures that can scale with your business needs —
            from API design to database strategy.
          </p>

          <button className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            Read Article <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* SEARCH + FILTERS */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
        
        {/* SEARCH BAR */}
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
          <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition 
                ${category === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 dark:border-gray-600 dark:text-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {filteredArticles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:-translate-y-1 transition"
          >
            <img src={article.image} className="h-56 w-full object-cover" />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold dark:text-white">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{article.excerpt}</p>

              <button className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                Read More <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

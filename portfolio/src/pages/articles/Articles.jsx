/**  
 * ARTICLES PAGE — UPDATED WITH:
 * - Inline modal
 * - Image upload preview
 * - Tag manager (add/remove tags)
 * - Everything else from your previous version
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaShareAlt,
  FaHeart,
  FaRegBookmark,
  FaTrash,
  FaPlus,
  FaTimes,
  FaCloudUploadAlt,
  FaTag,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  loadArticles,
  toggleLike,
  isLiked,
  toggleBookmark,
  isBookmarked,
  addArticle,
  saveArticles,
} from "../../services/articlesService";

// ---------------------------------------------------------------------
// UTILITIES
// ---------------------------------------------------------------------
const CategoryToTag = {
  Tech: "Technology",
  Business: "Business",
  Design: "Design",
  Data: "Data Science",
  General: "General",
};

const SIMULATED_USER_ID = "local-user";

function estimateReadingTime(text) {
  if (!text) return "1 min";
  const words = text.split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

const placeholderImageUrl = (text) =>
  `https://placehold.co/1200x800/png?text=${encodeURIComponent(text)}`;

// ---------------------------------------------------------------------
// MODAL (Create Article)
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// MODAL (Create Article) — FIXED & IMPROVED
// ---------------------------------------------------------------------
const ArticleCreationModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageText, setImageText] = useState("New Insight");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [category, setCategory] = useState(Object.keys(CategoryToTag)[0]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  }

  function addTag() {
    if (!tagInput.trim()) return;
    if (!tags.includes(tagInput.trim())) {
      setTags((prev) => [...prev, tagInput.trim()]);
    }
    setTagInput("");
  }

  function removeTag(tag) {
    setTags((prev) => prev.filter((t) => t !== tag));
  }

  function handleCreate(e) {
    e.preventDefault();
    if (!title || !summary || !content || !category) {
      setError("All fields are required.");
      return;
    }

    const finalImage =
      imagePreview || placeholderImageUrl(imageText || "New Article");

    const newArticle = {
      id: Date.now(),
      title,
      excerpt: summary,
      content,
      category,
      tags: tags.length > 0 ? tags : [CategoryToTag[category]],
      authorId: SIMULATED_USER_ID,
      image: finalImage,
      createdAt: new Date().toISOString(),
    };

    onSave(newArticle);

    // Reset
    setTitle("");
    setSummary("");
    setContent("");
    setImageText("New Insight");
    setImageFile(null);
    setImagePreview("");
    setCategory(Object.keys(CategoryToTag)[0]);
    setTags([]);
    setLoading(false);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[999] p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl relative flex flex-col max-h-[90vh]">

        {/* HEADER - Sticky */}
        <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaCloudUploadAlt className="text-indigo-600" /> Publish New Article
          </h2>
          <button onClick={onClose} className="hover:text-red-500">
            <FaTimes size={20} />
          </button>
        </div>

        {/* CONTENT (Scrollable) */}
        <div className="overflow-y-auto px-6 py-4 space-y-4">
          {imagePreview && (
            <img
              src={imagePreview}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}

          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer flex items-center gap-2">
              <FaCloudUploadAlt /> Upload Image
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>

            <input
              className="px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 flex-1"
              placeholder="Placeholder text (if no image uploaded)…"
              value={imageText}
              onChange={(e) => setImageText(e.target.value)}
            />
          </div>

          <input
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            placeholder="Article title…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            placeholder="Short summary…"
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <textarea
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            rows={8}
            placeholder="Full content (Markdown supported)…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <select
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Object.keys(CategoryToTag).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {/* TAGS */}
          <div className="space-y-2">
            <label className="font-medium flex items-center gap-2">
              <FaTag /> Tags
            </label>

            <div className="flex gap-2">
              <input
                className="px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 flex-1"
                placeholder="Add tag…"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center gap-2"
                >
                  {t}
                  <button
                    type="button"
                    onClick={() => removeTag(t)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>

        {/* FOOTER - Sticky */}
        <div className="px-6 py-4 border-t dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-900">
          <button
            type="submit"
            onClick={handleCreate}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-lg"
          >
            Publish Article
          </button>
        </div>
      </div>
    </div>
  );
};


// ---------------------------------------------------------------------
// MAIN ARTICLES PAGE
// ---------------------------------------------------------------------
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [openModal, setOpenModal] = useState(false);

  const sentinelRef = useRef();

  // Load articles
  useEffect(() => {
    setArticles(loadArticles());
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category));
    return ["All", ...cats];
  }, [articles]);

  const filtered = articles.filter((a) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt?.toLowerCase().includes(q) ||
      a.tags?.some((t) => t.toLowerCase().includes(q));

    const matchesCategory = category === "All" || a.category === category;
    return matchesQuery && matchesCategory;
  });

  const visible = filtered.slice(0, visibleCount);

  // Infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((v) => Math.min(filtered.length, v + 6));
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [filtered.length]);

  // ACTIONS
  function handleNewArticle(article) {
    addArticle(article);
    setArticles(loadArticles());
  }

  function deleteArticle(id) {
    const updated = articles.filter((a) => a.id !== id);
    saveArticles(updated);
    setArticles(updated);
  }

  function handleLike(id) {
    toggleLike(id);
    setArticles(loadArticles());
  }

  function handleBookmark(id) {
    toggleBookmark(id);
    setArticles(loadArticles());
  }

  // RENDER
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold">Articles & Insights</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse, search, and publish new content.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md flex items-center gap-2"
        >
          <FaPlus /> New Article
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside className="md:col-span-1 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Search</label>
            <div className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 dark:bg-gray-700">
              <FaSearch className="text-gray-500" />
              <input
                className="bg-transparent outline-none w-full dark:text-gray-200"
                placeholder="Search…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Categories</h4>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`block w-full text-left px-3 py-2 rounded ${
                  category === c
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(articles.flatMap((a) => a.tags || []))).map(
                (tag) => (
                  <button
                    key={tag}
                    className="text-xs px-3 py-1 rounded border dark:border-gray-600 dark:text-gray-300"
                    onClick={() => setQuery(tag)}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-3 space-y-10">

          {/* FEATURED */}
          {visible.length > 0 && (
            <motion.article
              layout
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src={visible[0].image}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold">{visible[0].title}</h2>
                <p className="text-gray-500 text-sm">
                  {visible[0].category} •{" "}
                  {estimateReadingTime(visible[0].content)}
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  {visible[0].excerpt}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => handleLike(visible[0].id)}>
                    <FaHeart
                      className={`text-xl ${
                        isLiked(visible[0].id)
                          ? "text-pink-500"
                          : "text-gray-400 hover:text-pink-400"
                      }`}
                    />
                  </button>

                  <button onClick={() => handleBookmark(visible[0].id)}>
                    <FaRegBookmark
                      className={`text-xl ${
                        isBookmarked(visible[0].id)
                          ? "text-yellow-400"
                          : "text-gray-400 hover:text-yellow-300"
                      }`}
                    />
                  </button>

                  <button
                    onClick={() =>
                      navigator.share?.({
                        title: visible[0].title,
                        text: visible[0].excerpt,
                        url: `/article/${visible[0].id}`,
                      })
                    }
                  >
                    <FaShareAlt className="text-xl text-gray-500" />
                  </button>

                  <a
                    href={`/article/${visible[0].id}`}
                    className="ml-auto text-indigo-600 font-semibold flex items-center gap-2"
                  >
                    Read Full <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.article>
          )}

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {visible.slice(1).map((a) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative"
              >
                <img
                  src={a.image}
                  className="h-44 w-full object-cover"
                />

                {/* DELETE */}
                <button
                  onClick={() => deleteArticle(a.id)}
                  className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700"
                >
                  <FaTrash size={12} />
                </button>

                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {a.category} • {estimateReadingTime(a.content)}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {a.excerpt}
                  </p>

                  <div className="flex gap-2 items-center mt-3">
                    {a.tags?.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700"
                      >
                        {t}
                      </span>
                    ))}

                    <a
                      href={`/article/${a.id}`}
                      className="ml-auto text-indigo-600 font-semibold flex items-center gap-1"
                    >
                      Read <FaArrowRight />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div ref={sentinelRef} className="h-10" />
        </main>
      </div>

      {/* MODAL */}
      <ArticleCreationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleNewArticle}
      />
    </section>
  );
}

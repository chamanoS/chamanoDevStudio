import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../../services/articlesService";

function uid() {
  return "a" + Date.now().toString(36);
}

export default function AdminCreateArticle() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const id = uid();
    const article = {
      id,
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      image: image || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
      category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addArticle(article);
    alert("Article saved locally. You can export JSON to back it up.");
    navigate("/articles");
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-6">Create New Article</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Excerpt</label>
          <input value={excerpt} onChange={e => setExcerpt(e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Content (Markdown)</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} rows={10} className="w-full rounded border px-3 py-2 font-mono" />
        </div>
        <div>
          <label className="block text-sm">Image URL</label>
          <input value={image} onChange={e => setImage(e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Category</label>
            <input value={category} onChange={e => setCategory(e.target.value)} className="w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Tags (comma separated)</label>
            <input value={tags} onChange={e => setTags(e.target.value)} className="w-full rounded border px-3 py-2" />
          </div>
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save Article</button>
          <button type="button" onClick={() => { setTitle(""); setContent(""); setExcerpt(""); setImage(""); setTags(""); }} className="px-4 py-2 border rounded">Clear</button>
        </div>
      </form>
    </div>
  );
}

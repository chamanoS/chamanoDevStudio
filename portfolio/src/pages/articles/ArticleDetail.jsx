import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticleById, toggleLike, isLiked, toggleBookmark, isBookmarked } from "../../services/articlesService";
import { FaHeart, FaRegBookmark, FaShareAlt } from "react-icons/fa";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="mt-4">The article does not exist or was removed.</p>
        <Link to="/articles" className="text-indigo-600 mt-4 inline-block">Back to articles</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <img src={article.image} className="w-full h-64 object-cover rounded-xl mb-6" />
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">{article.title}</h1>
          <p className="text-sm text-gray-500 mt-2">{article.category} • {new Date(article.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { toggleLike(article.id); window.location.reload(); }}>
            <FaHeart className={`text-xl ${isLiked(article.id) ? "text-pink-500" : "text-gray-400"}`} />
          </button>
          <button onClick={() => { toggleBookmark(article.id); window.location.reload(); }}>
            <FaRegBookmark className={`text-xl ${isBookmarked(article.id) ? "text-yellow-400" : "text-gray-400"}`} />
          </button>
          <button onClick={async () => {
            try {
              await navigator.share?.({
                title: article.title,
                text: article.excerpt,
                url: window.location.href,
              });
            } catch (e) {
              alert("Sharing is not supported on this browser.");
            }
          }}>
            <FaShareAlt className="text-xl text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mt-6 prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

// Local storage-backed articles service
// Provides CRUD-like functions and import/export JSON
const STORAGE_KEY = "chamano_articles_v1";
const LIKES_KEY = "chamano_article_likes";
const BOOKMARKS_KEY = "chamano_article_bookmarks";

function now() {
  return new Date().toISOString();
}

function defaultSeed() {
  return [
    {
      id: "a1",
      title: "How I Built a Retail Inventory Forecasting System",
      slug: "retail-inventory-forecasting",
      excerpt:
        "Architecture, dataset choices and BI automation used to reduce stock-outs by 37%.",
      content:
`## Problem
A national retail chain kept running out of stock on bestselling SKUs...

## Solution
We built a forecasting model with Python + deployed models feeding Power BI...
`,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      tags: ["Case Study", "Data", "Power BI"],
      category: "Case Studies",
      createdAt: now(),
      updatedAt: now(),
    },
    {
      id: "a2",
      title: "Modern Frontend Architecture for 2025",
      slug: "modern-frontend-architecture-2025",
      excerpt:
        "Component design, folder structure and practical patterns for scalable frontends.",
      content:
`## Overview
Component-driven development with Vite + React + Tailwind...

### Recommended patterns
- Atomic components
- Feature folders
`,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
      tags: ["Web Dev", "React"],
      category: "Web Dev",
      createdAt: now(),
      updatedAt: now(),
    },
  ];
}

export function loadArticles() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seed = defaultSeed();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed parsing articles JSON", e);
    const seed = defaultSeed();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }
}

export function saveArticles(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function exportArticlesJSON() {
  return JSON.stringify(loadArticles(), null, 2);
}

export function importArticlesJSON(json) {
  try {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) throw new Error("Invalid JSON structure");
    saveArticles(parsed);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export function addArticle(article) {
  const list = loadArticles();
  list.unshift(article);
  saveArticles(list);
}

export function updateArticle(updated) {
  const list = loadArticles();
  const idx = list.findIndex((p) => p.id === updated.id);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...updated, updatedAt: now() };
    saveArticles(list);
  }
}

export function deleteArticle(id) {
  const list = loadArticles().filter((p) => p.id !== id);
  saveArticles(list);
}

export function getArticleById(id) {
  return loadArticles().find((p) => p.id === id);
}

// Likes & bookmarks (local)
export function toggleLike(id) {
  const raw = JSON.parse(localStorage.getItem(LIKES_KEY) || "{}");
  raw[id] = !raw[id];
  localStorage.setItem(LIKES_KEY, JSON.stringify(raw));
  return raw[id];
}
export function isLiked(id) {
  const raw = JSON.parse(localStorage.getItem(LIKES_KEY) || "{}");
  return !!raw[id];
}

export function toggleBookmark(id) {
  const raw = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "{}");
  raw[id] = !raw[id];
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(raw));
  return raw[id];
}
export function isBookmarked(id) {
  const raw = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "{}");
  return !!raw[id];
}

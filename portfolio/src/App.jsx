import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import LandingPage from "./components/landingpage/LandingPage";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/articles/ArticleDetail";
import AdminCreateArticle from "./pages/articles/AdminCreateArticle";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10">

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/admin/new-article" element={<AdminCreateArticle />} />
             <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </main>

      </div>

    </div>
  );
}

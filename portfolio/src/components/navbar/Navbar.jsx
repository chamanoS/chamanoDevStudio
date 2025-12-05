import React from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm fixed top-0 left-0  shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-7 px-6">
        <a href="/" className="text-xl font-semibold text-gray-900">
          ChamanoDevStudio.com
        </a>
        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="/articles" className="text-gray-600 hover:text-gray-900">Articles</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}

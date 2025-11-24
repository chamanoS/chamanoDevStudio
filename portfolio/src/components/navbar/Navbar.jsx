import React from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-xl font-semibold text-gray-900">
          ChamanoDevStudio.com
        </a>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Articles</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}

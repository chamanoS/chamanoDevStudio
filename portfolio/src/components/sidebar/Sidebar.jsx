import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 bg-gray-50 p-6">
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Categories
          </h2>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
            <li><a href="#" className="hover:text-gray-900">React</a></li>
            <li><a href="#" className="hover:text-gray-900">JavaScript</a></li>
            <li><a href="#" className="hover:text-gray-900">Life</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 uppercase text-sm mb-2">
            Featured
          </h2>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Getting Started with React</a></li>
            <li><a href="#" className="hover:text-gray-900">Building a Portfolio</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

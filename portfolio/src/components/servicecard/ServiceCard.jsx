import React from "react";

export default function ServiceCard({ title, subtitle, icon }) {
  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/60 border border-transparent hover:border-gray-200 hover:shadow-lg transition rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center shadow">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition text-sm text-gray-500">
        Learn more →
      </div>
    </div>
  );
}
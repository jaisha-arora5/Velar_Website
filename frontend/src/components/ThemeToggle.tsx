"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-16 items-center rounded-full transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-700 hover:bg-slate-600"
          : "bg-amber-200 hover:bg-amber-300"
      }`}
      aria-label="Toggle theme"
    >
      {/* Sliding circle background */}
      <div
        className={`inline-flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          theme === "dark" ? "translate-x-1" : "translate-x-7"
        }`}
      >
        {/* Icon */}
        <span className="text-lg">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </button>
  );
}

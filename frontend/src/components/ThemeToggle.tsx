"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "dark" as const, label: "Dark", icon: "🌙" },
    { value: "custom" as const, label: "Custom", icon: "✨" },
  ];

  return (
    <div className="inline-flex gap-1 rounded-full p-1 bg-slate-900/40 backdrop-blur border border-white/10">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            theme === t.value
              ? "bg-white/20 text-white shadow-lg border border-white/30"
              : "text-white/70 hover:text-white/90 hover:bg-white/10"
          }`}
          aria-label={`Switch to ${t.label} theme`}
        >
          <span>{t.icon}</span>
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetY - 20,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: isDarkTheme ? "#000000" : isCustomTheme ? "#FAF9F6" : "#fef3c7",
        borderTopColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : isCustomTheme ? "rgba(64, 121, 140, 0.2)" : "rgba(217, 119, 6, 0.2)"
      }}
      className={`w-full border-t py-12 px-6 relative z-20 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT BLOCK: BRAND IDENTITY MATRIX */}
        <div className={`flex items-center gap-2.5 select-none transition-colors duration-300 ${
          isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
        }`}>
          <div 
            className={`w-4 h-4 rounded-sm transform rotate-45 flex-shrink-0 ${
              isDarkTheme ? "bg-blue-600" : isCustomTheme ? "bg-[#36558F]" : "bg-yellow-500"
            }`}
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base leading-none">
              VELAR
            </span>
            <span 
              className={`text-[8px] font-semibold uppercase tracking-widest mt-1 transition-colors duration-300 ${
                isDarkTheme ? "text-slate-500" : isCustomTheme ? "text-[#40798C]" : "text-amber-700"
              }`}
            >
              Info Pvt LTD
            </span>
          </div>
        </div>

        {/* CENTER BLOCK: QUICK LINKS MATRIX */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {["home", "about", "solutions", "industries", "vision", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-xs font-medium capitalize transition-colors cursor-pointer duration-300 ${
                isDarkTheme
                  ? "text-slate-500 hover:text-cyan-400"
                  : isCustomTheme
                  ? "text-[#40798C] hover:text-[#36558F]"
                  : "text-amber-800 hover:text-yellow-700"
              }`}
            >
              {id === "why-us" ? "Why Choose Us" : id.replace("-", " ")}
            </button>
          ))}
        </nav>

        {/* RIGHT BLOCK: LEGAL & COPYRIGHT REGISTRATION ROWS */}
        <div className={`text-center md:text-right space-y-1 transition-colors duration-300 ${
          isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#40798C]" : "text-amber-800"
        }`}>
          <p className="text-xs font-medium">
            &copy; {currentYear} Velar Info Pvt Ltd. All rights reserved.
          </p>
          <p className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${
            isDarkTheme ? "text-slate-600" : isCustomTheme ? "text-[#36558F]" : "text-amber-700"
          }`}>
            Sovereign Architecture Network &bull; SECURE NODES
          </p>
        </div>

      </div>
    </footer>
  );
}
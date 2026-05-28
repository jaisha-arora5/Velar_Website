"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Solutions", id: "solutions" },
  { label: "Industries", id: "industries" },
  { label: "Vision", id: "vision" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Safe Guard: If user forces scroll to the absolute bottom, snap directly to contact
      const triggerBottomThreshold = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (triggerBottomThreshold) {
        setActiveSection("contact");
        return;
      }

      // 2. Dynamic Viewport Matrix tracking
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the top of the section has scrolled up past the middle-upper window zone
          // but the bottom hasn't left the top of the screen yet, it's the active view!
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial pass coordinate check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetY - 20, // Small 20px offset offset to keep spacing gorgeous below the glass navbar
        behavior: "smooth"
      });
    }
  };

  const isDarkTheme = theme === "dark";

  return (
    <header 
      style={{
        backgroundColor: isDarkTheme ? "rgba(3, 0, 20, 0.8)" : "rgba(241, 232, 184, 0.9)",
        borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(31, 19, 0, 0.15)",
      }}
      className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO LINK */}
        <div 
          className={`flex items-center gap-2.5 cursor-pointer select-none transition-colors duration-300 ${
            isDarkTheme ? "text-white" : "text-[#1F1300]"
          }`}
          onClick={() => scrollToSection("home")}
        >
          <div 
            className={`w-5 h-5 rounded-sm transform rotate-45 flex-shrink-0 ${
              isDarkTheme ? "bg-blue-600" : "bg-yellow-500"
            }`}
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg leading-none">
              VELAR
            </span>
            <span 
              className={`text-[9px] font-semibold uppercase tracking-widest mt-1 ${
                isDarkTheme ? "text-slate-400" : "text-amber-800"
              }`}
            >
              Enterprise Solutions
            </span>
          </div>
        </div>

        {/* TRACKING LINKS MESH */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all relative py-2.5 cursor-pointer duration-300 ${
                activeSection === item.id
                  ? isDarkTheme 
                    ? "text-blue-400 font-semibold"
                    : "text-yellow-600 font-semibold"
                  : isDarkTheme
                  ? "text-slate-400 hover:text-white"
                  : "text-amber-900 hover:text-amber-700"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full animate-[pulse_2s_infinite] ${
                    isDarkTheme ? "bg-blue-500" : "bg-yellow-500"
                  }`}
                />
              )}
            </button>
          ))}
        </nav>

        {/* ACTION CALL CTA & THEME TOGGLE */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => scrollToSection("contact")}
            className={`hidden md:block text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-all shadow-sm cursor-pointer ${
              isDarkTheme
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : "text-white bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            Request Briefing
          </button>
        </div>
      </div>
    </header>
  );
}
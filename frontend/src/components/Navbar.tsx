"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Vision", path: "/vision" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";

  return (
    <header 
      style={{
        backgroundColor: isDarkTheme 
          ? "rgba(3, 0, 20, 0.8)" 
          : isCustomTheme 
          ? "rgba(218, 240, 238, 0.95)" 
          : "rgba(241, 232, 184, 0.9)",
        borderColor: isDarkTheme 
          ? "rgba(255, 255, 255, 0.1)" 
          : isCustomTheme 
          ? "rgba(64, 121, 140, 0.2)" 
          : "rgba(31, 19, 0, 0.15)",
      }}
      className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO LINK */}
        <Link 
          href="/"
          className={`flex items-center gap-2.5 cursor-pointer select-none transition-colors duration-300 ${
            isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
          }`}
        >
          <div 
            className={`w-5 h-5 rounded-sm transform rotate-45 shrink-0 ${
              isDarkTheme ? "bg-blue-600" : isCustomTheme ? "bg-[#36558F]" : "bg-yellow-500"
            }`}
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg leading-none">
              VELAR
            </span>
            <span 
              className={`text-[9px] font-semibold uppercase tracking-widest mt-1 ${
                isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#40798C]" : "text-amber-800"
              }`}
            >
              Info Pvt LTD
            </span>
          </div>
        </Link>

        {/* TRACKING LINKS MESH */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all relative py-2.5 cursor-pointer duration-300 ${
                  isActive
                    ? isDarkTheme 
                      ? "text-blue-400 font-semibold"
                      : isCustomTheme
                      ? "text-[#36558F] font-semibold"
                      : "text-yellow-600 font-semibold"
                    : isDarkTheme
                    ? "text-slate-400 hover:text-white"
                    : isCustomTheme
                    ? "text-[#40798C] hover:text-[#36558F]"
                    : "text-amber-900 hover:text-amber-700"
                }`}
              >
                {item.label}
                {isActive && (
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full animate-[pulse_2s_infinite] ${
                      isDarkTheme ? "bg-blue-500" : isCustomTheme ? "bg-[#36558F]" : "bg-yellow-500"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTION CALL CTA & THEME TOGGLE */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="/contact"
            className={`hidden md:block text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-all shadow-sm cursor-pointer ${
              isDarkTheme
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : isCustomTheme
                ? "text-white bg-[#36558F] hover:bg-[#40798C]"
                : "text-white bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            Request Briefing
          </Link>
        </div>
      </div>
    </header>
  );
}
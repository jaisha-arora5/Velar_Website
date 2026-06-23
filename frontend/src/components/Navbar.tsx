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

const solutionsItems = [
  {
    title: "Cognitive RAG",
    hash: "/solutions#cognitive-rag",
    desc: "Secure document semantic search & indexing",
    icon: "📋"
  },
  {
    title: "Workflow Automation",
    hash: "/solutions#workflow-routing",
    desc: "Intelligent cross-department file routing",
    icon: "⚙️"
  },
  {
    title: "Decision Intelligence",
    hash: "/solutions#decision-intelligence",
    desc: "Real-time system diagnostics & BI dashboards",
    icon: "📊"
  },
  {
    title: "Fine-Tuned LLMs",
    hash: "/solutions#domain-llms",
    desc: "Localized domain-specific language models",
    icon: "🧠"
  },
  {
    title: "Bespoke SaaS",
    hash: "/solutions#bespoke-saas",
    desc: "High-performance secure enterprise portals",
    icon: "💻"
  },
  {
    title: "Vernacular AI Chat",
    hash: "/solutions#conversational-ai",
    desc: "Localized regional language chatbots",
    icon: "💬"
  }
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
            
            if (item.label === "Solutions") {
              return (
                <div key={item.path} className="relative group py-2.5">
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-all cursor-pointer duration-300 flex items-center gap-1 ${
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
                    <span>{item.label}</span>
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    {isActive && (
                      <span 
                        className={`absolute bottom-0 left-0 w-[calc(100%-14px)] h-0.5 rounded-full animate-[pulse_2s_infinite] ${
                          isDarkTheme ? "bg-blue-500" : isCustomTheme ? "bg-[#36558F]" : "bg-yellow-500"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Glassmorphic Dropdown Megamenu */}
                  <div 
                    style={{
                      backgroundColor: isDarkTheme ? "rgba(10, 7, 38, 0.95)" : "rgba(255, 255, 255, 0.98)",
                      borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(64, 121, 140, 0.2)",
                      boxShadow: isDarkTheme ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "0 20px 40px -10px rgba(64, 121, 140, 0.15)"
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[560px] rounded-2xl border p-5 grid grid-cols-2 gap-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 backdrop-blur-xl z-50 transform -translate-y-2 group-hover:translate-y-0"
                  >
                    {solutionsItems.map((sol, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sol.hash}
                        style={{
                          borderColor: "transparent"
                        }}
                        className={`p-3 rounded-xl border flex gap-3 text-left transition-all duration-300 cursor-pointer ${
                          isDarkTheme 
                            ? "hover:bg-white/[0.03] hover:border-white/5" 
                            : "hover:bg-[#DAF0EE]/30 hover:border-[#40798C]/10"
                        }`}
                      >
                        <div 
                          style={{
                            backgroundColor: isDarkTheme ? "rgba(255,255,255,0.03)" : "rgba(64, 121, 140, 0.08)",
                            color: isDarkTheme ? "#67e8f9" : "#36558F"
                          }}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                        >
                          {sol.icon}
                        </div>
                        <div className="space-y-0.5">
                          <h4 className={`text-xs font-bold transition-colors duration-300 ${
                            isDarkTheme ? "text-white" : "text-[#1A2530]"
                          }`}>
                            {sol.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 leading-snug line-clamp-2">
                            {sol.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              );
            }

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
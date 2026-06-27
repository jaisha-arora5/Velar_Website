"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    desc: "Secure document semantic search & indexing"
  },
  {
    title: "Workflow Automation",
    hash: "/solutions#workflow-routing",
    desc: "Intelligent cross-department file routing"
  },
  {
    title: "Decision Intelligence",
    hash: "/solutions#decision-intelligence",
    desc: "Real-time system diagnostics & BI dashboards"
  },
  {
    title: "Fine-Tuned LLMs",
    hash: "/solutions#domain-llms",
    desc: "Localized domain-specific language models"
  },
  {
    title: "Bespoke SaaS",
    hash: "/solutions#bespoke-saas",
    desc: "High-performance secure enterprise portals"
  },
  {
    title: "Vernacular AI Chat",
    hash: "/solutions#conversational-ai",
    desc: "Localized regional language chatbots"
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  // Close mobile menu when page path changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        style={{
          backgroundColor: "rgba(218, 240, 238, 0.95)",
          borderColor: "rgba(64, 121, 140, 0.2)",
        }}
        className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO LINK */}
          <Link 
            href="/"
            className="flex items-center gap-2.5 cursor-pointer select-none transition-colors duration-300 text-[#1A2530]"
          >
            <div className="w-5 h-5 rounded-sm transform rotate-45 shrink-0 bg-[#36558F]" />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg leading-none">
                VELAR
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest mt-1 text-[#40798C]">
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
                          ? "text-[#36558F] font-semibold"
                          : "text-[#40798C] hover:text-[#36558F]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-[calc(100%-14px)] h-0.5 rounded-full animate-[pulse_2s_infinite] bg-[#36558F]" />
                      )}
                    </Link>

                    {/* Glassmorphic Dropdown Megamenu */}
                    <div 
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.98)",
                        borderColor: "rgba(64, 121, 140, 0.2)",
                        boxShadow: "0 20px 40px -10px rgba(64, 121, 140, 0.15)"
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
                          className="p-3 rounded-xl border flex gap-3 text-left transition-all duration-300 cursor-pointer hover:bg-[#DAF0EE]/30 hover:border-[#40798C]/10"
                        >
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold transition-colors duration-300 text-[#1A2530]">
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
                      ? "text-[#36558F] font-semibold"
                      : "text-[#40798C] hover:text-[#36558F]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full animate-[pulse_2s_infinite] bg-[#36558F]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTION CALL CTA & HAMBURGER */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden md:block text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-all shadow-sm cursor-pointer text-white bg-[#36558F] hover:bg-[#40798C]"
            >
              Request Briefing
            </Link>

            {/* Animated Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#40798C] hover:text-[#36558F] hover:bg-[#DAF0EE]/50 focus:outline-none transition-colors duration-300 z-50 relative animate-fade-in"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span 
                  className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-2"
                  }`} 
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`} 
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45" : "translate-y-2"
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glassmorphic Drawer Menu */}
      <div 
        style={{
          backgroundColor: "rgba(218, 240, 238, 0.98)",
          borderColor: "rgba(64, 121, 140, 0.2)",
        }}
        className={`fixed inset-x-0 top-20 bottom-0 z-40 border-t backdrop-blur-xl md:hidden flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto visible" 
            : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            if (item.label === "Solutions") {
              return (
                <div key={item.path} className="flex flex-col">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className={`flex items-center justify-between py-3 text-base font-semibold transition-colors duration-300 w-full text-left cursor-pointer ${
                      isActive ? "text-[#36558F]" : "text-[#40798C] hover:text-[#36558F]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Solutions Accordion Content */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isSolutionsOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0 pl-4 border-l border-[#40798C]/20 flex flex-col gap-3">
                      {solutionsItems.map((sol, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sol.hash}
                          className="py-2 flex flex-col text-left transition-colors duration-300 hover:text-[#36558F] cursor-pointer"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-sm font-bold text-[#1A2530] hover:text-[#36558F] transition-colors duration-300">
                            {sol.title}
                          </span>
                          <span className="text-xs text-slate-500 leading-snug">
                            {sol.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`py-3 text-base font-semibold transition-colors duration-300 block cursor-pointer ${
                  isActive ? "text-[#36558F]" : "text-[#40798C] hover:text-[#36558F]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button at Bottom */}
        <div className="p-6 border-t border-[#40798C]/10 bg-[#DAF0EE]/10 flex flex-col">
          <Link
            href="/contact"
            className="w-full text-center text-sm font-semibold uppercase tracking-wider py-4 rounded-md transition-all shadow-md text-white bg-[#36558F] hover:bg-[#40798C] cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Briefing
          </Link>
        </div>
      </div>
    </>
  );
}
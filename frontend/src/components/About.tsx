"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";

  const [skills] = useState([
    { name: "Secure On-Premises LLM Fine-Tuning", value: 95 },
    { name: "Multi-Department Workflow Automation Accuracy", value: 92 },
    { name: "Legacy Enterprise Data Migration Pipelines", value: 88 },
  ]);

  const stats = [
    { number: "99.9%", label: "System Operational Uptime" },
    { number: "15M+", label: "Daily Secure API Operations" },
    { number: "100%", label: "Sovereign Air-Gapped Compliance" },
    { number: "0", label: "Cloud Vulnerability Factor" },
  ];

  // Smooth scroll handler function dedicated to the target contact container
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetY - 20, // Clean offset to account for the fixed glass navbar
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={`w-full min-h-screen bg-transparent px-6 py-32 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300`}>
      <div className="max-w-7xl w-full space-y-28 relative z-10">
        
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Tech Graphics - AI PHOTO */}
          <div 
            style={{
              backgroundColor: isDarkTheme ? "#0A0726" : isCustomTheme ? "#FAF9F6" : "#fef3c7",
              borderColor: isDarkTheme 
                ? "rgba(34, 211, 238, 0.1)" 
                : isCustomTheme 
                ? "rgba(64, 121, 140, 0.2)" 
                : "rgba(217, 119, 6, 0.3)"
            }}
            className={`relative aspect-video lg:aspect-square w-full border rounded-2xl overflow-hidden shadow-2xl group hover:border-opacity-50 transition-all duration-300`}
          >
            <img 
              src="/AI-PHOTO-1.JPG" 
              alt="Velar Enterprise AI Infrastructure" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side: Text & Corporate Mission Narrative */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span 
                style={{
                  color: isDarkTheme ? "#06b6d4" : isCustomTheme ? "#36558F" : "#d97706",
                  backgroundColor: isDarkTheme 
                    ? "rgba(13, 42, 74, 0.4)" 
                    : isCustomTheme 
                    ? "rgba(218, 240, 238, 0.6)" 
                    : "rgba(217, 119, 6, 0.15)",
                  borderColor: isDarkTheme 
                    ? "rgba(6, 182, 212, 0.4)" 
                    : isCustomTheme 
                    ? "rgba(54, 85, 143, 0.3)" 
                    : "rgba(217, 119, 6, 0.3)"
                }}
                className="inline-block text-xs font-mono tracking-widest uppercase border px-3 py-1 rounded-full"
              >
                ABOUT VELAR
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight transition-colors duration-300 ${
                isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
              }`}>
                We Architect the Sovereign Intelligence Engine for High-Security Enterprise Operations.
              </h2>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900"
            }`}>
              Velar bridges the gap between massive institutional data assets and localized, secure AI execution model pipelines. Built specifically to handle the strict operational regulations of CPSUs, SPSUs, and heavy engineering environments, our systems automate highly repetitive workflows, ingest complex documentation, and deliver mission-critical decisions with absolute zero data leakage. We do not just implement models—we engineer ring-fenced tech infrastructure.
            </p>
           
          </div>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-8">
          {/* Left Column: Skill Capabilities */}
          <div className="space-y-8 w-full">
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-300 ${
                isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
              }`}>
                Our Core Engineering Vectors
              </h3>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900"
              }`}>
                Our foundational development models focus heavily on strict compliance, deployment speed, and localized computing reliability.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className={`flex justify-between text-xs sm:text-sm font-medium tracking-tight transition-colors duration-300 ${
                    isDarkTheme ? "text-slate-200" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900"
                  }`}>
                    <span>{skill.name}</span>
                    <span className={`font-mono ${isDarkTheme ? "text-cyan-400" : isCustomTheme ? "text-[#36558F]" : "text-yellow-600"}`}>{skill.value}%</span>
                  </div>
                  <div 
                    style={{
                      backgroundColor: isDarkTheme ? "#0A0726" : isCustomTheme ? "#DAF0EE" : "#fef3c7",
                      borderColor: isDarkTheme 
                        ? "rgba(255, 255, 255, 0.1)" 
                        : isCustomTheme 
                        ? "rgba(64, 121, 140, 0.15)" 
                        : "rgba(217, 119, 6, 0.2)"
                    }}
                    className="w-full h-1.5 border rounded-full overflow-hidden"
                  >
                    <div 
                      className={`h-full bg-gradient-to-r rounded-full transition-all duration-1000 ${
                        isDarkTheme 
                          ? "from-blue-600 to-cyan-400" 
                          : isCustomTheme 
                          ? "from-[#36558F] to-[#40798C]" 
                          : "from-yellow-500 to-yellow-400"
                      }`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Numeric Trust Matrix Blocks */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full">
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: isDarkTheme ? "#0A0726" : isCustomTheme ? "#DAF0EE" : "#fef3c7",
                  borderColor: isDarkTheme 
                    ? "rgba(34, 211, 238, 0.1)" 
                    : isCustomTheme 
                    ? "rgba(64, 121, 140, 0.2)" 
                    : "rgba(217, 119, 6, 0.2)"
                }}
                className={`border p-6 rounded-2xl transition-all duration-300 shadow-md group hover:border-opacity-50`}
              >
                <div className={`text-2xl sm:text-4xl font-extrabold tracking-tight group-hover:transition-colors duration-300 ${
                  isDarkTheme 
                    ? "text-white group-hover:text-cyan-400" 
                    : isCustomTheme
                    ? "text-[#36558F] group-hover:text-[#40798C]"
                    : "text-yellow-600 group-hover:text-yellow-700"
                }`}>
                  {stat.number}
                </div>
                <div className={`text-[11px] sm:text-xs font-medium tracking-normal mt-2 leading-snug transition-colors duration-300 ${
                  isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#40798C]" : "text-amber-800"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div 
          style={{
            backgroundImage: isDarkTheme 
              ? "linear-gradient(to bottom, #0A0726, #050317)" 
              : isCustomTheme 
              ? "linear-gradient(to bottom, #DAF0EE, #FAF9F6)" 
              : "linear-gradient(to bottom, #fef3c7, #fef9e7)",
            borderColor: isDarkTheme 
              ? "rgba(34, 211, 238, 0.1)" 
              : isCustomTheme 
              ? "rgba(64, 121, 140, 0.2)" 
              : "rgba(217, 119, 6, 0.2)"
          }}
          className={`w-full relative rounded-2xl border p-8 sm:p-12 text-center overflow-hidden shadow-2xl group hover:border-opacity-50 transition-all duration-300`}
        >
          <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isDarkTheme ? "bg-blue-600/10" : isCustomTheme ? "bg-[#36558F]/10" : "bg-amber-200/20"
          }`} />
          <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isDarkTheme ? "bg-cyan-500/10" : isCustomTheme ? "bg-[#40798C]/10" : "bg-amber-100/15"
          }`} />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className={`text-[10px] font-mono tracking-widest uppercase ${
              isDarkTheme ? "text-cyan-400" : isCustomTheme ? "text-[#36558F]" : "text-amber-800"
            }`}>
              SECURE INTERACTION NETWORK
            </span>
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight leading-tight transition-colors duration-300 ${
              isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
            }`}>
              Ready to Transform Your Institutional Operations Into an Autonomous Intelligence Hub?
            </h3>
            <div className="pt-2">
              {/* ONLY this element has the active scroll router listener mapped */}
              <button 
                onClick={() => scrollToSection("contact")}
                className={`text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer ${
                  isDarkTheme
                    ? "text-[#030014] bg-cyan-400 hover:bg-cyan-300 shadow-cyan-500/10"
                    : isCustomTheme
                    ? "text-white bg-[#36558F] hover:bg-[#40798C] shadow-[#36558F]/20"
                    : "text-white bg-amber-600 hover:bg-amber-700 shadow-amber-600/20"
                }`}
              >
                Schedule Private Briefing
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
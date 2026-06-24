"use client";

import React, { useRef, useState } from "react";

interface SectorTheme {
  customAccent: string;
  customBg: string;
  customGlow: string;
  gradient: string;
}

interface IndustryItem {
  name: string;
  sub: string;
  challenges: string;
  response: string;
  useCase: string;
  theme: SectorTheme;
}

// Helper component to render beautiful custom abstract SVGs for each industry
function SectorGraphic({ name, className }: { name: string; className?: string }) {
  if (name === "CPSUs") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 80h70M25 80V45M38 80V45M50 80V45M62 80V45M75 80V45" />
        <path strokeWidth="2" strokeLinecap="round" d="M20 45h60M15 45l35-25 35 25" />
        <circle cx="50" cy="50" r="35" strokeWidth="0.75" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
        <circle cx="50" cy="50" r="42" strokeWidth="0.5" opacity="0.4" />
      </svg>
    );
  }
  if (name === "SPSUs") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="8" strokeWidth="2" />
        <circle cx="20" cy="30" r="6" strokeWidth="1.5" />
        <circle cx="80" cy="30" r="6" strokeWidth="1.5" />
        <circle cx="30" cy="75" r="6" strokeWidth="1.5" />
        <circle cx="70" cy="75" r="6" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="20" y2="30" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="50" y1="50" x2="80" y2="30" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="50" y1="50" x2="30" y2="75" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="50" y1="50" x2="70" y2="75" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="30" strokeWidth="0.75" opacity="0.6" strokeDasharray="6 3" className="animate-[spin_20s_linear_infinite]" />
      </svg>
    );
  }
  if (name === "Infrastructure") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinejoin="round" d="M50 20L80 35L50 50L20 35Z" />
        <path strokeWidth="1.5" strokeLinejoin="round" d="M20 35V65L50 80V50Z" />
        <path strokeWidth="1.5" strokeLinejoin="round" d="M50 50V80L80 65V35Z" />
        <line x1="50" y1="35" x2="50" y2="50" strokeWidth="1" opacity="0.7" />
        <line x1="35" y1="42" x2="65" y2="42" strokeWidth="1" opacity="0.7" />
        <circle cx="50" cy="35" r="3" fill="currentColor" className="animate-pulse" />
      </svg>
    );
  }
  if (name === "Energy Sector") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M55 15L30 50h22l-7 35L70 50H48l7-35z" />
        <path strokeWidth="0.75" strokeDasharray="3 3" d="M25 25h50M25 75h50" opacity="0.6" />
        <circle cx="50" cy="50" r="38" strokeWidth="0.5" opacity="0.3" />
      </svg>
    );
  }
  if (name === "Utilities") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="55" r="20" strokeWidth="1.5" />
        <circle cx="50" cy="55" r="30" strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_30s_linear_infinite]" />
        <path strokeWidth="1.5" strokeLinecap="round" d="M50 15c0 0-15 18-15 25a15 15 0 0030 0c0-7-15-25-15-25z" />
        <path strokeWidth="1" d="M25 85c15-5 35 5 50 0" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "Manufacturing") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="24" strokeWidth="2" className="animate-[spin_15s_linear_infinite]" strokeDasharray="12 4" />
        <circle cx="50" cy="50" r="14" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="6" strokeWidth="1" />
        <path strokeWidth="1.25" strokeLinecap="round" d="M15 15h20l10 15M85 85H65L55 70" opacity="0.8" />
        <circle cx="15" cy="15" r="3" fill="currentColor" />
        <circle cx="85" cy="85" r="3" fill="currentColor" />
      </svg>
    );
  }
  if (name === "Institutional Enterprises") {
    return (
      <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <rect x="25" y="20" width="50" height="15" rx="3" strokeWidth="1.5" />
        <rect x="25" y="42" width="50" height="15" rx="3" strokeWidth="1.5" />
        <rect x="25" y="64" width="50" height="15" rx="3" strokeWidth="1.5" />
        <path strokeWidth="1" d="M50 35v7M50 57v7" strokeDasharray="2 2" />
        <circle cx="35" cy="27" r="2" fill="currentColor" />
        <circle cx="35" cy="49" r="2" fill="currentColor" />
        <circle cx="35" cy="71" r="2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className={`${className} transition-all duration-500`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="40" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="28" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="14" strokeWidth="0.75" />
      <line x1="50" y1="50" x2="78" y2="22" strokeWidth="1.5" className="origin-[50px_50px] animate-[spin_6s_linear_infinite]" strokeLinecap="round" />
      <circle cx="35" cy="35" r="2" fill="currentColor" className="animate-ping" />
      <circle cx="70" cy="60" r="2.5" fill="currentColor" className="animate-pulse" />
    </svg>
  );
}

export default function Industries() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSector, setActiveSector] = useState<IndustryItem | null>(null);

  const sectors: IndustryItem[] = [
    { 
      name: "CPSUs", 
      sub: "Central Public Sector",
      challenges: "Vast volumes of scattered historical data, strict central compliance mandates, and high latency in inter-departmental note-sheet routing.",
      response: "On-premises semantic engines that read and query circulars automatically, auto-generating note-sheets that match ministry guidelines perfectly.",
      useCase: "Secure Policy Cross-Reference and Note-Sheet Drafting Automation",
      theme: {
        customAccent: "text-sky-600",
        customBg: "rgba(2, 132, 199, 0.08)",
        customGlow: "rgba(2, 132, 199, 0.15)",
        gradient: "from-cyan-500 to-blue-600"
      }
    },
    { 
      name: "SPSUs", 
      sub: "Regional Governance",
      challenges: "Handling multiple local/vernacular languages, legacy database constraints, and digitizing files with restricted internet connection guidelines.",
      response: "Vernacular NLP engines integrated with internal database matrices, delivering instant translation and policy retrieval without cloud dependencies.",
      useCase: "State-Wide Vernacular Knowledge Management & Secure Chat Assistance",
      theme: {
        customAccent: "text-indigo-600",
        customBg: "rgba(79, 70, 229, 0.08)",
        customGlow: "rgba(79, 70, 229, 0.15)",
        gradient: "from-indigo-500 to-purple-600"
      }
    },
    { 
      name: "Infrastructure", 
      sub: "Smart City Matrices",
      challenges: "Processing high-volume temporal telemetry from sensors, predictive scheduling of public work systems, and resource leakages.",
      response: "Localized AI forecasting pipelines that ingest IoT streams on internal smart city grids, providing anomaly alerts and asset tracking.",
      useCase: "Smart Utility Telematic Analysis & Predictive Structural Alerts",
      theme: {
        customAccent: "text-teal-600",
        customBg: "rgba(13, 148, 136, 0.08)",
        customGlow: "rgba(13, 148, 136, 0.15)",
        gradient: "from-teal-500 to-emerald-600"
      }
    },
    { 
      name: "Energy Sector", 
      sub: "Power Grid Automation",
      challenges: "Grid degradation modeling, high-volume telemetry ingestion, and preventing grid instability with absolute operational reliability.",
      response: "Predictive maintenance algorithms deployed on air-gapped server racks, processing transformer logs to prevent grid failure.",
      useCase: "Predictive Thermal/Load Grid Anomaly Detection and Equipment Lifetime Estimation",
      theme: {
        customAccent: "text-amber-600",
        customBg: "rgba(217, 119, 6, 0.08)",
        customGlow: "rgba(217, 119, 6, 0.15)",
        gradient: "from-amber-500 to-orange-600"
      }
    },
    { 
      name: "Utilities", 
      sub: "Water & Flow Logistics",
      challenges: "Inefficiencies in billing data processing, water leakage detection, and scheduling dispatcher responses for critical pipe grids.",
      response: "Computer vision and pattern analysis software running locally to identify utility defects, combined with automated routing rules for crew dispatch.",
      useCase: "Leakage Location Analytics & Automatic Dispatch Optimization",
      theme: {
        customAccent: "text-sky-600",
        customBg: "rgba(2, 132, 199, 0.08)",
        customGlow: "rgba(2, 132, 199, 0.15)",
        gradient: "from-blue-500 to-sky-500"
      }
    },
    { 
      name: "Manufacturing", 
      sub: "Smart Factory Integration",
      challenges: "Quality control anomalies on assembly lines, strict physical safety protocols, and supply-chain stock prediction under volatile markets.",
      response: "Local edge-based visual inspection systems combined with predictive inventory models trained exclusively on factory throughput logs.",
      useCase: "Defect Isolation, Safety Gear Compliance Detection, and Procurement Forecasting",
      theme: {
        customAccent: "text-rose-600",
        customBg: "rgba(225, 29, 72, 0.08)",
        customGlow: "rgba(225, 29, 72, 0.15)",
        gradient: "from-rose-500 to-red-600"
      }
    },
    { 
      name: "Institutional Enterprises", 
      sub: "Corporate & Financial Hubs",
      challenges: "Rigid access boundaries across physical centers, high-volume auditing workloads, and secure file synchronization across state nodes.",
      response: "Bespoke SaaS platforms backed by local single-sign-on (SSO) systems, tracking files and auditing transactions securely via database logs.",
      useCase: "Secure Enterprise Asset Tracking and Audit Log Verification Nodes",
      theme: {
        customAccent: "text-purple-600",
        customBg: "rgba(147, 51, 234, 0.08)",
        customGlow: "rgba(147, 51, 234, 0.15)",
        gradient: "from-purple-500 to-fuchsia-600"
      }
    },
    { 
      name: "Defense & Strategic Systems", 
      sub: "National Security AI",
      challenges: "Adhering to strict military compliance, processing satellite imagery and radar telemetry in real-time, and handling highly classified air-gapped data securely.",
      response: "On-premises strategic AI engines and military-grade LLMs running on specialized ruggedized edge servers, ensuring zero data leakage.",
      useCase: "Classified Intelligence Cross-Referencing & Tactical Threat Analysis Support",
      theme: {
        customAccent: "text-slate-700",
        customBg: "rgba(71, 85, 105, 0.08)",
        customGlow: "rgba(71, 85, 105, 0.15)",
        gradient: "from-slate-600 to-zinc-800"
      }
    },
  ];

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      // scrolls back by roughly card width (260) + gap (32)
      scrollContainerRef.current.scrollBy({ left: -292, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      // scrolls forward by roughly card width (260) + gap (32)
      scrollContainerRef.current.scrollBy({ left: 292, behavior: "smooth" });
    }
  };

  const accentColor = "#36558F";
  const headingColor = "text-[#1A2530]";
  const textColor = "text-[#1A2530]";
  const cardBg = "rgba(255, 255, 255, 0.85)";
  const cardBorder = "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 pt-20 pb-6 relative overflow-hidden transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-4 relative z-10">
        <span 
          style={{
            color: accentColor,
            backgroundColor: "rgba(54, 85, 143, 0.1)",
            borderColor: "rgba(54, 85, 143, 0.2)"
          }}
          className="inline-block text-[10px] font-mono tracking-wider uppercase border px-3 py-1 rounded-full"
        >
          Target Sectors
        </span>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
          Industries We Partner & Serve
        </h1>
        <p className={`text-sm sm:text-base max-w-md mx-auto transition-colors duration-300 ${textColor}`}>
          Delivering secure compliance and customized, local artificial intelligence solutions across core national and infrastructure domains.
        </p>
      </div>

      {/* PORTRAIT CARD CAROUSEL */}
      <div className="w-full max-w-7xl mx-auto relative py-2 z-10">
        
        {/* Edge Gradient Masks for beautiful fade edges */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #FAF9F6 15%, transparent)"
          }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to left, #FAF9F6 15%, transparent)"
          }}
        />

        {/* Scrollable Track */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-8 sm:px-16 pt-8 pb-4"
        >
          {sectors.map((item, idx) => {
            const sectorTheme = item.theme;
            const sAccent = sectorTheme.customAccent;
            const sBg = sectorTheme.customBg;
            const sGlow = sectorTheme.customGlow;

            return (
              <div
                key={idx}
                onClick={() => setActiveSector(item)}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  "--hover-glow-slide": sGlow,
                } as React.CSSProperties}
                className="w-[260px] h-[350px] border rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_30px_rgba(64,121,140,0.06)] hover:-translate-y-3.5 hover:shadow-[0_20px_45px_var(--hover-glow-slide)] hover:border-transparent group cursor-pointer flex-shrink-0 relative overflow-hidden select-none"
              >
                {/* Subtle Accent Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${sectorTheme.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* 3D-Floating Abstract SVG Graphic */}
                <div className="relative h-[160px] w-full flex items-center justify-center pt-4">
                  {/* Backdrop Glow */}
                  <div 
                    style={{ backgroundColor: sBg }}
                    className="absolute w-24 h-24 rounded-full filter blur-xl opacity-40 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="transform transition-transform duration-500 group-hover:translate-y--2 group-hover:scale-105">
                    <SectorGraphic 
                      name={item.name} 
                      className={`w-28 h-28 ${sAccent}`}
                    />
                  </div>
                </div>
                
                {/* Bottom Content Area */}
                <div className="space-y-3 relative z-10 pt-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      {item.sub}
                    </span>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${headingColor} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${sectorTheme.gradient}`}>
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* Tactile button clue */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#36558F] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Architecture</span>
                    <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DUAL ARROW CONTROLS (Disney Character Style) */}
      <div className="flex items-center justify-center gap-4 mt-4 z-20">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-slate-300 hover:border-[#36558F] flex items-center justify-center text-[#36558F] bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-slate-300 hover:border-[#36558F] flex items-center justify-center text-[#36558F] bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* MACBOOK-STYLE APPS EXPANSION MODAL */}
      {activeSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          
          {/* Backdrop Blur */}
          <div 
            onClick={() => setActiveSector(null)}
            className="absolute inset-0 bg-white/70 backdrop-blur-xl transition-opacity duration-500 animate-fade-in"
          />
          
          {/* Immersive Morphing Panel */}
          <div 
            style={{
              boxShadow: "0 30px 80px -10px rgba(64, 121, 140, 0.22)",
              borderColor: "rgba(64, 121, 140, 0.25)"
            }}
            className="w-full max-w-5xl h-[85vh] md:h-[75vh] bg-[#FAF9F6] border rounded-[2rem] z-10 relative overflow-hidden flex flex-col md:flex-row animate-mac-open select-none"
          >
            
            {/* LEFT SIDE PANEL (45% Width) - Visual Showcase */}
            <div className={`md:w-[45%] h-[35%] md:h-full bg-gradient-to-br ${activeSector.theme.gradient} flex flex-col justify-between p-8 relative overflow-hidden text-white`}>
              
              {/* Subtle Decorative Lines */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/15 blur-[80px] pointer-events-none" />
              
              {/* Top Row: Sector Badge */}
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase border border-white/30 bg-white/10 px-3 py-1 rounded-full self-start z-10">
                Sovereign Domain
              </span>
              
              {/* Center Row: Massive Floating SVG Graphic */}
              <div className="flex-1 flex items-center justify-center py-6 relative z-10">
                <div className="absolute w-40 h-40 rounded-full bg-white/5 filter blur-3xl" />
                <div className="animate-[spin_45s_linear_infinite]">
                  <SectorGraphic 
                    name={activeSector.name} 
                    className="w-48 h-48 text-white drop-shadow-[0_10px_35px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
              
              {/* Bottom Row: Identity */}
              <div className="space-y-1 relative z-10">
                <span className="text-xs text-white/75 font-semibold uppercase tracking-wider block">
                  {activeSector.sub}
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {activeSector.name}
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE PANEL (55% Width) - Structural Details */}
            <div className="md:w-[55%] h-[65%] md:h-full p-8 md:p-10 flex flex-col justify-between overflow-y-auto no-scrollbar relative">
              
              {/* CLOSE BUTTON (Top-Right) */}
              <button 
                onClick={() => setActiveSector(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-slate-200 hover:border-[#36558F] flex items-center justify-center text-slate-500 hover:text-[#36558F] hover:bg-[#DAF0EE]/20 transition-all duration-300 cursor-pointer group/close"
              >
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover/close:rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Grid-Free Detailed Sections */}
              <div className="space-y-8 pr-2 pt-4">
                
                {/* Section 1: Target Challenges */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    <svg className="w-4.5 h-4.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Target Challenges</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1A2530] font-medium pl-6">
                    {activeSector.challenges}
                  </p>
                </div>

                {/* Section 2: Velar AI Response */}
                <div className="space-y-2.5">
                  <div className={`flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest ${activeSector.theme.customAccent}`}>
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Velar AI Response</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1A2530] font-medium pl-6">
                    {activeSector.response}
                  </p>
                </div>

              </div>

              {/* Section 3: System Implementation Deployment Capsule */}
              <div 
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: cardBorder
                }}
                className="mt-8 p-5 border rounded-2xl flex flex-col gap-2 relative overflow-hidden shadow-inner"
              >
                {/* Decorative glow mesh */}
                <div className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-br ${activeSector.theme.gradient} opacity-5 blur-xl`} />
                
                <div className="flex items-center justify-between z-10">
                  <span className="text-slate-400 font-mono text-[9px] font-bold uppercase tracking-wider">Primary System Implementation Use-Case</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-50 animate-pulse" style={{ backgroundColor: '#10b981' }} />
                    <span className="text-[8px] font-mono font-semibold text-emerald-800 uppercase tracking-widest">Deployed & Secure</span>
                  </div>
                </div>
                
                <span className={`text-sm sm:text-base font-mono font-bold leading-snug tracking-tight z-10 bg-gradient-to-r ${activeSector.theme.gradient} bg-clip-text text-transparent`}>
                  {activeSector.useCase}
                </span>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
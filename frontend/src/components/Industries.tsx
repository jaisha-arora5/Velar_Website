"use client";

interface SectorTheme {
  darkAccent: string;
  darkBg: string;
  darkGlow: string;
  customAccent: string;
  customBg: string;
  customGlow: string;
  gradient: string;
}

interface IndustryItem {
  name: string;
  sub: string;
  svgPath: string; 
  challenges: string;
  response: string;
  useCase: string;
  theme: SectorTheme;
}

export default function Industries() {
  const isDarkTheme = false;
  const isCustomTheme = true;

  const sectors: IndustryItem[] = [
    { 
      name: "CPSUs", 
      sub: "Central Public Sector",
      svgPath: "M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z",
      challenges: "Vast volumes of scattered historical data, strict central compliance mandates, and high latency in inter-departmental note-sheet routing.",
      response: "On-premises semantic engines that read and query circulars automatically, auto-generating note-sheets that match ministry guidelines perfectly.",
      useCase: "Secure Policy Cross-Reference and Note-Sheet Drafting Automation",
      theme: {
        darkAccent: "text-cyan-400",
        darkBg: "rgba(6, 182, 212, 0.08)",
        darkGlow: "rgba(6, 182, 212, 0.25)",
        customAccent: "text-sky-600",
        customBg: "rgba(2, 132, 199, 0.08)",
        customGlow: "rgba(2, 132, 199, 0.15)",
        gradient: "from-cyan-500 to-blue-600"
      }
    },
    { 
      name: "SPSUs", 
      sub: "Regional Governance",
      svgPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
      challenges: "Handling multiple local/vernacular languages, legacy database constraints, and digitizing files with restricted internet connection guidelines.",
      response: "Vernacular NLP engines integrated with internal database matrices, delivering instant translation and policy retrieval without cloud dependencies.",
      useCase: "State-Wide Vernacular Knowledge Management & Secure Chat Assistance",
      theme: {
        darkAccent: "text-indigo-400",
        darkBg: "rgba(99, 102, 241, 0.08)",
        darkGlow: "rgba(99, 102, 241, 0.25)",
        customAccent: "text-indigo-600",
        customBg: "rgba(79, 70, 229, 0.08)",
        customGlow: "rgba(79, 70, 229, 0.15)",
        gradient: "from-indigo-500 to-purple-600"
      }
    },
    { 
      name: "Infrastructure", 
      sub: "Smart City Matrices",
      svgPath: "M12 22V8M5 22V14M19 22V11m-5 3h5m-14 4h5M14 8h5M5 11h5",
      challenges: "Processing high-volume temporal telemetry from sensors, predictive scheduling of public work systems, and resource leakages.",
      response: "Localized AI forecasting pipelines that ingest IoT streams on internal smart city grids, providing anomaly alerts and asset tracking.",
      useCase: "Smart Utility Telematic Analysis & Predictive Structural Alerts",
      theme: {
        darkAccent: "text-emerald-400",
        darkBg: "rgba(16, 185, 129, 0.08)",
        darkGlow: "rgba(16, 185, 129, 0.25)",
        customAccent: "text-teal-600",
        customBg: "rgba(13, 148, 136, 0.08)",
        customGlow: "rgba(13, 148, 136, 0.15)",
        gradient: "from-teal-500 to-emerald-600"
      }
    },
    { 
      name: "Energy Sector", 
      sub: "Power Grid Automation",
      svgPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      challenges: "Grid degradation modeling, high-volume telemetry ingestion, and preventing grid instability with absolute operational reliability.",
      response: "Predictive maintenance algorithms deployed on air-gapped server racks, processing transformer logs to prevent grid failure.",
      useCase: "Predictive Thermal/Load Grid Anomaly Detection and Equipment Lifetime Estimation",
      theme: {
        darkAccent: "text-amber-400",
        darkBg: "rgba(245, 158, 11, 0.08)",
        darkGlow: "rgba(245, 158, 11, 0.25)",
        customAccent: "text-amber-600",
        customBg: "rgba(217, 119, 6, 0.08)",
        customGlow: "rgba(217, 119, 6, 0.15)",
        gradient: "from-amber-500 to-orange-600"
      }
    },
    { 
      name: "Utilities", 
      sub: "Water & Flow Logistics",
      svgPath: "M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z",
      challenges: "Inefficiencies in billing data processing, water leakage detection, and scheduling dispatcher responses for critical pipe grids.",
      response: "Computer vision and pattern analysis software running locally to identify utility defects, combined with automated routing rules for crew dispatch.",
      useCase: "Leakage Location Analytics & Automatic Dispatch Optimization",
      theme: {
        darkAccent: "text-sky-400",
        darkBg: "rgba(56, 189, 248, 0.08)",
        darkGlow: "rgba(56, 189, 248, 0.25)",
        customAccent: "text-sky-600",
        customBg: "rgba(2, 132, 199, 0.08)",
        customGlow: "rgba(2, 132, 199, 0.15)",
        gradient: "from-blue-500 to-sky-500"
      }
    },
    { 
      name: "Manufacturing", 
      sub: "Smart Factory Integration",
      svgPath: "M22 21H2M17 21v-5l-4-3v8M7 21v-8l4-3v11",
      challenges: "Quality control anomalies on assembly lines, strict physical safety protocols, and supply-chain stock prediction under volatile markets.",
      response: "Local edge-based visual inspection systems combined with predictive inventory models trained exclusively on factory throughput logs.",
      useCase: "Defect Isolation, Safety Gear Compliance Detection, and Procurement Forecasting",
      theme: {
        darkAccent: "text-rose-400",
        darkBg: "rgba(244, 63, 94, 0.08)",
        darkGlow: "rgba(244, 63, 94, 0.25)",
        customAccent: "text-rose-600",
        customBg: "rgba(225, 29, 72, 0.08)",
        customGlow: "rgba(225, 29, 72, 0.15)",
        gradient: "from-rose-500 to-red-600"
      }
    },
    { 
      name: "Institutional Enterprises", 
      sub: "Corporate & Financial Hubs",
      svgPath: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18M6 18h12M6 14h12M6 10h12M6 6h12",
      challenges: "Rigid access boundaries across physical centers, high-volume auditing workloads, and secure file synchronization across state nodes.",
      response: "Bespoke SaaS platforms backed by local single-sign-on (SSO) systems, tracking files and auditing transactions securely via database logs.",
      useCase: "Secure Enterprise Asset Tracking and Audit Log Verification Nodes",
      theme: {
        darkAccent: "text-purple-400",
        darkBg: "rgba(192, 132, 252, 0.08)",
        darkGlow: "rgba(192, 132, 252, 0.25)",
        customAccent: "text-purple-600",
        customBg: "rgba(147, 51, 234, 0.08)",
        customGlow: "rgba(147, 51, 234, 0.15)",
        gradient: "from-purple-500 to-fuchsia-600"
      }
    },
    { 
      name: "Defense & Strategic Systems", 
      sub: "National Security AI",
      svgPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      challenges: "Adhering to strict military compliance, processing satellite imagery and radar telemetry in real-time, and handling highly classified air-gapped data securely.",
      response: "On-premises strategic AI engines and military-grade LLMs running on specialized ruggedized edge servers, ensuring zero data leakage.",
      useCase: "Classified Intelligence Cross-Referencing & Tactical Threat Analysis Support",
      theme: {
        darkAccent: "text-slate-400",
        darkBg: "rgba(148, 163, 184, 0.08)",
        darkGlow: "rgba(148, 163, 184, 0.25)",
        customAccent: "text-slate-700",
        customBg: "rgba(71, 85, 105, 0.08)",
        customGlow: "rgba(71, 85, 105, 0.15)",
        gradient: "from-slate-600 to-zinc-800"
      }
    },
  ];

  const seamlessLoopTrack = [...sectors, ...sectors];

  const accentColor = isDarkTheme 
    ? "#06b6d4" 
    : "#36558F";

  const headingColor = isDarkTheme 
    ? "text-white" 
    : "text-[#1A2530]";

  const textColor = isDarkTheme 
    ? "text-slate-400" 
    : "text-[#1A2530]";

  const cardBg = isDarkTheme 
    ? "rgba(10, 7, 38, 0.65)" 
    : "rgba(255, 255, 255, 0.85)";

  const cardBorder = isDarkTheme 
    ? "rgba(255, 255, 255, 0.08)" 
    : "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <span 
          style={{
            color: accentColor,
            backgroundColor: isDarkTheme 
              ? "rgba(6, 182, 212, 0.1)" 
              : "rgba(54, 85, 143, 0.1)",
            borderColor: isDarkTheme 
              ? "rgba(6, 182, 212, 0.2)" 
              : "rgba(54, 85, 143, 0.2)"
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

      {/* INFINITE SLIDER */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden relative py-6">
        
        {/* Edge Gradient Masks */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to right, #030014, rgba(3, 0, 20, 0.7), transparent)"
              : "linear-gradient(to right, #FAF9F6, rgba(250, 249, 246, 0.7), transparent)"
          }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to left, #030014, rgba(3, 0, 20, 0.7), transparent)"
              : "linear-gradient(to left, #FAF9F6, rgba(250, 249, 246, 0.7), transparent)"
          }}
        />

        {/* sliding rail */}
        <div className="flex w-max gap-8 animate-infinite-slider hover:[animation-play-state:paused] cursor-pointer py-2">
          {seamlessLoopTrack.map((item, idx) => {
            const sectorTheme = item.theme;
            const sAccent = isDarkTheme ? sectorTheme.darkAccent : sectorTheme.customAccent;
            const sBg = isDarkTheme ? sectorTheme.darkBg : sectorTheme.customBg;
            const sGlow = isDarkTheme ? sectorTheme.darkGlow : sectorTheme.customGlow;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  "--hover-glow-slide": sGlow,
                } as React.CSSProperties}
                className="w-[290px] h-[130px] border rounded-2xl p-6 flex items-center gap-5 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_8px_25px_var(--hover-glow-slide)] hover:border-transparent group/slide flex-shrink-0 relative overflow-hidden"
              >
                {/* Subtle Accent Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${sectorTheme.gradient} opacity-40 group-hover/slide:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon Frame */}
                <div 
                  style={{
                    backgroundColor: isDarkTheme ? "rgba(13, 42, 74, 0.3)" : "rgba(255, 255, 255, 0.4)",
                    borderColor: cardBorder
                  }}
                  className="w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover/slide:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <div 
                    style={{ backgroundColor: sBg }}
                    className="absolute inset-0 rounded-xl opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300"
                  />
                  <svg className={`w-6 h-6 z-10 transition-colors duration-300 ${sAccent}`} fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex flex-col min-w-0 z-10">
                  <h3 className={`text-base font-bold tracking-tight truncate transition-colors duration-300 ${headingColor} group-hover/slide:text-transparent group-hover/slide:bg-clip-text group-hover/slide:bg-gradient-to-r ${sectorTheme.gradient}`}>
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 truncate mt-1">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DETAILED SECTOR ARCHITECTURES SECTION */}
      <div className="max-w-7xl w-full mt-24 border-t border-white/5 pt-20 space-y-12 relative z-10">
        
        <div className="text-center space-y-3">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
            Sector-Specific Architectures
          </h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto transition-colors duration-300 ${textColor}`}>
            Deep-dive into how Velar Info addresses localized security challenges and automates institutional processes in each target domain.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectors.map((sector, idx) => {
            const sectorTheme = sector.theme;
            const sAccent = isDarkTheme ? sectorTheme.darkAccent : sectorTheme.customAccent;
            const sBg = isDarkTheme ? sectorTheme.darkBg : sectorTheme.customBg;
            const sGlow = isDarkTheme ? sectorTheme.darkGlow : sectorTheme.customGlow;

            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  "--hover-glow": sGlow,
                } as React.CSSProperties}
                className="group border p-8 rounded-2xl shadow-md flex flex-col justify-between gap-8 hover:scale-[1.02] hover:shadow-[0_10px_30px_var(--hover-glow)] hover:border-transparent transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient Top Border Highlight */}
                <div className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${sectorTheme.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="space-y-6">
                  {/* Title Header Block */}
                  <div className="flex items-center gap-4">
                    <div 
                      style={{
                        backgroundColor: sBg,
                      }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 border border-transparent group-hover:border-current relative"
                    >
                      <svg className={`w-6 h-6 z-10 transition-colors duration-300 ${sAccent}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={sector.svgPath} />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
                        {sector.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                        {sector.sub}
                      </span>
                    </div>
                  </div>

                  {/* Dual Column Problem/Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                        {/* Warning/Hazard Icon */}
                        <svg className="w-3.5 h-3.5 text-amber-500/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Target Challenges</span>
                      </div>
                      <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                        {sector.challenges}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest ${isDarkTheme ? 'text-slate-500' : sAccent}`}>
                        {/* Shield/Check Icon */}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Velar AI Response</span>
                      </div>
                      <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                        {sector.response}
                      </p>
                    </div>
                  </div>
                </div>

                {/* System Implementation Deployment Capsule */}
                <div 
                  style={{
                    backgroundColor: isDarkTheme 
                      ? "rgba(0, 0, 0, 0.3)" 
                      : "rgba(255, 255, 255, 0.5)",
                    borderColor: cardBorder
                  }}
                  className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden transition-all duration-300 group-hover:border-[var(--color-border)] shadow-inner"
                >
                  {/* Subtle decorative bottom-right glow mesh */}
                  <div className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-br ${sectorTheme.gradient} opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider">Primary System Implementation Use-Case</span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Deployed & Secure</span>
                    </div>
                  </div>
                  <span className={`text-xs sm:text-sm font-mono font-semibold leading-snug tracking-tight z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${sectorTheme.gradient} transition-all duration-300`}>
                    {sector.useCase}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
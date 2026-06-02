"use client";

import { useTheme } from "@/context/ThemeContext";

interface IndustryItem {
  name: string;
  sub: string;
  svgPath: string; 
  challenges: string;
  response: string;
  useCase: string;
}

export default function Industries() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";

  const sectors: IndustryItem[] = [
    { 
      name: "CPSUs", 
      sub: "Central Public Sector",
      svgPath: "M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z",
      challenges: "Vast volumes of scattered historical data, strict central compliance mandates, and high latency in inter-departmental note-sheet routing.",
      response: "On-premises semantic engines that read and query circulars automatically, auto-generating note-sheets that match ministry guidelines perfectly.",
      useCase: "Secure Policy Cross-Reference and Note-Sheet Drafting Automation"
    },
    { 
      name: "SPSUs", 
      sub: "State Government Units",
      svgPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      challenges: "Handling multiple local/vernacular languages, legacy database constraints, and digitizing files with restricted internet connection guidelines.",
      response: "Vernacular NLP engines integrated with internal database matrices, delivering instant translation and policy retrieval without cloud dependencies.",
      useCase: "State-Wide Vernacular Knowledge Management & Secure Chat Assistance"
    },
    { 
      name: "Infrastructure", 
      sub: "Smart City Matrices",
      svgPath: "M12 22V8M5 22V14M19 22V11m-5 3h5m-14 4h5M14 8h5M5 11h5",
      challenges: "Processing high-volume temporal telemetry from sensors, predictive scheduling of public work systems, and resource leakages.",
      response: "Localized AI forecasting pipelines that ingest IoT streams on internal smart city grids, providing anomaly alerts and asset tracking.",
      useCase: "Smart Utility Telematic Analysis & Predictive Structural Alerts"
    },
    { 
      name: "Energy Sector", 
      sub: "Power Grid Automation",
      svgPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      challenges: "Grid degradation modeling, high-volume telemetry ingestion, and preventing grid instability with absolute operational reliability.",
      response: "Predictive maintenance algorithms deployed on air-gapped server racks, processing transformer logs to prevent grid failure.",
      useCase: "Predictive Thermal/Load Grid Anomaly Detection and Equipment Lifetime Estimation"
    },
    { 
      name: "Utilities", 
      sub: "Resource Management",
      svgPath: "M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z",
      challenges: "Inefficiencies in billing data processing, water leakage detection, and scheduling dispatcher responses for critical pipe grids.",
      response: "Computer vision and pattern analysis software running locally to identify utility defects, combined with automated routing rules for crew dispatch.",
      useCase: "Leakage Location Analytics & Automatic Dispatch Optimization"
    },
    { 
      name: "Manufacturing", 
      sub: "Industrial AI Automation",
      svgPath: "M22 21H2M17 21v-5l-4-3v8M7 21v-8l4-3v11",
      challenges: "Quality control anomalies on assembly lines, strict physical safety protocols, and supply-chain stock prediction under volatile markets.",
      response: "Local edge-based visual inspection systems combined with predictive inventory models trained exclusively on factory throughput logs.",
      useCase: "Defect Isolation, Safety Gear Compliance Detection, and Procurement Forecasting"
    },
    { 
      name: "Institutional Enterprises", 
      sub: "Large Scale Architecture",
      svgPath: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18M6 18h12M6 14h12M6 10h12M6 6h12",
      challenges: "Rigid access boundaries across physical centers, high-volume auditing workloads, and secure file synchronization across state nodes.",
      response: "Bespoke SaaS platforms backed by local single-sign-on (SSO) systems, tracking files and auditing transactions securely via database logs.",
      useCase: "Secure Enterprise Asset Tracking and Audit Log Verification Nodes"
    },
  ];

  const seamlessLoopTrack = [...sectors, ...sectors];

  const accentColor = isDarkTheme ? "#06b6d4" : "#36558F";
  const headingColor = isDarkTheme ? "text-white" : "text-[#1A2530]";
  const textColor = isDarkTheme ? "text-slate-400" : "text-[#1A2530]";
  const cardBg = isDarkTheme ? "#0A0726" : "#DAF0EE";
  const cardBorder = isDarkTheme ? "rgba(34, 211, 238, 0.1)" : "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <span 
          style={{
            color: accentColor,
            backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
            borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : "rgba(54, 85, 143, 0.2)"
          }}
          className="inline-block text-[10px] font-mono tracking-wider uppercase border px-3 py-1 rounded-full"
        >
          Target Sectors
        </span>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
          Industries We Partner & Serve
        </h1>
        <p className={`text-sm sm:text-base max-w-md mx-auto ${textColor}`}>
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
          {seamlessLoopTrack.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: cardBg,
                borderColor: cardBorder
              }}
              className="w-[290px] h-[130px] border rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex-shrink-0"
            >
              {/* Icon Frame */}
              <div 
                style={{
                  backgroundColor: isDarkTheme ? "rgba(13, 42, 74, 0.5)" : "rgba(218, 240, 238, 0.6)",
                  borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.3)" : "rgba(54, 85, 143, 0.3)",
                  color: accentColor
                }}
                className="w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex flex-col min-w-0">
                <h3 className={`text-base font-bold tracking-tight truncate ${headingColor}`}>
                  {item.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 truncate mt-1">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED SECTOR ARCHITECTURES SECTION */}
      <div className="max-w-7xl w-full mt-24 border-t border-white/5 pt-20 space-y-12 relative z-10">
        
        <div className="text-center space-y-3">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
            Sector-Specific Architectures
          </h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto ${textColor}`}>
            Deep-dive into how Velar Info addresses localized security challenges and automates institutional processes in each target domain.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectors.map((sector, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: cardBg,
                borderColor: cardBorder
              }}
              className="border p-8 rounded-2xl shadow-md flex flex-col justify-between gap-6 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div 
                    style={{
                      backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
                      color: accentColor
                    }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={sector.svgPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${headingColor}`}>
                      {sector.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      {sector.sub}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Target Challenges</h4>
                    <p className={`text-xs leading-relaxed ${textColor}`}>{sector.challenges}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Velar AI Response</h4>
                    <p className={`text-xs leading-relaxed ${textColor}`}>{sector.response}</p>
                  </div>
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: isDarkTheme ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.4)",
                  borderColor: cardBorder
                }}
                className="p-4 border rounded-xl flex flex-col gap-1 text-[11px] font-medium"
              >
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider">Primary System Implementation Use-Case</span>
                <span className={headingColor}>{sector.useCase}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
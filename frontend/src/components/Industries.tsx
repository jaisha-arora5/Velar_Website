"use client";

import { useTheme } from "@/context/ThemeContext";

interface IndustryItem {
  name: string;
  sub: string;
  svgPath: string; 
}

export default function Industries() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";

  const sectors: IndustryItem[] = [
    { 
      name: "CPSUs", 
      sub: "Central Public Sector",
      svgPath: "M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z" 
    },
    { 
      name: "SPSUs", 
      sub: "State Government Units",
      svgPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
    },
    { 
      name: "Infrastructure", 
      sub: "Smart City Matrices",
      svgPath: "M12 22V8M5 22V14M19 22V11m-5 3h5m-14 4h5M14 8h5M5 11h5" 
    },
    { 
      name: "Energy", 
      sub: "Power Grid Automation",
      svgPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
    },
    { 
      name: "Utilities", 
      sub: "Resource Management",
      svgPath: "M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z" 
    },
    { 
      name: "Manufacturing", 
      sub: "Industrial AI Automation",
      svgPath: "M22 21H2M17 21v-5l-4-3v8M7 21v-8l4-3v11" 
    },
    { 
      name: "Institutional Enterprises", 
      sub: "Large Scale Architecture",
      svgPath: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18M6 18h12M6 14h12M6 10h12M6 6h12" 
    },
  ];

  const seamlessLoopTrack = [...sectors, ...sectors];

  return (
    <section className={`w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 snap-start snap-always relative overflow-hidden transition-colors duration-300`}>
      
      {/* Structural Title Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 relative z-10">
        <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl transition-colors duration-300 ${
          isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
        }`}>
          Industries We Partner & Serve
        </h2>
        <p className={`text-base max-w-md mx-auto transition-colors duration-300 ${
          isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#40798C]" : "text-amber-900"
        }`}>
          Delivering secure compliance and institutional digital frameworks across core national domains.
        </p>
      </div>

      {/* THE HIGH-CONTRAST INFINITE SLIDER MATRIX */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden relative py-6">
        
        {/* Deep background edge mask shading to hide cutting points */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to right, #030014, rgba(3, 0, 20, 0.7), transparent)"
              : isCustomTheme
              ? "linear-gradient(to right, #FAF9F6, rgba(250, 249, 246, 0.7), transparent)"
              : "linear-gradient(to right, #f1e8b8, rgba(241, 232, 184, 0.7), transparent)"
          }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l to-transparent z-20 pointer-events-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to left, #030014, rgba(3, 0, 20, 0.7), transparent)"
              : isCustomTheme
              ? "linear-gradient(to left, #FAF9F6, rgba(250, 249, 246, 0.7), transparent)"
              : "linear-gradient(to left, #f1e8b8, rgba(241, 232, 184, 0.7), transparent)"
          }}
        />

        {/* SLIDING RAIL LAYER */}
        <div className="flex w-max gap-8 animate-infinite-slider hover:[animation-play-state:paused] cursor-pointer py-2">
          {seamlessLoopTrack.map((item, idx) => {
            const bgColor = isDarkTheme ? "#0A0726" : isCustomTheme ? "#DAF0EE" : "#fef3c7";
            const borderColor = isDarkTheme 
              ? "rgba(34, 211, 238, 0.1)"
              : isCustomTheme
              ? "rgba(64, 121, 140, 0.2)"
              : "rgba(217, 119, 6, 0.2)";
            const hoverBorderColor = isDarkTheme
              ? "rgba(34, 211, 238, 0.5)"
              : isCustomTheme
              ? "rgba(54, 85, 143, 0.5)"
              : "rgba(217, 119, 6, 0.5)";
            const shadowColor = isDarkTheme
              ? "0_0_25px_rgba(34,211,238,0.2)"
              : isCustomTheme
              ? "0_0_25px_rgba(54,85,143,0.2)"
              : "0_0_25px_rgba(217,119,6,0.2)";
            const iconBgColor = isDarkTheme ? "rgba(13, 42, 74, 0.5)" : isCustomTheme ? "rgba(218, 240, 238, 0.6)" : "rgba(217, 119, 6, 0.15)";
            const iconBorderColor = isDarkTheme ? "rgba(6, 182, 212, 0.3)" : isCustomTheme ? "rgba(54, 85, 143, 0.3)" : "rgba(217, 119, 6, 0.3)";
            const iconColor = isDarkTheme ? "#06b6d4" : isCustomTheme ? "#36558F" : "#d97706";
            const textColor = isDarkTheme ? "#ffffff" : isCustomTheme ? "#1A2530" : "#1F1300";
            const subTextColor = isDarkTheme ? "#cbd5e1" : isCustomTheme ? "#40798C" : "#92400e";

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: bgColor,
                  borderColor: borderColor
                }}
                className="w-[290px] h-[130px] border rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 flex-shrink-0"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = hoverBorderColor;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${isDarkTheme ? "rgba(34,211,238,0.2)" : isCustomTheme ? "rgba(54,85,143,0.2)" : "rgba(217,119,6,0.2)"}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                  (e.currentTarget as HTMLElement).style.boxShadow = "0_4px_20px_rgba(0,0,0,0.4)";
                }}
              >
                {/* Enhanced High-Contrast Icon Frame */}
                <div 
                  style={{
                    backgroundColor: iconBgColor,
                    borderColor: iconBorderColor,
                    color: iconColor,
                    boxShadow: isDarkTheme 
                      ? "0_0_15px_rgba(34,211,238,0.15)"
                      : isCustomTheme
                      ? "0_0_15px_rgba(54,85,143,0.15)"
                      : "0_0_15px_rgba(217,119,6,0.15)"
                  }}
                  className="w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <svg 
                    className={`w-6 h-6 filter ${isDarkTheme ? "drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" : isCustomTheme ? "drop-shadow-[0_0_8px_rgba(54,85,143,0.6)]" : "drop-shadow-[0_0_8px_rgba(217,119,6,0.6)]"}`}
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.75" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                  </svg>
                </div>
                
                {/* Content Block */}
                <div className="flex flex-col min-w-0">
                  <h3 
                    style={{ color: textColor }}
                    className="text-base font-bold tracking-tight truncate"
                  >
                    {item.name}
                  </h3>
                  <span 
                    style={{ color: subTextColor }}
                    className="text-xs font-medium truncate mt-1"
                  >
                    {item.sub}
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
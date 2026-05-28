"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SolutionCard {
  title: string;
  description: string;
  tag: string;
}

export default function Solutions() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const leftSolutions: SolutionCard[] = [
    {
      title: "AI & Intelligent Automation",
      description: "Automating high-volume administrative protocols, multi-layer form processing, and operational decision trees safely.",
      tag: "Automation Engine"
    },
    {
      title: "Enterprise Workflow Solutions",
      description: "Intelligent file routing, cross-department file movement synchronization, and automated note-sheet drafting systems.",
      tag: "Core Workflow"
    },
    {
      title: "AI Analytics & Reporting",
      description: "Real-time system diagnostics, predictive infrastructure maintenance algorithms, and institutional reporting engines.",
      tag: "Predictive BI"
    }
  ];

  const rightSolutions: SolutionCard[] = [
    {
      title: "Generative AI Solutions",
      description: "Secure, sovereign localized LLM integration for rapid official data queries and administrative content summarization.",
      tag: "Sovereign LLM"
    },
    {
      title: "Digital Transformation Systems",
      description: "Phased modernization architecture designed to migrate complex legacy enterprise data safely into cloud ecosystems.",
      tag: "Modernization"
    },
    {
      title: "Customized Enterprise Platforms",
      description: "Bespoke, modular technology hubs built from scratch to align perfectly with specific PSU compliance regulations.",
      tag: "Bespoke Architecture"
    }
  ];

  // MATHEMATICAL PLASMA CORE SPHERE ENGINE (UNIFIED TO THEME COLORS)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    // Fluid Core Ring Definition Schema - Responsive to Theme
    const rings = isDarkTheme ? [
      { radiusX: 110, radiusY: 105, speed: 0.015, color: "rgba(29, 78, 216, 0.6)", count: 3 },
      { radiusX: 105, radiusY: 110, speed: -0.02, color: "rgba(59, 130, 246, 0.5)", count: 2 },
      { radiusX: 115, radiusY: 95,  speed: 0.01,  color: "rgba(6, 182, 212, 0.4)", count: 4 },
    ] : isCustomTheme ? [
      { radiusX: 110, radiusY: 105, speed: 0.015, color: "rgba(54, 85, 143, 0.6)", count: 3 },
      { radiusX: 105, radiusY: 110, speed: -0.02, color: "rgba(64, 121, 140, 0.5)", count: 2 },
      { radiusX: 115, radiusY: 95,  speed: 0.01,  color: "rgba(218, 240, 238, 0.6)", count: 4 },
    ] : [
      { radiusX: 110, radiusY: 105, speed: 0.015, color: "rgba(217, 119, 6, 0.6)", count: 3 },
      { radiusX: 105, radiusY: 110, speed: -0.02, color: "rgba(217, 119, 6, 0.5)", count: 2 },
      { radiusX: 115, radiusY: 95,  speed: 0.01,  color: "rgba(247, 206, 91, 0.4)", count: 4 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      angle += 0.01; 

      // Render Ambient Glow Matrix underneath the strands
      const radialGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 120);
      if (isDarkTheme) {
        radialGlow.addColorStop(0, "rgba(29, 78, 216, 0.25)");
        radialGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.12)");
        radialGlow.addColorStop(1, "rgba(3, 0, 20, 0)");
      } else if (isCustomTheme) {
        radialGlow.addColorStop(0, "rgba(54, 85, 143, 0.25)");
        radialGlow.addColorStop(0.5, "rgba(64, 121, 140, 0.12)");
        radialGlow.addColorStop(1, "rgba(250, 249, 246, 0)");
      } else {
        radialGlow.addColorStop(0, "rgba(217, 119, 6, 0.25)");
        radialGlow.addColorStop(0.5, "rgba(247, 206, 91, 0.12)");
        radialGlow.addColorStop(1, "rgba(241, 232, 184, 0)");
      }
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 130, 0, Math.PI * 2);
      ctx.fill();

      // Render Intersecting Wave Energy Strands
      rings.forEach((ring, ringIdx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle * ring.speed * 2);

        for (let i = 0; i < ring.count; i++) {
          ctx.rotate((Math.PI * 2) / ring.count);
          ctx.beginPath();
          ctx.strokeStyle = ring.color;
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 18;
          ctx.shadowColor = ring.color;

          for (let a = 0; a <= Math.PI * 2; a += 0.05) {
            const waveOffset = Math.sin(a * 3 + angle + ringIdx) * 6; 
            const x = (ring.radiusX + waveOffset) * Math.cos(a);
            const y = (ring.radiusY + waveOffset) * Math.sin(a);
            
            if (a === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme, isDarkTheme, isCustomTheme]);

  const accentColor = isDarkTheme ? "#06b6d4" : isCustomTheme ? "#36558F" : "#d97706";
  const wireColor = isDarkTheme ? "rgba(59, 130, 246, 0.25)" : isCustomTheme ? "rgba(64, 121, 140, 0.2)" : "rgba(217, 119, 6, 0.25)";
  const wireDashColor = isDarkTheme ? "rgba(59, 130, 246, 0.3)" : isCustomTheme ? "rgba(64, 121, 140, 0.25)" : "rgba(217, 119, 6, 0.3)";

  return (
    <section className={`w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-32 relative overflow-hidden transition-colors duration-300`}>
      
      {/* Header Container Block */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${
          isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]"
        }`}>
          Our Suite of Enterprise Solutions
        </h2>
      </div>

      {/* THE MASTER MATRIX ARCHITECTURE */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
        
        {/* COLUMN 1: LEFT BLOCK MATRIX */}
        <div className="space-y-6 order-2 lg:order-1 relative">
          <div className="absolute right-[-34px] top-0 bottom-0 w-[2px] hidden lg:flex flex-col justify-around pointer-events-none z-0">
            {[1, 2, 3].map((n) => (
              <div 
                key={n} 
                className="w-2 h-2 rounded-full transform translate-x-[3px]"
                style={{
                  backgroundColor: isDarkTheme 
                    ? "rgba(59, 130, 246, 0.4)" 
                    : isCustomTheme 
                    ? "rgba(54, 85, 143, 0.4)" 
                    : "rgba(217, 119, 6, 0.4)",
                  boxShadow: isDarkTheme 
                    ? "0 0 8px #3b82f6" 
                    : isCustomTheme 
                    ? "0 0 8px #36558F" 
                    : "0 0 8px #d97706"
                }}
              />
            ))}
          </div>

          {leftSolutions.map((sol, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: isDarkTheme 
                  ? "rgba(255, 255, 255, 0.01)" 
                  : isCustomTheme 
                  ? "rgba(218, 240, 238, 0.25)" 
                  : "rgba(217, 119, 6, 0.03)",
                borderColor: isDarkTheme 
                  ? "rgba(255, 255, 255, 0.05)" 
                  : isCustomTheme 
                  ? "rgba(64, 121, 140, 0.15)" 
                  : "rgba(217, 119, 6, 0.1)"
              }}
              className={`group relative backdrop-blur-md p-6 rounded-xl transition-all duration-300 shadow-sm border hover:border-opacity-50`}
            >
              <div className="flex flex-col gap-2">
                <span 
                  style={{
                    color: accentColor,
                    backgroundColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : isCustomTheme 
                      ? "rgba(218, 240, 238, 0.6)" 
                      : "rgba(217, 119, 6, 0.15)",
                    borderColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : isCustomTheme 
                      ? "rgba(54, 85, 143, 0.3)" 
                      : "rgba(217, 119, 6, 0.3)"
                  }}
                  className="text-[10px] font-mono tracking-wider uppercase border px-2 py-0.5 rounded self-start"
                >
                  {sol.tag}
                </span>
                <h3 className={`text-lg font-semibold tracking-tight group-hover:transition-colors duration-300 ${
                  isDarkTheme 
                    ? "text-white group-hover:text-blue-400"
                    : isCustomTheme
                    ? "text-[#1A2530] group-hover:text-[#36558F]"
                    : "text-[#1F1300] group-hover:text-yellow-600"
                }`}>
                  {sol.title}
                </h3>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                  isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900"
                }`}>
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* COLUMN 2: CUSTOM HIGH-TECH CANVAS ORB WITH CONNECTION CIRCUITS */}
        <div className="flex items-center justify-center relative min-h-[360px] order-1 lg:order-2">
          
          {/* Main Backdrop Ambient Halo */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] blur-[90px] rounded-full pointer-events-none z-0"
            style={{
              backgroundColor: isDarkTheme 
                ? "rgba(29, 78, 216, 0.15)" 
                : isCustomTheme 
                ? "rgba(64, 121, 140, 0.15)" 
                : "rgba(217, 119, 6, 0.15)"
            }}
          />
          
          {/* SVG DATA CONNECTOR STREAMS */}
          <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none overflow-visible z-0" viewBox="0 0 400 400">
            {/* Left Hand Wire Array paths */}
            <path d="M 50,75 L 120,75 L 150,200" fill="none" stroke={wireColor} strokeWidth="1.5" />
            <path d="M 40,200 L 150,200" fill="none" stroke={wireDashColor} strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 50,325 L 120,325 L 150,200" fill="none" stroke={wireColor} strokeWidth="1.5" />

            {/* Right Hand Wire Array paths */}
            <path d="M 350,75 L 280,75 L 250,200" fill="none" stroke={wireColor} strokeWidth="1.5" />
            <path d="M 360,200 L 250,200" fill="none" stroke={wireDashColor} strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 350,325 L 280,325 L 250,200" fill="none" stroke={wireColor} strokeWidth="1.5" />
          </svg>

          {/* Running Canvas Context Module */}
          <canvas 
            ref={canvasRef} 
            width={380} 
            height={380}
            className="relative z-10"
          />
        </div>

        {/* COLUMN 3: RIGHT BLOCK MATRIX */}
        <div className="space-y-6 order-3 relative">
          <div className="absolute left-[-34px] top-0 bottom-0 w-[2px] hidden lg:flex flex-col justify-around pointer-events-none z-0">
            {[1, 2, 3].map((n) => (
              <div 
                key={n}
                className="w-2 h-2 rounded-full transform translate-x-[-3px]"
                style={{
                  backgroundColor: isDarkTheme 
                    ? "rgba(59, 130, 246, 0.4)" 
                    : isCustomTheme 
                    ? "rgba(54, 85, 143, 0.4)" 
                    : "rgba(217, 119, 6, 0.4)",
                  boxShadow: isDarkTheme 
                    ? "0 0 8px #3b82f6" 
                    : isCustomTheme 
                    ? "0 0 8px #36558F" 
                    : "0 0 8px #d97706"
                }}
              />
            ))}
          </div>

          {rightSolutions.map((sol, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: isDarkTheme 
                  ? "rgba(255, 255, 255, 0.01)" 
                  : isCustomTheme 
                  ? "rgba(218, 240, 238, 0.25)" 
                  : "rgba(217, 119, 6, 0.03)",
                borderColor: isDarkTheme 
                  ? "rgba(255, 255, 255, 0.05)" 
                  : isCustomTheme 
                  ? "rgba(64, 121, 140, 0.15)" 
                  : "rgba(217, 119, 6, 0.1)"
              }}
              className={`group relative backdrop-blur-md p-6 rounded-xl transition-all duration-300 shadow-sm border hover:border-opacity-50`}
            >
              <div className="flex flex-col gap-2">
                <span 
                  style={{
                    color: accentColor,
                    backgroundColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : isCustomTheme 
                      ? "rgba(218, 240, 238, 0.6)" 
                      : "rgba(217, 119, 6, 0.15)",
                    borderColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : isCustomTheme 
                      ? "rgba(54, 85, 143, 0.3)" 
                      : "rgba(217, 119, 6, 0.3)"
                  }}
                  className="text-[10px] font-mono tracking-wider uppercase border px-2 py-0.5 rounded self-start"
                >
                  {sol.tag}
                </span>
                <h3 className={`text-lg font-semibold tracking-tight group-hover:transition-colors duration-300 ${
                  isDarkTheme 
                    ? "text-white group-hover:text-blue-400"
                    : isCustomTheme
                    ? "text-[#1A2530] group-hover:text-[#36558F]"
                    : "text-[#1F1300] group-hover:text-yellow-600"
                }`}>
                  {sol.title}
                </h3>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                  isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900"
                }`}>
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
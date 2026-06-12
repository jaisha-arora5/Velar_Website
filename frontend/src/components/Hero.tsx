"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";

  return (
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 relative overflow-hidden transition-colors duration-300"
    >
      
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/Videos/VID_INTERN_2.mp4" type="video/mp4" />
        </video>
        {/* Overlay to lighten the video */}
        <div className={`hero-video-overlay ${
          isDarkTheme 
            ? "dark-overlay" 
            : "custom-overlay"
        }`}></div>
      </div>

      {/* Background Decorative Ambient Flares */}
      {isDarkTheme ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAF0EE]/30 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40798C]/15 blur-[120px] rounded-full pointer-events-none" />
        </>
      )}

      {/* Main Hero Content Area */}
      <div className="max-w-4xl text-center space-y-6 relative z-10">
        <span 
          className={`text-xs font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm animate-pulse transition-all duration-300 backdrop-blur-sm animate-fade-in-up ${
            isDarkTheme
              ? "text-blue-400 bg-blue-950/60 border border-blue-900/40"
              : "text-[#36558F] bg-[#DAF0EE]/70 border border-[#40798C]/40"
          }`}
        >
          Next-Generation Sovereign Intelligence
        </span>
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] transition-colors duration-300 drop-shadow-lg animate-fade-in-up-delay-1 ${
          isDarkTheme ? "text-white" : "text-[#1A2530]"
        }`}
        style={{
          textShadow: isDarkTheme 
            ? '0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.2)' 
            : '0 2px 12px rgba(255, 255, 255, 0.98), 0 4px 20px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 255, 255, 0.8)'
        }}>
          Secure, Autonomous <br className="hidden sm:inline" />
          AI Architecture <br />
          <span className={`transition-all duration-300 ${
            isDarkTheme
              ? "text-cyan-400"
              : "text-[#36558F]"
          }`}>
            Engineered for the Enterprise
          </span>
        </h1>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors duration-300 drop-shadow-md animate-fade-in-up-delay-2 ${
          isDarkTheme ? "text-slate-300" : "text-[#1A2530]"
        }`}
        style={{
          textShadow: isDarkTheme 
            ? '0 1px 6px rgba(0, 0, 0, 0.9)' 
            : '0 2px 10px rgba(255, 255, 255, 0.98), 0 1px 4px rgba(255, 255, 255, 0.85)'
        }}>
          Ring-fence your institutional data assets. Deploy localized, air-gapped LLM models and high-volume workflow automation protocols built for absolute data sovereignty.
        </p>

        {/* INTERACTIVE CALL TO ACTION BUTTONS */}
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          
          {/* Link 1: Explore Solutions */}
          <Link
            href="/solutions"
            className={`text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer ${
              isDarkTheme
                ? "text-[#030014] bg-cyan-400 hover:bg-cyan-300 shadow-cyan-500/10 hover:shadow-cyan-400/20"
                : "text-white bg-[#36558F] hover:bg-[#40798C] shadow-[#36558F]/20 hover:shadow-[#36558F]/30"
            } hover:-translate-y-0.5`}
          >
            Explore Solutions
          </Link>

          {/* Link 2: Contact Us */}
          <Link
            href="/contact"
            className={`text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer ${
              isDarkTheme
                ? "text-slate-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20"
                : "text-[#36558F] bg-[#DAF0EE] hover:bg-[#c9e7e5] border border-[#b2dedb] hover:border-[#9accc9]"
            }`}
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}
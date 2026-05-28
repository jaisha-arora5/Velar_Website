"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark" || theme === "custom";
  const isLightTheme = theme === "light";

  // Smooth scroll handler function
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
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Video Container - Semicircular */}
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/Videos/HeroVid.mp4" type="video/mp4" />
        </video>
        {/* Overlay to lighten the video */}
        <div className={`hero-video-overlay ${
          theme === "dark" 
            ? "dark-overlay" 
            : theme === "light" 
            ? "light-overlay" 
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-100/15 blur-[120px] rounded-full pointer-events-none" />
        </>
      )}

      {/* Main Hero Content Area */}
      <div className="max-w-4xl text-center space-y-6 relative z-10">
        <span 
          className={`text-xs font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm animate-pulse transition-all duration-300 backdrop-blur-sm ${
            isDarkTheme
              ? "text-blue-400 bg-blue-950/40 border border-blue-900/30"
              : "text-amber-800 bg-amber-100/50 border border-amber-400/50"
          }`}
        >
          Next-Generation Sovereign Intelligence
        </span>
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] transition-colors duration-300 drop-shadow-lg ${
          isDarkTheme ? "text-white" : "text-[#1F1300]"
        }`}
        style={{
          textShadow: isDarkTheme 
            ? '0 2px 10px rgba(0, 0, 0, 0.8)' 
            : '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}>
          Secure, Autonomous <br className="hidden sm:inline" />
          AI Architecture <br />
          <span className={`bg-clip-text text-transparent transition-all duration-300 ${
            isDarkTheme
              ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
              : "bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-700"
          }`}>
            Engineered for the Enterprise
          </span>
        </h1>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors duration-300 drop-shadow-md ${
          isDarkTheme ? "text-slate-400" : "text-amber-900"
        }`}
        style={{
          textShadow: isDarkTheme 
            ? '0 1px 6px rgba(0, 0, 0, 0.8)' 
            : '0 1px 4px rgba(0, 0, 0, 0.15)'
        }}>
          Ring-fence your institutional data assets. Deploy localized, air-gapped LLM models and high-volume workflow automation protocols built for absolute data sovereignty.
        </p>

        {/* INTERACTIVE CALL TO ACTION BUTTONS */}
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          
          {/* Button 1: Explore Solutions */}
          <button
            onClick={() => scrollToSection("solutions")}
            className={`text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer ${
              isDarkTheme
                ? "text-[#030014] bg-cyan-400 hover:bg-cyan-300 shadow-cyan-500/10 hover:shadow-cyan-400/20"
                : "text-white bg-amber-600 hover:bg-amber-700 shadow-amber-600/20 hover:shadow-amber-700/30"
            } hover:-translate-y-0.5`}
          >
            Explore Solutions
          </button>

          {/* Button 2: Contact Us */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer ${
              isDarkTheme
                ? "text-slate-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20"
                : "text-[#1F1300] bg-amber-100 hover:bg-amber-200 border border-amber-400 hover:border-amber-500"
            }`}
          >
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
}
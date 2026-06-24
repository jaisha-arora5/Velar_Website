"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 relative overflow-hidden transition-colors duration-300"
    >
      
      {/* Video Viewport Container */}
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
        {/* Deep Slate-Blue Glassmorphic Overlay */}
        <div className="hero-video-overlay custom-overlay"></div>
      </div>

      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAF0EE]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40798C]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Hero Content Area */}
      <div className="max-w-4xl text-center space-y-6 relative z-10">
        
        {/* Sovereign Badge */}
        <span 
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.3)"
          }}
          className="inline-block text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm animate-pulse transition-all duration-300 bg-white/10 border border-white/20 text-sky-300 backdrop-blur-md animate-fade-in-up"
        >
          Next-Generation Sovereign Intelligence
        </span>
        
        {/* Heading */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] transition-colors duration-300 text-white animate-fade-in-up-delay-1"
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.75), 0 2px 4px rgba(0, 0, 0, 0.6)"
          }}
        >
          Secure, Autonomous <br className="hidden sm:inline" />
          AI Architecture <br />
          <span className="text-sky-400">
            Engineered for the Enterprise
          </span>
        </h1>

        {/* Description */}
        <p 
          className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors duration-300 text-slate-200 animate-fade-in-up-delay-2"
          style={{
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)"
          }}
        >
          Ring-fence your institutional data assets. Deploy localized, air-gapped LLM models and high-volume workflow automation protocols built for absolute data sovereignty.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 pt-4">
          
          {/* Explore Solutions (Primary Action) */}
          <Link
            href="/solutions"
            className="text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#36558F]/25 hover:shadow-[#36558F]/40 cursor-pointer text-white bg-[#36558F] hover:bg-[#40798C] hover:-translate-y-0.5"
          >
            Explore Solutions
          </Link>

          {/* Contact Us (Secondary Action) */}
          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";

interface EventItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  image?: string;
  date: string;
  location: string;
}

function EventImageSlider({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10">
        <svg className="w-8 h-8 text-slate-400 mb-1 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span className="text-[8px] tracking-widest text-slate-500 uppercase font-mono">VELAR EVENT MEDIA</span>
      </div>
    );
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider">
      <img 
        src={images[activeIndex]} 
        alt={`${title} - image ${activeIndex + 1}`} 
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
      />
      
      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/60 hover:bg-slate-950/85 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950/60 hover:bg-slate-950/85 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setActiveIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? "bg-white w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Vision() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const data = await res.ok ? await res.json() : [];
          setEvents(data);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const isDarkTheme = false;
  const isCustomTheme = true;

  const founders = [
    {
      name: "Nehal Bharti",
      role: "Co-Founder & Co-CEO",
      image: "/Nehal_Bharti.jpeg",
      note: `Enterprise client executive with over five years of experience driving retention, strategic partnerships, and AI-powered SaaS solutions across EdTech and US HealthTech. As Co-Founder & Co-CEO of Velar Info Private Limited, she bridges the gap between emerging AI capabilities and enterprise transformation. Today, she leads the company's strategic growth and innovation initiatives, delivering intelligent, secure, and impactful AI solutions tailored for public sector organizations.`,
    },
    {
      name: "Anu Arora",
      role: "Co-Founder & Co-CEO",
      image: null,
      note: "Operations and technology scaling expert with over six years of experience directing system deployments, compliance verification, and client delivery framework scaling. As Co-Founder & Co-CEO of Velar Info Private Limited, she oversees strategic deployment operations and ensures alignment with public sector standards. Under her co-leadership, Velar has scaled its local compute implementations to solve complex workflows for multiple regional organizations across India.",
    }
  ];

  const values = [
    {
      title: "Absolute Sovereignty",
      desc: "Protecting institutional and governmental data as critical national assets. We deploy all architectures locally to ensure zero external leakage.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Relentless Local Innovation",
      desc: "Developing custom, localized algorithms optimized specifically for on-premise servers and restricted intranet deployment scales.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Operational Integrity",
      desc: "Maintaining highly resilient systems with zero downtime and complete, auditable transaction logs that align with PSU mandates.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Institutional Trust",
      desc: "Establishing long-term collaborations with public sector organizations through transparency, physical audits, and dedicated on-site support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const accentColor = isDarkTheme ? "#06b6d4" : "#36558F";
  const accentBg = isDarkTheme ? "rgba(13, 42, 74, 0.4)" : "rgba(218, 240, 238, 0.6)";
  const accentBorder = isDarkTheme ? "rgba(6, 182, 212, 0.4)" : "rgba(54, 85, 143, 0.3)";
  const headingColor = isDarkTheme ? "text-white" : "text-[#1A2530]";
  const textColor = isDarkTheme ? "text-slate-400" : "text-[#1A2530]";
  const cardBg = isDarkTheme ? "#0A0726" : "#DAF0EE";
  const cardBorder = isDarkTheme ? "rgba(34, 211, 238, 0.1)" : "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen bg-transparent px-6 py-24 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient Flares */}
      <div className={`absolute top-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full pointer-events-none ${
        isDarkTheme ? "bg-cyan-500/5" : "bg-[#36558F]/5"
      }`} />

      <div className="max-w-7xl w-full space-y-24 relative z-10">
        
        {/* 1. MEET THE ARCHITECTS - MOVED TO TOP */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingColor}`}>
              Meet the Architects of Velar
            </h2>
            <p className={`text-xs sm:text-sm max-w-md mx-auto ${textColor}`}>
              Leading Velar Info's strategic deployment operations, compliance alignment, and corporate scaling.
            </p>
          </div>

          {/* Bios Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder
                }}
                className="w-full border rounded-2xl overflow-hidden shadow-2xl hover:border-opacity-70 transition-all duration-500 flex flex-col group"
              >
                {/* Vertical Portrait Container */}
                <div 
                  className={`w-full aspect-[12/10] relative overflow-hidden flex items-center justify-center flex-shrink-0 border-b ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-white/5 text-slate-700"
                      : "bg-[#DAF0EE] border-[#40798C]/20 text-[#40798C]"
                  }`}
                >
                  {founder.image ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10">
                      <svg className="w-12 h-12 text-slate-400 mb-2 opacity-55" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">EXECUTIVE REPRESENTATION</span>
                    </div>
                  )}
                  
                  {/* Name and Role Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t z-10 ${
                    isDarkTheme ? "from-[#0A0726] to-transparent" : "from-[#DAF0EE] to-transparent"
                  }`}>
                    <h3 className={`text-lg font-bold tracking-tight ${headingColor}`}>{founder.name}</h3>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: accentColor }}>{founder.role}</p>
                  </div>
                </div>

                {/* Note Block */}
                <div className="p-6 flex-1 flex flex-col justify-start bg-gradient-to-b from-transparent to-[#050317]/10">
                  <p className={`text-xs leading-relaxed italic transition-colors duration-300 ${textColor}`}>
                    "{founder.note}"
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. VISION & MISSION BANNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Block */}
          <div 
            style={{
              backgroundColor: cardBg,
              borderColor: cardBorder
            }}
            className="border p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl ${
              isDarkTheme ? "bg-blue-600/10" : "bg-[#36558F]/10"
            }`} />
            <div className="space-y-4 relative z-10">
              <span 
                style={{
                  color: accentColor,
                  backgroundColor: accentBg,
                  borderColor: accentBorder
                }}
                className="inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-0.5 rounded-full"
              >
                OUR VISION
              </span>
              <h2 className={`text-2xl font-bold tracking-tight ${headingColor}`}>
                Securing National Data Infrastructure
              </h2>
              <p className={`text-sm leading-relaxed ${textColor}`}>
                To become the most trusted AI-driven digital transformation partner for enterprises and public sector organizations across India, securing national data assets while driving operational excellence and autonomous intelligence.
              </p>
            </div>
          </div>

          {/* Mission Block */}
          <div 
            style={{
              backgroundColor: cardBg,
              borderColor: cardBorder
            }}
            className="border p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl ${
              isDarkTheme ? "bg-cyan-500/10" : "bg-[#40798C]/10"
            }`} />
            <div className="space-y-4 relative z-10">
              <span 
                style={{
                  color: accentColor,
                  backgroundColor: accentBg,
                  borderColor: accentBorder
                }}
                className="inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-0.5 rounded-full"
              >
                OUR MISSION
              </span>
              <h2 className={`text-2xl font-bold tracking-tight ${headingColor}`}>
                Driving Actionable Operational Value
              </h2>
              <p className={`text-sm leading-relaxed ${textColor}`}>
                To develop scalable, secure, and innovative AI-powered solutions that create measurable operational value, enhance decision-making speed, and drive efficiency in sovereign organizations through local processing.
              </p>
            </div>
          </div>

        </div>

        {/* 3. CORE VALUES SECTION */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
              Our Core Institutional Values
            </h2>
            <p className={`text-xs sm:text-sm max-w-md mx-auto ${textColor}`}>
              We operate under a rigid ethical framework dedicated to safeguarding data and providing absolute technological reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder
                }}
                className="border p-6 rounded-2xl shadow-md flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div 
                  style={{
                    backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
                    color: accentColor
                  }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className={`text-base font-bold tracking-tight ${headingColor}`}>
                    {val.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${textColor}`}>
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. COMPANY EVENTS SECTION (NEW) */}
        <div className="space-y-12 pt-8">
          <div className="text-center space-y-3">
            <span 
              style={{
                color: accentColor,
                backgroundColor: accentBg,
                borderColor: accentBorder
              }}
              className="inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-0.5 rounded-full"
            >
              VELAR IN ACTION
            </span>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
              Company Events & Milestones
            </h2>
            <p className={`text-xs sm:text-sm max-w-md mx-auto ${textColor}`}>
              Explore our latest achievements, local hardware deployments, and strategic technology seminars.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2].map((n) => (
                <div 
                  key={n}
                  style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                  className="border rounded-2xl overflow-hidden h-[380px] animate-pulse flex flex-col justify-between"
                >
                  <div className="w-full h-48 bg-slate-400/10" />
                  <div className="p-6 space-y-4 flex-1">
                    <div className="h-3 w-1/4 bg-slate-400/10 rounded" />
                    <div className="h-6 w-3/4 bg-slate-400/10 rounded" />
                    <div className="h-4 w-full bg-slate-400/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-8">
              <p className={`text-xs ${textColor}`}>No public events recorded yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {events.map((event) => (
                <div 
                  key={event.id}
                  style={{
                    backgroundColor: cardBg,
                    borderColor: cardBorder
                  }}
                  className="w-full border rounded-2xl overflow-hidden shadow-xl hover:border-opacity-70 transition-all duration-500 flex flex-col group"
                >
                  {/* Event Photo Container */}
                  <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-900/10 border-b border-white/5">
                    <EventImageSlider 
                      images={event.images || (event.image ? [event.image] : [])} 
                      title={event.title} 
                    />

                    {/* Date and Location overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[9px] font-mono font-semibold tracking-wider text-white bg-slate-950/60 px-3 py-1.5 rounded-md backdrop-blur-sm">
                      <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className={`text-base font-bold tracking-tight ${headingColor} group-hover:text-[#36558F] transition-colors duration-300`}>
                        {event.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${textColor}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
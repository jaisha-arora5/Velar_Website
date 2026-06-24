"use client";

import { useState } from "react";

export default function About() {
  const [skills] = useState([
    { name: "Secure On-Premises LLM Fine-Tuning", value: 95, desc: "Custom model training on private GPU clusters" },
    { name: "Multi-Department Workflow Automation Accuracy", value: 92, desc: "Automatic document parsing and validation" },
    { name: "Legacy Enterprise Data Migration Pipelines", value: 88, desc: "Safe ingest from old mainframe and SQL databases" },
  ]);

  const stats = [
    { number: "99.9%", label: "Operational Uptime", desc: "Ensuring mission-critical systems never fail" },
    { number: "15M+", label: "Daily Secure Operations", desc: "High-volume data processing across secure networks" },
    { number: "100%", label: "Air-Gapped Compliance", desc: "Meets absolute sovereign data mandates" },
    { number: "Zero", label: "Cloud Exposure Factor", desc: "Eliminating internet attack vectors entirely" },
  ];

  const coreDifferentiators = [
    {
      title: "Sovereign Engineering",
      desc: "Unlike standard SaaS platforms that route queries to public models, Velar Info designs and builds local infrastructure. Your models live in your physical data centers, keeping all internal knowledge secure.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "PSU Guidelines Native",
      desc: "Our automated solutions are engineered around central government standards, supporting file tracking systems (FTS), note-sheet drafting compliance, and multi-layered bureaucratic routing patterns.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "HQ in New Delhi",
      desc: "Conveniently situated in the heart of India's decision-making center, our local teams provide direct support, physical compliance verification, and on-site hardware alignment for ministries and CPSUs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const isDarkTheme = false;
  const isCustomTheme = true;
  const accentColor = "#36558F";
  const accentBg = "rgba(218, 240, 238, 0.6)";
  const accentBorder = "rgba(54, 85, 143, 0.3)";
  const textColor = "text-[#1A2530]";
  const headingColor = "text-[#1A2530]";
  const cardBg = "#DAF0EE";
  const cardBorder = "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen bg-transparent px-6 py-24 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Blur Flares */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[#36558F]/5" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[#40798C]/5" />

      <div className="max-w-7xl w-full space-y-24 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Graphic */}
          <div className="lg:col-span-5 relative aspect-square w-full border rounded-2xl overflow-hidden shadow-2xl group hover:border-opacity-50 transition-all duration-300"
            style={{
              backgroundColor: isDarkTheme ? "#0A0726" : "#FAF9F6",
              borderColor: cardBorder
            }}
          >
            <img 
              src="/AI-PHOTO-1.JPG" 
              alt="Velar Enterprise AI Infrastructure" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span 
                style={{
                  color: accentColor,
                  backgroundColor: accentBg,
                  borderColor: accentBorder
                }}
                className="inline-block text-xs font-mono tracking-widest uppercase border px-3 py-1 rounded-full"
              >
                ABOUT VELAR INFO
              </span>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight transition-colors duration-300 ${headingColor}`}>
                Architecting Sovereign Intelligence Engines for Critical Sector Operations.
              </h1>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
              Velar Info Private Limited is an AI-focused technology startup dedicated to building customized artificial intelligence solutions, intelligent automation systems, and enterprise technology platforms. Our target audience spans Central Public Sector Undertakings (CPSUs), State Public Sector Undertakings (SPSUs), and institutional organizations across India.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
              With our central headquarters located in New Delhi, we are uniquely positioned to align with national digital directives. We focus heavily on leveraging Machine Learning, Generative AI, secure workflow automation, and localized data analytics to improve operational efficiency, accelerate decision-making, and safely drive digital transformation.
            </p>
          </div>
        </div>

        {/* Core Pillars / Differentiators */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
              Our Foundational Engineering Differentiators
            </h2>
            <p className={`text-xs sm:text-sm max-w-xl mx-auto ${textColor}`}>
              We build architectures from the ground up to operate under strict constraints of absolute security, regional regulatory frameworks, and legacy hardware compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreDifferentiators.map((diff, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder
                }}
                className="border p-8 rounded-2xl shadow-md flex flex-col gap-4 group hover:scale-[1.01] transition-transform duration-300"
              >
                <div 
                  style={{
                    backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
                    color: accentColor
                  }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  {diff.icon}
                </div>
                <h3 className={`text-lg font-bold tracking-tight ${headingColor}`}>
                  {diff.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${textColor}`}>
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Bars & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-8 border-t border-white/5">
          {/* Left Column: Tech Capabilities */}
          <div className="space-y-8 w-full">
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingColor}`}>
                Our Technical Performance Benchmarks
              </h3>
              <p className={`text-xs sm:text-sm ${textColor}`}>
                We benchmark our platforms against state-of-the-art standards to satisfy rigid security compliance matrices and sub-second operational timelines.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className={`flex justify-between text-xs sm:text-sm font-medium tracking-tight ${textColor}`}>
                    <div className="flex flex-col">
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">{skill.desc}</span>
                    </div>
                    <span className="font-mono text-cyan-400">{skill.value}%</span>
                  </div>
                  <div 
                    style={{
                      backgroundColor: isDarkTheme ? "#0A0726" : "#FAF9F6",
                      borderColor: cardBorder
                    }}
                    className="w-full h-2 border rounded-full overflow-hidden"
                  >
                    <div 
                      className={`h-full bg-gradient-to-r rounded-full transition-all duration-1000 ${
                        isDarkTheme 
                          ? "from-blue-600 to-cyan-400" 
                          : "from-[#36558F] to-[#40798C]"
                      }`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Numeric Trust Matrix */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingColor}`}>
                Operational Statistics
              </h3>
              <p className={`text-xs sm:text-sm ${textColor}`}>
                Providing steady, high-performance infrastructure built to scale across government domains.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: cardBg,
                    borderColor: cardBorder
                  }}
                  className="border p-6 rounded-2xl transition-all duration-300 shadow-md group hover:border-opacity-50"
                >
                  <div 
                    style={{ color: accentColor }}
                    className="text-2xl sm:text-4xl font-extrabold tracking-tight"
                  >
                    {stat.number}
                  </div>
                  <div className={`text-[11px] sm:text-xs font-bold tracking-normal mt-2 leading-snug ${headingColor}`}>
                    {stat.label}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
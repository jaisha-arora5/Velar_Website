"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      q: "Are Velar Info deployments fully air-gapped?",
      a: "Yes. Our cognitive solutions and Large Language Models are hosted entirely on physical GPU server nodes inside your secure, on-premises data centers, ensuring zero external telemetry or cloud leakage."
    },
    {
      q: "How do your tools integrate with legacy enterprise databases?",
      a: "We deploy secure, read-only adapters that connect directly with your on-premise databases (e.g. Oracle, SQL Server, SAP) using encrypted local channels, mapping raw telemetry to structured vector databases locally."
    },
    {
      q: "Do you fine-tune AI models on client datasets?",
      a: "Yes. We specialize in fine-tuning models on your specific guidelines, official acts, manual documents, and historical note-sheets. The model weights are generated and stored exclusively within your network."
    },
    {
      q: "Are the workflow automation platforms pre-compliant?",
      a: "Our file routing and note-sheet automation engines are built native to standard public sector guidelines, supporting official note-sheet drafting protocols and role-based authority matrix definitions."
    }
  ];

  const accentColor = isDarkTheme ? "#06b6d4" : "#36558F";
  const accentBgColor = isDarkTheme ? "rgba(13, 42, 74, 0.4)" : "rgba(218, 240, 238, 0.6)";
  const accentBorderColor = isDarkTheme ? "rgba(6, 182, 212, 0.4)" : "rgba(54, 85, 143, 0.3)";
  const headingColor = isDarkTheme ? "text-white" : "text-[#1A2530]";
  const textColor = isDarkTheme ? "text-slate-400" : "text-[#1A2530]";
  const cardBg = isDarkTheme ? "#0A0726" : "#DAF0EE";
  const cardBorder = isDarkTheme ? "rgba(34, 211, 238, 0.1)" : "rgba(64, 121, 140, 0.2)";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Flares */}
      <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
        isDarkTheme ? "bg-cyan-500/5" : "bg-[#36558F]/5"
      }`} />

      <div className="max-w-7xl w-full space-y-16 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span 
            style={{
              color: accentColor,
              backgroundColor: accentBgColor,
              borderColor: accentBorderColor
            }}
            className="inline-block text-[10px] font-mono tracking-wider uppercase border px-3 py-1 rounded-full"
          >
            Direct Channels
          </span>
          <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingColor}`}>
            Connect With Our Enterprise Briefing Team
          </h1>
          <p className={`text-xs sm:text-sm max-w-md mx-auto ${textColor}`}>
            Initiate a secure channel to discuss custom local deployments, PSU compliance, or platform integration architectures.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* COLUMN 1: INQUIRY FORM */}
          <div 
            style={{
              backgroundColor: isDarkTheme ? "#0A0726" : "#FAF9F6",
              borderColor: cardBorder
            }}
            className="border rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between relative group hover:border-opacity-50 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className={`text-[10px] font-mono tracking-wider uppercase ${textColor}`}>Authorized Official Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Director of Operations"
                  style={{
                    backgroundColor: isDarkTheme ? "#030014" : "#FFFFFF",
                    borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(64, 121, 140, 0.25)",
                    color: isDarkTheme ? "#fff" : "#1A2530"
                  }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none ${
                    isDarkTheme 
                      ? "placeholder-slate-600 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                      : "placeholder-slate-400 focus:border-[#36558F]/50 focus:shadow-[0_0_15px_rgba(54,85,143,0.15)]"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-[10px] font-mono tracking-wider uppercase ${textColor}`}>Institutional Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.gov.in"
                  style={{
                    backgroundColor: isDarkTheme ? "#030014" : "#FFFFFF",
                    borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(64, 121, 140, 0.25)",
                    color: isDarkTheme ? "#fff" : "#1A2530"
                  }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none ${
                    isDarkTheme 
                      ? "placeholder-slate-600 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                      : "placeholder-slate-400 focus:border-[#36558F]/50 focus:shadow-[0_0_15px_rgba(54,85,143,0.15)]"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-[10px] font-mono tracking-wider uppercase ${textColor}`}>Brief Operational Requirements</label>
                <textarea 
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline required data compliance parameters, scale of nodes..."
                  style={{
                    backgroundColor: isDarkTheme ? "#030014" : "#FFFFFF",
                    borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(64, 121, 140, 0.25)",
                    color: isDarkTheme ? "#fff" : "#1A2530"
                  }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none resize-none ${
                    isDarkTheme 
                      ? "placeholder-slate-600 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                      : "placeholder-slate-400 focus:border-[#36558F]/50 focus:shadow-[0_0_15px_rgba(54,85,143,0.15)]"
                  }`}
                />
              </div>

              <button 
                type="submit"
                className={`w-full text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md cursor-pointer mt-2 ${
                  isDarkTheme
                    ? "text-[#030014] bg-cyan-400 hover:bg-cyan-300 shadow-cyan-500/10"
                    : "text-white bg-[#36558F] hover:bg-[#40798C] shadow-[#36558F]/20 hover:shadow-[#36558F]/30"
                }`}
              >
                {submitted ? "Transmission Dispatched ✓" : "Transmit Secure Request"}
              </button>
            </form>
          </div>

          {/* COLUMN 2: CONTACT DETAILS */}
          <div className="flex flex-col justify-between gap-6">
            
            {/* Coordinates Block */}
            <div 
              style={{
                backgroundColor: isDarkTheme ? "#0A0726" : "#FAF9F6",
                borderColor: cardBorder
              }}
              className="border rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.15)] space-y-4 flex-1 flex flex-col justify-center"
            >
              <div>
                <span style={{ color: accentColor }} className="text-[9px] font-mono tracking-widest uppercase">HQ REGISTERED OFFICE</span>
                <h3 className={`text-xl font-bold tracking-tight mt-0.5 ${headingColor}`}>Velar Info Pvt Ltd</h3>
              </div>
              
              <div className="space-y-3.5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div 
                    style={{
                      backgroundColor: accentBgColor,
                      borderColor: accentBorderColor,
                      color: accentColor
                    }}
                    className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Corporate Address</h4>
                    <p className={`text-xs font-semibold mt-0.5 leading-relaxed ${headingColor}`}>
                      X-20 First Floor, Naveen Shahdara, Delhi - 110032
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div 
                    style={{
                      backgroundColor: accentBgColor,
                      borderColor: accentBorderColor,
                      color: accentColor
                    }}
                    className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.981 14.981 0 01-6.174-6.174l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Secure Direct Line</h4>
                    <p className={`text-xs font-semibold mt-0.5 transition-colors ${
                      isDarkTheme ? "text-white hover:text-cyan-400" : "text-[#36558F] hover:text-[#40798C]"
                    }`}>
                      <a href="tel:+91-9811051060">+91-9811051060</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div 
                    style={{
                      backgroundColor: accentBgColor,
                      borderColor: accentBorderColor,
                      color: accentColor
                    }}
                    className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Secure Mail Interface</h4>
                    <p className={`text-xs font-semibold mt-0.5 transition-colors ${
                      isDarkTheme ? "text-white hover:text-cyan-400" : "text-[#36558F] hover:text-[#40798C]"
                    }`}>
                      <a href="mailto:sales@velarinfo.com">sales@velarinfo.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Block */}
            <div 
              style={{
                backgroundColor: isDarkTheme ? "#0A0726" : "#FAF9F6",
                borderColor: cardBorder
              }}
              className="border rounded-2xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <h4 className={`text-xs font-bold tracking-tight ${headingColor}`}>Institutional Media</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Stay updated with our deployment updates.</p>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl transition-all border ${
                    isDarkTheme
                      ? "text-slate-350 bg-[#030014] border-white/5 hover:border-blue-500/40 hover:text-blue-400"
                      : "text-[#36558F] bg-[#DAF0EE] border-[#40798C]/20 hover:border-[#36558F]"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl transition-all border ${
                    isDarkTheme
                      ? "text-slate-350 bg-[#030014] border-white/5 hover:border-pink-500/40 hover:text-pink-400"
                      : "text-[#36558F] bg-[#DAF0EE] border-[#40798C]/20 hover:border-[#36558F]"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="max-w-7xl w-full border-t border-white/5 pt-20 space-y-10">
          <div className="text-center space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
              Enterprise FAQs & Deployment Queries
            </h2>
            <p className={`text-xs sm:text-sm max-w-md mx-auto ${textColor}`}>
              Key information regarding air-gapped system structures, security measures, and database integration guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder
                }}
                className="border p-6 rounded-2xl shadow-sm space-y-2 group hover:scale-[1.01] transition-transform"
              >
                <h3 className={`text-base font-bold tracking-tight ${headingColor}`}>
                  {faq.q}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed text-slate-500`}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
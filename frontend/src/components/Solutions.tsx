"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SolutionCard {
  title: string;
  description: string;
  tag: string;
  features: string[];
  techStack: string;
  deployment: string;
}

export default function Solutions() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeStep, setActiveStep] = useState<number>(0);

  const leftSolutions: SolutionCard[] = [
    {
      title: "AI-Powered Enterprise Solutions",
      description: "Secure, Retrieval-Augmented Generation (RAG) platforms configured to query, analyze, and index voluminous governmental documentation, directives, and operational records.",
      tag: "Enterprise Cognitive RAG",
      features: [
        "Semantic search across scanned hand-written note-sheets",
        "Automatic cross-reference of central gov guidelines and acts",
        "Dual-level query validation to ensure compliance"
      ],
      techStack: "PostgreSQL pgvector, Python FastAPI, Qwen-72B",
      deployment: "100% On-Premises Air-Gapped"
    },
    {
      title: "Workflow Automation Systems",
      description: "Intelligent engines that streamline file movement, draft official correspondence, and process multi-department note-sheets in absolute compliance with PSU protocols.",
      tag: "Orchestration & Routing",
      features: [
        "AI-driven note-sheet pre-drafting and summary sheets",
        "Adaptive file movement paths with bottleneck prediction",
        "Automated digital signing and seal verification"
      ],
      techStack: "Next.js, Node.js, RabbitMQ, Docker",
      deployment: "Hybrid Secure / Local Compute Nodes"
    },
    {
      title: "Intelligent Reporting & Analytics",
      description: "Real-time system diagnostics, predictive infrastructure maintenance algorithms, and custom analytical dashboard platforms designed for CPSU administration.",
      tag: "Decision intelligence BI",
      features: [
        "Real-time database querying using Natural Language (Text-to-SQL)",
        "Predictive telemetry mapping for power grids and water supplies",
        "Automated compliance audit log generation"
      ],
      techStack: "Apache Spark, Python, React, ClickHouse",
      deployment: "On-Premises / Restricted Intranet"
    }
  ];

  const rightSolutions: SolutionCard[] = [
    {
      title: "Generative AI Applications",
      description: "Tailored fine-tuned open-source LLMs trained on domain-specific terminology, specialized heavy engineering guidelines, or proprietary sector datasets.",
      tag: "Domain Fine-Tuned LLMs",
      features: [
        "Localized vocabulary fine-tuning for technical blueprints",
        "Secure prompt templates with automated censorship of PII",
        "Offline API endpoint access for third-party system integrations"
      ],
      techStack: "PyTorch, Llama-3-70B, HuggingFace, CUDA",
      deployment: "Dedicated On-Premise GPU Nodes"
    },
    {
      title: "Customized SaaS Platforms",
      description: "High-performance, secure, and responsive web portals built from scratch to integrate with legacy software, databases, and operational frameworks.",
      tag: "Bespoke SaaS Architecture",
      features: [
        "Role-based secure access control (RBAC) with single sign-on (SSO)",
        "Extremely responsive and accessible (WCAG compliant) frontend",
        "Modular widgets for custom monitoring and telemetry"
      ],
      techStack: "TypeScript, React, Next.js, TailWind CSS",
      deployment: "Private Government Cloud / On-Premise"
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Conversational agents deployed on internal networks to answer employee policy queries or provide automated assistance to citizen inquiries.",
      tag: "Conversational Interface",
      features: [
        "Support for regional Indian languages (Vernacular AI NLP)",
        "Zero dependency on external translation APIs",
        "Pre-integrated policy directories for instant lookup"
      ],
      techStack: "Rasa NLP, Python, PyTorch, Node.js",
      deployment: "Air-Gapped Intranet Nodes"
    }
  ];

  const simulatorSteps = [
    {
      title: "1. Secure Ingestion & Parsing",
      desc: "Raw documents (circulars, sheets, databases) are parsed locally. PII and metadata are stripped automatically in a secure sandbox.",
      status: "Active Isolation",
      logs: [
        "INGEST: Parsing File: G_circular_2026.pdf",
        "INGEST: Anonymizing employee IDs...",
        "INGEST: 100% local buffer success."
      ]
    },
    {
      title: "2. Vector Indexing",
      desc: "Text is chunked and embedded using on-premise embedding models, then index-mapped inside a local PostgreSQL vector database.",
      status: "Local Sync Completed",
      logs: [
        "VECTOR: Generating 768-dim embeddings...",
        "VECTOR: In-memory HNSW index updated.",
        "VECTOR: Syncing database entries: OK"
      ]
    },
    {
      title: "3. Air-Gapped Inference",
      desc: "A fine-tuned localized Llama model queries the vectorized context. Zero data queries exit the internal network firewall.",
      status: "Sovereign Query Success",
      logs: [
        "MODEL: Ingesting query template...",
        "MODEL: Matching local vector context...",
        "MODEL: Response parsed with 98.4% accuracy."
      ]
    },
    {
      title: "4. Audited Output Delivery",
      desc: "The output is double-checked for compliance against institutional rules and safely returned to the user dashboard.",
      status: "Compliance Certified",
      logs: [
        "AUDIT: Policy compliance check: PASS",
        "AUDIT: System logs encrypted and saved.",
        "SYS: Output dispatched to local client UI."
      ]
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
  const headingColor = isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]";
  const textColor = isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-900";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Header Container Block */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
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
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                  {sol.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-white/5">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] flex items-start gap-2 text-slate-500">
                      <span style={{ color: accentColor }} className="font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Specs */}
                <div className="pt-2 flex flex-col gap-1 text-[10px] font-mono text-slate-500">
                  <div><span className="font-bold">Tech:</span> {sol.techStack}</div>
                  <div><span className="font-bold">Deploy:</span> {sol.deployment}</div>
                </div>
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
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                  {sol.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-white/5">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] flex items-start gap-2 text-slate-500">
                      <span style={{ color: accentColor }} className="font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Specs */}
                <div className="pt-2 flex flex-col gap-1 text-[10px] font-mono text-slate-500">
                  <div><span className="font-bold">Tech:</span> {sol.techStack}</div>
                  <div><span className="font-bold">Deploy:</span> {sol.deployment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SOVEREIGN DEPLOYMENT FLOW SIMULATOR */}
      <div className="max-w-7xl w-full mt-32 border-t border-white/5 pt-24 space-y-12 relative z-10">
        
        <div className="text-center space-y-3">
          <span 
            style={{
              color: accentColor,
              backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : isCustomTheme ? "rgba(54, 85, 143, 0.1)" : "rgba(217, 119, 6, 0.1)",
              borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : isCustomTheme ? "rgba(54, 85, 143, 0.2)" : "rgba(217, 119, 6, 0.2)"
            }}
            className="inline-block text-[10px] font-mono tracking-wider uppercase border px-3 py-1 rounded-full"
          >
            Processing Pipeline
          </span>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingColor}`}>
            Sovereign AI Deployment Flow Simulator
          </h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto ${textColor}`}>
            Interactive simulator showcasing step-by-step query execution across a ring-fenced enterprise network infrastructure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {simulatorSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                backgroundColor: activeStep === idx ? (isDarkTheme ? "#0A0726" : isCustomTheme ? "#DAF0EE" : "#fef3c7") : "transparent",
                borderColor: activeStep === idx ? accentColor : (isDarkTheme ? "rgba(34, 211, 238, 0.1)" : isCustomTheme ? "rgba(64, 121, 140, 0.2)" : "rgba(217, 119, 6, 0.2)")
              }}
              className="text-left border p-6 rounded-2xl cursor-pointer flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-3">
                <div className={`text-xs font-bold font-mono ${
                  activeStep === idx ? (isDarkTheme ? "text-cyan-400" : isCustomTheme ? "text-[#36558F]" : "text-yellow-600") : "text-slate-500"
                }`}>
                  {step.title}
                </div>
                <p className={`text-xs leading-relaxed ${textColor}`}>
                  {step.desc}
                </p>
              </div>
              <div 
                className={`text-[9px] font-mono uppercase tracking-widest mt-6 py-1 px-2.5 rounded border self-start ${
                  activeStep === idx 
                    ? (isDarkTheme ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" : isCustomTheme ? "bg-[#36558F]/10 text-[#36558F] border-[#36558F]/30" : "bg-yellow-500/10 text-yellow-600 border-yellow-500/30") 
                    : "bg-slate-550/5 text-slate-500 border-white/5"
                }`}
              >
                {step.status}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Code Sandbox Terminal */}
        <div 
          style={{
            backgroundColor: "#030014",
            borderColor: "rgba(255, 255, 255, 0.1)"
          }}
          className="w-full border rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[220px]"
        >
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-white/5">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              Isolated Pipeline Execution Logs &bull; Step {activeStep + 1}
            </span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">ACTIVE</span>
            </div>
          </div>

          <div className="p-6 font-mono text-xs text-green-400 space-y-2 flex-1 flex flex-col justify-center">
            {simulatorSteps[activeStep].logs.map((log, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-slate-600">&gt;&gt;</span>
                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
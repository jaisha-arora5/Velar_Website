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

  const allSolutions: SolutionCard[] = [
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
    },
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

  const cardBorder = isDarkTheme 
    ? "rgba(255, 255, 255, 0.08)" 
    : isCustomTheme 
    ? "rgba(64, 121, 140, 0.2)" 
    : "rgba(217, 119, 6, 0.15)";
  const cardBg = isDarkTheme 
    ? "rgba(10, 7, 38, 0.65)" 
    : isCustomTheme 
    ? "rgba(255, 255, 255, 0.85)" 
    : "rgba(250, 249, 246, 0.9)";

  const workflowSteps = [
    {
      stepId: "STAGE-01 / COLLECTION",
      title: "Secure Data Collection",
      desc: "Secure ingestion of enterprise documents and datasets through isolated, authenticated channels with full auditability.",
      icon: "📋",
      status: "SECURE INGESTION ACTIVE",
      metrics: [
        { label: "Data Pipeline", value: "100% Air-Gapped", type: "badge" },
        { label: "Anonymization", value: "Active & Local", type: "success" },
        { label: "MITM Check", value: "Passed", type: "success" },
        { label: "Ingest Completion", value: "100%", type: "gauge", progress: 100 }
      ],
      checklist: [
        "PII scrubbed locally before indexing",
        "Encrypted transfer protocols verified",
        "Immutable audit logs created",
        "Directory path validation complete"
      ]
    },
    {
      stepId: "STAGE-02 / PROCESSING",
      title: "Processing & Indexing",
      desc: "Advanced semantic processing and vector indexing on on-premise infrastructure, ensuring zero data exposure to external networks.",
      icon: "⚙️",
      status: "LOCAL SYNC COMPLETED",
      metrics: [
        { label: "Index Engine", value: "pgvector On-Premise", type: "success" },
        { label: "Embedding Model", value: "768-dim Local", type: "badge" },
        { label: "Vector DB Seal", value: "Synchronized", type: "success" },
        { label: "Memory Indexing", value: "100%", type: "gauge", progress: 100 }
      ],
      checklist: [
        "Local vector database online",
        "Text chunking & vectorizing active",
        "HNSW index sealed in-memory",
        "External telemetry blocked"
      ]
    },
    {
      stepId: "STAGE-03 / INFERENCE",
      title: "Intelligent Processing",
      desc: "Fine-tuned, domain-specific AI models deliver context-aware insights with enterprise-grade accuracy and compliance validation.",
      icon: "🧠",
      status: "SOVEREIGN QUERY SUCCESS",
      metrics: [
        { label: "Local GPU Core", value: "GPU Ring-Fenced", type: "success" },
        { label: "Model Type", value: "Domain Fine-Tuned", type: "badge" },
        { label: "Output Compliance", value: "Certified Pass", type: "success" },
        { label: "Query Accuracy", value: "98.4%", type: "gauge", progress: 98.4 }
      ],
      checklist: [
        "Localized Qwen/Llama weights loaded",
        "Isolated inference bounds verified",
        "Institutional query filters active",
        "Accuracy benchmark completed"
      ]
    },
    {
      stepId: "STAGE-04 / DELIVERY",
      title: "Secure Delivery",
      desc: "Encrypted, audited delivery of insights to authorized stakeholders with role-based access control and immutable logging.",
      icon: "🔒",
      status: "COMPLIANCE CERTIFIED",
      metrics: [
        { label: "SSO Connection", value: "Local Active", type: "success" },
        { label: "Data Encryption", value: "End-to-End Active", type: "success" },
        { label: "Access Bounds", value: "RBAC Enforced", type: "badge" },
        { label: "Audit Verification", value: "100%", type: "gauge", progress: 100 }
      ],
      checklist: [
        "Client UI encryption handshakes OK",
        "Immutable database logs encrypted",
        "Role-based token validation passed",
        "Compliance certificate generated"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Header Container Block */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
          Our Suite of Enterprise Solutions
        </h2>
      </div>

      {/* THE MASTER GLASSMORPHIC GRID ARCHITECTURE */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        
        {allSolutions.map((sol, idx) => (
          <div 
            key={idx}
            style={{
              backgroundColor: isDarkTheme ? "rgba(15, 23, 42, 0.3)" : "rgba(255, 255, 255, 0.4)",
              borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(64, 121, 140, 0.2)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: isDarkTheme 
                ? "0 10px 30px -10px rgba(6, 182, 212, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.05)" 
                : "0 10px 30px -10px rgba(54, 85, 143, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
            }}
            className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.01] min-h-[340px] max-h-[340px] hover:max-h-[680px]`}
          >
            {/* Image Placeholder Block */}
            <div 
              style={{
                borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(64, 121, 140, 0.15)",
                backgroundColor: isDarkTheme ? "rgba(255, 255, 255, 0.01)" : "rgba(54, 85, 143, 0.02)"
              }}
              className="h-44 w-full border-b border-dashed flex items-center justify-center flex-shrink-0 relative group-hover:bg-opacity-50 transition-all duration-300"
            >
              {/* Placeholder Indicator Icon & Text */}
              <div className="flex flex-col items-center gap-2 text-slate-500/70">
                <svg className="w-8 h-8 opacity-40 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-60">Solution Asset {idx + 1}</span>
              </div>
            </div>

            {/* Card Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between overflow-hidden">
              <div className="space-y-3">
                {/* Tag Badge */}
                <span 
                  style={{
                    color: accentColor,
                    backgroundColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : "rgba(218, 240, 238, 0.6)",
                    borderColor: isDarkTheme 
                      ? "rgba(13, 42, 74, 0.4)" 
                      : "rgba(54, 85, 143, 0.3)"
                  }}
                  className="inline-block text-[10px] font-mono tracking-wider uppercase border px-2 py-0.5 rounded self-start"
                >
                  {sol.tag}
                </span>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isDarkTheme 
                    ? "text-white group-hover:text-blue-400"
                    : isCustomTheme
                    ? "text-[#1A2530] group-hover:text-[#36558F]"
                    : "text-[#1F1300] group-hover:text-yellow-600"
                }`}>
                  {sol.title}
                </h3>

                {/* Short Preview (always visible, truncated) */}
                <p className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${textColor} group-hover:hidden`}>
                  {sol.description}
                </p>

                {/* Expanded Content (visible on hover) */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[380px] transition-all duration-500 ease-in-out overflow-hidden space-y-4">
                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                    {sol.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-3 border-t border-white/5">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] flex items-start gap-2 text-slate-500">
                        <span style={{ color: accentColor }} className="font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Specs */}
              <div className="pt-4 mt-auto border-t border-white/5 flex flex-col gap-1.5 text-[10px] font-mono text-slate-500 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-400">Tech:</span>
                  <span className="truncate">{sol.techStack}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-400">Deploy:</span>
                  <span className="truncate">{sol.deployment}</span>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* PROFESSIONAL DEPLOYMENT PROCESS FLOW */}
      <div className="max-w-7xl w-full mt-32 border-t pt-24 space-y-16 relative z-10"
        style={{
          borderTopColor: isDarkTheme 
            ? "rgba(255, 255, 255, 0.05)" 
            : isCustomTheme 
            ? "rgba(64, 121, 140, 0.15)" 
            : "rgba(217, 119, 6, 0.1)"
        }}>
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span 
            style={{
              color: accentColor,
              backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : isCustomTheme ? "rgba(54, 85, 143, 0.1)" : "rgba(217, 119, 6, 0.1)",
              borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : isCustomTheme ? "rgba(54, 85, 143, 0.2)" : "rgba(217, 119, 6, 0.2)"
            }}
            className="inline-block text-[10px] font-semibold tracking-wider uppercase border px-3 py-1.5 rounded-full"
          >
            Implementation Workflow
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${headingColor}`}>
            Our Deployment Process
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${textColor}`}>
            A structured, transparent approach to delivering enterprise solutions with security and compliance at every stage.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Buttons Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: activeStep === idx 
                    ? (isDarkTheme ? "rgba(59, 130, 246, 0.08)" : "rgba(218, 240, 238, 0.35)") 
                    : "transparent",
                  borderColor: activeStep === idx 
                    ? accentColor 
                    : (isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(64, 121, 140, 0.15)")
                }}
                className="w-full text-left p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  {/* Icon / Number Circle */}
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300"
                    style={{
                      backgroundColor: activeStep === idx ? accentColor : (isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(64, 121, 140, 0.08)"),
                      color: activeStep === idx ? (isDarkTheme ? "#030014" : "#FAF9F6") : (isDarkTheme ? "#94a3b8" : "#36558F")
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className={`font-bold text-sm transition-colors duration-300 ${headingColor}`}>
                      {step.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                      {step.stepId.split(" / ")[1]}
                    </span>
                  </div>
                </div>

                <div 
                  className={`w-2 h-2 rounded-full ${
                    activeStep === idx ? "animate-ping" : "opacity-40"
                  }`}
                  style={{ backgroundColor: activeStep === idx ? accentColor : "transparent" }}
                />
              </button>
            ))}
          </div>

          {/* Right Telemetry Panel */}
          <div className="lg:col-span-7">
            <div 
              style={{
                backgroundColor: cardBg,
                borderColor: cardBorder
              }}
              className="w-full border rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[380px] backdrop-blur-md transition-all duration-300"
            >
              {/* Telemetry Header */}
              <div 
                style={{ 
                  backgroundColor: isDarkTheme ? "rgba(3, 0, 20, 0.5)" : "rgba(218, 240, 238, 0.4)",
                  borderBottomColor: cardBorder
                }}
                className="px-6 py-4 flex items-center justify-between border-b transition-colors duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className={`text-[10px] font-bold tracking-widest transition-colors duration-300 uppercase ${isDarkTheme ? "text-slate-400" : "text-[#1A2530]"}`}>
                    Deployment Telemetry
                  </span>
                </div>
                <span 
                  style={{ 
                    color: accentColor,
                    backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
                    borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : "rgba(54, 85, 143, 0.2)"
                  }}
                  className="text-[9px] font-mono tracking-widest border px-2 py-0.5 rounded-full uppercase"
                >
                  {workflowSteps[activeStep].stepId}
                </span>
              </div>

              {/* Telemetry Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6 transition-all duration-300">
                
                {/* Active Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{workflowSteps[activeStep].icon}</span>
                      <h3 className={`text-base font-bold transition-colors duration-300 ${headingColor}`}>
                        {workflowSteps[activeStep].title}
                      </h3>
                    </div>
                    <span 
                      className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider flex-shrink-0 ${
                        isDarkTheme 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {workflowSteps[activeStep].status}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${textColor}`}>
                    {workflowSteps[activeStep].desc}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {workflowSteps[activeStep].metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      style={{
                        backgroundColor: isDarkTheme ? "rgba(255, 255, 255, 0.02)" : "rgba(54, 85, 143, 0.03)",
                        borderColor: cardBorder
                      }}
                      className="p-3 border rounded-xl flex flex-col justify-between gap-1.5 transition-all duration-300"
                    >
                      <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      {metric.type === "gauge" ? (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-bold">
                            <span style={{ color: accentColor }}>{metric.value}</span>
                          </div>
                          <div className={`w-full h-1.5 rounded-full ${isDarkTheme ? "bg-slate-800/80" : "bg-slate-200"} overflow-hidden`}>
                            <div 
                              style={{ 
                                width: `${metric.progress}%`,
                                backgroundColor: accentColor
                              }}
                              className="h-full rounded-full transition-all duration-500"
                            />
                          </div>
                        </div>
                      ) : (
                        <span 
                          style={{ 
                            color: metric.type === "success" 
                              ? (isDarkTheme ? "#34d399" : "#0f766e")
                              : metric.type === "warning"
                              ? (isDarkTheme ? "#fbbf24" : "#b45309")
                              : accentColor 
                          }}
                          className="text-[12px] font-bold tracking-tight"
                        >
                          {metric.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Compliance Verification Checklist */}
                <div 
                  style={{ 
                    backgroundColor: isDarkTheme ? "rgba(0, 0, 0, 0.2)" : "rgba(64, 121, 140, 0.03)",
                    borderColor: cardBorder
                  }}
                  className="p-4 border rounded-xl space-y-2.5 transition-all duration-300"
                >
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Stage Verification Checklist</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {workflowSteps[activeStep].checklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] leading-snug">
                        <svg className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={textColor}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Connection Line */}
        <div className="pt-8 pb-4">
          <div 
            className="h-1 rounded-full mx-auto"
            style={{
              width: "60%",
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              opacity: 0.5
            }}
          />
        </div>

      </div>

    </section>
  );
}
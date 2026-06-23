"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SolutionTheme {
  primary: string;
  glow: string;
  gradient: string;
  badgeBgDark: string;
  badgeBgLight: string;
  darkAccent: string;
  customAccent: string;
}

interface SolutionCard {
  title: string;
  description: string;
  tag: string;
  features: string[];
  techStack: string;
  deployment: string;
  theme: SolutionTheme;
  id: string;
  image: string;
}

export default function Solutions() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isCustomTheme = theme === "custom";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeStep, setActiveStep] = useState<number>(0); // For workflow steps at bottom
  const [activeSolution, setActiveSolution] = useState<number>(0); // For carousel slide
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const accentColor = isDarkTheme ? "#06b6d4" : isCustomTheme ? "#36558F" : "#d97706";
  const wireColor = isDarkTheme ? "rgba(59, 130, 246, 0.25)" : isCustomTheme ? "rgba(64, 121, 140, 0.2)" : "rgba(217, 119, 6, 0.25)";
  const wireDashColor = isDarkTheme ? "rgba(59, 130, 246, 0.3)" : isCustomTheme ? "rgba(64, 121, 140, 0.25)" : "rgba(217, 119, 6, 0.3)";
  const headingColor = isDarkTheme ? "text-white" : isCustomTheme ? "text-[#1A2530]" : "text-[#1F1300]";
  const textColor = isDarkTheme ? "text-slate-400" : isCustomTheme ? "text-[#1A2530]" : "text-amber-955";

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

  const allSolutions: SolutionCard[] = [
    {
      id: "domain-llms",
      title: "Generative AI Applications",
      description: "Tailored fine-tuned open-source LLMs trained on domain-specific terminology, specialized heavy engineering guidelines, or proprietary sector datasets.",
      tag: "Domain Fine-Tuned LLMs",
      features: [
        "Localized vocabulary fine-tuning for technical blueprints",
        "Secure prompt templates with automated censorship of PII",
        "Offline API endpoint access for third-party system integrations"
      ],
      techStack: "PyTorch, Llama-3-70B, HuggingFace, CUDA",
      deployment: "Dedicated On-Premise GPU Nodes",
      theme: {
        primary: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.25)",
        gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
        badgeBgDark: "rgba(245, 158, 11, 0.1)",
        badgeBgLight: "rgba(245, 158, 11, 0.08)",
        darkAccent: "text-amber-400",
        customAccent: "text-amber-600"
      },
      image: "/images/GenAISolutions.jpeg"
    },
    {
      id: "conversational-ai",
      title: "AI Chatbots & Virtual Assistants",
      description: "Conversational agents deployed on internal networks to answer employee policy queries or provide automated assistance to citizen inquiries.",
      tag: "Conversational Interface",
      features: [
        "Support for regional Indian languages (Vernacular AI NLP)",
        "Zero dependency on external translation APIs",
        "Pre-integrated policy directories for instant lookup"
      ],
      techStack: "Rasa NLP, Python, PyTorch, Node.js",
      deployment: "Air-Gapped Intranet Nodes",
      theme: {
        primary: "#8b5cf6",
        glow: "rgba(139, 92, 246, 0.25)",
        gradient: "from-violet-500/20 via-fuchsia-600/10 to-transparent",
        badgeBgDark: "rgba(139, 92, 246, 0.1)",
        badgeBgLight: "rgba(139, 92, 246, 0.08)",
        darkAccent: "text-violet-400",
        customAccent: "text-violet-600"
      },
      image: "/images/chatbot_solutions.jpeg"
    },
    {
      id: "decision-intelligence",
      title: "Intelligent Reporting & Analytics",
      description: "Real-time system diagnostics, predictive infrastructure maintenance algorithms, and custom analytical dashboard platforms designed for CPSU administration.",
      tag: "Decision intelligence BI",
      features: [
        "Real-time database querying using Natural Language (Text-to-SQL)",
        "Predictive telemetry mapping for power grids and water supplies",
        "Automated compliance audit log generation"
      ],
      techStack: "Apache Spark, Python, React, ClickHouse",
      deployment: "On-Premises / Restricted Intranet",
      theme: {
        primary: "#10b981",
        glow: "rgba(16, 185, 129, 0.25)",
        gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
        badgeBgDark: "rgba(16, 185, 129, 0.1)",
        badgeBgLight: "rgba(16, 185, 129, 0.08)",
        darkAccent: "text-emerald-400",
        customAccent: "text-emerald-600"
      },
      image: "/images/data_analytics_solutions.jpeg"
    },
    {
      id: "cognitive-rag",
      title: "AI-Powered Enterprise Solutions",
      description: "Secure, Retrieval-Augmented Generation (RAG) platforms configured to query, analyze, and index voluminous governmental documentation, directives, and operational records.",
      tag: "Enterprise Cognitive RAG",
      features: [
        "Semantic search across scanned hand-written note-sheets",
        "Automatic cross-reference of central gov guidelines and acts",
        "Dual-level query validation to ensure compliance"
      ],
      techStack: "PostgreSQL pgvector, Python FastAPI, Qwen-72B",
      deployment: "100% On-Premises Air-Gapped",
      theme: {
        primary: "#06b6d4",
        glow: "rgba(6, 182, 212, 0.25)",
        gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
        badgeBgDark: "rgba(6, 182, 212, 0.1)",
        badgeBgLight: "rgba(6, 182, 212, 0.08)",
        darkAccent: "text-cyan-400",
        customAccent: "text-cyan-600"
      },
      image: "/images/enterprise_solutions.jpeg"
    },
    {
      id: "bespoke-saas",
      title: "Customized SaaS Platforms",
      description: "High-performance, secure, and responsive web portals built from scratch to integrate with legacy software, databases, and operational frameworks.",
      tag: "Bespoke SaaS Architecture",
      features: [
        "Role-based secure access control (RBAC) with single sign-on (SSO)",
        "Extremely responsive and accessible (WCAG compliant) frontend",
        "Modular widgets for custom monitoring and telemetry"
      ],
      techStack: "TypeScript, React, Next.js, TailWind CSS",
      deployment: "Private Government Cloud / On-Premise",
      theme: {
        primary: "#f43f5e",
        glow: "rgba(244, 63, 94, 0.25)",
        gradient: "from-rose-500/20 via-red-600/10 to-transparent",
        badgeBgDark: "rgba(244, 63, 94, 0.1)",
        badgeBgLight: "rgba(244, 63, 94, 0.08)",
        darkAccent: "text-rose-400",
        customAccent: "text-rose-600"
      },
      image: "/images/saas_solutions.jpeg"
    },
    {
      id: "workflow-routing",
      title: "Workflow Automation Systems",
      description: "Intelligent engines that streamline file movement, draft official correspondence, and process multi-department note-sheets in absolute compliance with PSU protocols.",
      tag: "Orchestration & Routing",
      features: [
        "AI-driven note-sheet pre-drafting and summary sheets",
        "Adaptive file movement paths with bottleneck prediction",
        "Automated digital signing and seal verification"
      ],
      techStack: "Next.js, Node.js, RabbitMQ, Docker",
      deployment: "Hybrid Secure / Local Compute Nodes",
      theme: {
        primary: "#6366f1",
        glow: "rgba(99, 102, 241, 0.25)",
        gradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
        badgeBgDark: "rgba(99, 102, 241, 0.1)",
        badgeBgLight: "rgba(99, 102, 241, 0.08)",
        darkAccent: "text-indigo-400",
        customAccent: "text-indigo-600"
      },
      image: "/images/workflow_automation_solutions.jpeg"
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

  // URL HASH SYNCING LOGIC (For Navbar Compatibility)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const solutionIds = allSolutions.map(s => s.id);
        const index = solutionIds.indexOf(id);
        if (index !== -1) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveSolution(index);
            setIsTransitioning(false);
          }, 200);

          // Scroll the carousel into viewport center focus
          const element = document.getElementById("solutions-carousel-container");
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 300);
          }
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

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

  const activeSol = allSolutions[activeSolution];
  const activeTheme = activeSol.theme;
  const activeAccent = isDarkTheme ? activeTheme.darkAccent : activeTheme.customAccent;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Header Container Block */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <span 
          style={{
            color: accentColor,
            backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
            borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : "rgba(54, 85, 143, 0.2)"
          }}
          className="inline-block text-[10px] font-mono tracking-wider uppercase border px-3 py-1 rounded-full"
        >
          Product Offerings
        </span>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${headingColor}`}>
          Our Suite of Enterprise Solutions
        </h2>
        <p className={`text-xs sm:text-sm max-w-md mx-auto transition-colors duration-300 ${textColor}`}>
          Highly secure, custom-engineered intelligence applications deployed on-premises for national industries.
        </p>
      </div>

      {/* THE CINEMATIC SHOWCASE CAROUSEL VIEWPORT */}
      <div 
        id="solutions-carousel-container"
        style={{
          backgroundColor: isDarkTheme ? "rgba(3, 0, 20, 0.45)" : "rgba(255, 255, 255, 0.65)",
          borderColor: cardBorder,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: isDarkTheme 
            ? "0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.05)" 
            : "0 30px 60px -15px rgba(64, 121, 140, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
        }}
        className="max-w-[1400px] w-full rounded-3xl border p-6 sm:p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden transition-all duration-500 min-h-[700px] lg:min-h-[640px] z-10"
      >
        {/* Dynamic Background Image with cross-fade transition */}
        <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out pointer-events-none">
          <div 
            style={{
              backgroundImage: `url(${activeSol.image})`,
            }}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-15"
            } mix-blend-overlay`}
          />
          {/* Dark/light gradient overlay to ensure text contrast */}
          <div 
            className="absolute inset-0 bg-gradient-to-r"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, rgba(3, 0, 20, 0.95) 0%, rgba(3, 0, 20, 0.85) 50%, rgba(3, 0, 20, 0.55) 100%)"
                : "linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.65) 100%)"
            }}
          />
        </div>

        {/* Dynamic backdrop mesh glows (fades and shifts theme based on active slide) */}
        <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${activeTheme.gradient} opacity-20 blur-[120px] transition-all duration-1000`} />
        <div className={`absolute -left-20 -bottom-20 w-[350px] h-[350px] rounded-full bg-gradient-to-tr ${activeTheme.gradient} opacity-10 blur-[100px] transition-all duration-1000`} />

        {/* Dynamic Blueprint Mesh overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 w-full z-10">
          
          {/* LEFT COLUMN - HERO INFORMATION */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            
            {/* Categories */}
            <div className="flex items-center gap-4 flex-wrap">
              <span 
                style={{
                  color: accentColor,
                  backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
                  borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : "rgba(54, 85, 143, 0.2)"
                }}
                className="inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-0.5 rounded-md font-bold"
              >
                {activeSol.tag}
              </span>
            </div>

            {/* Title & Description with fade/slide-up transition */}
            <div className={`space-y-4 transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <h3 className={`text-3xl sm:text-4xl lg:text-5.5xl font-black tracking-tight leading-[1.1] ${headingColor}`}>
                {activeSol.title}
              </h3>
              
              <p className={`text-xs sm:text-sm leading-relaxed max-w-xl transition-colors duration-300 ${textColor}`}>
                {activeSol.description}
              </p>

              {/* Bullet highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeSol.features.map((feat, idx) => (
                  <li key={idx} className="text-[11px] sm:text-xs flex items-start gap-2.5 text-slate-400">
                    <span style={{ color: accentColor }} className="font-bold text-base leading-none select-none">•</span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Specs Dashboard Capsule */}
            <div 
              style={{
                backgroundColor: isDarkTheme ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.5)",
                borderColor: cardBorder
              }}
              className="border p-4 rounded-xl flex flex-col sm:flex-row gap-4 text-[10px] sm:text-[11px] font-mono text-slate-500 shadow-inner max-w-xl transition-all duration-300"
            >
              <div className="flex-1 flex items-start gap-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Tech:</span>
                <span className={isDarkTheme ? "text-slate-300" : "text-[#1A2530]"}>{activeSol.techStack}</span>
              </div>
              <div className="flex-shrink-0 flex items-start gap-2 border-t sm:border-t-0 sm:border-l border-white/5 pt-2 sm:pt-0 sm:pl-4">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Deploy:</span>
                <span className="text-emerald-500 font-semibold">{activeSol.deployment}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a 
                href="/contact"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: isDarkTheme 
                    ? "0 8px 20px -6px rgba(6, 182, 212, 0.3)" 
                    : "0 8px 20px -6px rgba(54, 85, 143, 0.25)"
                }}
                className={`px-5 py-3 rounded-xl font-bold text-[11px] tracking-wider uppercase ${
                  isDarkTheme ? "text-slate-950" : "text-white"
                } hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer`}
              >
                <span>Request Architecture Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN - FLOATING OVERLAPPING CARD QUEUE (Travel Slider style!) */}
          <div className="lg:col-span-5 hidden lg:flex items-center gap-6 pl-6 relative h-[360px] overflow-visible w-full justify-start select-none">
            {Array.from({ length: 3 }).map((_, qIdx) => {
              const qIndex = (activeSolution + 1 + qIdx) % allSolutions.length;
              const qSol = allSolutions[qIndex];
              const qTheme = qSol.theme;

              return (
                <div
                  key={qIndex}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setActiveSolution(qIndex);
                      setIsTransitioning(false);
                    }, 200);
                  }}
                  style={{
                    transform: `translateX(${qIdx * 105}px) scale(${1 - qIdx * 0.07})`,
                    zIndex: 30 - qIdx,
                    opacity: 1 - qIdx * 0.3,
                    backgroundImage: `url(${qSol.image})`,
                    boxShadow: isDarkTheme 
                      ? `0 15px 30px -10px rgba(0,0,0,0.5), 0 0 2px ${qTheme.glow}`
                      : `0 15px 30px -10px rgba(0,0,0,0.08), 0 0 2px ${qTheme.glow}`,
                    "--hover-accent": accentColor
                  } as React.CSSProperties}
                  className="absolute left-0 w-[240px] h-[320px] bg-cover bg-center border border-white/10 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 group/qcard overflow-hidden"
                >
                  {/* Dark vignette overlay inside the card to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20 z-0 opacity-80 group-hover/qcard:opacity-90 transition-opacity duration-300" />
                  
                  {/* Glowing Top border highlight matching slide branding */}
                  <div className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${qTheme.gradient} rounded-t-2xl opacity-75 group-hover/qcard:opacity-100 transition-opacity z-10`} />

                  {/* Top card metadata */}
                  <div className="flex items-center justify-end z-10 w-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-80 group-hover/qcard:opacity-100 group-hover/qcard:scale-125 transition-all duration-300" />
                  </div>

                  {/* Title Preview */}
                  <div className="space-y-2.5 z-10 text-left">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 group-hover/qcard:text-[var(--hover-accent)] transition-colors duration-300 block">
                      {qSol.tag.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold leading-snug tracking-tight text-white group-hover/qcard:text-[var(--hover-accent)] line-clamp-3 transition-colors duration-300">
                      {qSol.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM NAVIGATION TOOLBAR */}
        <div className="flex items-center justify-between w-full border-t border-white/5 pt-6 mt-8 z-10">
          
          {/* Dot Pagination indicators */}
          <div className="flex items-center gap-2">
            {allSolutions.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveSolution(dotIdx);
                    setIsTransitioning(false);
                  }, 200);
                }}
                className="relative h-2 rounded-full cursor-pointer transition-all duration-500"
                style={{
                  width: activeSolution === dotIdx ? "32px" : "8px",
                  backgroundColor: activeSolution === dotIdx 
                    ? accentColor 
                    : (isDarkTheme ? "rgba(255, 255, 255, 0.15)" : "rgba(64, 121, 140, 0.25)")
                }}
              />
            ))}
          </div>

          {/* Circular Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSolution((prev) => (prev === 0 ? allSolutions.length - 1 : prev - 1));
                  setIsTransitioning(false);
                }, 200);
              }}
              style={{
                backgroundColor: isDarkTheme ? "rgba(255, 255, 255, 0.03)" : "rgba(54, 85, 143, 0.05)",
                borderColor: cardBorder
              }}
              className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 hover:bg-white/5 hover:border-slate-500 transition-all duration-300 text-slate-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSolution((prev) => (prev === allSolutions.length - 1 ? 0 : prev + 1));
                  setIsTransitioning(false);
                }, 200);
              }}
              style={{
                backgroundColor: isDarkTheme ? "rgba(255, 255, 255, 0.03)" : "rgba(54, 85, 143, 0.05)",
                borderColor: cardBorder
              }}
              className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 hover:bg-white/5 hover:border-slate-500 transition-all duration-300 text-slate-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

        </div>

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
              backgroundColor: isDarkTheme ? "rgba(6, 182, 212, 0.1)" : "rgba(54, 85, 143, 0.1)",
              borderColor: isDarkTheme ? "rgba(6, 182, 212, 0.2)" : "rgba(54, 85, 143, 0.2)"
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
                  className="text-[9px] font-mono tracking-widest border px-2.5 py-0.5 rounded-full uppercase"
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
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
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

      {/* Decorative Canvas Background Engine */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none z-0">
        <canvas ref={canvasRef} width="320" height="320" className="w-full h-full" />
      </div>

    </section>
  );
}
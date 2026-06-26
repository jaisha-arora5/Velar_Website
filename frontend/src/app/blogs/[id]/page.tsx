"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object using React.use() as per Next.js 15+ specifications
  const { id } = use(params);
  
  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchBlogDetail() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          setError("The requested article could not be found.");
        }
      } catch (err) {
        console.error("Error loading blog details:", err);
        setError("Failed to connect to the server.");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogDetail();
  }, [id]);

  // A very clean, zero-dependency helper to format simple markdown-like content (paragraphs, lists, headings)
  const renderFormattedContent = (text: string) => {
    if (!text) return null;
    
    return text.split("\n\n").map((block, index) => {
      const trimmedBlock = block.trim();
      
      // Check for h3 headings
      if (trimmedBlock.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl sm:text-2xl font-bold text-[#1A2530] mt-8 mb-4 tracking-tight">
            {trimmedBlock.replace("### ", "")}
          </h3>
        );
      }

      // Check for h4 headings
      if (trimmedBlock.startsWith("#### ")) {
        return (
          <h4 key={index} className="text-lg sm:text-xl font-bold text-[#1A2530] mt-6 mb-3 tracking-tight">
            {trimmedBlock.replace("#### ", "")}
          </h4>
        );
      }
      
      // Check for bulleted lists
      if (trimmedBlock.startsWith("- ") || trimmedBlock.includes("\n- ")) {
        const listItems = trimmedBlock.split("\n").map((item) => item.replace(/^- \*\*(.*?)\*\*(:?)/, "<strong>$1</strong>$2").replace(/^- /, ""));
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
            {listItems.map((li, liIdx) => (
              <li key={liIdx} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        );
      }

      // Check for numbered lists
      if (/^\d+\.\s/.test(trimmedBlock) || trimmedBlock.includes("\n1. ")) {
        const listItems = trimmedBlock.split("\n").map((item) => item.replace(/^\d+\.\s\*\*(.*?)\*\*(:?)/, "<strong>$1</strong>$2").replace(/^\d+\.\s/, ""));
        return (
          <ol key={index} className="list-decimal pl-6 my-4 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
            {listItems.map((li, liIdx) => (
              <li key={liIdx} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ol>
        );
      }
      
      // Default paragraph with bold markdown support (**bold text**)
      const formattedParagraph = trimmedBlock.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return (
        <p 
          key={index} 
          className="text-sm sm:text-base text-slate-700 leading-relaxed my-4 text-justify"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  const accentColor = "#36558F";
  const headingColor = "text-[#1A2530]";
  const cardBorder = "rgba(64, 121, 140, 0.2)";

  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />

      <div className="w-full min-h-screen pt-20 px-6 py-24 flex flex-col items-center justify-start relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#36558F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40798C]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl w-full relative z-10 space-y-10">
          
          {/* Navigation Back Link */}
          <Link
            href="/blogs"
            style={{ color: accentColor }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Articles</span>
          </Link>

          {loading ? (
            <div className="space-y-8 animate-pulse py-12">
              <div className="space-y-4">
                <div className="h-4 w-1/6 bg-slate-400/15 rounded" />
                <div className="h-12 w-full bg-slate-400/15 rounded" />
                <div className="h-4 w-1/3 bg-slate-400/15 rounded" />
              </div>
              <div className="w-full aspect-[21/9] bg-slate-400/15 rounded-2xl" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-400/15 rounded" />
                <div className="h-4 w-5/6 bg-slate-400/15 rounded" />
                <div className="h-4 w-4/5 bg-slate-400/15 rounded" />
              </div>
            </div>
          ) : error || !blog ? (
            <div className="text-center py-20 border border-[#40798C]/25 bg-white/50 rounded-2xl p-8 backdrop-blur shadow space-y-4">
              <h2 className="text-xl font-bold text-red-500">Retrieval Failure</h2>
              <p className="text-sm text-slate-600">{error || "The requested sovereign document could not be retrieved."}</p>
              <Link
                href="/blogs"
                className="inline-block bg-[#36558F] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#40798C] transition-all cursor-pointer"
              >
                Return to Directory
              </Link>
            </div>
          ) : (
            <article className="space-y-8 bg-white/40 border border-white/40 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-md">
              
              {/* Meta Header */}
              <div className="space-y-4">
                <span
                  style={{
                    color: accentColor,
                    backgroundColor: "rgba(218, 240, 238, 0.7)",
                    borderColor: "rgba(54, 85, 143, 0.2)",
                  }}
                  className="inline-block text-[10px] font-mono font-bold uppercase border px-3 py-1 rounded-full"
                >
                  {blog.category}
                </span>

                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${headingColor} leading-tight`}>
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>{blog.author}</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Summary Block */}
              <div className="border-l-4 border-[#36558F] pl-4 py-1 bg-[#DAF0EE]/30 rounded-r-lg">
                <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed font-medium">
                  {blog.summary}
                </p>
              </div>

              {/* Banner Image */}
              <div className="w-full aspect-[21/10] rounded-2xl overflow-hidden shadow-lg border border-[#40798C]/15 bg-slate-900/5">
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                    Sovereign Document Image
                  </div>
                )}
              </div>

              {/* Content body */}
              <div className="prose max-w-none pt-4 border-t border-[#40798C]/10">
                {renderFormattedContent(blog.content)}
              </div>

              {/* Article Footer */}
              <div className="pt-8 border-t border-[#40798C]/10 flex justify-between items-center text-xs">
                <span className="text-slate-400 uppercase font-mono tracking-widest text-[9px]">Document ID: {blog.id}</span>
                <Link
                  href="/blogs"
                  style={{ color: accentColor }}
                  className="font-bold uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
                >
                  Return to Directory
                </Link>
              </div>

            </article>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}

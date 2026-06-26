"use client";

import { useState, useEffect } from "react";
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

const CATEGORIES = ["All", "Sovereign AI", "Workflows", "Security", "Enterprise", "Intelligence"];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
          setFilteredBlogs(data);
        }
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Filter logic
  useEffect(() => {
    let result = blogs;

    if (selectedCategory !== "All") {
      result = result.filter((b) => b.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(term) ||
          b.summary.toLowerCase().includes(term) ||
          b.content.toLowerCase().includes(term) ||
          b.author.toLowerCase().includes(term)
      );
    }

    setFilteredBlogs(result);
  }, [searchTerm, selectedCategory, blogs]);

  // Design system colors consistent with the rest of the site (Cream/Steel Blue)
  const isDarkTheme = false;
  const accentColor = "#36558F";
  const accentBg = "rgba(218, 240, 238, 0.6)";
  const accentBorder = "rgba(54, 85, 143, 0.3)";
  const headingColor = "text-[#1A2530]";
  const textColor = "text-[#1A2530]/80";
  const cardBg = "#DAF0EE";
  const cardBorder = "rgba(64, 121, 140, 0.2)";

  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      
      <div className="w-full min-h-screen pt-20 px-6 py-24 flex flex-col items-center justify-start relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#36558F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40798C]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl w-full space-y-16 relative z-10">
          
          {/* Header Section */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span 
              style={{
                color: accentColor,
                backgroundColor: accentBg,
                borderColor: accentBorder
              }}
              className="inline-block text-[10px] font-mono tracking-widest uppercase border px-3 py-1 rounded-full"
            >
              VELAR INSIGHTS
            </span>
            <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${headingColor}`}>
              Sovereign AI & Intelligence Blog
            </h1>
            <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
              In-depth analysis, engineering breakdowns, and strategic briefings on secure, on-premises AI automation for public sector and enterprise workflows.
            </p>
          </div>

          {/* Search & Filters Panel */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by keywords, categories, authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/80 border border-[#40798C]/30 rounded-2xl px-5 py-4 pl-12 text-sm text-[#1A2530] placeholder-slate-400 focus:outline-none focus:border-[#36558F] focus:bg-white transition-all shadow-sm"
              />
              <svg 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      backgroundColor: isSelected ? accentColor : "rgba(255, 255, 255, 0.7)",
                      borderColor: isSelected ? accentColor : "rgba(64, 121, 140, 0.2)",
                      color: isSelected ? "#FFFFFF" : "#40798C",
                    }}
                    className={`px-4 py-2 rounded-full border text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer hover:border-[#36558F]`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Blogs Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{ backgroundColor: "rgba(255,255,255,0.4)", borderColor: cardBorder }}
                  className="border rounded-2xl overflow-hidden h-[450px] animate-pulse flex flex-col justify-between"
                >
                  <div className="w-full h-52 bg-slate-400/10" />
                  <div className="p-6 space-y-4 flex-1">
                    <div className="h-3 w-1/4 bg-slate-400/10 rounded" />
                    <div className="h-6 w-3/4 bg-slate-400/10 rounded" />
                    <div className="h-4 w-full bg-slate-400/10 rounded" />
                    <div className="h-4 w-5/6 bg-slate-400/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto space-y-2">
              <svg className="w-12 h-12 text-slate-400 mx-auto opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-sm font-bold text-[#1A2530]">No Articles Found</h3>
              <p className="text-xs text-slate-500">We couldn't find any articles matching your search query or filters. Try adjusting your parameters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderColor: cardBorder,
                  }}
                  className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-opacity-70 transition-all duration-500 flex flex-col justify-between group backdrop-blur-sm"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-900/5 border-b border-[#40798C]/10">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10">
                          <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono">VELAR MEDIA</span>
                        </div>
                      )}

                      {/* Category Badge overlay */}
                      <span
                        style={{
                          color: accentColor,
                          backgroundColor: "#FFFFFF",
                          borderColor: accentBorder,
                        }}
                        className="absolute top-4 left-4 text-[9px] font-mono font-bold uppercase border px-2.5 py-0.5 rounded-full shadow-sm"
                      >
                        {blog.category}
                      </span>
                    </div>

                    {/* Content details */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      
                      <h3 className={`text-lg font-bold tracking-tight ${headingColor} group-hover:text-[#36558F] transition-colors duration-300`}>
                        {blog.title}
                      </h3>
                      
                      <p className={`text-xs leading-relaxed line-clamp-3 ${textColor}`}>
                        {blog.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-[#40798C]/10 mt-4">
                    <span className="text-[10px] text-slate-500 font-semibold">By {blog.author}</span>
                    <Link
                      href={`/blogs/${blog.id}`}
                      style={{ color: accentColor }}
                      className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:opacity-85 transition-opacity"
                    >
                      <span>Read Article</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}

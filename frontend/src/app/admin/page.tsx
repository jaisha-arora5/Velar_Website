"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EventItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  image?: string;
  date: string;
  location: string;
}

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

export default function AdminPortal() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);
  const [checkingSession, setCheckingSession] = useState<boolean>(true);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<"events" | "blogs">("events");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  // Form states
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    images: [] as string[],
    date: "",
    location: "",
  });

  const [showBlogModal, setShowBlogModal] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
    date: "",
    readTime: "",
    category: "Sovereign AI",
    author: "",
  });

  // Image Upload state
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");

  async function checkSession() {
    try {
      const res = await fetch("/api/auth");
      if (res.ok) {
        setIsAuthenticated(true);
        fetchData();
      }
    } catch (err) {
      console.error("Session check failed", err);
    } finally {
      setCheckingSession(false);
    }
  }

  async function fetchData() {
    setLoadingData(true);
    try {
      const [eventsRes, blogsRes] = await Promise.all([
        fetch("/api/events"),
        fetch("/api/blogs"),
      ]);
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        setEvents(eventsData);
      }
      if (blogsRes.ok) {
        const blogsData = await blogsRes.json();
        setBlogs(blogsData);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
    } finally {
      setLoadingData(false);
    }
  }

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoadingAuth(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        fetchData();
      } else {
        setAuthError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setAuthError("Failed to connect to authentication server");
    } finally {
      setLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", { method: "DELETE" });
      setIsAuthenticated(false);
      setPasscode("");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: "event" | "blog") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (target === "event") {
          setEventForm((prev) => ({ ...prev, images: [...(prev.images || []), data.url] }));
        } else {
          setBlogForm((prev) => ({ ...prev, image: data.url }));
        }
      } else {
        setUploadError(data.error || "Upload failed");
      }
    } catch (err) {
      setUploadError("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // Event CRUD Operations
  const openCreateEvent = () => {
    setEditingEvent(null);
    setEventForm({
      title: "",
      description: "",
      images: [] as string[],
      date: new Date().toISOString().split("T")[0],
      location: "",
    });
    setShowEventModal(true);
  };

  const openEditEvent = (event: EventItem) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      description: event.description,
      images: Array.isArray(event.images) ? event.images : (event.image ? [event.image] : []),
      date: event.date,
      location: event.location,
    });
    setShowEventModal(true);
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingEvent ? `/api/events/${editingEvent.id}` : "/api/events";
    const method = editingEvent ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventForm),
      });

      if (res.ok) {
        setShowEventModal(false);
        fetchData();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save event");
      }
    } catch (err) {
      alert("Failed to save event");
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
      } else {
        alert("Failed to delete event");
      }
    } catch (err) {
      alert("Failed to delete event");
    }
  };

  // Blog CRUD Operations
  const openCreateBlog = () => {
    setEditingBlog(null);
    setBlogForm({
      title: "",
      summary: "",
      content: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
      readTime: "",
      category: "Sovereign AI",
      author: "",
    });
    setShowBlogModal(true);
  };

  const openEditBlog = (blog: BlogItem) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      summary: blog.summary,
      content: blog.content,
      image: blog.image,
      date: blog.date,
      readTime: blog.readTime,
      category: blog.category,
      author: blog.author,
    });
    setShowBlogModal(true);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingBlog ? `/api/blogs/${editingBlog.id}` : "/api/blogs";
    const method = editingBlog ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm),
      });

      if (res.ok) {
        setShowBlogModal(false);
        fetchData();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save blog post");
      }
    } catch (err) {
      alert("Failed to save blog post");
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
      } else {
        alert("Failed to delete blog post");
      }
    } catch (err) {
      alert("Failed to delete blog post");
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-[#030014] text-[#FAF9F6] flex items-center justify-center font-mono">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-[#36558F] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-[#40798C]">Verifying Sovereign Session...</p>
        </div>
      </div>
    );
  }

  // --- 1. AUTH PASSCODE SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030014] text-[#FAF9F6] flex items-center justify-center px-4 relative overflow-hidden font-mono">
        {/* Sleek Matrix-style Background Flares */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#36558F]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40798C]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-md w-full bg-[#08071a]/70 border border-[#40798C]/25 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative z-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 rounded-sm bg-[#36558F] transform rotate-45 mx-auto mb-4" />
            <h1 className="text-xl font-bold tracking-wider text-white">VELAR SECURE TERMINAL</h1>
            <p className="text-[10px] text-[#40798C] uppercase tracking-widest">Authorized Personnel Access Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-[#40798C] block font-semibold">
                Admin Security Passcode
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-[#030014]/80 border border-[#40798C]/30 rounded-lg px-4 py-3 text-center text-white tracking-widest focus:outline-none focus:border-[#36558F] transition-all text-sm"
              />
            </div>

            {authError && (
              <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-3 text-center">
                <p className="text-[11px] text-red-400 font-semibold">{authError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loadingAuth}
              className="w-full bg-[#36558F] hover:bg-[#40798C] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              {loadingAuth ? "Verifying..." : "Initialize Session"}
            </button>
          </form>

          <div className="border-t border-[#40798C]/10 pt-4 text-center">
            <p className="text-[9px] text-slate-500 uppercase tracking-wider">
              Protected by local on-premises hardware signature
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#030014] text-[#FAF9F6] font-sans pb-16">
      {/* Dashboard Top Header */}
      <header className="bg-[#08071a] border-b border-[#40798C]/20 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-sm bg-[#36558F] transform rotate-45" />
            <div>
              <h1 className="text-base font-bold tracking-wider uppercase text-white">Velar Administration</h1>
              <p className="text-[9px] text-[#40798C] uppercase tracking-widest font-mono">Sovereign Content Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex bg-[#030014] p-1 rounded-lg border border-[#40798C]/20">
              <button
                onClick={() => setActiveTab("events")}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "events" ? "bg-[#36558F] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "blogs" ? "bg-[#36558F] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Blogs
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="text-xs font-semibold uppercase tracking-wider border border-red-900/40 text-red-400 px-4 py-2 rounded-lg hover:bg-red-950/20 transition-all cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white capitalize">
              Manage {activeTab}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Add, modify, or delete {activeTab} presented on the public facing application pages.
            </p>
          </div>

          {activeTab === "events" ? (
            <button
              onClick={openCreateEvent}
              className="bg-[#36558F] hover:bg-[#40798C] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Add Event</span>
            </button>
          ) : (
            <button
              onClick={openCreateBlog}
              className="bg-[#36558F] hover:bg-[#40798C] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Create Blog Post</span>
            </button>
          )}
        </div>

        {loadingData ? (
          <div className="py-24 text-center">
            <div className="w-8 h-8 border-2 border-[#36558F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-xs font-mono tracking-widest text-[#40798C] uppercase">Retrieving secure datasets...</p>
          </div>
        ) : (
          <>
            {/* EVENTS TAB GRID */}
            {activeTab === "events" && (
              events.length === 0 ? (
                <div className="border border-dashed border-[#40798C]/20 rounded-2xl p-12 text-center bg-[#08071a]/20">
                  <p className="text-sm text-slate-500">No events found. Click &apos;Add Event&apos; to seed your first event.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-[#08071a]/50 border border-[#40798C]/15 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#40798C]/30 transition-all shadow-md group"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-slate-950/20 border-b border-[#40798C]/10">
                          {event.images && event.images.length > 0 ? (
                            <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover" />
                          ) : event.image ? (
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 tracking-widest uppercase font-mono bg-slate-900/30">
                              No Image Provided
                            </div>
                          )}
                        </div>
                        <div className="p-6 space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#40798C] uppercase tracking-wider">
                            <span>{event.date}</span>
                            <span>{event.location}</span>
                          </div>
                          <h3 className="font-bold text-white text-base line-clamp-1 group-hover:text-[#36558F] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2 border-t border-[#40798C]/10 flex gap-3">
                        <button
                          onClick={() => openEditEvent(event)}
                          className="flex-1 text-center py-2 border border-[#40798C]/20 hover:border-[#40798C]/50 rounded-lg text-xs font-semibold text-[#FAF9F6] hover:bg-white/5 transition-all cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="flex-1 text-center py-2 border border-red-900/30 hover:border-red-900/60 rounded-lg text-xs font-semibold text-red-400 hover:bg-red-950/15 transition-all cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* BLOGS TAB LIST */}
            {activeTab === "blogs" && (
              blogs.length === 0 ? (
                <div className="border border-dashed border-[#40798C]/20 rounded-2xl p-12 text-center bg-[#08071a]/20">
                  <p className="text-sm text-slate-500">No blog posts found. Click &apos;Create Blog Post&apos; to author your first article.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-[#08071a]/50 border border-[#40798C]/15 rounded-2xl overflow-hidden p-6 flex gap-5 hover:border-[#40798C]/30 transition-all shadow-md group"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-950/20 border border-[#40798C]/10 relative">
                        {blog.image ? (
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[8px] text-slate-600 font-mono text-center">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-[10px] font-mono text-[#40798C] uppercase tracking-wider">
                            <span className="bg-[#36558F]/15 border border-[#36558F]/35 px-2 py-0.5 rounded-full text-[9px] text-white">
                              {blog.category}
                            </span>
                            <span>•</span>
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                          </div>
                          <h3 className="font-bold text-white text-base line-clamp-1 group-hover:text-[#36558F] transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {blog.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#40798C]/10">
                          <span className="text-[10px] text-slate-500 font-semibold">Author: {blog.author}</span>
                          <div className="flex gap-3">
                            <button
                              onClick={() => openEditBlog(blog)}
                              className="text-xs font-semibold text-[#FAF9F6] hover:text-[#36558F] transition-colors cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog.id)}
                              className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </>
        )}
      </main>

      {/* --- 3. EVENT FORM MODAL --- */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030014]/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#08071a] border border-[#40798C]/20 max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="px-6 py-5 border-b border-[#40798C]/15 flex items-center justify-between bg-slate-900/10">
              <h3 className="font-bold text-white text-base">
                {editingEvent ? "Modify Company Event" : "Register New Event"}
              </h3>
              <button
                onClick={() => setShowEventModal(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleEventSubmit} className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Velar Sovereign AI Launch at Tech Conclave"
                  value={eventForm.title}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New Delhi, India"
                    value={eventForm.location}
                    onChange={(e) => setEventForm((prev) => ({ ...prev, location: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Event Photos / Gallery (Multiple Photos Supported)
                </label>
                <div className="space-y-3">
                  {/* File Upload Trigger */}
                  <div className="border border-dashed border-[#40798C]/20 rounded-lg p-4 bg-[#030014]/50 flex flex-col items-center justify-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      id="event-image-file"
                      multiple
                      onChange={async (e) => {
                        const files = e.target.files;
                        if (!files || files.length === 0) return;
                        setUploading(true);
                        setUploadError("");
                        
                        const uploadedUrls: string[] = [];
                        for (let i = 0; i < files.length; i++) {
                          const formData = new FormData();
                          formData.append("file", files[i]);
                          try {
                            const res = await fetch("/api/upload", {
                              method: "POST",
                              body: formData,
                            });
                            const data = await res.json();
                            if (res.ok && data.success) {
                              uploadedUrls.push(data.url);
                            }
                          } catch (err) {
                            console.error("Failed uploading file", err);
                          }
                        }
                        
                        if (uploadedUrls.length > 0) {
                          setEventForm((prev) => ({
                            ...prev,
                            images: [...(prev.images || []), ...uploadedUrls]
                          }));
                        }
                        setUploading(false);
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="event-image-file"
                      className="px-4 py-2 bg-[#36558F]/15 border border-[#36558F]/40 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#36558F]/30 cursor-pointer transition-all"
                    >
                      {uploading ? "Uploading Secure Files..." : "Select & Upload Image(s)"}
                    </label>
                    <p className="text-[9px] text-slate-500">Upload one or multiple photos to the event gallery.</p>
                  </div>

                  {/* Or Manual URL Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter manual image URL..."
                      id="manual-event-url"
                      className="flex-1 bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-[#36558F] transition-all"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const val = (e.target as HTMLInputElement).value;
                          if (val.trim()) {
                            setEventForm((prev) => ({
                              ...prev,
                              images: [...(prev.images || []), val.trim()]
                            }));
                            (e.target as HTMLInputElement).value = "";
                          }
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("manual-event-url") as HTMLInputElement;
                        if (input && input.value.trim()) {
                          setEventForm((prev) => ({
                            ...prev,
                            images: [...(prev.images || []), input.value.trim()]
                          }));
                          input.value = "";
                        }
                      }}
                      className="px-4 bg-[#36558F] hover:bg-[#40798C] text-white rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                  
                  {uploadError && <p className="text-[10px] text-red-400 font-semibold text-center">{uploadError}</p>}
                  
                  {/* Render list of images in gallery */}
                  {eventForm.images && eventForm.images.length > 0 && (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      <p className="text-[9px] text-[#40798C] uppercase font-mono tracking-widest">Gallery Preview ({eventForm.images.length})</p>
                      {eventForm.images.map((img, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-[#030014]/50 border border-[#40798C]/15 p-2 rounded-lg">
                          <span className="text-[10px] text-slate-500 font-mono w-4 text-right">{idx + 1}.</span>
                          <div className="w-10 h-10 rounded overflow-hidden bg-slate-900 flex-shrink-0">
                            <img src={img} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono truncate flex-1">{img}</span>
                          <button
                            type="button"
                            onClick={() => setEventForm((prev) => ({
                              ...prev,
                              images: prev.images.filter((_, i) => i !== idx)
                            }))}
                            className="text-red-400 hover:text-red-300 text-xs font-semibold cursor-pointer px-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Short Description
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide a concise description of the event. Aim for 2-3 sentences max."
                  value={eventForm.description}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all resize-none leading-relaxed"
                />
              </div>

              <div className="pt-4 border-t border-[#40798C]/10 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowEventModal(false)}
                  className="flex-1 py-3 border border-[#40798C]/20 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:border-slate-400 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#36558F] hover:bg-[#40798C] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {editingEvent ? "Save Updates" : "Publish Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- 4. BLOG FORM MODAL --- */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030014]/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#08071a] border border-[#40798C]/20 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="px-6 py-5 border-b border-[#40798C]/15 flex items-center justify-between bg-slate-900/10">
              <h3 className="font-bold text-white text-base">
                {editingBlog ? "Modify Blog Article" : "Compose Blog Article"}
              </h3>
              <button
                onClick={() => setShowBlogModal(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleBlogSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Article Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Future of Sovereign Cloud Systems"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm((prev) => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>

                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Category
                  </label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  >
                    <option value="Sovereign AI">Sovereign AI</option>
                    <option value="Workflows">Workflows</option>
                    <option value="Security">Security</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Intelligence">Intelligence</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5 col-span-3 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Author Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nehal Bharti"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm((prev) => ({ ...prev, author: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>

                <div className="space-y-1.5 col-span-3 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={blogForm.date}
                    onChange={(e) => setBlogForm((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>

                <div className="space-y-1.5 col-span-3 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                    Read Time (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read (Auto if empty)"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm((prev) => ({ ...prev, readTime: e.target.value }))}
                    className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Blog Summary / Brief Preview
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter a brief, punchy summary to show in previews."
                  value={blogForm.summary}
                  onChange={(e) => setBlogForm((prev) => ({ ...prev, summary: e.target.value }))}
                  className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Article Banner Image
                </label>
                <div className="space-y-3">
                  <div className="border border-dashed border-[#40798C]/20 rounded-lg p-4 bg-[#030014]/50 flex flex-col items-center justify-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      id="blog-image-file"
                      onChange={(e) => handleImageUpload(e, "blog")}
                      className="hidden"
                    />
                    <label
                      htmlFor="blog-image-file"
                      className="px-4 py-2 bg-[#36558F]/15 border border-[#36558F]/40 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#36558F]/30 cursor-pointer transition-all"
                    >
                      {uploading ? "Uploading Secure File..." : "Select & Upload Banner Image"}
                    </label>
                    <p className="text-[9px] text-slate-500">Banner dimensions (e.g. 16:9) are ideal for header rendering.</p>
                  </div>

                  <div>
                    <div className="text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest my-1">- OR ENTER URL MANUALLY -</div>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/... or relative path /uploads/..."
                      value={blogForm.image}
                      onChange={(e) => setBlogForm((prev) => ({ ...prev, image: e.target.value }))}
                      className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#36558F] transition-all"
                    />
                  </div>
                  {uploadError && <p className="text-[10px] text-red-400 font-semibold text-center">{uploadError}</p>}
                  {blogForm.image && (
                    <div className="flex items-center gap-3 bg-[#030014]/50 border border-[#40798C]/15 p-2 rounded-lg">
                      <div className="w-10 h-10 rounded overflow-hidden bg-slate-900 flex-shrink-0">
                        <img src={blogForm.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono truncate flex-1">{blogForm.image}</span>
                      <button
                        type="button"
                        onClick={() => setBlogForm((prev) => ({ ...prev, image: "" }))}
                        className="text-red-400 hover:text-red-300 text-xs font-semibold cursor-pointer px-2"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#40798C] font-bold block">
                  Article Content (Supports markdown-like structure with paragraphs)
                </label>
                <textarea
                  required
                  rows={8}
                  placeholder="Draft your full blog post. You can use standard double-newlines to separate paragraphs, or headings like ### Heading."
                  value={blogForm.content}
                  onChange={(e) => setBlogForm((prev) => ({ ...prev, content: e.target.value }))}
                  className="w-full bg-[#030014] border border-[#40798C]/20 rounded-lg px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-[#36558F] transition-all resize-y leading-relaxed"
                />
              </div>

              <div className="pt-4 border-t border-[#40798C]/10 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="flex-1 py-3 border border-[#40798C]/20 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:border-slate-400 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#36558F] hover:bg-[#40798C] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {editingBlog ? "Save Updates" : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

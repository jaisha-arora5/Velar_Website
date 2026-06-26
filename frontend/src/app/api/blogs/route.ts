import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { checkAuth } from "@/lib/authHelper";

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

const dbPath = path.join(process.cwd(), "src/data/blogs.json");

async function readBlogs() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeBlogs(blogs: BlogItem[]) {
  await fs.mkdir(path.dirname(dbPath), { recursive: true });
  await fs.writeFile(dbPath, JSON.stringify(blogs, null, 2), "utf-8");
}

export async function GET() {
  const blogs = await readBlogs();
  // Sort blogs by date descending
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return NextResponse.json(sortedBlogs);
}

export async function POST(request: Request) {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, summary, content, image, date, readTime, category, author } = body;

    if (!title || !summary || !content || !category || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const blogs = await readBlogs();
    
    // Estimate read time if not provided
    let calculatedReadTime = readTime;
    if (!calculatedReadTime) {
      const words = content.split(/\s+/).length;
      const minutes = Math.ceil(words / 200); // 200 words per minute
      calculatedReadTime = `${minutes} min read`;
    }

    const newBlog = {
      id: `blog-${Date.now()}`,
      title,
      summary,
      content,
      image: image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      date: date || new Date().toISOString().split("T")[0],
      readTime: calculatedReadTime,
      category,
      author,
    };

    blogs.unshift(newBlog);
    await writeBlogs(blogs);

    return NextResponse.json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

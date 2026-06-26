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
  await fs.writeFile(dbPath, JSON.stringify(blogs, null, 2), "utf-8");
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = await readBlogs();
    const blog = blogs.find((b: BlogItem) => b.id === id);

    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { title, summary, content, image, date, readTime, category, author } = body;

    if (!title || !summary || !content || !category || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const blogs = await readBlogs();
    const blogIndex = blogs.findIndex((b: BlogItem) => b.id === id);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    let calculatedReadTime = readTime;
    if (!calculatedReadTime) {
      const words = content.split(/\s+/).length;
      const minutes = Math.ceil(words / 200);
      calculatedReadTime = `${minutes} min read`;
    }

    const updatedBlog = {
      ...blogs[blogIndex],
      title,
      summary,
      content,
      image: image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      date: date || blogs[blogIndex].date,
      readTime: calculatedReadTime,
      category,
      author,
    };

    blogs[blogIndex] = updatedBlog;
    await writeBlogs(blogs);

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const blogs = await readBlogs();
    const filteredBlogs = blogs.filter((b: BlogItem) => b.id !== id);

    if (blogs.length === filteredBlogs.length) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    await writeBlogs(filteredBlogs);
    return NextResponse.json({ success: true, message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}

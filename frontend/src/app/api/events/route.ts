import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { checkAuth } from "@/lib/authHelper";

interface EventItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  image?: string;
  date: string;
  location: string;
}

const dbPath = path.join(process.cwd(), "src/data/events.json");

async function readEvents() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeEvents(events: EventItem[]) {
  // Ensure the directory exists
  await fs.mkdir(path.dirname(dbPath), { recursive: true });
  await fs.writeFile(dbPath, JSON.stringify(events, null, 2), "utf-8");
}

export async function GET() {
  const events = await readEvents();
  // Sort events by date descending
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return NextResponse.json(sortedEvents);
}

export async function POST(request: Request) {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, description, images, date, location } = body;

    if (!title || !description || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const events = await readEvents();
    const newEvent = {
      id: `event-${Date.now()}`,
      title,
      description,
      images: Array.isArray(images) ? images : [],
      date,
      location: location || "",
    };

    events.unshift(newEvent);
    await writeEvents(events);

    return NextResponse.json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

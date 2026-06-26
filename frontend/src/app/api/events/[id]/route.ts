import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { checkAuth } from "@/lib/authHelper";

const dbPath = path.join(process.cwd(), "src/data/events.json");

async function readEvents() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeEvents(events: any[]) {
  await fs.writeFile(dbPath, JSON.stringify(events, null, 2), "utf-8");
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
    const { title, description, images, date, location } = body;

    if (!title || !description || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const events = await readEvents();
    const eventIndex = events.findIndex((e: any) => e.id === id);

    if (eventIndex === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const updatedEvent = {
      ...events[eventIndex],
      title,
      description,
      images: Array.isArray(images) ? images : [],
      date,
      location: location || "",
    };

    events[eventIndex] = updatedEvent;
    await writeEvents(events);

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
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
    const events = await readEvents();
    const filteredEvents = events.filter((e: any) => e.id !== id);

    if (events.length === filteredEvents.length) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    await writeEvents(filteredEvents);
    return NextResponse.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}

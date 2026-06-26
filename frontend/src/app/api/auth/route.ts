import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const correctPasscode = process.env.ADMIN_PASSCODE || "velaradmin";

    if (passcode === correctPasscode) {
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      
      // Set a secure session cookie
      response.cookies.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      
      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid passcode" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // Check if session cookie exists and is valid
  const cookieHeader = request.headers.get("cookie") || "";
  const isAuthenticated = cookieHeader.includes("admin_session=authenticated");

  if (isAuthenticated) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  // Clear the session cookie on logout
  const response = NextResponse.json({ success: true, message: "Logged out successfully" });
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return response;
}

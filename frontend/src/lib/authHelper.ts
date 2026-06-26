import { cookies } from "next/headers";

export async function checkAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    return session?.value === "authenticated";
  } catch (error) {
    console.error("Auth check error:", error);
    return false;
  }
}

import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({ ok: true, message: "Logged out successfully" });

    // ✅ Clear authentication cookies
    res.cookies.set("wp_auth_token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    res.cookies.set("wp_refresh_token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return res;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ ok: false, error: "Logout failed" }, { status: 500 });
  }
}

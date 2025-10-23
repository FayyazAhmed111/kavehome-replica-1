import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("wp_auth_token", "", { httpOnly: true, maxAge: 0, path: "/" });
  res.cookies.set("wp_refresh_token", "", { httpOnly: true, maxAge: 0, path: "/" });
  return res;
}

import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const authHeader = btoa(`${email}:${password}`);

    const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;

    const res = await fetch(`${baseUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: `Basic ${authHeader}`,
      },
    });

    if (!res.ok) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = await res.json();

    const cookieStore = await cookies();

    cookieStore.set("wp_auth_token", password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    cookieStore.set("wp_auth_email", email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return Response.json({
      success: true,
      user,
      message: `Welcome back, ${user.name}`,
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

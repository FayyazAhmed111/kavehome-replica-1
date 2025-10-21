import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("wp_auth_token")?.value;
    const email = cookieStore.get("wp_auth_email")?.value;

    if (!token || !email) {
      return Response.json(
        { loggedIn: false, user: null, reason: "missing_token" },
        { status: 401 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;

    const authHeader = `Basic ${btoa(`${email}:${token}`)}`;

    const res = await fetch(`${baseUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: authHeader,
      },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("WordPress /users/me error:", errText);
      return Response.json(
        { loggedIn: false, user: null, reason: "invalid_auth" },
        { status: 401 }
      );
    }

    const user = await res.json();
    return Response.json({ loggedIn: true, user });
  } catch (error) {
    console.error("/api/me route error:", error);
    return Response.json(
      { loggedIn: false, user: null, error: error.message },
      { status: 500 }
    );
  }
}

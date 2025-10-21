import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("wp_auth_token");
    cookieStore.delete("wp_auth_email");

    return Response.json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

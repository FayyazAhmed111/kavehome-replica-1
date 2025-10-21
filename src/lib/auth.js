export async function getLoggedInUser() {
  try {
    const res = await fetch("/api/me", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("getLoggedInUser error:", err);
    return null;
  }
}

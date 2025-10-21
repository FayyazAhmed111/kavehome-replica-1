"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useWordPressUser({ redirectToLogin = false } = {}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async (forceRefresh = false) => {
    try {
      const cached = localStorage.getItem("wp_user");

      // 🔄 Always force refresh from WordPress
      const res = await fetch(`/api/me?fresh=${Date.now()}`, {
        credentials: "include",
        cache: "no-store", // Ensures no browser or Next.js caching
      });

      const data = await res.json();

      if (!data.loggedIn) {
        if (redirectToLogin) router.push("/accounts/login");
        localStorage.removeItem("wp_user");
        setUser(null);
        return;
      }

      // 🧠 Update cache only if data changed or forced
      if (
        forceRefresh ||
        !cached ||
        JSON.parse(cached).name !== data.user.name ||
        JSON.parse(cached).avatar_urls["96"] !== data.user.avatar_urls["96"]
      ) {
        localStorage.setItem("wp_user", JSON.stringify(data.user));
      }

      setUser(data.user);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(true); // ✅ Always fresh on mount
    const interval = setInterval(() => fetchUser(true), 1000 * 60 * 5); // Refresh every 5 min
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      localStorage.removeItem("wp_user");
      setUser(null);
      router.push("/");
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  return { user, loading, logout, refetchUser: fetchUser };
}

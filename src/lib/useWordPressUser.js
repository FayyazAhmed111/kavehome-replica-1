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
      if (cached && !forceRefresh) setUser(JSON.parse(cached));

      const res = await fetch("/api/me", { credentials: "include" });
      const data = await res.json();

      if (!data.loggedIn) {
        if (redirectToLogin) router.push("/accounts/login");
        localStorage.removeItem("wp_user");
        setUser(null);
        return;
      }

      if (!cached || JSON.parse(cached).name !== data.user.name) {
        setUser(data.user);
        localStorage.setItem("wp_user", JSON.stringify(data.user));
      }
    } catch (err) {
      console.error("Failed to fetch user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(true); // always refresh on mount
    const interval = setInterval(() => fetchUser(true), 60000 * 5); // refresh every 5 mins
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

  return { user, loading, logout };
}

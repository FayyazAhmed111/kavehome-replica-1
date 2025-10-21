"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function verifyUser() {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        const data = await res.json();

        if (data.loggedIn) {
          setAuthorized(true);
        } else {
          router.push("/accounts/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        router.push("/accounts/login");
      } finally {
        setLoading(false);
      }
    }

    verifyUser();
  }, [router]);

  if (loading)
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="font-[Martina] text-gray-500">Verifying session...</p>
      </div>
    );

  if (!authorized) return null;

  return <>{children}</>;
}

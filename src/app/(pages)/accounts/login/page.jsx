"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      setMessage("❌ Please enter both username and password.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Login failed");

      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => router.push("/accounts/dashboard"), 1200);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center bg-white text-[#1a1a1a] font-[Martina] min-h-[625px] md:mt-[112px] mb-[48px]">
      <div className="w-[360px] md:py-[72px] text-center">
        <h1 className="text-[28px] font-kave-haffertext font-normal tracking-tight mb-1">
          Log in
        </h1>
        <p className="text-[15px] mb-8 font-[Martina]">Welcome back home</p>

        <form onSubmit={handleLogin} className="flex flex-col text-left space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-[14px] font-poppins font-semibold mb-2 px-1"
            >
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              className="w-full border border-[#d6d6d6] h-[50px] px-3 text-[14px] font-poppins focus:border-black outline-none placeholder:text-[#999]"
              placeholder="Enter your username or email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-[14px] font-poppins font-semibold mb-2 px-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-[#d6d6d6] h-[50px] px-3 pr-10 text-[14px] font-poppins focus:border-black outline-none placeholder:text-[#999]"
                required
              />
              <span
                className="absolute right-3 top-[13px] text-[#666] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="w-[22px] h-[22px]" />
                ) : (
                  <FiEye className="w-[22px] h-[22px]" />
                )}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-left">
            <a
              href="#"
              className="text-[12px] underline text-neutral-80 font-poppins hover:text-black transition"
            >
              Forgotten your password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-[16px] h-[48px] font-kave-haffertext hover:bg-[#000] transition-all flex justify-center items-center cursor-pointer"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        {message && <p className="mt-4 text-[13px] text-neutral-80">{message}</p>}

        {/* Register link */}
        <p className="mt-6 text-[12px] font-poppins text-[#555] flex gap-2 text-center justify-center">
          Don’t have an account yet?{" "}
          <Link
            href="/accounts/register"
            className="underline text-[#1a1a1a] font-poppins hover:text-black transition"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

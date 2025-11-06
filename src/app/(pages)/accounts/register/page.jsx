"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function HomeRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.error);

      setMessage("✅ Account created successfully! Redirecting...");
      setTimeout(() => (window.location.href = "/accounts/login"), 1500);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center bg-white text-[#1a1a1a] font-[Martina] min-h-[625px] md:mt-[112px] mb-[48px]">
      <div className="w-[360px] md:py-[72px] text-center">
        <h1 className="text-[22px] md:text-[27px] leading-[1.2] font-normal font-kave-haffertext text-neutral-100 text-center">
          Create your account
        </h1>
        <p className="mt-1 text-center text-[12px] leading-[18px] text-neutral-60 font-poppins">
          Welcome to Kave Home
        </p>

        <div className="flex items-center gap-4 my-6">
          <span className="h-px flex-1 bg-neutral-30" />
          <span className="text-[12px] leading-[18px] text-neutral-60 font-poppins">or</span>
          <span className="h-px flex-1 bg-neutral-30" />
        </div>

        <p className="text-center text-[14px] leading-[20px] font-semibold font-poppins text-neutral-100 mb-4">
          Sign up using your email
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-[#d6d6d6] h-[50px] px-3 text-[14px] font-poppins focus:border-black outline-none placeholder:text-[#999]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#d6d6d6] h-[50px] px-3 text-[14px] font-poppins focus:border-black outline-none placeholder:text-[#999]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1">
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-[#d6d6d6] h-[50px] px-3 text-[14px] font-poppins focus:border-black outline-none placeholder:text-[#999]"
              />
              <span
                className="absolute right-3 top-[13px] text-[#666] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff className="w-[22px] h-[22px]" /> : <FiEye className="w-[22px] h-[22px]" />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-[16px] px-3 py-6 font-kave-haffertext h-[48px] mt-5 hover:bg-[#000] transition-all flex justify-center items-center cursor-pointer"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        {message && <p className="mt-4 text-[13px] text-neutral-80">{message}</p>}

        <p className="text-center flex justify-center items-center gap-1.5 mt-5 text-[12px] text-neutral-80 font-poppins">
          Already have an account?{" "}
          <Link className="underline hover:opacity-80 font-poppins font-medium" href="/accounts/login">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}

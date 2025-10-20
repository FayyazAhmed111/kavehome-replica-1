"use client";
import React from "react";

export default function LoginPage() {
  return (
    <main
      className="
        flex
        items-center
        justify-center
        min-h-screen
        bg-white
        text-[#1a1a1a]
        font-[Martina]
      "
    >
      {/* LOGIN CONTAINER */}
      <div className="w-full max-w-[380px] text-center px-6">
        {/* Heading */}
        <h1
          className="
            text-[28px]
            font-[Kave-Haffer]
            font-normal
            tracking-tight
            mb-1
          "
        >
          Log in
        </h1>
        <p className="text-[14px] mb-8 font-[Martina]">
          Welcome back home
        </p>

        {/* FORM */}
        <form className="flex flex-col text-left space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="
                w-full
                border
                border-[#d6d6d6]
                h-[44px]
                px-3
                text-[14px]
                focus:outline-none
                focus:border-black
                transition-all
                placeholder:text-[#999]
              "
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-[13px] font-semibold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="
                  w-full
                  border
                  border-[#d6d6d6]
                  h-[44px]
                  px-3
                  pr-10
                  text-[14px]
                  focus:outline-none
                  focus:border-black
                  placeholder:text-[#999]
                "
              />
              <span className="absolute right-3 top-[10px] text-[#666] cursor-pointer text-[18px]">
                👁️
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right -mt-2">
            <a
              href="#"
              className="text-[13px] underline text-[#1a1a1a] hover:text-black transition"
            >
              Forgotten your password?
            </a>
          </div>

          {/* Log in Button */}
          <button
            type="submit"
            className="
              w-full
              bg-black
              text-white
              text-[14px]
              font-[Martina]
              h-[44px]
              mt-1
              hover:bg-[#000]
              transition-all
              duration-150
            "
          >
            Log in
          </button>

          {/* Google Button */}
          <button
            type="button"
            className="
              w-full
              border
              border-[#1a1a1a]
              text-[14px]
              font-[Martina]
              flex
              items-center
              justify-center
              gap-2
              h-[44px]
              hover:bg-[#f9f9f9]
              transition
            "
          >
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt="Google"
              className="w-4 h-4"
            />
            <span>Log in with Google</span>
          </button>
        </form>

        {/* Register */}
        <p className="mt-8 text-[13px] text-[#555]">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="underline text-[#1a1a1a] hover:text-black transition"
          >
            Register
          </a>
        </p>
      </div>
    </main>
  );
}

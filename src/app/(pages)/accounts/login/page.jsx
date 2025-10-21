"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="
        flex
        items-center
        justify-center
        bg-white
        text-[#1a1a1a]
        font-[Martina]
        min-h-[625px]
        md:mt-[112px]
        mt-[104]
        md:mb-0
        mb-[48px]
      "
    >
      {/* LOGIN CONTAINER */}
      <div className="w-[360px] md:py-[72px] text-center ">
        {/* Heading */}
        <h1
          className="
            text-[28px]
            font-kave-haffertext
            font-normal
            tracking-tight
            mb-1
          "
        >
          Log in
        </h1>
        <p className="text-[15px] mb-8 font-[Martina]">
          Welcome back home
        </p>

        {/* FORM */}
        <form className="flex flex-col text-left space-y-5">
          {/* Email */}
          <div className="mb-4">
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] font-poppins font-semibold mb-2 px-1"
              >
                Email address
              </label>
            </div>
            <div className=" h-[48px]">
              <input
                id="email"
                type="email"
                className="
                w-full
                border
                border-[#d6d6d6]
                h-[50px]
                px-3
                text-[14px]
                outline-1
                focus:outline-none
                focus:border-black
                transition-all
                placeholder:text-[#999]
              "
              />
            </div>

          </div>

          {/* Password */}
          <div className="mb-4">
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
                className="
        w-full
        border
        border-[#d6d6d6]
                h-[50px]
                                outline-1

        px-3
        pr-10
        text-[14px]
        focus:outline-none
        focus:border-black
        placeholder:text-[#999]
      "
              />
              <span
                className="absolute right-3 top-[13px] text-[#666] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
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
          <div className="text-left ">
            <a
              href="#"
              className="text-[12px] underline text-neutral-80 font-poppins hover:text-black transition"
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
              text-[16px]
              px-3
              py-6
              font-kave-haffertext
              h-[48px]
              mt-1
              hover:bg-[#000]
              transition-all
              duration-150
              flex 
              justify-center
              items-center
              text-center
                            cursor-pointer

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
              text-[16px]
              font-kave-haffertext
              flex
                px-3
              py-6
              items-center
              justify-center
              gap-2.5
              h-[48px]
              hover:bg-[#f9f9f9]
              transition
              cursor-pointer
            "
          >
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt="Google"
              className="w-4.5 h-4.5"
            />
            <span>Log in with Google</span>
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-[12px] font-poppins text-[#555] flex gap-2 text-center justify-center">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="underline text-[#1a1a1a] font-poppins hover:text-black transition"
          >
            Register
          </a>
        </p>
      </div>
    </main>
  );
}

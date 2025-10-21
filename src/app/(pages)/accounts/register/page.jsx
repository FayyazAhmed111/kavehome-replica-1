"use client";
import React, { useState } from "react";

const EyeIcon = ({ open }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    {open ? (
      <path
        d="M12 5C6.5 5 2.1 9.1 1 12c1.1 2.9 5.5 7 11 7s9.9-4.1 11-7c-1.1-2.9-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
        fill="currentColor"
      />
    ) : (
      <path
        d="M3.3 1.9 1.9 3.3 5 6.4C3.1 7.7 1.7 9.4 1 12c1.1 2.9 5.5 7 11 7 2.1 0 4-.5 5.6-1.3l2.1 2.1 1.4-1.4L3.3 1.9ZM12 17c-3.3 0-6.1-2-7.8-5 0 0 .6-1 2-2l2.1 2.1A4 4 0 0 0 12 16a3.9 3.9 0 0 0 1.9-.5l1.6 1.6A9.6 9.6 0 0 1 12 17Zm7.8-5a17 17 0 0 1-2.6 2.9l-1.6-1.6a4 4 0 0 0-5.5-5.5L8.5 6.7A9.7 9.7 0 0 1 12 5c5.5 0 9.9 4.1 11 7-.3.7-.7 1.4-1.2 2.1Z"
        fill="currentColor"
      />
    )}
  </svg>
);

export default function HomeRegisterPage() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <main className="w-full min-h-screen flex items-start justify-center py-16 md:py-24 bg-white">
      <div className="w-full max-w-[540px] px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-[28px] md:text-[32px] leading-[1.2] font-normal font-kave-haffer text-neutral-100 text-center">
          Create your account
        </h1>
        <p className="mt-1 text-center text-[12px] leading-[18px] text-neutral-60 font-poppins">
          Welcome to Kave Home
        </p>

        {/* Google Button */}
        <button
          type="button"
          className="mt-6 w-full h-12 border border-neutral-30 bg-neutral-00 text-neutral-100 text-[14px] font-poppins inline-flex items-center justify-center gap-2 hover:bg-neutral-10 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M12 10.2v3.97h5.67c-.23 1.27-1.71 3.72-5.67 3.72a6.56 6.56 0 1 1 0-13.12c1.87 0 3.12.8 3.84 1.49l2.62-2.53C16.79 2.61 14.6 1.8 12 1.8 6.93 1.8 2.8 5.93 2.8 11S6.93 20.2 12 20.2c6.92 0 9.2-4.84 9.2-7.32 0-.49-.05-.86-.11-1.23H12Z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <span className="h-px flex-1 bg-neutral-30" />
          <span className="text-[12px] leading-[18px] text-neutral-60 font-poppins">
            or
          </span>
          <span className="h-px flex-1 bg-neutral-30" />
        </div>

        {/* Subtitle */}
        <p className="text-center text-[14px] leading-[20px] font-semibold font-poppins text-neutral-100 mb-4">
          Sign up using your email
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* First name */}
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-[12px] leading-[18px] text-neutral-90 font-poppins"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full h-12 border border-neutral-30 bg-neutral-00 outline-none px-3 text-[14px] leading-[20px] font-poppins text-neutral-100 focus:border-neutral-60"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[12px] leading-[18px] text-neutral-90 font-poppins"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-12 border border-neutral-30 bg-neutral-00 outline-none px-3 text-[14px] leading-[20px] font-poppins text-neutral-100 focus:border-neutral-60"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-[12px] leading-[18px] text-neutral-90 font-poppins"
            >
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                className="w-full h-12 pr-10 border border-neutral-30 bg-neutral-00 outline-none px-3 text-[14px] leading-[20px] font-poppins text-neutral-100 focus:border-neutral-60"
              />
              <button
                type="button"
                aria-label={showPwd ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-80 hover:text-neutral-100"
                onClick={() => setShowPwd(!showPwd)}
              >
                <EyeIcon open={showPwd} />
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <label className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              className="mt-[2px] h-[14px] w-[14px] border border-neutral-60"
            />
            <span className="text-[12px] leading-[18px] text-neutral-90 font-poppins">
              I want to receive new releases, communications, and special offers
              by email or other electronic means.
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-[2px] h-[14px] w-[14px] border border-neutral-60"
            />
            <span className="text-[12px] leading-[18px] text-neutral-90 font-poppins">
              I’ve read and accepted the{" "}
              <a
                className="underline hover:opacity-80"
                href="/en/en/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 mt-2 bg-neutral-100 text-neutral-00 text-[14px] leading-[20px] font-poppins hover:opacity-90 transition"
          >
            Create account
          </button>
        </form>

        {/* Login link */}
        <p className="text-center mt-5 text-[12px] leading-[18px] text-neutral-80 font-poppins">
          Already have an account?{" "}
          <a className="underline hover:opacity-80" href="/en/en/accounts/login/">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}

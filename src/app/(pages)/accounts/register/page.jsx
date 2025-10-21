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
      <div className="w-[360px] md:py-[72px] text-center ">
        {/* Title */}
        <h1 className="text-[22px] md:text-[27px] leading-[1.2] font-normal font-kave-haffertext text-neutral-100 text-center">
          Create your account
        </h1>
        <p className="mt-1 text-center text-[12px] leading-[18px] text-neutral-60 font-poppins">
          Welcome to Kave Home
        </p>
 
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
              mt-6        "
        >
          <img
            src='https://www.svgrepo.com/show/475656/google-color.svg'
            alt="Google"
            className="w-4.5 h-4.5"
          />
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
              className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              className="
                w-full
                border
                border-[#d6d6d6]
                h-[50px]
                px-3
                text-[14px]
                outline-1
                font-poppins
                focus:outline-none
                focus:border-black
                transition-all
                placeholder:text-[#999]
              "            />
          </div>
 
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1"
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
                h-[50px]
                px-3
                font-poppins
                text-[14px]
                outline-1
                focus:outline-none
                focus:border-black
                transition-all
                placeholder:text-[#999]
              "            />
          </div>
 
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-[14px] text-left font-poppins font-semibold mb-2 px-1"
            >
              Create a password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                className="
                w-full
                border
                border-[#d6d6d6]
                h-[50px]
                px-3
                font-poppins
                text-[14px]
                outline-1
                focus:outline-none
                focus:border-black
                transition-all
                placeholder:text-[#999]
              "              />
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
 
 
          <div className="p-1">
            {/* Checkboxes */}
            <label className="flex items-start gap-2.5 relative mb-1.5">
              <input
                type="checkbox"
                className="peer absolute opacity-0 w-0 h-0 mt-[2px] border border-neutral-60 "
              />
              <span className="before:content-[''] before:block before:h-4 before:w-4 before:border before:border-neutral-60  before:bg-white before:mr-2 peer-checked:before:bg-blue-500"></span>
              <span className="text-[12px] leading-[18px] text-left font-medium text-neutral-90 font-poppins">
                I want to receive new releases, communications, and special offers
                by email or other electronic means.
              </span>
            </label>
 
            <label className="flex items-start gap-2.5 relative">
              <input
                type="checkbox"
                className="peer absolute opacity-0 w-0 h-0 mt-[2px] border border-neutral-60"
              />
              <span className="before:content-[''] before:block before:h-4 before:w-4 before:border before:border-neutral-60  before:bg-white before:mr-2 peer-checked:before:bg-blue-500"></span>
 
              <span className="text-[12px] leading-[18px] text-left font-medium text-neutral-90 font-poppins">
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
 
          </div>
 
          {/* Submit */}
          <button
            type="submit"
            className=" w-full
              bg-black
              text-white
              text-[16px]
              px-3
              py-6
              font-kave-haffertext
              h-[48px]
              mt-5
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
            Create account
          </button>
        </form>
 
        {/* Login link */}
        <p className="text-center justify-center flex items-center gap-1.5 mt-5 text-[12px] leading-[18px] text-neutral-80 font-poppins">
          Already have an account?{" "}
          <a className="underline hover:opacity-80 font-poppins font-medium" href="/en/en/accounts/login/">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
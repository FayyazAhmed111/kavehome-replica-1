"use client";
import React from "react";
import { useWordPressUser } from "@/lib/useWordPressUser";

export default function DashboardPage() {
  const { user, loading, logout } = useWordPressUser({ redirectToLogin: true });

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-gray-500 font-[Martina] text-lg">
          Loading your dashboard...
        </p>
      </div>
    );

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-red-500 font-[Martina] text-lg">
          Unauthorized access.
        </p>
      </div>
    );

  return (
    <main className="flex justify-center items-center min-h-[calc(100vh-180px)] bg-[#fafafa]">
      <section className="w-full max-w-5xl bg-white shadow-lg rounded-3xl border border-gray-100 p-10 md:p-14">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-[Kave-Haffer] text-gray-900">
            Welcome back, {user.name || user.slug} 👋
          </h1>
          <p className="text-gray-500 mt-2 font-[Martina]">
            Manage your account, wishlist, and orders below
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <img
            src={user.avatar_urls?.["96"]}
            alt="User avatar"
            className="w-28 h-28 rounded-full border shadow-sm"
          />

          <div className="flex flex-col gap-2 font-[Martina] text-gray-700 text-[15px]">
            <p>
              <span className="font-semibold text-gray-900">Username:</span>{" "}
              {user.slug}
            </p>
            <p>
              <span className="font-semibold text-gray-900">User ID:</span>{" "}
              {user.id}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Profile:</span>{" "}
              <a
                href={user.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                View on WordPress
              </a>
            </p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-14">
          <h2 className="text-2xl font-[Kave-Haffer] text-center mb-6 text-gray-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="group flex flex-col items-center justify-center border border-gray-200 rounded-2xl py-8 hover:shadow-lg hover:border-gray-300 transition bg-white">
              <span className="text-3xl mb-2">🛒</span>
              <span className="text-gray-800 font-[Martina] text-[15px] group-hover:text-black transition">
                View Orders
              </span>
            </button>

            <button className="group flex flex-col items-center justify-center border border-gray-200 rounded-2xl py-8 hover:shadow-lg hover:border-gray-300 transition bg-white">
              <span className="text-3xl mb-2">💖</span>
              <span className="text-gray-800 font-[Martina] text-[15px] group-hover:text-black transition">
                My Wishlist
              </span>
            </button>

            <button
              onClick={logout}
              className="group flex flex-col items-center justify-center border border-gray-200 rounded-2xl py-8 hover:shadow-lg hover:border-gray-300 transition bg-white"
            >
              <span className="text-3xl mb-2 text-red-500 group-hover:scale-110 transition">
                🚪
              </span>
              <span className="text-red-600 font-[Martina] text-[15px] group-hover:text-red-700 transition">
                Log Out
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

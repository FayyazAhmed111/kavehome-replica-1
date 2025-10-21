"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        if (data.length === 0) throw new Error("No post found");
        setPost(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400 text-lg font-[Martina]">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-red-500 text-lg font-[Kave-Haffer]">
        {error}
      </div>
    );

  return (
    <section className="min-h-screen bg-[#F7F6F2] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 md:p-16 border border-gray-100">
        {/* PRODUCT TITLE */}
        <h1 className="text-4xl md:text-5xl font-[Kave-Haffer] text-gray-900 mb-6 tracking-tight text-center">
          {post.title.rendered}
        </h1>

        {/* FEATURED IMAGE */}
        {post.featured_media && (
          <div className="flex justify-center mb-10">
            <img
              src={`${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-content/uploads/${post.slug}.jpg`}
              alt={post.title.rendered}
              className="rounded-xl shadow-sm max-h-[420px] object-contain"
            />
          </div>
        )}

        {/* CONTENT */}
        <article
          className="prose prose-lg max-w-none font-[Martina] text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* CALL TO ACTION */}
        <div className="mt-10 flex justify-center">
          <button className="bg-black text-white font-[Martina] text-sm tracking-wide px-8 py-3 rounded-full hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import API from "@/config/api";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/lib/wishlist";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products + wishlist
  useEffect(() => {
    async function fetchData() {
      try {
        const [prodRes, wishRes] = await Promise.all([
          fetch(API.PRODUCTS).then((r) => r.json()),
          getWishlist(),
        ]);
        setProducts(prodRes);
        setWishlist(wishRes || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Toggle wishlist
  const handleWishlist = async (productId) => {
    try {
      if (wishlist.includes(productId)) {
        await removeFromWishlist(productId);
        setWishlist((prev) => prev.filter((id) => id !== productId));
      } else {
        await addToWishlist(productId);
        setWishlist((prev) => [...prev, productId]);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400 text-lg font-[Martina]">
        Loading products...
      </div>
    );

  return (
    <section className="bg-[#F7F6F2] min-h-screen py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-[Kave-Haffer] mb-12 text-center">
          Our Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="bg-white relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                {/* Wishlist Icon */}
                <button
                  onClick={() => handleWishlist(product.id)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* Product Image */}
                <Link href={product.permalink} target="_blank">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.title}
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>

                {/* Product Details */}
                <div className="p-5">
                  <h2 className="font-[Kave-Haffer] text-lg text-gray-900 mb-1">
                    {product.title}
                  </h2>
                  <p className="font-[Martina] text-sm text-gray-500 line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <p className="font-[Kave-Haffer] text-[15px] text-gray-900">
                    {product.price ? `${product.price} €` : ""}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      href={product.permalink}
                      target="_blank"
                      className="text-[13px] text-gray-700 hover:text-black underline"
                    >
                      View details
                    </Link>
                    <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-[Martina] hover:bg-gray-900 transition">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

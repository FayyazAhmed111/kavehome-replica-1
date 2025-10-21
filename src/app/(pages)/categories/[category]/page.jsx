"use client";
import React from "react";
import { NAV_JSON } from "@/data/navData";
import Link from "next/link";

const SubCategories = ({ params }) => {
  const { category } = params;

  const categoryData = NAV_JSON.products.columns.find(
    (c) => c.title.toLowerCase() === decodeURIComponent(category).toLowerCase()
  );

  if (!categoryData) {
    return (
      <div className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-[Kave-Haffer] text-red-600">
          Category not found
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      {/* HEADER */}
     
      <ul className="space-y-2 text-[15px] md:text-[16px] font-[Martina]">
        {categoryData.items.length > 0 ? (
          categoryData.items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block hover:text-black/60 transition-colors duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No subcategories found.</li>
        )}
      </ul>
    </section>
  );
};

export default SubCategories;

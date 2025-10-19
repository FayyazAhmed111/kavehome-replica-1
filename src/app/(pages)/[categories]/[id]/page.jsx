import React from "react";
import { NAV_JSON } from "@/data/navData";
import Link from "next/link";

const SubCategories = ({ params }) => {
  const { id } = params; // e.g., 'tables' or 'sofas'
  const categories = NAV_JSON.products.columns;
  const category = categories.find(
    (c) => c.title.toLowerCase() === decodeURIComponent(id).toLowerCase()
  );

  if (!category) {
    return (
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold text-red-600">
          Category not found
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold">{category.title}</h1>
        <Link
          href={category.seeAll}
          className="text-sm underline text-gray-600 hover:text-black"
        >
          See all
        </Link>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {category.items.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-[#f9f9f7] border border-gray-200 rounded-lg hover:shadow-md transition-all"
          >
            <Link href={item.href}>
              <div className="aspect-square bg-[#eee] mb-3"></div>
              <h3 className="text-[15px] font-medium text-gray-800">
                {item.label}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SubCategories;

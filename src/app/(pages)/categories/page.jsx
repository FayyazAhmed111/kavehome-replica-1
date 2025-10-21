import React from "react";
import Link from "next/link";
import { NAV_JSON } from "@/data/navData";

const Categories = () => {
    const categories = NAV_JSON.products.columns;

    return (
        <section className="max-w-7xl mx-auto py-16 px-6">
            <h1 className="text-3xl font-semibold mb-10">All Categories</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        href={`/categories/${encodeURIComponent(cat.title.toLowerCase())}`}
                        className="block bg-[#f9f9f7] rounded-lg border border-gray-200 p-6 text-center hover:shadow-md transition-all"
                    >

                        <div className="aspect-square bg-[#eee] mb-3"></div>
                        <h3 className="text-lg font-medium">{cat.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">See all</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;

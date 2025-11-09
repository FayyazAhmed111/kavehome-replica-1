"use client";

import React, { useState } from "react";
import ProductCarousel from "@/components/ProductCarousel";
import { FilterLinesIcon, Gridfour, Gridnine, SquareIcon } from "@/components/icons/grid-icons/Grids";
import { FilterDrawer } from "@/components/FilterDrawer";

export default function GridWrapper({ categoryData, category }) {
    const [viewMode, setViewMode] = useState("grid");

    return (
        <>
            <div className="lg:py-[12px]  pt-6">
                <div className="lg:py-3 lg:px-0  bg-neutral-00 mt-2 relative w-full z-[3] top-0 ">
                    <div
                        className="xl:p-0 xl:max-w-[100%] mx-auto lg:flex-row-reverse items-center flex gap-4 
                  justify-between w-full"
                    >
                        {/* Left Side */}
                        <div className="lg:flex-row-reverse lg:pl-2 items-center flex gap-2 flex-grow flex-shrink-0 ">
                            <div className="flex items-center ">
                                <button
                                    className={`kh-icon-button cursor-pointer lg solid px-3 ${viewMode === "grid" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"
                                        }`}
                                    onClick={() => setViewMode("grid")}
                                >
                                    <span className="w-6 h-6 flex overflow-hidden align-middle">
                                        <Gridnine />
                                    </span>
                                </button>

                                <button
                                    className={`kh-icon-button cursor-pointer lg solid px-3 ${viewMode === "grid-3" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"
                                        }`}
                                    onClick={() => setViewMode("grid-3")}
                                >
                                    <span className="w-6 h-6 flex overflow-hidden align-middle">
                                        <Gridfour />
                                    </span>
                                </button>

                                <button
                                    className={`kh-icon-button cursor-pointer lg solid px-3 ${viewMode === "grid-1" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"
                                        }`}
                                    onClick={() => setViewMode("grid-1")}
                                >
                                    <span className="w-6 h-6 flex overflow-hidden align-middle">
                                        <SquareIcon />
                                    </span>
                                </button>
                            </div>

                            <div className="text-neutral-70 flex-grow text-[12px] text-right  lowercase">
                                <span>{categoryData.products.nodes.length} products</span>
                            </div>
                            <div></div>
                        </div>

                        {/* Center Side */}
                        <div className="items-center w-full min-w-[0] flex">
                            <div></div>
                            <div className="flex items-center"></div>
                        </div>

                        {/* Right Side */}
                        <FilterDrawer>
                            <button className="flex  items-center text-[14px] gap-1 tracking-[.4px] py-2 px-0 uppercase border-0 bg-transparent cursor-pointer text-neutral-100">
                                <div className="kh-icon-button lg solid">
                                    <span className="w-6 h-6 flex overflow-hidden align-middle">
                                        <FilterLinesIcon />
                                    </span>
                                    <span>Filters</span>
                                </div>
                            </button>
                        </FilterDrawer>
                    </div>
                </div>
            </div>

            {/* ---- your grid (base classes unchanged) + tiny overrides appended ---- */}
            <div
                className={`grid grid-cols-2 gap-y-8 gap-x-2 lg:grid-cols-4 lg:gap-y-10 lg:gap-x-4
          ${viewMode === "grid-3"
                        ? " lg:grid-cols-3"
                        : viewMode === "grid-1"
                            ? " grid-cols-1 lg:grid-cols-1"
                            : ""
                    }`}
            >
                {categoryData.products.nodes.map((product) => (
                    <div key={product.id} className="relative">
                        <div className="block overflow-hidden transition object-cover relative group">
                            <ProductCarousel product={product} category={category} viewMode={viewMode} />

                            <div className="p-4 relative z-[2]">
                                <h2 className="font-semibold text-lg ">{product.name}</h2>

                                {product.shortDescription && (
                                    <div
                                        className="text-gray-600 text-sm mt-2 line-clamp-2"
                                        dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                                    />
                                )}

                                <div
                                    className="text-gray-700  font-kave-haffertext"
                                    dangerouslySetInnerHTML={{ __html: product.price }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

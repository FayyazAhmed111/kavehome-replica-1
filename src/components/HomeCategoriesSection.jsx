"use client"
import React from "react"

const HomeCategoriesSection = () => {
  const categories = [
    {
      title: "Sofas",
      href: "/en/en/o/sofas",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-sofas-aw25.jpg",
    },
    {
      title: "Tables",
      href: "/en/en/o/tables",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-mesas-aw25.jpg",
    },
    {
      title: "Chairs",
      href: "/en/en/chairs",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-sillas-aw25.jpg",
    },
    {
      title: "Decoration",
      href: "/en/en/o/decoration-accessories",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-deco-aw25.jpg",
    },
    {
      title: "Soft furnishings",
      href: "/en/en/o/soft-furnishings",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-textil-aw25.jpg",
    },
    {
      title: "Lighting",
      href: "/en/en/o/lighting",
      img: "https://d.media.kavehome.com/image/fetch/w_352,c_fill,ar_4:5,f_auto/https://media.kavehome.com/media/menu_items/home-category-iluminacion-aw25.jpg",
    },
  ]

  return (
    <div className="w-full py-[64px] md:py-[80px] lg:py-[100px]">
      <div className="home-slides_vertical__item__6W91_"></div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 w-full">
        {categories.map((cat, index) => (
          <a
            key={index}
            title={cat.title}
            href={cat.href}
            className="relative group overflow-hidden block w-full"
          >
            <picture>
              <img
                fetchPriority="auto"
                alt={cat.title}
                src={cat.img}
                loading="lazy"
                decoding="auto"
                sizes="(min-width: 1px) 1w, (min-width: 1440px) 1440w"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ aspectRatio: "0.8" }}
              />
            </picture>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

            {/* Text */}
            <div className="absolute top-[20px] sm:top-[60px] md:top-[80px] lg:top-[100px] left-0 w-full text-center z-10">
              <h2 className="font-kave-haffer text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-white font-semibold drop-shadow-md tracking-tight">
                {cat.title}
              </h2>
              <span className="block mt-2 underline text-white text-[14px] sm:text-[16px] hover:opacity-80 transition">
                Discover
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default HomeCategoriesSection

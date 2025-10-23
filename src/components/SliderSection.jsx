"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import Autoplay from "embla-carousel-autoplay";

export function SliderInspiration({ title, items = [], rightLink }) {
    const autoplay = useRef(
        // Autoplay({ delay: 4000, stopOnInteraction: true, pauseOnHover: true })
    );

    if (!items.length) return null;

    // check which section we're in
    const isTrending = title === "Trending now";
    const isFavourites = title === "Our favourites";
    const isKaveGallery = title === "Kave Gallery"

    return (
        <section
            className={`relative ${isFavourites ? "group" : ""
                }`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] font-kave-haffertext">{title}</h3>
                {rightLink && (
                    <Link
                        href={rightLink.href}
                        className="text-sm font-poppins text-neutral-70 hover:underline"
                    >
                        {rightLink.label}
                    </Link>
                )}
            </div>

            {/* Carousel */}
            <Carousel
                opts={{ loop: true, align: "start" }}
                // plugins={[autoplay.current]}
                // onMouseEnter={autoplay.current.stop}
                // onMouseLeave={autoplay.current.reset}
                className="relative w-full"
            >
                <CarouselContent className="-ml-4">
                    {items.map((i, idx) => (
                        <CarouselItem
                            key={idx}
                            className="pl-4 basis-[65%] sm:basis-[45%] md:basis-[30%] lg:basis-[22%]"
                        >
                            <Link
                                href={i.href}
                                className="block  hover:bg-neutral-20 transition-all"
                            >
                                <div className="overflow-hidden mx-auto rounded-sm">
                                    <Image
                                        src={
                                            i.image ||
                                            "https://via.placeholder.com/144x115?text=No+Image"
                                        }
                                        alt={i.label}
                                        width={140}
                                        height={115}
                                        loading="lazy"
                                        className="object-contain aspect-[1.25]"
                                    />
                                </div>

                                <p className="mt-2 text-[12px] font-kave-haffertext text-neutral-90">
                                    {i.label}
                                </p>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {!isTrending && (
                    <>
                        <ChevronLeft
                            className={`cursor-pointer bg-white/80 hover:bg-white text-neutral-80 shadow-sm rounded-full size-7 absolute top-1/2 -left-5 -translate-y-9 transition-opacity ${isFavourites
                                    ? "opacity-0 group-hover:opacity-100"
                                    : "opacity-100"
                                }`}
                        />
                        <ChevronRight
                            className={`cursor-pointer bg-white/80 hover:bg-white text-neutral-80 shadow-sm rounded-full size-7 absolute top-1/2 -right-4.5 -translate-y-9 transition-opacity ${isFavourites
                                    ? "opacity-0 group-hover:opacity-100"
                                    : "opacity-100"
                                }`}
                        />
                    </>
                )}
            </Carousel>
        </section>
    );
}

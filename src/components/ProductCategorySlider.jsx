"use client";

import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCategorySlider({ categories }) {
    if (!categories || categories.length === 0) return null;

    return (
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
            <CarouselContent className="-ml-4">
                {categories.map((cat) => (
                    <CarouselItem
                        key={cat.id}
                        className="pl-4 basis-[65%] sm:basis-[45%] md:basis-[30%] lg:basis-[22%]"
                    >
                        <Link
                            href={`/products/${cat.slug}`}
                            className="block hover:bg-neutral-20 transition-all"
                        >
                            <div className="overflow-hidden mx-auto rounded-sm">
                                <img
                                    src={cat.image?.sourceUrl || "/fallback.jpg"}
                                    alt={cat.name}
                                    className="object-contain w-[140px] h-[115px] mx-auto aspect-[1.25]"
                                />
                            </div>

                            <p className="mt-2 text-[12px] font-kave-haffertext text-neutral-90">
                                {cat.name}
                            </p>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="cursor-pointer bg-white/80 hover:bg-white text-neutral-80 shadow-sm rounded-full size-7 absolute top-1/2 -left-5 -translate-y-9" />
            <CarouselNext className="cursor-pointer bg-white/80 hover:bg-white text-neutral-80 shadow-sm rounded-full size-7 absolute top-1/2 -right-4.5 -translate-y-9" />
        </Carousel>
    );
}

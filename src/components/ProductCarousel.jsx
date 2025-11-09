"use client";

import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCarousel({ product, category, viewMode }) {
    return (
        <Carousel className="w-full relative z-[2]">
            <CarouselContent>
                <CarouselItem>
                    <Link href={`/products/${category}/${product.slug}`}>
                        <img
                            src={product.image?.sourceUrl || "/placeholder.png"}
                            alt={product.name}
                            className="w-full object-cover cursor-pointer"
                        />
                    </Link>
                </CarouselItem>

                {product.galleryImages?.nodes?.length > 0 &&
                    product.galleryImages.nodes.map((img, i) => (
                        <CarouselItem key={i}>
                            <img
                                src={img.sourceUrl}
                                alt={`Gallery ${i + 1}`}
                                className="w-full object-cover "
                            />
                            {/* HeArt ICON  */}
                            <button className="absolute right-2 top-2 z-[3] cursor-pointer p-[inherit] bg-none border-none bg-transparent text-neutral-100">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-none stroke-current"
                                >
                                    <path
                                        d="M3.498 12.053 12.125 21l8.627-8.947a5.405 5.405 0 0 0 1.498-3.75C22.25 5.374 19.96 3 17.136 3a5.023 5.023 0 0 0-3.616 1.553L12.125 6 10.73 4.553A5.023 5.023 0 0 0 7.114 3C4.29 3 2 5.374 2 8.303c0 1.407.539 2.756 1.498 3.75Z"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {/* ADD TO BaG */}
                            <div>
                                  <button className="absolute right-3 left-6.5 bottom-2 z-[3] cursor-pointer text-neutral-100
                             w-auto min-h-[40px] py-2.5 px-5 bg-neutral-00-70/55 text-[14px]
                             opacity-0 
                               group-hover:opacity-100 transition-all duration-300 ">
                                Add to shopping bag
                            </button>
                            </div>
                            
                        </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    );
}

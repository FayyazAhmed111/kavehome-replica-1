"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "../components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { X } from "lucide-react";

const images = [
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1754907484/ambiences/A25S107_018.jpg",
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1753360639/products/S81330ZF06_1D01.jpg",
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1754907497/ambiences/A25S107_020.jpg",
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1753360640/products/S81330ZF06_1D02.jpg",
    "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1753360649/products/S81330ZF06_1V02.jpg",
];

export default function FullGallery() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Trigger button */}
            <DialogTrigger asChild>
                <button className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:border-neutral-400">
                    View more images
                </button>
            </DialogTrigger>

            {/* Fullscreen modal */}
            <DialogContent className="h-screen w-screen max-w-full overflow-hidden border-none bg-white p-0">
                {/* Close button */}
                <DialogClose asChild>
                    <button className="absolute right-4 top-4 z-50 rounded p-2 hover:bg-neutral-100">
                        <X className="h-5 w-5" />
                    </button>
                </DialogClose>

                {/* Carousel */}
                <div className="flex h-full w-full flex-col items-center justify-center bg-white">
                    <div className="relative flex w-full flex-1 items-center justify-center">
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                                startIndex: activeIndex,
                            }}
                            onSelect={(embla) => setActiveIndex(embla.selectedScrollSnap())}
                            className="w-full max-w-3xl"
                        >
                            <CarouselContent>
                                {images.map((src, idx) => (
                                    <CarouselItem key={idx} className="flex justify-center">
                                        <img
                                            src={src}
                                            alt={`Image ${idx + 1}`}
                                            className="max-h-[80vh] object-contain"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 p-2 hover:bg-white" />
                            <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 p-2 hover:bg-white" />
                        </Carousel>
                    </div>

                    {/* Thumbnail row */}
                    <div className="fixed bottom-8 flex w-full justify-center gap-2 bg-transparent">
                        {images.map((thumb, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`border-2 ${idx === activeIndex
                                    ? "border-black"
                                    : "border-transparent hover:border-neutral-300"
                                    }`}
                            >
                                <img
                                    src={thumb}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="h-[60px] w-[60px] object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

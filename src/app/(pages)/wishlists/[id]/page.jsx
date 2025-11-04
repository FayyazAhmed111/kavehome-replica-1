"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Edit, Trash2, ShoppingBag, Grid3x3, List, Heart } from "lucide-react"

const mostChosenProducts = [
    {
        id: 1,
        name: "Konna",
        description: "Konna light grey chair",
        price: "135 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 2,
        name: "Nirela",
        description: "Nirela set of 2 stainless steel bowls",
        price: "40.99 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 3,
        name: "Nirela",
        description: "Nirela set of 2 candle holders 7cm",
        price: "22.50 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 4,
        name: "Nirela",
        description: "Nirela tripod stainless steel candle holder 20cm",
        price: "51.99 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 5,
        name: "Osla",
        description: "Osla sun in green chenille with armrests and graphite stainless steel legs",
        price: "789 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 6,
        name: "Talinen",
        description: "Talinen set of 4 white candles",
        price: "17.99 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
    {
        id: 7,
        name: "Arty",
        description: "Arty beige, convertible poufle 90x200 cm",
        price: "339 €",
        normalImage:
            "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
        hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
    },
]

function ProductCard({ product, showHeart = false }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[0.8] overflow-hidden bg-neutral-100 mb-4">
                <img
                    src={isHovered ? product.hoverImage : product.normalImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
                {showHeart && (
                    <button className="absolute top-3 right-3 z-10">
                        <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    </button>
                )}
                {product.badge && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-medium tracking-wide">
                        {product.badge}
                    </div>
                )}
            </div>
            <div className="space-y-1">
                <h3 className="font-medium text-base">{product.name}</h3>
                <p className="text-sm text-neutral-600 leading-tight">{product.description}</p>
                <p className="font-semibold text-base pt-1">{product.price}</p>
            </div>
        </div>
    )
}

export default function WishlistDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [viewMode, setViewMode] = useState("grid")
    const [wishlistName, setWishlistName] = useState("abc")
    const [wishlistProducts, setWishlistProducts] = useState([])

    useEffect(() => {
        const wishlists = JSON.parse(localStorage.getItem("wishlists") || "[]")
        const currentWishlist = wishlists.find((w) => w.id === params.id)
        if (currentWishlist) {
            setWishlistName(currentWishlist.name)
            setWishlistProducts(currentWishlist.products || [])
        }
    }, [params.id])

    return (
        <main className="flex items-center flex-col bg-white text-[#1a1a1a] min-h-screen md:mt-[112px] mt-[104px] md:mb-0 mb-[48px]">
            {/* Header Section */}
            <div className="w-full px-4 md:px-8 py-6">
                {/* Back Button and Product Count */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => router.push("/wishlists")}
                        className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>All wishlists</span>
                    </button>
                    {wishlistProducts.length > 0 && (
                        <p className="text-sm text-neutral-600">
                            {wishlistProducts.length} {wishlistProducts.length === 1 ? "product" : "products"}
                        </p>
                    )}
                </div>

                {/* Wishlist Title and Actions */}
                <h1 className="text-[32px] md:text-[40px] font-light text-center  flex-1">{wishlistName}</h1>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 xl:py-5 xl:px-24 mb-2 ">
                    <span className="wishlist__quantity">
                        <div className="bg-[#F0EFEB] h-[20px] w-[100px] skeleton"></div>
                    </span>

                    <div className="flex items-center justify-center md:justify-end gap-3 flex-wrap">
                        <Button
                            variant="ghost"
                            className="cursor-pointer text-[12px] text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 px-3 underline py-2 h-auto font-normal"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share it
                        </Button>
                        <Button
                            variant="ghost"
                            className="cursor-pointer text-[12px] text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 px-3 underline py-2 h-auto font-normal"
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Rename it
                        </Button>
                        <Button
                            variant="ghost"
                            className="cursor-pointer text-[12px] text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 px-3 underline py-2 h-auto font-normal"
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete wishlist
                        </Button>
                        <div className=" me-4">
                            <Button
                                className={`cursor-pointer text-[12px]  rounded-none ${wishlistProducts.length === 0 && "pointer-events-none opacity-50"} text-neutral-00-70 hover:text-neutral-10 hover:bg-neutral-100 px-3  py-2 h-auto font-normal`}                       >
                                <ShoppingBag className="w-4 h-4 mr-2" />
                                Add list to bag
                            </Button>
                      </div>

                        {/* View Toggle */}
                        <div className="flex items-center border-l border-[#d7d6d2] pl-2">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 ${viewMode === "grid" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"}`}
                            >
                                <span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="M3.5 3.5h7v7h-7v-7ZM3.5 13.5h7v7h-7v-7ZM13.5 3.5h7v7h-7v-7ZM13.5 13.5h7v7h-7v-7Z"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 ${viewMode === "list" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"}`}
                            >
                                <span className="icon md">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="currentColor"
                                            d="M3.5 20.5v-7h17v7h-17ZM3.5 10.5v-7h17v7h-17Z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {wishlistProducts.length > 0 ? (
                <section className="py-10 wishlist-container flex items-center flex-col px-4 md:px-8 w-full">
                    <div
                        className={`grid gap-6  ${viewMode === "grid"
                                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                : "grid-cols-1 mx-auto"
                            }`}
                    >
                        {wishlistProducts.map((product) => (
                            <ProductCard key={product.id} product={product} showHeart={true} />
                        ))}
                    </div>
                </section>
            ) : (
                <section className="py-16 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <p className="text-neutral-600 text-[16px] mb-6">It looks like there aren&apos;t any wishes here.</p>
                        <Button
                            variant="outline"
                            className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-6 py-2.5 text-[14px] rounded-sm bg-transparent"
                        >
                            Get inspired
                        </Button>
                    </div>
                </section>
            )}

            {/* Most Chosen Carousel Section */}
            <section className="py-10 px-4 md:px-8 w-full">
                <h2 className="text-[16px] md:text-[18px] font-normal mb-6">Most Chosen</h2>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {mostChosenProducts.map((product, index) => (
                                <CarouselItem
                                    key={`${product.id}-${index}`}
                                    className="pl-4 basis-44 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-70"
                                >
                                    <ProductCard product={product} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="z-10 hidden md:flex border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-40 -left-3 -translate-y-1/2" />
                        <CarouselNext className="z-10 border hidden md:flex border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-40 -right-3 -translate-y-1/2" />
                    </Carousel>
                </div>
            </section>
        </main>
    )
}

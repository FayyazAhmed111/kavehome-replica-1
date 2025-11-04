// "use client";

// import { useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
// const products = [
//   {
//     id: 1,
//     name: "Konna",
//     description: "Konna light grey chair",
//     price: "135 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 2,
//     name: "Nirela",
//     description: "Nirela set of 2 stainless steel bowls",
//     price: "40.99 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 3,
//     name: "Nirela",
//     description: "Nirela set of 2 candle holders 7cm",
//     price: "22.50 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 4,
//     name: "Nirela",
//     description: "Nirela tripod stainless steel candle holder 20cm",
//     price: "51.99 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 5,
//     name: "Osla",
//     description:
//       "Osla sun in green chenille with armrests and graphite stainless steel legs",
//     price: "789 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 6,
//     name: "Talinen",
//     description: "Talinen set of 4 white candles",
//     price: "17.99 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 7,
//     name: "Arty",
//     description: "Arty beige, convertible poufle 90x200 cm",
//     price: "339 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 7,
//     name: "Arty",
//     description: "Arty beige, convertible poufle 90x200 cm",
//     price: "339 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
//   {
//     id: 7,
//     name: "Arty",
//     description: "Arty beige, convertible poufle 90x200 cm",
//     price: "339 €",
//     normalImage:
//       "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
//     hoverImage:
//       "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
//   },
// ];

// function ProductCard({ product }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="group cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative aspect-[0.8] overflow-hidden bg-neutral-100 mb-4">
//         <img
//           src={isHovered ? product.hoverImage : product.normalImage}
//           alt={product.name}
//           className="w-full h-full object-cover transition-opacity duration-300"
//         />
//       </div>
//       <div className="space-y-1">
//         <h3 className="font-medium text-base">{product.name}</h3>
//         <p className="text-sm text-neutral-600 leading-tight">
//           {product.description}
//         </p>
//         <p className="font-semibold text-base pt-1">{product.price}</p>
//       </div>
//     </div>
//   );
// }

// export default function WishlistPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [wishlistName, setWishlistName] = useState("");
//   const router = useRouter()
//   const handleCreateWishlist = () => {
//     if (!wishlistName.trim()) return

//     const wishlistId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

//     const existingWishlists = JSON.parse(localStorage.getItem("wishlists") || "[]")
//     const newWishlist = {
//       id: wishlistId,
//       name: wishlistName.trim(),
//       createdAt: new Date().toISOString(),
//       items: [],
//     }
//     existingWishlists.push(newWishlist)
//     localStorage.setItem("wishlists", JSON.stringify(existingWishlists))

//     setIsModalOpen(false)
//     setWishlistName("")

//     router.push(`/wishlists/${wishlistId}`)
//   }
//   return (
//     <main
//       className="
//         flex
//         items-center
//         flex-col
//         justify-center
//         bg-white
//         text-[#1a1a1a]
//         font-[Martina]
//         min-h-[625px]
//         md:mt-[112px]
//         mt-[104]
//         md:mb-0
//         mb-[48px]
//       "
//     >
//       <section className="py-16 px-4 text-center">
//         <div className="max-w-2xl mx-auto">
//           <h1 className="text-[32px] font-light font-kave-haffertext  mb-4">
//             Your wishlist seems to be empty
//           </h1>
//           <p className="text-neutral-70 font-kave-haffertext text-[16px] mb-6">
//             It looks like there aren't any wishes here.{" "}
//             <a href="#" className="underline">
//               Get inspired
//             </a>
//           </p>
//           <Button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-neutral-100 text-neutral-00 hover:bg-neutral-90 px-6 py-2.5 font-kave-haffertext text-[14px]  rounded-none"
//           >
//             Create your first wishlist
//           </Button>
//         </div>
//       </section>

//       {/* Most Chosen Carousel Section */}
//       <section className="py-10 px-8 w-full mx-auto">
//         <h2 className="text-[16px] md:text-[18px] font-normal font-kave-haffertext  mb-3">
//           Most Chosen
//         </h2>

//         <div className="relative ">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: false,
//             }}
//             className="w-full"
//           >
//             <CarouselContent className="-ml-4">
//               {products.map((product) => (
//                 <CarouselItem
//                   key={product.id}
//                   className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-70"
//                 >
//                   <ProductCard product={product} />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="z-10 hidden md:flex border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-40 -left-3 -translate-y-1/2" />
//             <CarouselNext className="z-10 border hidden md:flex border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-40 -right-3 -translate-y-1/2" />
//           </Carousel>
//         </div>
//       </section>

//       {/* Wishlist Creation Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} className="">
//         <DialogContent className="sm:max-w-[480px] sm:h-auto h-full p-0  py-[28px] px-[24px]">
//           <DialogHeader className="">
//             <div className="items-start ">
//               <DialogTitle className=" font-light text-[16px] font-kave-haffertext">
//                 New wishlist
//               </DialogTitle>
//             </div>
//           </DialogHeader>
//           <form className="flex flex-col justify-between h-[calc(100%_-_80px)]">
//             <div className="md:h-auto md:max-h-[364px] md:min-h-[244px] md:overflow-auto py-4 px-2 overflow-hidden ">
//               <div className="flex flex-col font-poppins font-normal gap-2">
//                 <div className="flex gap-6 justify-between items-center px-1">
//                   <label
//                     htmlFor="wishlist-name"
//                     className="flex
//                     items-center flex-1 text-[14px] font-medium gap-2 leading-5 m-0 "
//                   >
//                     <span className="text-neutral-70 font-medium text-[12px] leading-5">
//                       Name
//                     </span>
//                   </label>
//                 </div>
//                 <div className=" flex items-center px-4  bg-white gap-2  h-[48px] justify-between outline-[1px] outline-solid outline-neutral-50 relative">
//                   <Input
//                     id="wishlist-name"
//                     placeholder="e.g. New home"
//                     value={wishlistName}
//                     onChange={(e) => setWishlistName(e.target.value)}
//                     className="[all:unset]  [-webkit-appearance:none]
//   w-full flex-1 text-[14px] h-[22px] leading-[22px]
//   text-neutral-70 border-0
//   focus:outline-none focus:ring-0 focus:shadow-none
//   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
//                   />
//                 </div>
//                 <p className="text-xs text-neutral-600">
//                   Maximum 50 characters
//                 </p>
//               </div>
//             </div>
//             <Button
//               onClick={handleCreateWishlist}
//               type="button"
//               className={`w-full rounded-sm transition-colors ${wishlistName.trim()
//                 ? "bg-black hover:bg-neutral-800 text-white"
//                 : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
//                 }`}
//               disabled={!wishlistName.trim()}
//             >
//               Create
//             </Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </main>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

const products = [
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
  {
    id: 8,
    name: "Arty",
    description: "Arty beige, convertible poufle 90x200 cm",
    price: "339 €",
    normalImage:
      "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
    hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
  },
  {
    id: 9,
    name: "Arty",
    description: "Arty beige, convertible poufle 90x200 cm",
    price: "339 €",
    normalImage:
      "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1709560638/products/CC0934PK03_1V01.jpg",
    hoverImage: "https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1709560639/products/CC0934PK03_1D02.jpg",
  },
]

function ProductCard({ product }) {
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
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-base">{product.name}</h3>
        <p className="text-sm text-neutral-600 leading-tight">{product.description}</p>
        <p className="font-semibold text-base pt-1">{product.price}</p>
      </div>
    </div>
  )
}

export default function WishlistPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wishlistName, setWishlistName] = useState("")
  const [wishlists, setWishlists] = useState([])
  const router = useRouter()

  useEffect(() => {
    const loadWishlists = () => {
      const existingWishlists = JSON.parse(localStorage.getItem("wishlists") || "[]")
      setWishlists(existingWishlists)
    }
    loadWishlists()

    window.addEventListener("storage", loadWishlists)
    return () => window.removeEventListener("storage", loadWishlists)
  }, [])

  const handleCreateWishlist = () => {
    if (!wishlistName.trim()) return

    const wishlistId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const existingWishlists = JSON.parse(localStorage.getItem("wishlists") || "[]")
    const newWishlist = {
      id: wishlistId,
      name: wishlistName.trim(),
      createdAt: new Date().toISOString(),
      items: [],
    }
    existingWishlists.push(newWishlist)
    localStorage.setItem("wishlists", JSON.stringify(existingWishlists))

    setWishlists(existingWishlists)
    setIsModalOpen(false)
    setWishlistName("")

    router.push(`/wishlists/${wishlistId}`)
  }

  const handleWishlistClick = (wishlistId) => {
    router.push(`/wishlists/${wishlistId}`)
  }

  return (
    <main
      className="
        flex
        items-center
        flex-col
        justify-center
        bg-white
        text-[#1a1a1a]
        font-[Martina]
        min-h-[625px]
        md:mt-[112px]
        mt-[104]
        md:mb-0
        mb-[48px]
        px-4
      "
    >
      {wishlists.length === 0 ? (
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-[32px] font-light font-kave-haffertext  mb-4">Your wishlist seems to be empty</h1>
            <p className="text-neutral-70 font-kave-haffertext text-[16px] mb-6">
              It looks like there aren't any wishes here.{" "}
              <a href="#" className="underline">
                Get inspired
              </a>
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-neutral-100 text-neutral-00 hover:bg-neutral-90 px-6 py-2.5 font-kave-haffertext text-[14px]  rounded-none"
            >
              Create your first wishlist
            </Button>
          </div>
        </section>
      ) : (
        <section className="py-16 px-4 w-full ">
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-light font-kave-haffertext mb-2">My wishlists</h1>
            <p className="text-neutral-70 font-kave-haffertext text-[16px] mb-6">Here come the things you love</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-neutral-100 text-neutral-00 hover:bg-neutral-90 px-6 py-2.5 font-kave-haffertext text-[14px] rounded-none"
            >
              Create new wishlist
            </Button>
          </div>
          <div className="wishlists">
            <div className="wishlists">
              <div className=" wishlists-grid ">
                {wishlists.map((wishlist) => (
                  <button
                    key={wishlist.id}
                    onClick={() => handleWishlistClick(wishlist.id)}
                    className="border border-neutral-200 p-6 cursor-pointer hover:border-neutral-400 
                    transition-colors flex flex-col gap-4 justify-start min-h-[200px] "
                  >
                    <div className="flex gap-2 mb-4 ">
                      {[...Array(5)].map((_, index) => (
                        <div key={index} className="flex-1 h-[62.5px] w-full aspect-square bg-neutral-100 relative overflow-hidden">
                          {wishlist.items && wishlist.items[index] ? (
                            <img
                              src={wishlist.items[index].image}
                              alt={wishlist.items[index].name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-neutral-10 skeleton" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-kave-haffertext text-[18px] font-normal mb-1">{wishlist.name}</h3>
                        <p className="text-neutral-600 text-[14px] font-kave-haffertext">
                          {wishlist.items?.length || 0} {wishlist.items?.length === 1 ? "product" : "products"}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-600" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </section>
      )}

      <section className="py-10 px-8 w-full mx-auto">
        <h2 className="text-[16px] md:text-[18px] font-normal font-kave-haffertext  mb-3">Most Chosen</h2>

        <div className="relative ">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} className="relative z-50">
        <DialogContent className="sm:max-w-[480px] sm:h-auto h-[400px] p-0 py-[28px] px-[24px]">
          <DialogHeader className="">
            <div className="items-start ">
              <DialogTitle className=" font-light text-[16px] font-kave-haffertext">New wishlist</DialogTitle>
            </div>
          </DialogHeader>
          <form className="flex flex-col justify-between h-[calc(100%_-_80px)]">
            <div className="md:h-auto md:max-h-[364px] md:min-h-[244px] md:overflow-auto py-4 px-2 overflow-hidden ">
              <div className="flex flex-col font-poppins font-normal gap-2">
                <div className="flex gap-6 justify-between items-center px-1">
                  <label
                    htmlFor="wishlist-name"
                    className="flex
                    items-center flex-1 text-[14px] font-medium gap-2 leading-5 m-0 "
                  >
                    <span className="text-neutral-70 font-medium text-[12px] leading-5">Name</span>
                  </label>
                </div>
                <div className=" flex items-center px-4  bg-white gap-2  h-[48px] justify-between outline-[1px] outline-solid outline-neutral-50 relative">
                  <Input
                    id="wishlist-name"
                    placeholder="e.g. New home"
                    value={wishlistName}
                    onChange={(e) => setWishlistName(e.target.value)}
                    className="[all:unset]  [-webkit-appearance:none]
  w-full flex-1 text-[14px] h-[22px] leading-[22px] 
  text-neutral-70 border-0
  focus:outline-none focus:ring-0 focus:shadow-none
  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <p className="text-xs text-neutral-600">Maximum 50 characters</p>
              </div>
            </div>
            <Button
              onClick={handleCreateWishlist}
              type="button"
              className={`w-full rounded-sm transition-colors ${wishlistName.trim()
                ? "bg-black hover:bg-neutral-800 text-white"
                : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                }`}
              disabled={!wishlistName.trim()}
            >
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  )
}

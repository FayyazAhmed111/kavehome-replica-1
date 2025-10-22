"use client"

import HomeCategoriesSection from "@/components/HomeCategoriesSection"
import { motion } from "framer-motion"
const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "The Warm Edit",
      subtitle: "Textiles, fragrances and lighting to warm the winter season.",
      bg: "shadow-gradient",
      media: "image",
      src: "/images/slide-1.avif",
      mobileSrc:
        "https://d.media.kavehome.com/image/fetch/w_auto,c_pad,f_auto/https://media.kavehome.com/media/images/promotions/hero-slides/bfd03d08c917489c959fe6db2beb16d3.jpg",
      alt: "Warm furniture collection",
      align: "center",
      shadow: true
    },
    {
      id: 2,
      title: "Selected Collection",
      subtitle: "The value of what endures.",
      bg: "bg-gradient-to-br from-blue-400 via-blue-300 to-blue-500",
      media: "video",
      src: "/video/slide-2.webm",
      align: "left",
    },
    {
      id: 3,
      title: "For Every Season",
      subtitle: "A tribute to the classics that are here to stay.",
      bg: "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800",
      media: "image",
      src: "/images/slide-3.avif",
      alt: "Modern furniture design",
      align: "left",
    },
    {
      id: 4,
      title: "Here to Stay",
      subtitle: "Some things in life you’ll hold on to forever.",
      bg: "bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400",
      media: "image",
      src: "/images/slide-4.avif",
      alt: "Minimalist furniture",
      align: "center",
    },
    {
      id: 5,
      title: "Outdoor",
      subtitle: "An outdoor space for all seasons",
      bg: "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950",
      media: "image",
      src: "/images/slide-5.avif",
      alt: "Luxury furniture collection",
      align: "center",
    },
    {
      id: 6,
      title: "Our stores",
      subtitle: "A unique brand experience",
      bg: "bg-gradient-to-br from-green-700 via-green-600 to-green-800",
      media: "image",
      src: "/images/slide-6.avif",
      alt: "Eco-friendly furniture",
      align: "center",
    },
    {
      id: 7,
      title: "Kave Gallery",
      subtitle: "A project that all started with a desire to preserve Mediterranean stories through art.",
      bg: "bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950",
      media: "video",
      src: "/video/slide-7.webm",
      align: "center",
    },
  ]

  const rise = { hidden: { opacity: 1, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }

  return (
    <div className="w-full">
      {slides.map((slide) => (
        <section
          key={slide.id}
          className={`min-h-screen w-full relative flex items-center ${slide.align === "left" ? "  justify-start pl-6 md:pl-16" : "justify-center"}`}
        >
          {/* Gradient x*/}
          <div className={`absolute inset-0 z-20 w-full h-[20%] opacity-60 ${slide.shadow ? slide.bg : ""}`} />

          {slide.media === "video" ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={slide.poster}
            >
              <source src={slide.src} type="video/webm" />
            </video>
          ) : (
              <div className="">
                {/* <img
                  src={slide.src}
                  alt={slide.alt || slide.title}
                  className="absolute inset-0 z-10 w-full h-full object-cover  "
                  loading={slide.id === 1 ? "eager" : "lazy"}
                /> */}
                {slide.id === 1 && slide.mobileSrc ? (
                  <>
                    <img
                      src={slide.mobileSrc}
                      alt={slide.alt || slide.title}
                      className="absolute inset-0 z-10 w-full h-full object-cover block sm:hidden"
                      loading="eager"
                    />
                    <img
                      src={slide.src}
                      alt={slide.alt || slide.title}
                      className="absolute inset-0 z-10 w-full h-full object-cover hidden sm:block"
                      loading="eager"
                    />
                  </>
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt || slide.title}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                )}


              </div>
          )}

          <div className="absolute inset-0" />

          <div className={`relative z-10 px-6 max-w-2xl text-white ${slide.align === "left" ? "text-center md:text-left" : "text-center"}`}>
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={rise}
              className="text-[40px] md:text-[80px] mb-4 font-kave-haffer tracking-tight "
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={rise}
              className="text-[14px] md:text-xl font-light mb-8 font-poppins tracking-tighter text-neutral-00/90"
            >
              {slide.subtitle}
            </motion.p>

            <motion.button
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={rise}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 text-[12px] md:text-lg border-2 border-neutral-00 text-neutral-00 hover:bg-neutral-00 hover:text-neutral-100 transition font-light"
            >
              View products
            </motion.button>
          </div>
        </section>
      ))}
      <HomeCategoriesSection />
    </div>
  )
}

export default Carousel

import React, { useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Info } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import FullGallery from "./FullGallery";

const Hero = ({ openSection, setOpenSection }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollY } = useScroll()


  const containerRef = useRef(null)
  const detailsRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  // [0, 0.02, 0.75, 1]  // starts almost instantly

  // const detailsY = useTransform(
  //   scrollYProgress,
  //   [0, 0.02, 0.75, 1],  // start earlier at ~8%
  //   [0, 0, 400, 400]
  // )

  const detailsY = useTransform(
    scrollY,
    [10, 500],
    [0, 400],
    { clamp: true }
  )

  const smoothY = useSpring(detailsY, {
    stiffness: 70,
    damping: 20,
    mass: 0.4
  })

  const galleryTiles = [
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
      alt: "Veliro front view",
      overlay3D: true,
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_1200,c_fill,ar_3:4,g_auto,f_auto/v1754907484/ambiences/A25S107_018.jpg",
      alt: "Veliro ambience tall",
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1753360639/products/S81330ZF06_1D01.jpg",
      alt: "Veliro detail arm",
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1754907497/ambiences/A25S107_020.jpg",
      alt: "Veliro in library ambience",
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1753360640/products/S81330ZF06_1D02.jpg",
      alt: "Veliro cushion close-up",
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1753360649/products/S81330ZF06_1V02.jpg",
      alt: "Veliro perspective left",
    },
    {
      src: "https://d.media.kavehome.com/image/upload/w_900,c_fill,ar_0.8,g_auto,f_auto/v1753360641/products/S81330ZF06_1D03.jpg",
      alt: "Veliro base and legs close-up",
    },
  ];

  const fabricOptions = [
    { name: "Saima Ecru", code: "MTK0284" },
    { name: "Zafor Green", code: "MTK000ZF06" },
    { name: "Austin Beige", code: "MTK0236" },
    { name: "Austin Ecru", code: "MTK0235" },
    { name: "Austin Dark Blue", code: "MTK0354" },
  ];

  const relatedProducts = [
    {
      name: "Sorein side table in black marble 40 x 40 cm",
      price: "339 €",
      image:
        "https://d.media.kavehome.com/image/upload/w_380,c_fill,f_auto/v1753358661/products/T00294PM01_1V01.jpg",
      href: "/en/en/p/sorein-side-table-in-black-marble-40-x-40-cm",
    },
    {
      name: "Nuvira floor lamp in light grey brushed metal",
      price: "159 €",
      image:
        "https://d.media.kavehome.com/image/upload/w_380,c_fill,f_auto/v1750329175/products/L00120RR82_1V01.jpg",
      href: "/en/en/p/nuvira-floor-lamp-in-light-grey-brushed-metal",
    },
    {
      name: "Zarn mini bouclé effect wool blend rug 200 x 300cm",
      price: "449 €",
      image:
        "https://d.media.kavehome.com/image/upload/w_380,c_fill,f_auto/v1759930428/products/X00585FA06_1V01.jpg",
      href: "/en/en/p/zarn-mini-boucle-effect-wool-blend-rug-200-x-300cm",
    },
    {
      name: "Zarn mini bouclé effect wool blend rug 200 x 300cm",
      price: "449 €",
      image:
        "https://d.media.kavehome.com/image/upload/w_340,c_fill,f_auto/v1747030915/products/D00450KK39_1V01.jpg",
      href: "/en/en/p/zarn-mini-boucle-effect-wool-blend-rug-200-x-300cm",
    },
    {
      name: "Zarn mini bouclé effect wool blend rug 200 x 300cm",
      price: "449 €",
      image:
        "https://d.media.kavehome.com/image/upload/w_340,c_fill,f_auto/v1748000195/products/D00421CP35_1V01.jpg",
      href: "/en/en/p/zarn-mini-boucle-effect-wool-blend-rug-200-x-300cm",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };



  return (
    // <section className="relative md:flex-row flex-col flex lg:gap-4 md:gap-4 gap-0">
    <section
      ref={containerRef}
      className="relative md:flex-row flex-col flex lg:gap-4 md:gap-4 gap-0"
    >

      <nav
        aria-label="Breadcrumb"
        className="absolute left-0 right-0 top-0 z-[1] flex flex-wrap items-center gap-[6px] overflow-hidden text-ellipsis whitespace-nowrap px-4 py-3 lg:px-6 xl:px-10 leading-none"
      >
        <a
          href="/en/en/o/sofas"
          title="Sofas"
          className="flex items-center gap-[6px] text-[13px] font-normal text-neutral-700 transition-all duration-200 hover:text-black"
        >
          <span>Sofas</span>
          <span className="block">›</span>
        </a>

        <a
          href="/en/en/o/3-seater-sofas"
          title="3 seater sofas"
          className="flex items-center gap-[6px] text-[13px] font-normal text-neutral-700 transition-all duration-200 hover:text-black"
        >
          <span>3 seater sofas</span>
        </a>
      </nav>
      {/* LEFT Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex-[0_0_100%] max-w-full w-full relative
             md:flex-[0_0_50%] md:max-w-[50%]
             xl:flex-[0_0_58.3333%] xl:max-w-[58.3333%]"
      >
        <div>
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {galleryTiles.map((tile, idx) => (
                  <CarouselItem key={idx} className="pl-0 basis-full">
                    <div className="aspect-[0.8] w-full overflow-hidden bg-neutral-100">
                      <img
                        src={tile.src || "/placeholder.svg"}
                        alt={tile.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="left-2 border-0 bg-white/80 hover:bg-white text-neutral-800 shadow-sm rounded-full size-8" />
                    <CarouselNext className="right-2 border-0 bg-white/80 hover:bg-white text-neutral-800 shadow-sm rounded-full size-8" /> */}
            </Carousel>
          </div>
          {/* Masonry-like grid */}
          <div className="hidden lg:block">
            <div
              className="detail-gallery_galleryImages__ulhTx flex w-full aspect-[0.8] flex-row overflow-x-auto overflow-y-hidden
                 touch-pan-x snap-x snap-mandatory scrollbar-none bg-[var(--kh-neutral-10)]
                 md:flex-row md:flex-wrap md:gap-1 md:h-full md:justify-start md:overflow-y-hidden
                 md:snap-none md:bg-[var(--kh-neutral-00)] md:aspect-auto
                 md:[&>*:nth-child(5n+1)]:w-[calc(50%-4px)]
                 md:[&>*:nth-child(5n+2)]:w-[calc(50%-4px)]
                 md:[&>*:nth-child(5n+3)]:w-[calc(33.3333%-4px)]
                 md:[&>*:nth-child(5n+4)]:w-[calc(33.3333%-4px)]
                 md:[&>*:nth-child(5n+5)]:w-[calc(33.3333%-4px)]
                 md:[&>*]:aspect-[0.8]
                 md:[&>*]:overflow-hidden"
            >
              {/* {galleryTiles.map((t, idx) => (
                <div
                  key={idx}
                  className="detail-gallery_galleryItem__PwmAx relative  min-w-[auto]
                     scroll-snap-start [scroll-snap-stop:always]
                     bg-[var(--kh-neutral-10)] md:min-w-auto"
                >
                  <button className=" aspect-[inherit] cursor-pointer">
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="h-full w-full  object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </div>
              ))} */}
              {galleryTiles.map((t, idx) => (
                <div
                  key={idx}
                  className="detail-gallery_galleryItem__PwmAx relative min-w-[auto]
       scroll-snap-start [scroll-snap-stop:always]
       bg-[var(--kh-neutral-10)] md:min-w-auto"
                >
                  <button
                    className="aspect-[inherit] cursor-pointer"
                    onClick={() => {
                      setActiveIndex(idx);
                      setOpenGallery(true);
                    }}
                  >
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* View more images button */}
          <div className="flex items-center justify-center mt-3">
            <button className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:border-neutral-400">
              View more images
            </button>
          </div>
        </div>
      </motion.div>

      {/* Details Product */}
      {/* <motion.div

        className="xl:my-12 xl:mx-auto xl:max-w-[512px]
            lg:max-w-[460px] md:max-w-[380px] p-4 md:p-0 "
      > */}
      <motion.div
        ref={detailsRef}
        style={{ y: detailsY }}
        className="xl:my-12 xl:mx-auto xl:max-w-[512px]
            lg:max-w-[460px] md:max-w-[380px] p-4 md:p-0
             "
      >

        <div className="lg:sticky lg:top-[72px] space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#f0efeb] px-3 py-1 text-[12px] font-poppins  uppercase tracking-wide text-black">
              NEW IN
            </span>
          </div>

          {/* Title */}
          <div className="">
            <div className="flex justify-between ">
              <h2 className="text-[46px] font-kave-haffertext font-normal">
                Veliro
              </h2>
              <button>
                <svg
                  role="graphics-symbol"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-neutral-900"
                >
                  <path
                    d="M3.498 12.053 12.125 21l8.627-8.947a5.405 5.405 0 0 0 1.498-3.75C22.25 5.374 19.96 3 17.136 3a5.023 5.023 0 0 0-3.616 1.553L12.125 6 10.73 4.553A5.023 5.023 0 0 0 7.114 3C4.29 3 2 5.374 2 8.303c0 1.407.539 2.756 1.498 3.75Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <h1 className="text-[14px] font-poppins font-normal text-neutral-800 ">
              Veliro green velvet 3-seater sofa with black steel legs 240cm FSC
              Mix Credit
            </h1>
          </div>

          {/* Price + finance */}
          <div className="">
            <div className="text-[27px] font-normal font-kave-haffertext">
              1,695 €
            </div>
            {/* <div className="text-sm text-neutral-600">
                    Split your payment into easy instalments.
                    <button className="ml-2 underline">More information</button>
                  </div> */}
          </div>

          {/* Variant selector */}
          <div className="selectors flex flex-col gap-5">
            <div>
              <div className="space-y-4">
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <button className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-300 p-3 hover:border-neutral-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                          <img
                            src="https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_1,f_auto/v1755076521/entities/model-variants/S81330.png"
                            alt="3-seater sofa"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-left">
                          <div className="text-sm font-medium text-neutral-900">
                            3-seater sofa
                          </div>
                          <div className="text-xs text-neutral-600">240 cm</div>
                        </div>
                      </div>
                      <ChevronLeft className="w-5 h-5 text-neutral-600 rotate-180" />
                    </button>
                  </DrawerTrigger>

                  <DrawerContent className="right-0 px-[120px] pt-[64px] pb-[32px] top-0 z-[1000] fixed h-full w-full min-w-[720px] rounded-none border-l bg-white shadow-xl">
                    <DrawerHeader className=" ">
                      <div className="flex  justify-between items-center w-full">
                        <DrawerTitle className="text-[16px] font-semibold text-neutral-900">
                          Choose an option
                        </DrawerTitle>
                        <DrawerClose asChild>
                          <button className="p-1 hover:opacity-70 transition-opacity">
                            <IoClose className="w-6 h-6 text-neutral-40" />
                          </button>
                        </DrawerClose>
                      </div>
                    </DrawerHeader>
                    <div className="p-3 flex flex-col gap-3.5 overflow-y-auto ">
                      {[
                        {
                          id: 0,
                          title: "2-seater sofa",
                          subtitle: "2-seater sofa",
                          size: "210 cm",
                          image:
                            "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_1,f_auto/v1755076521/entities/model-variants/S81330.png",
                        },
                        {
                          id: 1,
                          title: "3-seater sofa",
                          subtitle: "3-seater sofa",
                          size: "240 cm",
                          image:
                            "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_1,f_auto/v1755076521/entities/model-variants/S81330.png",
                        },
                        {
                          id: 2,
                          title: "Footrest",
                          subtitle: "Footrest",
                          size: "85 x 90 cm",
                          image:
                            "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_1,f_auto/v1755076521/entities/model-variants/S81330.png",
                        },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedOption(item.id)}
                          className={`flex items-center gap-4 p-1 rounded-lg border-2 transition-all ${selectedOption === item.id
                            ? "border-neutral-50 bg-white"
                            : "border-b border-l-0 border-r-0 border-t-0 "
                            }`}
                        >
                          {/* Product Image */}
                          <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 text-left">
                            <div className="text-[12px] font-light text-neutral-900">
                              {item.title}
                            </div>
                            <div className="text-[12px] text-neutral-60 font-medium">
                              {item.size}
                            </div>
                          </div>

                          {/* Size */}
                        </button>
                      ))}
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-row items-center justify-between gap-3 font-poppins text-[12px]">
              <div className="flex items-center flex-row gap-1.5 grow-1 basis-[0%] shrink-1">
                <span className="font-semibold">Fabric:</span>
                <button className="p-0 flex items-center cursor-pointer gap-1 text-neutral-60">
                  <span>Zafor Green</span>
                  <span className="overflow-hidden flex align-middle">
                    <Info className="text-neutral-60" size={14} />
                  </span>
                </button>
              </div>
              <button className="text-[12px] p-0 underline cursor-pointer text-neutral-60">
                64 options
              </button>
            </div>
          </div>

          {/* Materialsssssssssss Fabric row */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {fabricOptions.map((f, i) => (
              <a
                key={f.code}
                href={`?material_fabric=kavehome:${f.code}`}
                className="shrink-0"
              >
                <div
                  className={[
                    "h-16 w-16 border-2",
                    i === 1
                      ? "border-neutral-400"
                      : "border-transparent hover:border-neutral-300",
                  ].join(" ")}
                >
                  <img
                    src={`https://d.media.kavehome.com/image/upload/w_180,c_crop,ar_1,f_auto/v1724771177/entities/fabrics/${f.code}.jpg`}
                    alt={f.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
            <button className="flex h-16 w-16 items-center justify-center border border-neutral-300 transition-colors hover:border-neutral-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 7V17M7 12H17"
                  stroke="#888882"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Info alert */}
          <div className="p-3 bg-blue-light text-blue-dark flex gap-3">
            <span className="flex overflow-hidden align-middle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.21697 1.7613C5.97181 1.88838 5.87608 2.19014 6.00316 2.43531C6.13024 2.68047 6.432 2.7762 6.67717 2.64912L6.21697 1.7613ZM10.3059 1.59182L10.2381 2.08721L10.2396 2.08741L10.3059 1.59182ZM12.4199 2.97939C12.6376 3.14923 12.9518 3.1104 13.1216 2.89266C13.2915 2.67492 13.2527 2.36073 13.0349 2.19089L12.4199 2.97939ZM0.645986 16.9027C0.450978 17.0982 0.451391 17.4148 0.646908 17.6098C0.842425 17.8048 1.15901 17.8044 1.35401 17.6089L0.645986 16.9027ZM11.8685 7.06692C12.0635 6.8714 12.0631 6.55482 11.8676 6.35981C11.6721 6.16481 11.3555 6.16522 11.1605 6.36074L11.8685 7.06692ZM12.5902 4.83722L12.9869 5.1416L12.9873 5.14104L12.5902 4.83722ZM15.4099 1.50937L15.7609 1.86551L15.7635 1.86293L15.4099 1.50937ZM14.9663 4.11998C14.7902 3.90732 14.475 3.87773 14.2623 4.05389C14.0497 4.23004 14.0201 4.54524 14.1962 4.7579L14.9663 4.11998ZM15.9271 8.05974L15.4274 8.04243L15.4273 8.0439L15.9271 8.05974ZM12.8602 14.0013L13.3425 14.1329L13.3426 14.1328L12.8602 14.0013ZM13.1165 16.5602L12.6771 16.7988L12.6773 16.7992L13.1165 16.5602ZM18.7514 19.5C19.0275 19.5 19.2514 19.2761 19.2514 19C19.2514 18.7238 19.0275 18.5 18.7514 18.5V19.5ZM6.67717 2.64912C7.58158 2.18032 8.93294 1.90865 10.2381 2.08721L10.3737 1.09644C8.86828 0.890488 7.30835 1.19559 6.21697 1.7613L6.67717 2.64912ZM10.2396 2.08741C11.0167 2.19129 11.8101 2.50376 12.4199 2.97939L13.0349 2.19089C12.2715 1.59539 11.3071 1.22123 10.3722 1.09623L10.2396 2.08741ZM1.35401 17.6089L11.8685 7.06692L11.1605 6.36074L0.645986 16.9027L1.35401 17.6089ZM13.2726 5.11718C12.8003 5.46624 12.3413 5.7916 11.9864 6.0089C11.8058 6.11947 11.6727 6.18921 11.5882 6.22254C11.5436 6.24019 11.5401 6.2364 11.5649 6.234C11.5753 6.233 11.7334 6.21665 11.8726 6.35586L11.1655 7.06297C11.3436 7.24109 11.5654 7.23861 11.6611 7.22937C11.7712 7.21872 11.8747 7.18457 11.9555 7.15266C12.1221 7.08686 12.3143 6.98065 12.5085 6.86177C12.9031 6.62018 13.3917 6.27265 13.867 5.92135L13.2726 5.11718ZM11.8726 6.35586C11.9858 6.46905 11.9918 6.59626 11.9912 6.63048C11.9906 6.66589 11.9834 6.67442 11.9942 6.64258C12.0149 6.58186 12.0659 6.47491 12.1596 6.31775C12.3429 6.01035 12.6353 5.59972 12.9869 5.1416L12.1935 4.53284C11.8355 4.99936 11.5145 5.44702 11.3007 5.80564C11.1959 5.9815 11.1024 6.1595 11.0477 6.31993C11.0209 6.39867 10.9932 6.50182 10.9914 6.61394C10.9895 6.72487 11.0134 6.91087 11.1655 7.06297L11.8726 6.35586ZM12.9873 5.14104C14.0226 3.7879 15.4672 2.15491 15.7609 1.8655L15.059 1.15325C14.7209 1.48638 13.2451 3.15834 12.1931 4.53339L12.9873 5.14104ZM15.7635 1.86293C16.0394 1.58705 16.2584 1.51102 16.3884 1.50122C16.5099 1.49205 16.5949 1.53537 16.6539 1.60356C16.77 1.73782 16.8678 2.12296 16.4434 2.54738L17.1505 3.25449C17.8658 2.53911 17.9384 1.56016 17.4103 0.949427C17.1471 0.645126 16.7552 0.470723 16.3132 0.504046C15.8797 0.536731 15.4488 0.763381 15.0564 1.15582L15.7635 1.86293ZM16.4434 2.54738C16.1261 2.86468 15.976 2.97006 15.3926 3.4547L16.0315 4.22394C16.5833 3.76562 16.7903 3.61466 17.1505 3.25449L16.4434 2.54738ZM14.1962 4.7579C15.1361 5.89256 15.4597 7.11016 15.4274 8.04243L16.4268 8.07704C16.4677 6.89451 16.0588 5.43885 14.9663 4.11998L14.1962 4.7579ZM15.4273 8.0439C15.3915 9.17354 14.8878 9.91603 14.2304 10.7436C13.5816 11.5602 12.7561 12.4818 12.3777 13.8698L13.3426 14.1328C13.6554 12.985 14.3222 12.2357 15.0134 11.3656C15.6961 10.5063 16.3802 9.54596 16.4268 8.07558L15.4273 8.0439ZM12.3778 13.8698C12.0844 14.9454 12.2102 15.9392 12.6771 16.7988L13.5559 16.3215C13.2172 15.698 13.1141 14.9706 13.3425 14.1329L12.3778 13.8698ZM12.6773 16.7992C13.9232 19.0886 16.6046 19.5 18.7514 19.5V18.5C16.6228 18.5 14.5069 18.0691 13.5557 16.3212L12.6773 16.7992Z"
                  fill="#17388c"
                ></path>
              </svg>
            </span>

            <div className="content flex flex-col flex-1 gap-1">
              <span className="text-[12px] font-poppins font-semibold">
                Made exclusively for you
              </span>
              <span className="content-dec font-normal font-poppins text-[12px]">
                This piece is tailor-made, so it has a special delivery time and
                no returns will be accepted. The rest of the product warranties
                will not be affected.
              </span>
            </div>
          </div>

          {/* Delivery line */}
          <div className="text[12px] min-h-[24px] my-3">
            <div className=" inline-flex items-center gap-3 m-w-[600px] text-[12px] ">
              <span className=" shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0652 17.8661H15.227M15.227 17.8661V5H3V17.8661H4.46682M15.227 17.8661H8.2177M20.9895 13.1932H17.6368M4.46682 17.8661C4.4773 18.9034 5.31548 19.7311 6.35274 19.7311C7.38999 19.7311 8.2177 18.9034 8.2177 17.8661M4.46682 17.8661C4.46682 16.8289 5.29453 15.9907 6.33178 15.9802C7.36903 15.9697 8.20722 16.8289 8.2177 17.8661M15.227 9.54715H18.0349C18.3597 9.54715 18.674 9.70431 18.8731 9.96624L20.8114 12.6065C20.9371 12.7742 21 12.9837 21 13.1932V16.8603C21 17.4156 20.5495 17.8556 20.0047 17.8556H19.837M17.9406 15.9907C16.9034 15.9907 16.0652 16.8393 16.0757 17.8766C16.0757 18.9139 16.9243 19.752 17.9616 19.7416C18.9988 19.7416 19.837 18.8929 19.8265 17.8556C19.8161 16.8184 18.9674 15.9802 17.9406 15.9907Z"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <div>
                Buy now and receive in approximately 8 weeks
                <strong> 7 -8 weeks</strong>
              </div>
            </div>
          </div>

          {/* Bag Add */}
          <div className="">
            <div className="flex md:gap-5 gap-2 flex-row">
              <div className="w-[85px] min-w-[85px] add-to-cart__container">
                <div className="select-box w-full mb-0 text-[12px] ">
                  <label
                    htmlFor="select-quantity"
                    className="flex flex-col m-0 relative gap-2"
                  >
                    <select
                      id="select-quantity"
                      aria-label="Select quantity"
                      defaultValue="1"
                      className=""
                    >
                      {Array.from({ length: 99 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none m-0 p-0 absolute right-3 bottom-3.5 ">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          d="M6.35355 8.64645C6.15829 8.45118 5.84171 8.45118 5.64645 8.64645C5.45118 8.84171 5.45118 9.15829 5.64645 9.35355L6.35355 8.64645ZM12 15L11.6464 15.3536L12 15.7071L12.3536 15.3536L12 15ZM18.3536 9.35355C18.5488 9.15829 18.5488 8.84171 18.3536 8.64645C18.1583 8.45118 17.8417 8.45118 17.6464 8.64645L18.3536 9.35355ZM5.64645 9.35355L11.6464 15.3536L12.3536 14.6464L6.35355 8.64645L5.64645 9.35355ZM12.3536 15.3536L18.3536 9.35355L17.6464 8.64645L11.6464 14.6464L12.3536 15.3536Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </div>

              {/* ADD TO BaG */}
              <div className="flex-1  ">
                {loading ? (
                  <button
                    disabled
                    className="w-full bg-black  h-[48px] m-h-[48px] text-[16px] font-normal px-6 py-4 text-white
                         transition-colors hover:bg-neutral-800
                         disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Adding to bag...
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleClick}
                    className="bg-black w-full px-6 py-4 text-white cursor-pointer h-[48px] m-h-[48px] text-[16px] font-normal
                           border-0  shadow-none relative leading-0.5 decoration-0
                         transition-colors hover:bg-neutral-800"
                    >
                      <span className="flex items-center justify-center text-center">
                      <span className="font-kave-haffertext">
                        Add to shopping bag
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bulky item note */}
          <div className="pt-4">
            <div className=" text-black flex gap-[12px] bg-neutral-20 p-3">
              <span>
                <Info className="text-neutral-80" size={20} />
              </span>
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-semibold font-poppins text-[12px]">
                  This item is bulky
                </span>
                <span className="mt-1 font-normal font-poppins text-[12px]">
                  <div>
                    <p className="font-[12px] text-black">
                      For the best delivery experience, we recommend checking
                      the package dimensions.
                    </p>
                    <button className="text-[12px] w-fit font-kave-haffertext font-normal cursor-pointer  underline">
                      <span>See details</span>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* Accordion links */}
          <div className="xl:p-0 lg:py-0 lg:px-12 flex flex-col gap-4 mt-4 ">
            <div className="flex flex-col gap-0 w-full">
              <div className=" border-b border-neutral-20">
                <a
                  href="#productDetails"
                  className=" flex text-[12px] items-center font-normal justify-between py-1.5  text-neutral-900 hover:underline"
                >
                  <span>Product details</span>
                </a>
              </div>

              <div className="border-b border-neutral-20">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="cursor-pointer flex text-[12px] w-full items-center font-normal justify-between py-1.5  text-left text-neutral-900 "
                >
                  <span>Shipping & returns</span>
                  <span className="text-[24px] font-extralight text-neutral-40">
                    {openSection === "shipping" ? "−" : "+"}
                  </span>
                </button>

                {openSection === "shipping" && (
                  <div className="mt-2 text-[12px] text-neutral-700 space-y-1">
                    <p>
                      <strong>Home Standard Detail</strong>
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        The cost varies according to your country of delivery.{" "}
                        <a
                          href="#"
                          className="text-black underline hover:no-underline"
                        >
                          Check our shipping and delivery conditions.
                        </a>
                      </li>
                      <li>
                        This product is made to order and is considered
                        personalized. Therefore, returns due to withdrawal will
                        not be accepted. The rest of the product warranties will
                        not be affected.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-b border-neutral-20">
                <button
                  onClick={() => toggleSection("product-care")}
                  className="cursor-pointer flex text-[12px] w-full items-center  font-normal justify-between py-1.5 text-left text-neutral-900 "
                >
                  <span>Product care</span>
                  <span className="text-[24px] font-extralight text-neutral-40">
                    {openSection === "product-care" ? "−" : "+"}
                  </span>{" "}
                </button>
                {openSection === "product-care" && (
                  <div className="mt-2 mb-3 text-[12px] text-neutral-800 leading-relaxed">
                    <p>
                      Conserve this product’s qualities by caring for it
                      properly.
                    </p>
                    <a
                      href="#"
                      className="mt-2 inline-flex items-center gap-1 text-neutral-900 "
                    >
                      <strong>Find out how</strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M19.5 19.5H4.5V4.5"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-neutral-600">
            SKU: <strong>S81330ZF06</strong>
          </div>
        </div>

        {/* “Complete your look” — positioned under sticky info (right column) */}
        {/* <div className="mt-10">
                <h3 className="mb-4 text-xl font-light">Complete your look</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {relatedProducts.map((p, i) => (
                    <a key={i} href={p.href} className="w-48 shrink-0">
                      <div className="mb-3 aspect-[3/4] overflow-hidden bg-neutral-100">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-neutral-700 line-clamp-2">{p.name}</div>
                        <div className="text-sm font-medium">{p.price}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div> */}
        <div
          className="relative mt-10 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="mb-4 text-xl font-light">Complete your look</h3>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {relatedProducts.map((p, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 md:pl-4 basis-[27%] sm:basis-[45%] md:basis-[30%] lg:basis-[31.8%]"
                >
                  <a
                    href={p.href}
                    className="block transition-all duration-200 hover:opacity-90"
                  >
                    <div className="mb-3 aspect-[4/5] w-full overflow-hidden bg-[#f7f5f2]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="space-y-1 px-2">
                      <div className="text-sm font-semibold text-neutral-900">
                        {p.name.split(" ")[0]}
                      </div>
                      <div className="text-[12px] text-neutral-700 line-clamp-2">
                        {p.name}
                      </div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {p.price}
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={`z-10 border-0 bg-white/80 hover:bg-white text-neutral-800 shadow-sm rounded-full size-7
                      absolute top-1/2 -left-5 -translate-y-15 transition-opacity
                      ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </CarouselPrevious>

            <CarouselNext
              className={`z-10 border-0 bg-white/80 hover:bg-white text-neutral-800 shadow-sm rounded-full size-7
                      absolute top-1/2 -right-5 -translate-y-15 transition-opacity
                      ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              <ChevronRight className="w-4 h-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </motion.div>
      <FullGallery
        open={openGallery}
        setOpen={setOpenGallery}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
};

export default Hero;

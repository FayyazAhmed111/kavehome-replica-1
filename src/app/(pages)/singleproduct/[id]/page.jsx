"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "../../../../components/Hero";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../../components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../components/ui/drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Page({ params }) {

  const productSections = [
    {
      id: "details",
      title: "More details",
      content: `
      <p>The Veliro sofa combines the timeless elegance of mid-20th century lines with new proportions, designed to offer maximum comfort in any setting. 
      The velvet upholstery with a washed look and matte finish, made with 20% cotton, is soft and highly resistant to abrasion and light, and is machine washable on a delicate cycle. 
      The fabric comes from a supplier certified under the OEKO-TEX® STANDARD 100 for environmentally safe and responsible production.</p>

      <p>It has a soft seat thanks to the combination of 28kg/m³ Air System foams, with high durability and high recovery, along with down-effect fibre for an enveloping effect and webbing suspension system.
      The backrest and lumbar cushions are filled with down-effect fibre. In addition, the seat, backrest, and lumbar cushion covers are removable for easy cleaning and maintenance.</p>

      <p>The steel legs, with an elegant matte, micro-textured, black powder-coated finish, add stability and a contemporary touch to the piece.
      Produced in Spain, this sofa blends easily into any space thanks to its balanced design and comfortable seat.</p>
      `,
    },
    {
      id: "package",
      title: "Package",
      content: `
      <p><span class="font-semibold">Number of packages:</span> 2</p>
      <p><span class="font-semibold">Package dimensions:</span> Height: 14.50, Width: 14.50, Length: 81.00, Weight: 10.00</p>
      <p><span class="font-semibold">Package dimensions:</span> Height: 109.50, Width: 62.00, Length: 231.00, Weight: 85.30</p>
      `,
    },
    {
      id: "description",
      title: "Description",
      content: `
      <p><span class="font-semibold">Item Code:</span> S81330ZF06</p>
      <p><span class="font-semibold">Colors:</span> Green</p>
      <p><span class="font-semibold">Main color:</span> Green</p>
      <p><span class="font-semibold">Style:</span> Industrial, Heritage</p>
      <p><span class="font-semibold">Season:</span> Timeless</p>
      `,
    },
    {
      id: "dimensions",
      title: "Dimensions",
      content: `
      <p><span class="font-semibold">Height:</span> 96 cm</p>
      <p><span class="font-semibold">Width:</span> 106 cm</p>
      `,
    },
    {
      id: "features",
      title: "Features",
      content: `
      <ul class="list-disc ml-4">
        <li>Soft seat with Air System foams</li>
        <li>Removable seat and back covers</li>
        <li>Steel legs with matte black finish</li>
        <li>OEKO-TEX® certified fabric</li>
        <li>FSC-certified wood structure</li>
      </ul>
      `,
    },
    {
      id: "materials",
      title: "Materials",
      content: `
      <ul class="list-disc ml-4">
        <li>Velvet upholstery (20% cotton)</li>
        <li>Pine wood structure</li>
        <li>Down-effect fibre filling</li>
        <li>Steel legs with powder coating</li>
      </ul>
      `,
    },
    {
      id: "assembly",
      title: "Unpacking Assembly",
      content: `
      <p>Comes semi-assembled. Simply attach the legs and position the cushions. Assembly instructions are included in the package.</p>
      `,
    },
    {
      id: "care",
      title: "Care Warranties",
      content: `
      <p>Machine washable on a delicate cycle. Avoid direct sunlight to prevent color fading. 
      <br />Includes a <span class="font-semibold">2-year limited warranty</span> against manufacturing defects.</p>
      `,
    },
    {
      id: "packaging",
      title: "Packaging",
      content: `
      <p><span class="font-semibold">Minimum access door width (cm):</span> 62</p>
      <p><span class="font-semibold">Packaging materials:</span> 95% Carton-Paper, 5% Polyethylene (PE)</p>
      `,
    },
  ];


  const products = [
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
      alt: "Veliro sofa 1",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1751884145/products/S81380ZF06_1V01.jpg",
      alt: "Veliro sofa 2",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753942711/products/S81330EL39_1V01.jpg",
      alt: "Veliro sofa 3",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753942711/products/S81330EL39_1V01.jpg",
      alt: "Veliro sofa 4",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1756202010/products/S81320ZF06_1V01.jpg",
      alt: "Veliro sofa 5",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1756202015/products/S81320EL39_1V01.jpg",
      alt: "Veliro sofa 6",
    },
  ]

  const recentlyViewedProducts = [
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
      alt: "Veliro sofa 1",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1751884145/products/S81380ZF06_1V01.jpg",
      alt: "Veliro sofa 2",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753942711/products/S81330EL39_1V01.jpg",
      alt: "Veliro bowl",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1753942711/products/S81330EL39_1V01.jpg",
      alt: "Veliro table",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1756202010/products/S81320ZF06_1V01.jpg",
      alt: "Veliro TV console",
    },
    {
      image: "https://d.media.kavehome.com/image/upload/w_600,f_auto/v1756202015/products/S81320EL39_1V01.jpg",
      alt: "Veliro chair",
    },
  ];

  const [openSection, setOpenSection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);


  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  // KaveHome-style subtle scanning bar (fades out quickly)
  const [showScan, setShowScan] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowScan(false), 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <main className=" md:mt-[113px] mt-[104px] grow-1 w-full">
      {/* <div className="fixed inset-x-0 top-0 z-50 h-0.5 overflow-hidden">
        {showScan && (
          <motion.div
            className="h-full w-1/3 bg-black"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
          />
        )}
      </div> */}
      {/*------------- LAtesst hERO SECTION ----------------------*/}
      <Hero
        openSection={openSection}
        setOpenSection={setOpenSection} />



      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row ">
          {/* Left Content */}
          {/* <div className="flex-1 flex flex-col justify-center px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16 xl:px-10"> */}

          <div
            className=" max-w-[50%]  
    flex-1 flex flex-col justify-center
    px-4 py-8 md:px-[120px] md:pb-[72px]
    lg:px-[48px] lg:py-16
    xl:px-[160px]
    2xl:px-[240px]
  "
          >

            <div className="">
              {/* Label */}
              <div className="text-[14px] font-normal font-poppins text-neutral-600  tracking-wide">Collection</div>

              {/* Title */}
              <h2 className="text-4xl font-kave-haffertext md:text-5xl lg:text-[38px] font-light text-neutral-900">Veliro</h2>

              {/* Description */}
              <p className="md:text-[14px] font-normal text-neutral-700  leading-5">A collection that pays homage to the iconic shapes of mid-20th century design, reinterpreted with contemporary proportions and a double seat that invites you to enjoy its comfort. Each piece is capable of transforming any environment with its elegant presence and versatility, becoming the perfect meeting point between classic and modern.</p>

              {/* Products Carousel */}
              <div className="mt-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-3">
                    {products.map((product, idx) => (
                      <CarouselItem
                        key={idx}
                        className="pl-2 md:pl-3 basis-[calc(50%-8px)] sm:basis-[calc(33.333%-8px)] md:basis-[calc(25%-8px)]"
                      >
                        <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 rounded">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.alt}
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious
                    className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -left-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </CarouselPrevious>

                  <CarouselNext
                    className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -right-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </CarouselNext>
                </Carousel>
              </div>

              {/* Discover Button */}
              <div className="pt-4">
                <button className="px-6 py-3 border border-neutral-900 text-neutral-900 font-medium text-sm hover:bg-neutral-900 hover:text-white transition-colors rounded">
                  Discover
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-[50%] overflow-hidden bg-neutral-100">
            <img
              src="https://d.media.kavehome.com/image/upload/w_1600,c_fill,ar_1.5,g_auto,f_auto/v1757402695/entities/collection-images/veliro_main.jpg"
              alt="Veliro collection hero"
              className="w-full h-full  object-cover"
              loading="lazy"
              decoding="async"
            /> 
          </div>
        </div>
      </section>



      {/* About product */}
      <section id="productDetails" className=" xl:mt-[48px] lg:mt-[12px] flex flex-col">
        <div className="bg-neutral-10 px-[24px] py-[72px] md:p-[78px]:p-[80px] xl:py-[128px] xl:px-[160px] 2xl:py-[128px] 2xl:px-[240px]">
          <div className="md:gap-12 md:flex-row flex flex-col  gap-6">
            <section className="md:w-[50%]">
              <h3 className="mb-6 md:text-[32px] text-[26px] font-kave-haffertext">About this product</h3>
              <ul className="mb-4 flex flex-col gap-2 relative text-[12px] text-neutral-700">
                <li className="flex gap-1 relative text-neutral-90 ">
                  <span className="mr-2">•</span>
                  <span>
                    2-seater sofa upholstered in velvet fabric with a washed, matte look, made of 20% cotton, very soft to the touch and highly resistant to abrasion and light. Machine washable on a delicate cycle. Collection produced in Spain.
                  </span>
                </li>
                <li className="flex gap-1 relative text-neutral-90 ">
                  <span className="mr-2">•</span>
                  <span>
                    Soft seat thanks to the blend of 28kg/m3 Air System foams, with high durability and recovery, down-effect fibre and webbing suspension system. The backrest and lumbar cushions are filled with down-effect fibre.
                  </span>
                </li>
                <li className="flex gap-1 relative text-neutral-90 ">
                  <span className="mr-2">•</span>
                  <span>
                    Seat, backrest and lumbar cushion with removable covers. Black steel legs with matte, microtextured, powder-coated finish.
                  </span>
                </li>
                <li className="flex gap-1 relative text-neutral-90 ">
                  <span className="mr-2">•</span>
                  <span>
                    The fabric supplier is OEKO-TEX® STANDARD 100 certified for environmentally safe and responsible production.
                  </span>
                </li>
                <li className="flex gap-1 relative text-neutral-90 ">
                  <span className="mr-2">•</span>
                  <span>
                    FSC Mix Credit certified wood, made with a mixture of materials from FSC-certified forests and FSC-controlled wood.
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <img
                  src="/images/sofa.png"
                  alt="Product dimensions"
                  className="mx-auto w-full max-w-lg"
                />
              </div>
            </section>

            {/*  specs */}
            <section className="md:w-[50%]">

              {/* MORE details? */}

              {/* <div className="border-b border-neutral-30 ">

                <button onClick={() => toggleSection("details")} className="cursor-pointer flex text-[14px] w-full items-center font-normal justify-between py-1.5  text-left text-neutral-900 ">
                  <span>{openSection === "details" ? <span className="font-semibold">More Details</span> : <span>More Details</span>}</span>
                  <span className="text-[24px] font-extralight text-neutral-40">
                    {openSection === "details" ? "−" : "+"}
                  </span>
                </button>

                {openSection === "details" && (
                  <div className="mt-2  text-[12px] text-neutral-700 space-y-1">
                    The Veliro sofa combines the timeless elegance of mid-20th century lines with new proportions, designed to offer maximum comfort in any setting. The velvet upholstery with a washed look and matte finish, made with 20% cotton, is soft and highly resistant to abrasion and light, and is machine washable on a delicate cycle. The fabric comes from a supplier certified under the OEKO-TEX® STANDARD 100 for environmentally safe and responsible production.

                    It has a soft seat thanks to the combination of 28kg/m³ Air System foams, with high durability and high recovery, along with down-effect fibre for an enveloping effect and the webbing suspension system. The backrest cushions and lumbar cushions are filled with down-effect fibre. In addition, the seat, backrest and lumbar cushion covers are removable for easy cleaning and maintenance. The internal structure, made from pine wood, is FSC Mix Credit certified, made with a mix of materials from FSC-certified forests and FSC-controlled wood.

                    The steel legs, with an elegant matte, micro-textured, black powder-coated finish, add stability and a contemporary touch to the piece. Produced in Spain, this sofa is a multi-functional piece that blends easily into any space thanks to its balanced design and its seat, created to provide high levels of comfort and adapt to different lifestyles.
                  </div>
                )}
              </div> */}
              {productSections.map((section) => (
                <div key={section.id} className="border-b border-neutral-30">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="cursor-pointer flex text-[14px] w-full items-center font-normal justify-between py-1.5  text-left text-neutral-900 "
                  >
                    <span>
                      {openSection === section.id ? (
                        <span className="font-semibold">{section.title}</span>
                      ) : (
                        <span>{section.title}</span>
                      )}
                    </span>
                    <span className="text-[24px] font-extralight text-neutral-40">
                      {openSection === section.id ? "−" : "+"}
                    </span>
                  </button>

                  {openSection === section.id && (
                    <div
                      className="mt-2 mb-6 text-[12px] text-neutral-700 space-y-1"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
              ))}
              {/* Package */}
              {/* <div className="border-b border-neutral-30 ">
                <button onClick={() => toggleSection("package")} className="cursor-pointer flex text-[14px] w-full items-center font-normal justify-between py-1.5  text-left text-neutral-900 ">
                  <span>{openSection === "package" ? <span className="font-semibold">Package</span> : <span>Package</span>}</span>
                  <span className="text-[24px] font-extralight text-neutral-40">
                    {openSection === "package" ? "−" : "+"}
                  </span>
                </button>

                {openSection === "package" && (
                  <div className="mt-2 text-[12px] text-neutral-700 space-y-1">
                    , with an elegant matte, micro-textured, black powder-coated finish, add stability and a contemporary touch to the piece. Produced in Spain, this sofa is a multi-functional piece that blends easily into any space thanks to its balanced design and its seat, created to provide high levels of comfort and adapt to different lifestyles.
                  </div>
                )}
              </div> */}


            </section>

          </div>
        </div>
      </section>





      {/* -------------------- Recently Viewed Section -------------------- */}
      <section
        className="
    lg:px-6 lg:pt-12 lg:pb-8 p-0 w-full
  "
      >
        <h3 className="text-[18px] font-medium text-neutral-900 mb-6">
          Recently viewed
        </h3>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-3">
              {recentlyViewedProducts.map((product, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-2 md:pl-3 basis-[calc(50%-8px)] sm:basis-[calc(33.333%-8px)] md:basis-[calc(20%-8px)]"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-[#f9f7f4]">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious
              className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -left-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </CarouselPrevious>

            <CarouselNext
              className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -right-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
              <ChevronRight className="w-4 h-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </section>



      {/* -------------------- Our Furniture in Your Home Section -------------------- */}
      <section className="w-full bg-white py-12">
        <div
          className="
      w-full text-center
    "
        >
          <h3 className="text-[18px] md:text-[20px] font-medium text-neutral-900 mb-2">
            Our furniture in your home
          </h3>
          <p className="text-[13px] text-neutral-500 mb-6">
            Mention us, tag us or use the hashtag{" "}
            <span className="text-neutral-900 font-medium">KaveHome</span> in your posts
            and you could appear here.
          </p>

          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-3">
                {[
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRWjBoMVUxQkVTWFpUTHc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 1",
                  },
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRVjFKS1RWaEVUa013THc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 2",
                  },
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRVUdNM00wTnBUbWxsTHc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 3",
                  },
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRVWxkTFJqUnFRMHcxTHc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 4",
                  },
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRVUVFMU9VVnBRWGMwTHc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 5",
                  },
                  {
                    image:
                      "https://cdn.flbx.io/image/eyJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMMFJRVERVeldFNXBSVWx0THc9PS8wIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
                    alt: "KaveHome setup 6",
                  },
                ].map((item, idx) => (
                  <CarouselItem
                    key={idx}
                    className="pl-2 md:pl-3 basis-[calc(40%-8px)] sm:basis-[calc(28%-8px)] md:basis-[calc(18%-8px)]"
                  >
                    <div className="aspect-[4/4] w-full overflow-hidden bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls */}
              <CarouselPrevious
                className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -left-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </CarouselPrevious>

              <CarouselNext
                className={`z-10 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm rounded-full size-8 absolute top-1/2 -right-5 -translate-y-1/2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                <ChevronRight className="w-4 h-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </section>





      {/* Spacer */}
      <div className="h-8" />
    </main >
  );
}

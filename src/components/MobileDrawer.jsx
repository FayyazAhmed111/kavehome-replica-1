"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { NAV_JSON } from "@/data/navData";
import Image from "next/image";
import { SliderInspiration } from "./SliderSection";
import { ChevronDown } from "lucide-react";

export default function MobileDrawer({ drawerOpen, setDrawerOpen }) {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

    const productColumns = NAV_JSON.products.columns;

    const slideIn = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { duration: 0.35, ease: "easeOut" } },
        exit: { x: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
    };

    const handleGoBack = () => {
        setActiveCategory(null);
        setActiveSection(null);
    };

    useEffect(() => {
        if (drawerOpen) {
            document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        };
    }, [drawerOpen]);


    

    return (
        <AnimatePresence>
            {drawerOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        onClick={() => setDrawerOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-40"
                    />

                    {/* MAIN DRAWER */}
                    <motion.aside
                        variants={slideIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed left-0 top-0 h-screen w-full bg-white shadow-2xl z-50 overflow-y-auto  scroll-smooth flex flex-col font-kave-haffertext"
                    >
                        {/* ================= LEVEL 1 ================= */}
                        {!activeCategory && !activeSection && (
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col  mb-6 px-6 ">

                                    <button className="ml-auto mt-7 cursor-pointer" onClick={() => setDrawerOpen(false)}>
                                        <TfiClose size={20} className="text-black/80" />
                                    </button>
                                    <a href="/en/en" className="flex mt-6">
                                        <Image
                                            src="/images/kavhome-logoo.png"
                                            width={180}
                                            height={60}
                                            alt="Kave Home logo"
                                            className="object-contain"
                                        />
                                    </a>
                                </div>

                                {/* Top sections */}
                                <div className="flex flex-col px-6  gap-1 text-[20px] font-medium text-black/80 ">
                                    <button onClick={() => setActiveSection("highlights")} className="flex justify-between hover:text-black">
                                        Highlights 
                                    </button>
                                    <button onClick={() => setActiveSection("inspiration")} className="flex justify-between hover:text-black">
                                        Inspiration
                                    </button>
                                    <button onClick={() => setActiveSection("gallery")} className="flex justify-between hover:text-black">
                                        Kave Gallery
                                    </button>
                                    <a href="#" className="hover:text-black">Professionals</a>
                                </div>

                                <hr className="my-4 w-full border-black/10" />

                                {/* Product Categories */}
                                <ul className="flex flex-col gap-1 px-6 text-[18px] text-black/90 font-normal">
                                    {productColumns.map((col) => (
                                        <li key={col.title}>
                                            <button
                                                onClick={() => setActiveCategory(col)}
                                                className="group flex justify-between w-full text-left hover:text-black"
                                            >
                                                {col.title}
                                                <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {/* Footer */}
                                <div className="mt-auto pt-6 text-[14px] px-6 text-black/80 leading-relaxed">
                                    <a href="#" className="block hover:text-black">
                                        Our stores
                                    </a>
                                    <a href="/about" className="block hover:text-black">
                                        About us
                                    </a>
                                    <a href="#" className="block hover:text-black">
                                        Responsible practices
                                    </a>
                                    <a href="#" className="block hover:text-black">
                                        FAQs
                                    </a>
                                    <a href="/accounts/dashboard" className="hover:text-black">
                                        My account
                                    </a>
                                    <div className="pt-3 mb-1 mt-4 text-black flex gap-2 text-[12px] items-center">
                                        English <ChevronDown className="text-[#bfbfbf]" size={24} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= LEVEL 2: PRODUCTS ================= */}
                        {activeCategory && (
                            <motion.div
                                key={activeCategory.title}
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-0 w-full h-full bg-white p-6 overflow-y-auto"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={handleGoBack}
                                        className="flex items-center gap-2 text-[16px] text-black/80 hover:text-black"
                                    >
                                        <FiChevronLeft /> Go back
                                    </button>
                                    <button onClick={() => setDrawerOpen(false)}>
                                        <TfiClose size={18} className="text-black/80" />
                                    </button>
                                </div>

                                <h3 className="text-[32px] font-normal mb-6 tracking-tight text-black">
                                    {activeCategory.title}
                                </h3>

                                <ul className="space-y-1 text-[16px] text-black/90">
                                    {activeCategory.items.map((i) => (
                                        <li key={i.label}>
                                            <a href={i.href} className="block hover:text-black">
                                                {i.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* ================= LEVEL 2: HIGHLIGHTS ================= */}
                        {activeSection === "highlights" && (
                            <motion.div
                                key="highlights"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-0 w-full h-full bg-white p-6 overflow-y-auto"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={handleGoBack}
                                        className="flex items-center gap-2 text-[16px] text-black/80 hover:text-black"
                                    >
                                        <FiChevronLeft /> Go back
                                    </button>
                                    <button onClick={() => setDrawerOpen(false)}>
                                        <TfiClose size={18} className="text-black/80" />
                                    </button>
                                </div>

                                <h3 className="text-[32px] font-normal mb-6 tracking-tight text-black">
                                    Highlights
                                </h3>
                                <ul className="space-y-2 text-[16px] text-black/90">
                                    {NAV_JSON.highlights.map((i) => (
                                        <li key={i.label}>
                                            <a href={i.href} className="hover:text-black">
                                                {i.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* ================= LEVEL 2: KAVE GALLERY ================= */}
                        {activeSection === "gallery" && (
                            <motion.div
                                key="gallery"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-0 w-full h-full bg-white p-6 overflow-y-auto"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={handleGoBack}
                                        className="flex items-center gap-2 text-[16px] text-black/80 hover:text-black"
                                    >
                                        <FiChevronLeft /> Go back
                                    </button>
                                    <button onClick={() => setDrawerOpen(false)}>
                                        <TfiClose size={18} className="text-black/80" />
                                    </button>
                                </div>

                                <h3 className="text-[32px] font-normal mb-6 tracking-tight text-black">
                                    Kave Gallery
                                </h3>
                                <ul className="space-y-2 text-[16px] text-black/90">
                                    {(NAV_JSON?.inspiration?.gallery || []).map((i) => (
                                        <li key={i.label}>
                                            <a href={i.href} className="hover:text-black">
                                                {i.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* ================= LEVEL 2: INSPIRATION ================= */}
                        {activeSection === "inspiration" && (
                            <motion.div
                                key="inspiration"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-0 w-full h-full bg-white p-6 overflow-y-auto"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={handleGoBack}
                                        className="flex items-center gap-2 text-[16px] text-black/80 hover:text-black"
                                    >
                                        <FiChevronLeft /> Go back
                                    </button>
                                    <button onClick={() => setDrawerOpen(false)}>
                                        <TfiClose size={18} className="text-black/80" />
                                    </button>
                                </div>

                                <h3 className="text-[32px] font-normal mb-6 tracking-tight text-black">
                                    Inspiration
                                </h3>

                                {/* Trending now */}
                                <SliderInspiration
                                    title="Trending now"
                                    items={(NAV_JSON?.inspiration?.trending || []).slice(0, 4)}
                                />

                                {/* Our favourites */}
                                <SliderInspiration
                                    title="Our favourites"
                                    items={NAV_JSON?.inspiration?.favourites || []}
                                />

                                {/* Kave Gallery */}
                                <SliderInspiration
                                    title="Kave Gallery"
                                    items={NAV_JSON?.inspiration?.gallery || []}
                                    rightLink={{ label: "Discover", href: "/en/en/kave-gallery" }}
                                />
                            </motion.div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

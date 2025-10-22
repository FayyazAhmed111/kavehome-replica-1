"use client";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SliderInspiration } from "./SliderSection";
import { NAV_JSON } from "@/data/navData";

export default function DesktopDrawer({
    drawerOpen,
    setDrawerOpen,
    activeTab,
    setActiveTab,
    activeColumnIndex,
    setActiveColumnIndex,
}) {
    const productColumns = NAV_JSON.products.columns;
    const activeColumn =
        activeColumnIndex != null ? productColumns[activeColumnIndex] : null;

    const slideIn = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.36 } },
        exit: { x: "-100%", opacity: 0, transition: { type: "tween", duration: 0.28 } },
    };

    const levelVariants = {
        initial: { x: 40, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { duration: 0.28 } },
        exit: { x: -40, opacity: 0, transition: { duration: 0.24 } },
    };

    const thirdLevelVariants = {
        initial: { x: 60, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { duration: 0.28 } },
        exit: { x: -60, opacity: 0, transition: { duration: 0.24 } },
    };

    return (
        <AnimatePresence>
            {drawerOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        onClick={() => {
                            setDrawerOpen(false);
                            setActiveColumnIndex(null);
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-40"
                    />

                    {/* DRAWER */}
                    <motion.aside
                        variants={slideIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed left-0 top-0 bottom-0 h-screen bg-white shadow-2xl flex z-50 font-kave-haffertext"
                    >
                        {/* LEFT PANEL */}
                        <div className="md:w-[440px] w-[360px] border-r border-black/10 px-11 py-8 gap-8 flex flex-col">
                            <button
                                onClick={() => {
                                    setDrawerOpen(false);
                                    setActiveColumnIndex(null);
                                }}
                            >
                                <TfiClose size={18} className="text-black/80" />
                            </button>

                            <div className="flex items-center justify-between">
                                <a href="/en/en" className="inline-flex">
                                    <Image
                                        src="/images/kavhome-logoo.png"
                                        width={224}
                                        height={224}
                                        alt="Kave Home logo"
                                        className="object-contain"
                                    />
                                </a>
                            </div>

                            {/* MAIN NAVIGATION TABS */}
                            <div className="mt-1.2 flex flex-col text-lg">
                                {[
                                    { key: "highlights", label: "Highlights" },
                                    { key: "products", label: "Products" },
                                    { key: "inspiration", label: "Inspiration" },
                                    { key: "gallery", label: "Kave Gallery" },
                                    { key: "professionals", label: "Professionals" },
                                ].map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => {
                                            setActiveTab(tab.key);
                                            setActiveColumnIndex(null); 
                                        }}
                                        className={`text-left text-[22px] transition-colors duration-150 ${activeTab === tab.key ? "text-black" : "text-black/60"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* FOOTER LINKS */}
                            <div className="mt-auto mb-8 flex flex-col gap-[3px] text-[14px] font-[450] leading-relaxed">
                                <a href="/en/en/stores/" className="hover:text-black">
                                    Our stores
                                </a>
                                <a href="/en/en/about-us/" className="hover:text-black">
                                    About us
                                </a>
                                <a href="/en/en/kave-cares/" className="hover:text-black">
                                    Responsible practices
                                </a>
                                <a href="https://help.kavehome.com" className="hover:text-black">
                                    FAQs
                                </a>
                                <a href="/en/en/accounts/account/" className="hover:text-black">
                                    My account
                                </a>
                                <div className="pt-3 mb-1 mt-4 text-black flex gap-2 text-[12px] items-center">
                                    English <ChevronDown className="text-[#bfbfbf]" size={24} />
                                </div>
                            </div>
                        </div>

                        {/* MIDDLE PANEL */}
                        <div
                            className={`relative overflow-hidden ${activeTab === "inspiration"
                                    ? "md:w-[40vw] w-[540px]"
                                    : "md:w-[440px] w-[360px]"
                                }`}
                        >
                            <div className="absolute inset-0 font-kave-haffertext">
                                <AnimatePresence mode="wait">
                                    {/* HIGHLIGHTS */}
                                    {activeTab === "highlights" && (
                                        <motion.div
                                            key="highlights"
                                            variants={levelVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            className="px-12 mt-20"
                                        >
                                            <h3 className="text-[32px] mb-6 font-semibold tracking-tight text-black">
                                                Highlights
                                            </h3>
                                            <ul className="flex flex-col gap-4 text-[16px] text-black/80">
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

                                    {/* PRODUCTS */}
                                    {activeTab === "products" && (
                                        <motion.div
                                            key="products"
                                            variants={levelVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            className="px-12 mt-20"
                                        >
                                            <h3 className="text-[32px] mb-6 font-semibold tracking-tight text-black">
                                                Products
                                            </h3>
                                            <ul className="text-[16px] mt-6 text-black/90">
                                                {productColumns.map((col, idx) => (
                                                    <li
                                                        key={col.title}
                                                        className="flex group items-center cursor-pointer"
                                                    >
                                                        <button
                                                            onClick={() => setActiveColumnIndex(idx)} 
                                                            className="w-full flex items-center justify-between py-1.5 hover:text-black"
                                                        >
                                                            {col.title}
                                                            <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {/* INSPIRATION WITH SLIDERS */}
                                    {activeTab === "inspiration" && (
                                        <motion.div
                                            key="inspiration"
                                            variants={levelVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            className="px-12 mt-20 overflow-y-auto h-full"
                                        >
                                            <h3 className="text-[32px] mb-6 font-semibold text-black">
                                                Inspiration
                                            </h3>

                                            <SliderInspiration
                                                title="Trending now"
                                                items={(NAV_JSON?.inspiration?.trending || []).slice(0, 4)}
                                            />

                                            <SliderInspiration
                                                title="Our favourites"
                                                items={NAV_JSON?.inspiration?.favourites || []}
                                            />

                                            <SliderInspiration
                                                title="Kave Gallery"
                                                items={NAV_JSON?.inspiration?.gallery || []}
                                                rightLink={{
                                                    label: "Discover",
                                                    href: "/en/en/kave-gallery",
                                                }}
                                            />
                                        </motion.div>
                                    )}

                                    {/* KAVE GALLERY */}
                                    {activeTab === "gallery" && (
                                        <motion.div
                                            key="gallery"
                                            variants={levelVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            className="px-12 mt-20 overflow-y-auto h-full"
                                        >
                                            <h3 className="text-[32px] mb-6 font-semibold text-black">
                                                Kave Gallery
                                            </h3>
                                            <ul className="space-y-4 text-[16px] text-black/80">
                                                {(NAV_JSON?.inspiration?.gallery || [])
                                                    .slice(0, 12)
                                                    .map((i) => (
                                                        <li key={i.label}>
                                                            <a href={i.href} className="hover:text-black">
                                                                {i.label}
                                                            </a>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* RIGHT PANEL (SUBCATEGORIES) */}
                        {activeTab === "products" && activeColumn && (
                            <div className="md:w-[440px] w-[360px] border-l border-black/10 relative font-kave-haffertext">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeColumn.title}
                                        variants={thirdLevelVariants}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                        className="px-12 h-full mt-20 overflow-y-auto"
                                    >
                                        {/* HEADER WITH BACK BUTTON */}
                                        {/* <div className="flex items-center justify-between mb-6">
                                            <button
                                                onClick={() => setActiveColumnIndex(null)}
                                                className="flex items-center gap-2 text-[16px] text-black/80 hover:text-black"
                                            >
                                                <FiChevronLeft size={20} /> Back
                                            </button>
                                        </div> */}

                                        <div className="flex items-center justify-between">
                                            <h4 className="text-3xl font-normal tracking-tight text-black">
                                                {activeColumn.title}
                                            </h4>
                                            <a
                                                href={activeColumn.seeAll}
                                                className="underline text-[16px] hover:text-black"
                                            >
                                                See all
                                            </a>
                                        </div>

                                        <ul className="mt-8 space-y-2.5 text-[16px] text-black/80">
                                            {activeColumn.items.map((i) => (
                                                <li key={i.label}>
                                                    <a href={i.href} className="hover:text-black">
                                                        {i.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

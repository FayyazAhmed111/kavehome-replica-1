"use client"

import { FiChevronDown } from "react-icons/fi"

export function DesktopMenu({
    isOpen,
    setIsOpen,
    activeCategory,
    setActiveCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    mainMenu,
    categories,
    subcategories,
    footerLinks,
    desktopMenuRef,
}) {
    if (!isOpen) return null

    return (
        <div className="absolute left-0 top-full mt-0 w-screen bg-neutral-00 shadow-lg z-50 max-h-[calc(100vh-80px)] overflow-hidden" ref={desktopMenuRef}>
            <style>{`
        .megamenu-scroll::-webkit-scrollbar { display: none; }
        .megamenu-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            <div className="megamenu-scroll max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div
                        className="grid gap-12"
                        style={{ gridTemplateColumns: selectedSubcategory ? "1fr 1fr 1fr" : "1fr 1fr" }}
                    >
                        {/* Main menu column */}
                        <div>
                            <h3 className="text-neutral-100 font-semibold text-sm mb-6">MENU</h3>
                            <div className="space-y-4">
                                {mainMenu.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setActiveCategory(activeCategory === item ? null : item)}
                                        className="text-neutral-100 font-medium text-sm hover:text-neutral-80 transition flex items-center justify-between w-full"
                                    >
                                        {item}
                                        {item === "Products" && (
                                            <span className={`transform transition ${activeCategory === "Products" ? "rotate-180" : ""}`}>
                                                ▼
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Products column */}
                        {activeCategory === "Products" && (
                            <div>
                                <h3 className="text-neutral-100 font-semibold text-sm mb-6">PRODUCTS</h3>
                                <div className="space-y-3">
                                    {categories.Products.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedSubcategory(selectedSubcategory === category ? null : category)}
                                            className="text-neutral-100 text-sm hover:text-neutral-80 transition flex items-center justify-between w-full group"
                                        >
                                            {category}
                                            {subcategories[category] && (
                                                <span className="text-neutral-80 group-hover:text-neutral-100">›</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Subcategories column */}
                        {activeCategory === "Products" &&
                            selectedSubcategory &&
                            subcategories[selectedSubcategory] && (
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-neutral-100 font-semibold text-sm">
                                            {selectedSubcategory.toUpperCase()}
                                        </h3>
                                        <a href="#" className="text-neutral-100 text-sm hover:text-neutral-80 transition underline">
                                            See all
                                        </a>
                                    </div>
                                    <div className="space-y-3">
                                        {subcategories[selectedSubcategory].map((subcat) => (
                                            <a
                                                key={subcat}
                                                href="#"
                                                className="block text-neutral-100 text-sm hover:text-neutral-80 transition"
                                            >
                                                {subcat}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                    </div>

                    {/* Footer links */}
                    <div className="border-t border-neutral-30 mt-8 pt-8">
                        <div className="grid grid-cols-5 gap-8">
                            {footerLinks.map((link) => (
                                <a key={link} href="#" className="text-neutral-100 text-sm hover:text-neutral-80 transition">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="flex items-center gap-2 text-neutral-100 text-sm hover:text-neutral-80 transition">
                            English
                            <FiChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MobileMenu({
    isOpen,
    onClose,
    activeCategory,
    setActiveCategory,
    categories,
    mainMenu,
    footerLinks,
}) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-40 pt-20 ">
            <div className="absolute inset-0 bg-neutral-100/50" onClick={onClose} />
            <div className="absolute left-0 top-20 bottom-0 w-80 bg-neutral-00 overflow-y-auto">
                <style>{`
          .sidebar-scroll::-webkit-scrollbar { display: none; }
          .sidebar-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

                <div className="sidebar-scroll h-full">
                    <div className="p-6 border-b border-neutral-30">
                        <div className="text-neutral-100 text-xl font-light">Kave Home</div>
                    </div>

                    <div className="p-6 border-b border-neutral-30">
                        <div className="space-y-4">
                            {mainMenu.map((item) => (
                                <div key={item}>
                                    <button
                                        onClick={() => setActiveCategory(activeCategory === item ? null : item)}
                                        className="text-neutral-100 font-medium text-sm hover:text-neutral-80 transition flex items-center justify-between w-full"
                                    >
                                        {item}
                                        {item === "Products" && (
                                            <span className={`transform transition ${activeCategory === "Products" ? "rotate-180" : ""}`}>
                                                ▼
                                            </span>
                                        )}
                                    </button>

                                    {item === "Products" && activeCategory === "Products" && (
                                        <div className="mt-3 ml-4 space-y-2 border-l border-neutral-30 pl-4">
                                            {categories.Products.map((category) => (
                                                <a
                                                    key={category}
                                                    href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                                                    className="block text-neutral-80 text-sm hover:text-neutral-100 transition"
                                                >
                                                    {category}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 border-b border-neutral-30 space-y-3">
                        {footerLinks.map((link) => (
                            <a key={link} href="#" className="block text-neutral-100 text-sm hover:text-neutral-80 transition">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="p-6">
                        <button className="flex items-center gap-2 text-neutral-100 text-sm hover:text-neutral-80 transition">
                            English
                            <FiChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

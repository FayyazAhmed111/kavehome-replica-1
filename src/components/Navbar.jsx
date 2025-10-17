"use client"

import { useState, useRef, useEffect } from "react"
import { FiMenu, FiX, FiSearch, FiChevronDown } from "react-icons/fi"
import { User, Heart, Bag } from "@/components/icons"

const Navbar = () => {
  // state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // refs
  const searchRef = useRef(null)
  const cartRef = useRef(null)
  const accountRef = useRef(null)
  const desktopMenuRef = useRef(null)

  // outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setIsSearchOpen(false)
      if (cartRef.current && !cartRef.current.contains(event.target)) setIsCartOpen(false)
      if (accountRef.current && !accountRef.current.contains(event.target)) setIsAccountOpen(false)
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
        setIsDesktopMenuOpen(false)
        setActiveCategory(null)
        setSelectedSubcategory(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // data
  const mainMenu = ["Highlights", "Products", "Inspiration", "Kave Gallery", "Professionals"]
  const footerLinks = ["Our stores", "About us", "Responsible practices", "FAQs", "My account"]

  // data
  const categories = {
    Products: [
      "Sofas",
      "Chairs",
      "Tables",
      "Furniture",
      "Outdoor",
      "Decoration",
      "Soft furnishings",
      "Lighting",
      "Bedroom furniture",
      "Bathroom",
      "Kitchen",
      "Kids",
      "Teens",
      "Pets",
      "Selected Collection",
      "Gift Card",
    ],
  }

  // data
  const subcategories = {
    Sofas: [
      "Sofas",
      "Corner sofas & chaise longues",
      "Modular sofas",
      "Sofa beds",
      "Armchairs and rocking chairs",
      "Indoor and outdoor sofas",
      "Pouffes and footstools",
      "All sofa collections",
      "Customisation",
      "Material samples",
      "Cleaning and maintenance",
    ],
    Chairs: ["Dining chairs", "Office chairs", "Lounge chairs", "Accent chairs", "Rocking chairs"],
    Tables: ["Dining tables", "Coffee tables", "Side tables", "Desk tables", "Console tables"],
    Furniture: ["Cabinets", "Shelving", "Storage units", "Wardrobes", "Sideboards"],
    Outdoor: ["Garden furniture", "Patio sets", "Outdoor sofas", "Outdoor chairs", "Outdoor tables"],
    Decoration: ["Wall art", "Mirrors", "Vases", "Sculptures", "Decorative objects"],
    "Soft furnishings": ["Cushions", "Throws", "Rugs", "Curtains", "Bedding"],
    Lighting: ["Floor lamps", "Table lamps", "Pendant lights", "Wall lights", "Ceiling lights"],
    "Bedroom furniture": ["Beds", "Wardrobes", "Nightstands", "Dressers", "Bed frames"],
    Bathroom: ["Bathroom cabinets", "Mirrors", "Shelving", "Storage", "Accessories"],
    Kitchen: ["Kitchen tables", "Kitchen chairs", "Kitchen storage", "Kitchen islands", "Bar stools"],
    Kids: ["Kids beds", "Kids furniture", "Kids storage", "Kids desks", "Kids chairs"],
    Teens: ["Teen beds", "Teen desks", "Teen storage", "Teen chairs", "Teen accessories"],
    Pets: ["Pet beds", "Pet furniture", "Pet storage", "Pet accessories"],
  }

  const searchSuggestions = [
    "New Collection | For Every Season",
    "Sofas",
    "Chairs",
    "Tables",
    "Bedroom",
    "Lighting",
    "Decoration and accessories",
  ]



  return (
    <>
      {/* navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50  border-b border-neutral-00/25">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* left */}
            <div className="flex items-center gap-4">
              {/* hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-neutral-00 hover:text-neutral-30 transition"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>

              {/* trigger */}
              <div className="hidden lg:block relative">
                <button
                  onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                  className="text-neutral-00 hover:text-neutral-30 transition flex items-center gap-2"
                  aria-label="Toggle menu"
                >
                  <FiMenu className="w-5 h-5" />
                </button>
              </div>

              {/* logo */}
              <div className="text-neutral-00 text-2xl font-light tracking-wide">Kave Home</div>

              {/* search */}
              <div className="md:flex flex-1 max-w-md mx-8" ref={searchRef}>
                <div className="relative w-full">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-00/50" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setIsSearchOpen(true)
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="w-full bg-neutral-00/10 border border-neutral-00/20 rounded px-4 py-2 pl-10 text-neutral-00 placeholder-neutral-00/50 focus:outline-none focus:border-neutral-00/40 transition"
                  />

                  {/* results */}
                  {isSearchOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-00 rounded shadow-lg z-50 max-h-96 overflow-y-auto">
                      <style>{`
                        .search-scroll::-webkit-scrollbar { display: none; }
                        .search-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                      `}</style>
                      <div className="search-scroll p-6">
                        <div className="space-y-3 mb-6">
                          {searchSuggestions.map((s, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                setSearchQuery(s)
                                setIsSearchOpen(false)
                              }}
                              className="block w-full text-left text-neutral-100 hover:text-neutral-80 transition text-sm"
                            >
                              {s}
                            </button>
                          ))}
                        </div>

                        <div>
                          <h3 className="text-neutral-100 font-semibold text-sm mb-4">YOU MIGHT BE INTERESTED</h3>
                          <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((n) => (
                              <div key={n} className="bg-neutral-10 rounded aspect-square flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-neutral-30 rounded-full mx-auto mb-2" />
                                  <p className="text-xs text-neutral-80">Product {n}</p>
                                  <p className="text-xs font-semibold text-neutral-100">€{(n * 100).toFixed(0)}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-8">
              <div
                className={`hidden lg:flex items-center gap-8 text-neutral-00 text-sm font-light ${isDesktopMenuOpen ? "hidden" : ""
                  }`}
              >
                <a href="/" className="hover:text-neutral-30 transition">New in</a>
                <a href="/category/[id]" className="hover:text-neutral-30 transition">Products</a>
                <a href="/professionals" className="hover:text-neutral-30 transition">Professionals</a>
                <a href="/inspiration" className="hover:text-neutral-30 transition">Inspiration</a>
                <a href="/stores" className="hover:text-neutral-30 transition">Stores</a>
              </div>

              <div className="flex items-center gap-4">
                {/* account */}
                <div className="relative" ref={accountRef}>
                  <button
                    onClick={() => {
                      setIsAccountOpen(!isAccountOpen)
                      setIsCartOpen(false)
                    }}
                    className="text-neutral-00 hover:text-neutral-30 transition"
                    aria-label="Account"
                  >
                    <User />
                  </button>

                  {isAccountOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-neutral-00 rounded shadow-lg z-50">
                      <div className="p-6">
                        <a href="/accounts/login">
                          <button className="w-full bg-neutral-100 text-neutral-00 py-3 rounded font-semibold text-sm hover:bg-neutral-90 transition mb-4">
                            Log in
                          </button>
                        </a>
                        <p className="text-neutral-80 text-sm mb-4">
                          Don't have an account yet?{" "}
                          <a href="/accounts/register" className="text-neutral-100 font-semibold hover:underline">
                            Register
                          </a>
                        </p>
                        <div className="border-t border-neutral-30 pt-4 space-y-3">
                          <a href="#" className="block text-neutral-100 text-sm hover:text-neutral-80 transition">
                            Check my order status
                          </a>
                          <a href="#" className="block text-neutral-100 text-sm hover:text-neutral-80 transition">
                            Contact & Help
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* wishlist */}
                <button className="text-neutral-00 hover:text-neutral-30 transition" aria-label="Wishlist">
                  <Heart />
                </button>

                {/* cart */}
                <div className="relative" ref={cartRef}>
                  <button
                    onClick={() => {
                      setIsCartOpen(!isCartOpen)
                      setIsAccountOpen(false)
                    }}
                    className="text-neutral-00 hover:text-neutral-30 transition"
                    aria-label="Shopping cart"
                  >
                    <Bag />
                  </button>

                  {isCartOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-neutral-00 rounded shadow-lg z-50">
                      <div className="p-6 text-center">
                        <h3 className="text-neutral-100 font-semibold text-lg mb-2">Your shopping bag is empty.</h3>
                        <p className="text-neutral-80 text-sm mb-6">It's shopping time!</p>
                        <p className="text-neutral-80 text-xs mb-6">
                          Are you looking for the products saved in your shopping bag or do you want to start doing it?
                        </p>
                        <a href="/accounts/login">
                          <button className="w-full bg-neutral-100 text-neutral-00 py-3 rounded font-semibold text-sm hover:bg-neutral-90 transition">
                            Log in
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* megamenu */}
        {isDesktopMenuOpen && (
          <div
            ref={desktopMenuRef}
            className="fixed inset-x-0 top-20  bg-neutral-00 border-t border-neutral-30 z-[60] max-h-[calc(100vh-80px)] overflow-hidden"
          >
            <style>{`
              .megamenu-scroll::-webkit-scrollbar { display: none; }
              .megamenu-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div className="megamenu-scroll max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* container */}
              <div className="px-6 sm:px-10 lg:px-16 py-8">
                <div
                  className={`grid gap-12 ${activeCategory === "Products" && selectedSubcategory
                    ? "grid-cols-[320px_360px_1fr]"
                    : activeCategory === "Products"
                      ? "grid-cols-[320px_1fr]"
                      : "grid-cols-[320px]"
                    }`}
                >
                  {/* menu */}
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

                  {/* products */}
                  {activeCategory === "Products" && (
                    <div>
                      <h3 className="text-neutral-100 font-semibold text-sm mb-6">PRODUCTS</h3>
                      <div className="space-y-3">
                        {categories.Products.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedSubcategory(selectedSubcategory === cat ? null : cat)}
                            className="text-neutral-100 text-sm hover:text-neutral-80 transition flex items-center justify-between w-full group"
                          >
                            {cat}
                            {subcategories[cat] && (
                              <span className="text-neutral-80 group-hover:text-neutral-100">›</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* subcats */}
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
                          {subcategories[selectedSubcategory].map((s) => (
                            <a key={s} href="#" className="block text-neutral-100 text-sm hover:text-neutral-80 transition">
                              {s}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* footer */}
                <div className="border-t border-neutral-30 mt-8 pt-8">
                  <div className="grid grid-cols-5 gap-8">
                    {footerLinks.map((link) => (
                      <a key={link} href="#" className="text-neutral-100 text-sm hover:text-neutral-80 transition">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>

                {/* locale */}
                <div className="mt-6">
                  <button className="flex items-center gap-2 text-neutral-100 text-sm hover:text-neutral-80 transition">
                    English
                    <FiChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20">
          <div className="absolute inset-0 bg-neutral-100/50" onClick={() => setIsMenuOpen(false)} />
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
                          {categories.Products.map((cat) => (
                            <a
                              key={cat}
                              href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block text-neutral-80 text-sm hover:text-neutral-100 transition"
                            >
                              {cat}
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
      )}
    </>
  )
}

export default Navbar

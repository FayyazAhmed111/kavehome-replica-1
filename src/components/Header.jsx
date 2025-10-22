import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import {
    FiMenu,
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingBag,
    FiChevronRight,
} from "react-icons/fi";


const Header = ({ setDrawerOpen, setActiveTab, setActiveColumnIndex }) => {
  const [atTop, setAtTop] = useState(true);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

     const pathname = usePathname();
      const isAuthPage = pathname.includes("/accounts/login") || pathname.includes("/accounts/register");
    
    const [hidePromo, setHidePromo] = useState(false);
    const PROMO_SLIDES = [
        { textLeft: "Here to Stay |", textRight: "Discover", href: "/s/selected-collection" },
        { textLeft: "Selected Collection |", textRight: "Discover", href: "/s/selected-collection" },
    ];

    const PRIMARY_LINKS = [
        { label: "New in", href: "/en/en/s/new" },
        { label: "Products", href: "#", isDrawerTab: "products" },
        { label: "Professionals", href: "/en/en/e/professionals" },
        { label: "Inspiration", href: "#", isDrawerTab: "inspiration" },
        { label: "Stores", href: "/en/en/stores/" },
    ];
  
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

    const [promoIdx, setPromoIdx] = useState(0);

      const accountRef = useRef(null);
      const cartRef = useRef(null);
      useOnClickOutside(accountRef, () => setAccountOpen(false));
      useOnClickOutside(cartRef, () => setCartOpen(false));
    
      useEffect(() => {
        const id = setInterval(() => setPromoIdx((i) => (i + 1) % PROMO_SLIDES.length), 3500);
        return () => clearInterval(id);
      }, []);
    
     useEffect(() => {
        const onScroll = () => {
          const y = window.scrollY;
          setAtTop(y < 2);
          setHidePromo(y > 12);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    
 const openDrawerOnTab = (tab) => {
    setActiveTab(tab);
    setActiveColumnIndex(null);
    setDrawerOpen(true);
  };
  return (

      <div className="">
          {/* TOP PROMO STRIP */}
          <AnimatePresence initial={false}>
              {!hidePromo && (
                  <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      className="w-full bg-[#eeebe5] text-[#1c1c1c] text-sm tracking-[0.01em] fixed top-0 left-0 right-0 flex items-center justify-center h-10"
                  >
                      <div className="flex items-center gap-1">
                          <AnimatePresence mode="wait">
                              <motion.a
                                  key={promoIdx}
                                  href={PROMO_SLIDES[promoIdx].href}
                                  className="flex items-center gap-2"
                                  initial={{ y: 12, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -12, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                              >
                                  <span className="font-semibold">{PROMO_SLIDES[promoIdx].textLeft}</span>
                                  <span className="underline">{PROMO_SLIDES[promoIdx].textRight}</span>
                                  <FiChevronRight className="-mr-1" />
                              </motion.a>
                          </AnimatePresence>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>

          {/* MAIN HEADER */}

          <div
              className={`fixed left-0 right-0 
                    ${isAuthPage
                      ? !atTop
                          ? "bg-neutral-10 text-black fill-black"
                          : "bg-transparent text-black fill-black"
                      : !atTop
                          ? "bg-neutral-10 text-black fill-black"
                          : "bg-transparent text-white fill-white"
                  } 
    ${hidePromo ? "top-0" : "top-10"} 
    transition-[top] duration-300`}
          >
              <header
                  className={`border-b ${isAuthPage
                      ? "border-black/10"
                      : !atTop
                          ? "border-black/10"
                          : "border-white/25"
                      }`}
              >


                  <div className="mx-auto px-4 lg:px-10">
                      <div className="h-18 flex items-center justify-between">
                          {/* Left group: hamburger + logo */}
                          <div className="flex  items-center gap-5">
                              <button
                                  aria-label="Open menu"
                                  onClick={() => openDrawerOnTab("highlights")}
                                  className="p-1 -ml-1 cursor-pointer"
                              >
                                  <FiMenu size={22} />
                              </button>
                              <Link href="/" aria-label="Kave Home" className="inline-flex items-center ">
                                  <svg viewBox="0 0 173 25" className="w-[150px] h-[22px] ">
                                      <path d="M0 -0.00012207H3.47478V11.6633L14.0372 -0.00012207H18.6473L10.8374 8.4159L19.6105 24.4444H15.3793L8.39483 11.0699L3.47478 16.4126V24.4444H0V-0.00012207Z"></path>
                                      <path d="M33.8521 14.7715C33.8521 10.6506 31.2718 7.78742 27.6593 7.78742C24.0123 7.78742 21.432 10.6506 21.432 14.7715C21.432 18.8918 24.0123 21.7556 27.6593 21.7556C31.2718 21.7556 33.8521 18.8918 33.8521 14.7715ZM18.0263 14.7715C18.0263 8.73036 21.7764 4.8192 27.1779 4.8192C29.9987 4.8192 32.6484 6.21574 33.8521 8.13629V5.09801H37.2582V24.4443H33.8521V21.4414C32.6484 23.3273 29.9987 24.7238 27.2124 24.7238C21.7764 24.7238 18.0263 20.7777 18.0263 14.7715Z"></path>
                                      <path d="M38.2885 5.09824H41.9355L47.543 20.0097L53.0825 5.09824H56.6259L49.1605 24.4445H45.7543L38.2885 5.09824Z"></path>
                                      <path d="M70.3181 12.6063C70.2491 9.56798 68.1157 7.68282 65.0195 7.68282C61.9919 7.68282 59.8934 9.53366 59.2739 12.6063H70.3181ZM55.6956 14.7717C55.6956 8.9396 59.4461 4.81933 65.0195 4.81933C70.7995 4.81933 74.481 9.3939 73.7584 15.2603H59.0672C59.2739 19.3813 61.5792 21.7904 65.1575 21.7904C67.9093 21.7904 69.8022 20.3585 70.2146 18.2635H73.7238C73.0702 22.07 69.9392 24.724 65.1575 24.724C59.4461 24.724 55.6956 20.603 55.6956 14.7717Z"></path>
                                      <path d="M97.2197 12.746H84.9028V24.4444H81.428V-0.00012207H84.9028V9.70771H97.2197V-0.00012207H100.695V24.4444H97.2197V12.746Z"></path>
                                      <path d="M118.273 14.7715C118.273 10.6506 115.659 7.78742 112.012 7.78742C108.399 7.78742 105.819 10.6506 105.819 14.7715C105.819 18.8918 108.399 21.7556 112.012 21.7556C115.659 21.7556 118.273 18.8918 118.273 14.7715ZM102.378 14.7715C102.378 8.93947 106.438 4.8192 112.012 4.8192C117.62 4.8192 121.679 8.93947 121.679 14.7715C121.679 20.6029 117.62 24.7238 112.012 24.7238C106.438 24.7238 102.378 20.6029 102.378 14.7715Z"></path>
                                      <path d="M123.26 5.09824H126.666V8.10184C127.698 6.18093 129.728 4.81942 132.481 4.81942C135.371 4.81942 137.503 6.32069 138.432 8.86999C139.878 6.35572 142.217 4.81942 144.935 4.81942C148.72 4.81942 151.506 7.54315 151.506 11.5937V24.4445H148.1V12.3969C148.1 9.67316 146.552 7.89202 144.11 7.89202C140.84 7.89202 139.086 11.0347 139.086 16.0986V24.4445H135.68V12.3969C135.68 9.67316 134.132 7.89202 131.69 7.89202C128.42 7.89202 126.666 11.0003 126.666 16.0986V24.4445H123.26V5.09824Z"></path>
                                      <path d="M167.639 12.6063C167.57 9.56798 165.437 7.68282 162.341 7.68282C159.313 7.68282 157.215 9.53366 156.595 12.6063H167.639ZM153.017 14.7717C153.017 8.9396 156.768 4.81933 162.341 4.81933C168.121 4.81933 171.802 9.3939 171.08 15.2603H156.389C156.595 19.3813 158.901 21.7904 162.479 21.7904C165.231 21.7904 167.124 20.3585 167.536 18.2635H171.045C170.392 22.07 167.261 24.724 162.479 24.724C156.768 24.724 153.017 20.603 153.017 14.7717Z"></path>
                                  </svg>
                              </Link>
                              <div className="hidden md:flex flex-1 ml-auto md:ml-0">
                                  <label className={`flex items-center w-[300px] 
                   gap-2 ${!atTop ? "bg-neutral-20" : "border border-white/40 "} px-3 py-2 shadow-[inset_0_1px_0_rgba(0,0,0,.02)]`}>
                                      <FiSearch className="opacity-70 text-[20px]" />
                                      <input
                                          className="w-full font-poppins font-[500] text-white text-[16px] placeholder:text-[#777] outline-none"
                                          placeholder="What are you looking for?"
                                      />
                                  </label>
                              </div>
                          </div>



                          {/* Right: links + icons */}
                          <div className="flex  items-center gap-5">
                              <nav className="hidden lg:flex items-center font-kave-haffertext gap-5 text-[16px] font-normal tracking-normal">
                                  {PRIMARY_LINKS.map((link) => (
                                      <a
                                          key={link.label}
                                          href={link.href}
                                          onClick={(e) => {
                                              if (link.isDrawerTab) {
                                                  e.preventDefault();
                                                  openDrawerOnTab(link.isDrawerTab);
                                              }
                                          }}
                                          className="hover:opacity-80"
                                      >
                                          {link.label}
                                      </a>
                                  ))}
                              </nav>
                              <div className="flex items-center gap-4">
                                  <button aria-label="Search" className="md:hidden p-1">
                                      <FiSearch size={20} />
                                  </button>

                                  {/* Account popover */}
                                  <div className="relative md:ml-6" ref={accountRef}>
                                      <button
                                          aria-label="Account"
                                          className="p-1"
                                          onClick={() => setAccountOpen((v) => !v)}
                                      >
                                          <FiUser size={20} />
                                      </button>
                                      <AnimatePresence>
                                          {accountOpen && (
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
                                      </AnimatePresence>
                                  </div>

                                  {/* Wishlist links to page (no popover) */}
                                  <a aria-label="Wishlist" className="p-1" href="/en/en/wishlists/">
                                      <FiHeart size={20} />
                                  </a>

                                  {/* Cart popover */}
                                  <div className="relative" ref={cartRef}>
                                      <button
                                          aria-label="Cart"
                                          className="p-1"
                                          onClick={() => setCartOpen((v) => !v)}
                                      >
                                          <FiShoppingBag size={20} />
                                      </button>
                                      <AnimatePresence>

                                          {cartOpen && (
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
                                      </AnimatePresence>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>
          </div>
          </div>
)
}

export default Header
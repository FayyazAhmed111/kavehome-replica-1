"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";


// 1) Hardcoded primary links (left-to-right) – editable variable as requested
const PRIMARY_LINKS = [
  { label: "New in", href: "/en/en/s/new" },
  { label: "Products", href: "#", isDrawerTab: "products" },
  { label: "Professionals", href: "/en/en/e/professionals" },
  { label: "Inspiration", href: "#", isDrawerTab: "inspiration" },
  { label: "Stores", href: "/en/en/stores/" },
];

// 2) Simulated API JSON for the drawer – this mirrors your provided HTML structure
const NAV_JSON = {
  highlights: [
    { label: "New in", href: "/en/en/s/new" },
    { label: "Selected Collection", href: "/en/en/s/selected-collection" },
    { label: "For Every Season", href: "/en/en/s/for-every-season" },
    { label: "The Warm Edit", href: "/en/en/s/the-warm-edit" },
    { label: "Kave Home & Nexia", href: "/en/en/s/nexia" },
    { label: "Kave Gallery", href: "/en/en/e/kave-gallery" },
    { label: "Bestsellers", href: "/en/en/s/bestsellers" },
    { label: "In stock", href: "/en/en/s/in-stock" },
  ],
  products: {
    columns: [
      {
        title: "Sofas",
        seeAll: "/en/en/o/sofas",
        items: [
          { label: "Sofas", href: "/en/en/o/sofas" },
          { label: "Corner sofas & chaise longues", href: "/en/en/o/corner-sofas-chaise-longues" },
          { label: "Modular sofas", href: "/en/en/o/modular-sofas" },
          { label: "Sofa beds", href: "/en/en/o/sofa-beds-and-daybeds" },
          { label: "Armchairs and rocking chairs", href: "/en/en/o/armchairs-rocking-chairs" },
          { label: "Indoor and outdoor sofas", href: "/en/en/o/indoor-and-outdoor-sofas" },
          { label: "Pouffes and footstools", href: "/en/en/o/poufs-footrests" },
          { label: "All sofa collections", href: "/en/en/e/sofas-collections" },
          { label: "Customisation", href: "/en/en/customized" },
          { label: "Material samples", href: "/en/en/material-samples" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
        ],
      },
      {
        title: "Chairs",
        seeAll: "/en/en/o/chairs",
        items: [
          { label: "Chairs", href: "/en/en/o/chairs" },
          { label: "Dining chairs", href: "/en/en/o/dining-chairs" },
          { label: "Kitchen chairs", href: "/en/en/o/kitchen-chairs" },
          { label: "Desk chairs", href: "/en/en/o/desk-chairs" },
          { label: "Stools", href: "/en/en/o/bar-stools-chairs" },
          { label: "Benches", href: "/en/en/o/benches" },
          { label: "Indoor and outdoor chairs", href: "/en/en/o/indoor-and-outdoor-chairs" },
          { label: "Shop the look · Chairs and tables", href: "/en/en/s/shop-the-look-chairs-tables" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
        ],
      },
      {
        title: "Tables",
        seeAll: "/en/en/o/tables",
        items: [
          { label: "Tables", href: "/en/en/o/tables" },
          { label: "Dining tables", href: "/en/en/o/dining-tables" },
          { label: "Kitchen tables", href: "/en/en/o/kitchen-tables" },
          { label: "Extendable tables", href: "/en/en/o/extendable-tables" },
          { label: "Round tables", href: "/en/en/o/round-tables" },
          { label: "Bar tables", href: "/en/en/o/bar-tables" },
          { label: "Coffee tables", href: "/en/en/o/coffee-tables" },
          { label: "Side tables", href: "/en/en/o/side-tables" },
          { label: "Indoor and outdoor tables", href: "/en/en/o/indoor-and-outdoor-tables" },
          { label: "Desks", href: "/en/en/o/desks" },
          { label: "Shop the look · Tables and chairs", href: "/en/en/s/shop-the-look-chairs-tables" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
        ],
      },
      {
        title: "Furniture",
        seeAll: "/en/en/o/storage-units",
        items: [
          { label: "Sideboards", href: "/en/en/o/sideboards" },
          { label: "TV Stands", href: "/en/en/o/tv-stands" },
          { label: "Bookcases and cabinets", href: "/en/en/o/bookcases" },
          { label: "Chests of drawers", href: "/en/en/o/chests-drawers" },
          { label: "Bedside tables", href: "/en/en/o/bedside-tables" },
          { label: "Coat racks", href: "/en/en/o/coat-racks" },
          { label: "Console tables", href: "/en/en/o/console-tables" },
          { label: "Shoe racks", href: "/en/en/o/shoe-racks" },
          { label: "Shelves", href: "/en/en/o/shelves" },
          { label: "Hangers", href: "/en/en/o/hangers" },
          { label: "Bathroom furniture", href: "/en/en/o/bathroom-furniture" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
        ],
      },
      {
        title: "Outdoor",
        seeAll: "/en/en/outdoor-furniture",
        items: [
          { label: "Garden chairs", href: "/en/en/o/garden-chairs" },
          { label: "Garden tables", href: "/en/en/o/garden-tables" },
          { label: "Garden sofas", href: "/en/en/o/garden-sofas" },
          { label: "Garden armchairs and pouffes", href: "/en/en/o/garden-armchairs-pouffes" },
          { label: "Garden sets", href: "/en/en/o/garden-sets" },
          { label: "Outdoor stools and benches", href: "/en/en/o/outdoor-stools-benches" },
          { label: "Loungers and Deck chairs", href: "/en/en/o/sun-loungers-deck-chairs" },
          { label: "Hanging chairs", href: "/en/en/o/hanging-chairs" },
          { label: "Outdoor Lighting", href: "/en/en/o/outdoor-lighting" },
          { label: "Outdoor rugs and cushions", href: "/en/en/o/rugs-cushions-accessories" },
          { label: "Outdoor Decor", href: "/en/en/o/outdoor-accessories" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
          { label: "Care guide", href: "/en/en/e/materials-care" },
          { label: "Shop the Look", href: "/en/en/e/shop-the-look-outdoor" },
        ],
      },
      {
        title: "Decoration",
        seeAll: "/en/en/o/decoration-accessories",
        items: [
          { label: "Wall decor", href: "/en/en/o/wall-decor" },
          { label: "Mirrors", href: "/en/en/o/mirrors" },
          { label: "Decoration and accessories", href: "/en/en/o/accessories-deco" },
          { label: "Vases", href: "/en/en/o/vases" },
          { label: "Plants & Pots", href: "/en/en/o/plants-pots" },
          { label: "Air fresheners and fragrances", href: "/en/en/o/air-fresheners-and-fragrances" },
          { label: "Childrens decor", href: "/en/en/o/childrens-decor" },
        ],
      },
      {
        title: "Soft furnishings",
        seeAll: "/en/en/o/soft-furnishings",
        items: [
          { label: "Rugs", href: "/en/en/o/rugs" },
          { label: "Cushions & cushion covers", href: "/en/en/o/cushions-cushion-covers" },
          { label: "Blankets and throws", href: "/en/en/o/throws-blankets-plaids" },
          { label: "Curtains", href: "/en/en/o/curtains" },
          { label: "Bedlinen", href: "/en/en/o/bedlinen" },
          { label: "Table Linens", href: "/en/en/o/table-cloths-napkins-runners" },
          { label: "Towels", href: "/en/en/o/towels" },
          { label: "Chair cushions", href: "/en/en/o/chair-cushions" },
        ],
      },
      {
        title: "Lighting",
        seeAll: "/en/en/o/lighting",
        items: [
          { label: "Lamp shades", href: "/en/en/o/lamp-shades" },
          { label: "Floor lamps", href: "/en/en/o/floor-lamps" },
          { label: "Table lamps", href: "/en/en/o/table-lamps" },
          { label: "Wall lamps", href: "/en/en/o/wall-lamps" },
          { label: "Light shades and accessories", href: "/en/en/o/light-shades-and-accessories" },
          { label: "Work lamps", href: "/en/en/o/desk-lamps" },
          { label: "Bedside table lamps", href: "/en/en/o/bedisde-table-lamps" },
          { label: "Outdoor Lighting", href: "/en/en/o/outdoor-lighting" },
          { label: "Portable lamps", href: "/en/en/o/portable-lamps" },
          { label: "Light bulbs", href: "/en/en/o/light-bulbs" },
          { label: "Nexia & Kave Home", href: "/en/en/s/nexia" },
        ],
      },
      {
        title: "Bedroom furniture",
        seeAll: "/en/en/o/bedroom",
        items: [
          { label: "Beds", href: "/en/en/o/beds" },
          { label: "Mattresses", href: "/en/en/mattresses2" },
          { label: "Headboards", href: "/en/en/o/headboards" },
          { label: "Bedside tables", href: "/en/en/bedside-tables" },
          { label: "Pillows", href: "/en/en/o/bed-pillows" },
          { label: "Quilts and duvets", href: "/en/en/o/quilts-duvets" },
          { label: "Bedlinen", href: "/en/en/o/bedlinen" },
          { label: "Chests of drawers", href: "/en/en/o/chests-drawers" },
          { label: "Benches", href: "/en/en/o/benches" },
          { label: "Cleaning and maintenance", href: "/en/en/o/cleaning-maintenance" },
        ],
      },
      {
        title: "Bathroom",
        seeAll: "/en/en/o/bathroom",
        items: [
          { label: "Bathroom furniture", href: "/en/en/o/bathroom-furniture" },
          { label: "Bathroom accessories", href: "/en/en/o/bathroom-accessories" },
          { label: "Towels", href: "/en/en/o/towels" },
          { label: "Bath mats", href: "/en/en/o/bath-mats" },
          { label: "Bathroom organization", href: "/en/en/o/bathroom-organization" },
          { label: "Laundry baskets", href: "/en/en/o/laundry-baskets" },
          { label: "Bathroom mirrors", href: "/en/en/o/bathroom-mirrors" },
          { label: "Bathroom lamps", href: "/en/en/o/bathroom-lamps" },
        ],
      },
      {
        title: "Kitchen",
        seeAll: "/en/en/kitchen",
        items: [
          { label: "Chopping boards", href: "/en/en/o/chopping-boards" },
          { label: "Table cloths, napkin & runners", href: "/en/en/o/table-cloths-napkins-runners" },
          { label: "Cups, bowls & mugs", href: "/en/en/o/cups-bowls-mugs" },
          { label: "Trays", href: "/en/en/o/trays" },
          { label: "Dinnerware sets", href: "/en/en/o/dinnerware-sets" },
          { label: "Glassware", href: "/en/en/o/glassware" },
          { label: "Bottles and jars", href: "/en/en/o/bottles-and-jars" },
          { label: "Cutlery", href: "/en/en/o/cutlery" },
          { label: "Accessories", href: "/en/en/o/accessories-kitchen-b" },
        ],
      },
      {
        title: "Kids",
        seeAll: "/en/en/o/kids",
        items: [
          { label: "Baby furniture", href: "/en/en/o/baby-furniture" },
          { label: "Childrens decor", href: "/en/en/o/childrens-decor" },
          { label: "Kids accessories", href: "/en/en/o/kids-accessories" },
          { label: "Newborn", href: "/en/en/o/newborn" },
        ],
      },
      {
        title: "Teens",
        seeAll: "/en/en/o/teens",
        items: [
          { label: "Teens furniture", href: "/en/en/o/teens-furniture" },
          { label: "Textiles for teens", href: "/en/en/o/textiles-for-teens" },
          { label: "Lighting for teens", href: "/en/en/o/lighting-for-teens" },
          { label: "Room décor and accessories for teens", href: "/en/en/o/room-decor-accessories-teens" },
        ],
      },
      { title: "Pets", seeAll: "/en/en/pets", items: [] },
      { title: "Selected Collection", seeAll: "/en/en/s/selected-collection", items: [] },
      { title: "Gift Card", seeAll: "/en/en/gift-card/", items: [] },
    ],
  },
  inspiration: {
    trending: [
      { label: "Here to Stay", href: "/en/en/e/here-to-stay" },
      { label: "For Every Season", href: "/en/en/s/for-every-season" },
      { label: "Selected Collection", href: "/en/en/s/selected-collection" },
      { label: "Kave Gallery · Our art gallery", href: "/en/en/e/kave-gallery" },
    ],
    favourites: [
      { label: "Melvar Collection", href: "/en/en/c/melvar" },
      { label: "Bosca Collection", href: "/en/en/c/bosca" },
      { label: "Granite Collection", href: "/en/en/c/granite" },
      { label: "Somar Collection", href: "/en/en/c/somar" },
      { label: "Norlen", href: "/en/en/c/norlen" },
      { label: "Veliro", href: "/en/en/c/veliro" },
      { label: "Tarsel", href: "/en/en/c/tarsel" },
      { label: "Zavira", href: "/en/en/c/zavira" },
      { label: "Nuvira", href: "/en/en/c/nuvira" },
      { label: "Litto modular shelves", href: "/en/en/litto-modular-shelves/" },
    ],
    gallery: [
      { label: "Patricia Varea Milan", href: "/en/en/kave-gallery/artist/vareamilan" },
      { label: "Ellande Jaureguiberry", href: "/en/en/kave-gallery/artist/ellande" },
      { label: "Bullarsson", href: "/en/en/kave-gallery/artist/bullarsson" },
      { label: "Paula Cabral", href: "/en/en/kave-gallery/artist/paulacabral" },
      { label: "Blannim", href: "/en/en/kave-gallery/artist/blancani" },
      { label: "Rita Paupério", href: "/en/en/kave-gallery/artist/ritapau" },
      { label: "De La Jardin", href: "/en/en/kave-gallery/artist/de_la_jardin" },
      { label: "Teresa Berger", href: "/en/en/kave-gallery/artist/teresaberger" },
      { label: "Areté d'Empordà", href: "/en/en/kave-gallery/artist/arete" },
      { label: "Mariana Baertl", href: "/en/en/kave-gallery/artist/mariana" },
      { label: "Andrea Santamarina", href: "/en/en/kave-gallery/artist/santamarina" },
      { label: "Sevensa Estudio", href: "/en/en/kave-gallery/artist/sevensa" },
      { label: "Justino del Casar", href: "/en/en/kave-gallery/artist/justino_casa" },
      { label: "Carmen Martini", href: "/en/en/kave-gallery/artist/carmen_marti" },
      { label: "Javier Mariscal", href: "/en/en/kave-gallery/artist/mariscal" },
      { label: "Paul Anton", href: "/en/en/kave-gallery/artist/paul_anton" },
      { label: "Gabriela Meunié", href: "/en/en/kave-gallery/artist/gabriela_meu" },
      { label: "Bleg", href: "/en/en/kave-gallery/artist/bleg___pen" },
      { label: "Regina Dejiménez", href: "/en/en/kave-gallery/artist/regina" },
    ],
  },
};

// Utility: useOnClickOutside
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

// Promo slider items
const PROMO_SLIDES = [
  { textLeft: "Here to Stay |", textRight: "Discover", href: "/s/selected-collection" },
  { textLeft: "Selected Collection |", textRight: "Discover", href: "/s/selected-collection" },
];

export default function KaveHomeHeaderReplica() {
  // Promo bar visibility based on scroll
  const [hidePromo, setHidePromo] = useState(false);
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 2);
      setHidePromo(y > 12); // hide once scrolled a bit
      last = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Promo auto-slide index
  const [promoIdx, setPromoIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPromoIdx((i) => (i + 1) % PROMO_SLIDES.length), 3500);
    return () => clearInterval(id);
  }, []);

  // Drawer state: which main tab? which column? (for 3-level)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("highlights");
  const [activeColumnIndex, setActiveColumnIndex] = useState(null); // 2nd level selection

  const openDrawerOnTab = (tab) => {
    setActiveTab(tab);
    setActiveColumnIndex(null);
    setDrawerOpen(true);
  };

  // Account & Cart popovers
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const accountRef = useRef(null);
  const cartRef = useRef(null);
  useOnClickOutside(accountRef, () => setAccountOpen(false));
  useOnClickOutside(cartRef, () => setCartOpen(false));

  // Derived data for products columns
  const productColumns = NAV_JSON.products.columns;
  const activeColumn =
    activeColumnIndex != null ? productColumns[activeColumnIndex] : null;

  // Motion variants
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
    <div className="relative z-[60]">
      {/* TOP PROMO STRIP (beige), slides text, disappears on scroll) */}
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

      {/* MAIN HEADER (sticky) */}
      <div
        className={`fixed left-0 right-0 ${hidePromo ? "top-0" : "top-10"} transition-[top] duration-300`}
      >
        <header className={`bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 border-b border-black/10`}>
          <div className="mx-auto px-4 lg:px-6">
            <div className="h-14 flex items-center justify-between">
              {/* Left group: hamburger + logo */}
              <div className="flex items-center gap-5">
                <button
                  aria-label="Open menu"
                  onClick={() => openDrawerOnTab("highlights")}
                  className="p-1 -ml-1 text-[#1c1c1c]"
                >
                  <FiMenu size={22} />
                </button>
                <a href="/en/en" aria-label="Kave Home" className="inline-flex items-center">
                  {/* Inline SVG logo from the provided markup */}
                  <svg viewBox="0 0 173 25" className="w-[150px] h-[22px] fill-black">
                    <path d="M0 -0.00012207H3.47478V11.6633L14.0372 -0.00012207H18.6473L10.8374 8.4159L19.6105 24.4444H15.3793L8.39483 11.0699L3.47478 16.4126V24.4444H0V-0.00012207Z"></path>
                    <path d="M33.8521 14.7715C33.8521 10.6506 31.2718 7.78742 27.6593 7.78742C24.0123 7.78742 21.432 10.6506 21.432 14.7715C21.432 18.8918 24.0123 21.7556 27.6593 21.7556C31.2718 21.7556 33.8521 18.8918 33.8521 14.7715ZM18.0263 14.7715C18.0263 8.73036 21.7764 4.8192 27.1779 4.8192C29.9987 4.8192 32.6484 6.21574 33.8521 8.13629V5.09801H37.2582V24.4443H33.8521V21.4414C32.6484 23.3273 29.9987 24.7238 27.2124 24.7238C21.7764 24.7238 18.0263 20.7777 18.0263 14.7715Z"></path>
                    <path d="M38.2885 5.09824H41.9355L47.543 20.0097L53.0825 5.09824H56.6259L49.1605 24.4445H45.7543L38.2885 5.09824Z"></path>
                    <path d="M70.3181 12.6063C70.2491 9.56798 68.1157 7.68282 65.0195 7.68282C61.9919 7.68282 59.8934 9.53366 59.2739 12.6063H70.3181ZM55.6956 14.7717C55.6956 8.9396 59.4461 4.81933 65.0195 4.81933C70.7995 4.81933 74.481 9.3939 73.7584 15.2603H59.0672C59.2739 19.3813 61.5792 21.7904 65.1575 21.7904C67.9093 21.7904 69.8022 20.3585 70.2146 18.2635H73.7238C73.0702 22.07 69.9392 24.724 65.1575 24.724C59.4461 24.724 55.6956 20.603 55.6956 14.7717Z"></path>
                    <path d="M97.2197 12.746H84.9028V24.4444H81.428V-0.00012207H84.9028V9.70771H97.2197V-0.00012207H100.695V24.4444H97.2197V12.746Z"></path>
                    <path d="M118.273 14.7715C118.273 10.6506 115.659 7.78742 112.012 7.78742C108.399 7.78742 105.819 10.6506 105.819 14.7715C105.819 18.8918 108.399 21.7556 112.012 21.7556C115.659 21.7556 118.273 18.8918 118.273 14.7715ZM102.378 14.7715C102.378 8.93947 106.438 4.8192 112.012 4.8192C117.62 4.8192 121.679 8.93947 121.679 14.7715C121.679 20.6029 117.62 24.7238 112.012 24.7238C106.438 24.7238 102.378 20.6029 102.378 14.7715Z"></path>
                    <path d="M123.26 5.09824H126.666V8.10184C127.698 6.18093 129.728 4.81942 132.481 4.81942C135.371 4.81942 137.503 6.32069 138.432 8.86999C139.878 6.35572 142.217 4.81942 144.935 4.81942C148.72 4.81942 151.506 7.54315 151.506 11.5937V24.4445H148.1V12.3969C148.1 9.67316 146.552 7.89202 144.11 7.89202C140.84 7.89202 139.086 11.0347 139.086 16.0986V24.4445H135.68V12.3969C135.68 9.67316 134.132 7.89202 131.69 7.89202C128.42 7.89202 126.666 11.0003 126.666 16.0986V24.4445H123.26V5.09824Z"></path>
                    <path d="M167.639 12.6063C167.57 9.56798 165.437 7.68282 162.341 7.68282C159.313 7.68282 157.215 9.53366 156.595 12.6063H167.639ZM153.017 14.7717C153.017 8.9396 156.768 4.81933 162.341 4.81933C168.121 4.81933 171.802 9.3939 171.08 15.2603H156.389C156.595 19.3813 158.901 21.7904 162.479 21.7904C165.231 21.7904 167.124 20.3585 167.536 18.2635H171.045C170.392 22.07 167.261 24.724 162.479 24.724C156.768 24.724 153.017 20.603 153.017 14.7717Z"></path>
                  </svg>
                </a>
                {/*search (desktop) */}
              <div className="hidden md:flex flex-1 max-w-[520px]">
                <label className="w-full">
                  <div className="flex items-center gap-2 border border-black/15 rounded-full px-4 py-2 shadow-[inset_0_1px_0_rgba(0,0,0,.02)]">
                    <FiSearch className="opacity-70" />
                    <input
                      className="w-full text-sm placeholder:text-[#777] outline-none"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </label>
              </div>
              </div>

              

              {/* Right: links + icons */}
              <div className="flex items-center gap-5">
                <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold tracking-[0.005em]">
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
                  <div className="relative" ref={accountRef}>
                    <button
                      aria-label="Account"
                      className="p-1"
                      onClick={() => setAccountOpen((v) => !v)}
                    >
                      <FiUser size={20} />
                    </button>
                    <AnimatePresence>
                      {accountOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute right-0 mt-3 w-[300px] bg-white shadow-xl border border-black/10 rounded-sm p-4"
                        >
                          <a
                            href="#login"
                            className="block w-full text-center font-semibold bg-[#2c2e29] text-white rounded-sm py-2"
                          >
                            Log in
                          </a>
                          <div className="text-sm text-[#555] mt-3">
                            Don't have an account yet? <a className="underline" href="#register">Register</a>
                          </div>
                          <hr className="my-3" />
                          <div className="flex flex-col gap-2 text-sm">
                            <a href="/en/en/find-order/">Check my order status</a>
                            <a href="https://help.kavehome.com">Contact & Help</a>
                          </div>
                        </motion.div>
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
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute right-0 mt-3 w-[360px] bg-white shadow-xl border border-black/10 rounded-sm p-4"
                        >
                          <div className="text-center">
                            <h3 className="text-xl font-semibold">Your shopping bag is empty.</h3>
                            <p className="text-[#555] mt-1">It's shopping time!</p>
                            <hr className="my-4" />
                            <a href="#login" className="inline-flex items-center justify-center bg-black text-white px-6 py-2 rounded-sm font-semibold">Log in</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* OVERLAY + DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Dim overlay */}
            <motion.div
              onClick={() => setDrawerOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70"
            />

            {/* Drawer shell */}
            <motion.aside
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-0 top-0 bottom-0 w-[90vw] max-w-[760px] bg-white shadow-2xl flex"
            >
              {/* Column 1 – left rail */}
              <div className="w-[320px] border-r border-black/10 p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <a href="/en/en" className="inline-flex">
                    <svg viewBox="0 0 173 25" className="w-[150px] h-[22px] fill-black">
                      <path d="M0 -0.00012207H3.47478V11.6633L14.0372 -0.00012207H18.6473L10.8374 8.4159L19.6105 24.4444H15.3793L8.39483 11.0699L3.47478 16.4126V24.4444H0V-0.00012207Z"></path>
                      <path d="M33.8521 14.7715C33.8521 10.6506 31.2718 7.78742 27.6593 7.78742C24.0123 7.78742 21.432 10.6506 21.432 14.7715C21.432 18.8918 24.0123 21.7556 27.6593 21.7556C31.2718 21.7556 33.8521 18.8918 33.8521 14.7715ZM18.0263 14.7715C18.0263 8.73036 21.7764 4.8192 27.1779 4.8192C29.9987 4.8192 32.6484 6.21574 33.8521 8.13629V5.09801H37.2582V24.4443H33.8521V21.4414C32.6484 23.3273 29.9987 24.7238 27.2124 24.7238C21.7764 24.7238 18.0263 20.7777 18.0263 14.7715Z"></path>
                      <path d="M38.2885 5.09824H41.9355L47.543 20.0097L53.0825 5.09824H56.6259L49.1605 24.4445H45.7543L38.2885 5.09824Z"></path>
                      <path d="M70.3181 12.6063C70.2491 9.56798 68.1157 7.68282 65.0195 7.68282C61.9919 7.68282 59.8934 9.53366 59.2739 12.6063H70.3181ZM55.6956 14.7717C55.6956 8.9396 59.4461 4.81933 65.0195 4.81933C70.7995 4.81933 74.481 9.3939 73.7584 15.2603H59.0672C59.2739 19.3813 61.5792 21.7904 65.1575 21.7904C67.9093 21.7904 69.8022 20.3585 70.2146 18.2635H73.7238C73.0702 22.07 69.9392 24.724 65.1575 24.724C59.4461 24.724 55.6956 20.603 55.6956 14.7717Z"></path>
                      <path d="M97.2197 12.746H84.9028V24.4444H81.428V-0.00012207H84.9028V9.70771H97.2197V-0.00012207H100.695V24.4444H97.2197V12.746Z"></path>
                      <path d="M118.273 14.7715C118.273 10.6506 115.659 7.78742 112.012 7.78742C108.399 7.78742 105.819 10.6506 105.819 14.7715C105.819 18.8918 108.399 21.7556 112.012 21.7556C115.659 21.7556 118.273 18.8918 118.273 14.7715ZM102.378 14.7715C102.378 8.93947 106.438 4.8192 112.012 4.8192C117.62 4.8192 121.679 8.93947 121.679 14.7715C121.679 20.6029 117.62 24.7238 112.012 24.7238C106.438 24.7238 102.378 20.6029 102.378 14.7715Z"></path>
                      <path d="M123.26 5.09824H126.666V8.10184C127.698 6.18093 129.728 4.81942 132.481 4.81942C135.371 4.81942 137.503 6.32069 138.432 8.86999C139.878 6.35572 142.217 4.81942 144.935 4.81942C148.72 4.81942 151.506 7.54315 151.506 11.5937V24.4445H148.1V12.3969C148.1 9.67316 146.552 7.89202 144.11 7.89202C140.84 7.89202 139.086 11.0347 139.086 16.0986V24.4445H135.68V12.3969C135.68 9.67316 134.132 7.89202 131.69 7.89202C128.42 7.89202 126.666 11.0003 126.666 16.0986V24.4445H123.26V5.09824Z"></path>
                      <path d="M167.639 12.6063C167.57 9.56798 165.437 7.68282 162.341 7.68282C159.313 7.68282 157.215 9.53366 156.595 12.6063H167.639ZM153.017 14.7717C153.017 8.9396 156.768 4.81933 162.341 4.81933C168.121 4.81933 171.802 9.3939 171.08 15.2603H156.389C156.595 19.3813 158.901 21.7904 162.479 21.7904C165.231 21.7904 167.124 20.3585 167.536 18.2635H171.045C170.392 22.07 167.261 24.724 162.479 24.724C156.768 24.724 153.017 20.603 153.017 14.7717Z"></path>
                    </svg>
                  </a>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 -mr-2"
                    aria-label="Close menu"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-3 text-lg">
                  {[
                    { key: "highlights", label: "Highlights" },
                    { key: "products", label: "Products" },
                    { key: "inspiration", label: "Inspiration" },
                    { key: "gallery", label: "Kave Gallery", route: "/en/en/e/kave-gallery" },
                    { key: "professionals", label: "Professionals", route: "/en/en/e/professionals" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() =>
                        tab.route ? (window.location.href = tab.route) : setActiveTab(tab.key)
                      }
                      className={`text-left ${
                        activeTab === tab.key ? "font-semibold text-black" : "text-black/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Footer simple links */}
                <div className="mt-auto pt-8 text-sm flex flex-col gap-2">
                  <a href="/en/en/stores/">Our stores</a>
                  <a href="/en/en/about-us/">About us</a>
                  <a href="/en/en/kave-cares/">Responsible practices</a>
                  <a href="https://help.kavehome.com">FAQs</a>
                  <a href="/en/en/accounts/account/">My account</a>

                  <div className="pt-3 text-black/60">English ▾</div>
                </div>
              </div>

              {/* Column 2 – middle: varies by activeTab */}
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0">
                  <AnimatePresence mode="wait">
                    {activeTab === "highlights" && (
                      <motion.div key="h" variants={levelVariants} initial="initial" animate="enter" exit="exit" className="p-8">
                        <h3 className="text-3xl font-semibold mb-6">Highlights</h3>
                        <ul className="space-y-4 text-[15px]">
                          {NAV_JSON.highlights.map((i) => (
                            <li key={i.label}>
                              <a href={i.href} className="hover:underline font-medium">
                                {i.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === "products" && (
                      <motion.div key="p" variants={levelVariants} initial="initial" animate="enter" exit="exit" className="p-8">
                        <h3 className="text-3xl font-semibold mb-6">Products</h3>
                        <ul className="space-y-2 text-[15px]">
                          {productColumns.map((col, idx) => (
                            <li key={col.title}>
                              <button
                                onClick={() => setActiveColumnIndex(idx)}
                                className={`w-full text-left py-2 flex items-center justify-between ${
                                  activeColumnIndex === idx ? "font-semibold text-black" : "text-black/70"
                                }`}
                              >
                                {col.title}
                                <FiChevronRight className="opacity-70" />
                              </button>
                            </li>
                          ))}
                          <li className="pt-2">
                            <a className="font-semibold" href="/en/en/s/selected-collection">
                              Selected Collection
                            </a>
                          </li>
                          <li>
                            <a className="font-semibold" href="/en/en/gift-card/">
                              Gift Card
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === "inspiration" && (
                      <motion.div key="i" variants={levelVariants} initial="initial" animate="enter" exit="exit" className="p-8 overflow-y-auto h-full">
                        <h3 className="text-3xl font-semibold mb-6">Inspiration</h3>
                        <SectionGrid title="Trending now" items={NAV_JSON.inspiration.trending} />
                        <div className="h-8" />
                        <SectionGrid title="Our favourites" items={NAV_JSON.inspiration.favourites} />
                        <div className="h-8" />
                        <SectionGrid title="Kave Gallery" items={NAV_JSON.inspiration.gallery.slice(0, 8)} rightLink={{ label: "Discover", href: "/en/en/kave-gallery" }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Column 3 – right: third level for products */}
              <div className="w-[360px] border-l border-black/10 relative">
                <AnimatePresence mode="wait">
                  {activeTab === "products" && activeColumn && (
                    <motion.div
                      key={activeColumn.title}
                      variants={thirdLevelVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="p-8 h-full overflow-y-auto"
                    >
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setActiveColumnIndex(null)}
                          className="text-sm inline-flex items-center gap-1 text-black/70 hover:text-black"
                        >
                          <FiChevronLeft /> Go Back
                        </button>
                        <button onClick={() => setActiveColumnIndex(null)} aria-label="Close panel" className="p-1">
                          <FiX />
                        </button>
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <h4 className="text-3xl font-semibold">{activeColumn.title}</h4>
                        <a href={activeColumn.seeAll} className="underline text-[15px]">See all</a>
                      </div>
                      <ul className="mt-6 space-y-3 text-[15px]">
                        {activeColumn.items.map((i) => (
                          <li key={i.label}>
                            <a href={i.href} className="hover:bg-[#d0ecf7] transition-colors px-1 py-1 rounded-sm inline-block">
                              {i.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionGrid({ title, items, rightLink }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-2xl font-semibold">{title}</h4>
        {rightLink && (
          <a href={rightLink.href} className="underline text-[15px]">
            {rightLink.label}
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <a key={i.label} href={i.href} className="flex flex-col gap-2">
            <div className="aspect-[5/4] bg-[#eee]" />
            <div className="text-[13px] leading-tight">{i.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
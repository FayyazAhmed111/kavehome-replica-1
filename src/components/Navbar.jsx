"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { NAV_JSON } from "../data/navData";
import Header from "./Header";
import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";


export default function KaveHomeHeaderReplica() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("highlights");
  const [activeColumnIndex, setActiveColumnIndex] = useState(null);

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
    <div className="relative ">

      <Header
        setDrawerOpen={setDrawerOpen}
        setActiveTab={setActiveTab}
        setActiveColumnIndex={setActiveColumnIndex}
      />

      {/* Show drawers */}
      <div className="hidden lg:block">
        <DesktopDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeColumnIndex={activeColumnIndex}
          setActiveColumnIndex={setActiveColumnIndex}
        />
      </div>

      <div className="block lg:hidden">
        <MobileDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      </div>
    </div>
  );
}


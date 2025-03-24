"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const ScrollToTopButton = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const viewPortHeight = window.innerHeight;
    const viewPortWidth = window.innerWidth;
    setDimension({ width: viewPortWidth, height: viewPortHeight });

    window.addEventListener("scroll", showArrowButton);

    function showArrowButton(e: Event) {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", showArrowButton);
    };
  }, []);

  const removePercent = (value: number, percent: number = 20) => {
    const percentWidth = (percent / 100) * value;
    return Math.floor(value) - Math.floor(percentWidth);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      drag
      className={cn(
        "fixed bottom-10 right-5 z-30 hidden h-16 w-16 items-center justify-center rounded-full bg-greenColor lg:right-20",
        showButton && "flex",
      )}
      whileDrag={{ scale: 1.2, backgroundColor: "orange" }}
      dragConstraints={{
        right: 0,
        left: -removePercent(dimension.width),
        bottom: 0,
        top: -removePercent(dimension.height),
      }}
      dragMomentum={false}
      dragElastic={{ right: 0.1 }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 4 }}
      onClick={handleScrollToTop}
    >
      <ArrowUp className="h-10 w-8 text-white" />
    </motion.button>
  );
};

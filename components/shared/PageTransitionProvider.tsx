"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: ProvidersProps) {
  // usePathname from next/navigation gives us the current route path.
  const pathname = usePathname();

  // Define your animation variants.
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      {/* Use the pathname as key so that route changes trigger animations */}
      <motion.body
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
        suppressHydrationWarning
      >
        {children}
      </motion.body>
    </AnimatePresence>
  );
}

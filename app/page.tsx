"use client";

import { motion } from "framer-motion";
import HomePage from "../components/Pages/HomePage/HomePage";

export default function Home() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <HomePage />
    </motion.div>
  );
}

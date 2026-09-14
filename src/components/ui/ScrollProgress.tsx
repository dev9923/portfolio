"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3"
    />
  );
}

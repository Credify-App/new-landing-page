"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mx-auto mt-12 max-w-[980px]"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src="/images/hero-devices.jpg"
        alt="Monitor showing sample sales for all stores, and a phone with a next-step note"
        width={1600}
        height={900}
        priority
        className="h-auto w-full rounded-2xl"
      />
    </motion.div>
  );
}

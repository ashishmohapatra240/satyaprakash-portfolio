"use client";

import { motion } from "framer-motion";
import GradientButtonWhite from "../GradientButtonWhite";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Footer() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-20 flex items-end justify-center pb-8" style={{ height: "70vh" }}>
      <motion.div
        {...fadeUp(0)}
        className="w-full px-12 py-16 relative overflow-hidden"
        style={{
          background: "#0a0a0a",
          borderRadius: "24px",
          boxShadow:
            "inset 0 0 24px 0 rgba(255,255,255,0.8), inset 0 0 16px 0 rgba(255,255,255,0.8), 0 8px 48px 0 rgba(0,0,0,0.28)",
        }}
      >
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-4"
          style={{ fontFamily: "var(--font-product-sans)" }}
        >
          Have any queries or any<br />outbursting idea ??
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-white/40 text-base mb-8">
          Lets chat over a cup of <span className="text-white/40 font-bold">chai</span>
        </motion.p>

        <motion.div {...fadeUp(0.3)}>
          <GradientButtonWhite href="mailto:satyaprakashray999@gmail.com">
            Lets Talk
          </GradientButtonWhite>
        </motion.div>
      </motion.div>
    </section>
  );
}

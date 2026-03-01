"use client";

import { motion } from "framer-motion";
import GradientButtonWhite from "../GradientButtonWhite";

/* Awwwards-style container reveal: scale-up + fade with blur */
const cardReveal = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-10% 0px 0px 0px" },
  transition: {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

/* Children items stagger with blur-to-sharp */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-10% 0px 0px 0px" },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

export default function Footer() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-20 flex items-end justify-center pb-8 h-auto lg:h-[70vh]">
      <motion.div
        {...cardReveal}
        className="w-full px-12 py-16 relative overflow-hidden"
        style={{
          background: "#0a0a0a",
          borderRadius: "24px",
          boxShadow:
            "inset 0 0 24px 0 rgba(255,255,255,0.8), inset 0 0 16px 0 rgba(255,255,255,0.8), 0 8px 48px 0 rgba(0,0,0,0.28)",
        }}
      >
        <motion.h2
          {...fadeUp(0.12)}
          className="text-[clamp(32px,4vw,60px)] text-white font-sans font-normal leading-[1.1] mb-4"
        >
          Have any queries or any<br />outbursting idea ??
        </motion.h2>

        <motion.p {...fadeUp(0.24)} className="text-white/40 text-base mb-8">
          Lets chat over a cup of <span className="text-white/40 font-bold">chai</span>
        </motion.p>

        <motion.div {...fadeUp(0.36)}>
          <GradientButtonWhite href="mailto:satyaprakashray999@gmail.com">
            Lets Talk
          </GradientButtonWhite>
        </motion.div>
      </motion.div>
    </section>
  );
}

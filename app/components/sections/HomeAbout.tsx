"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GradientButtonBlack from "../GradientButtonBlack";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function HomeAbout() {
  return (
    <section className="relative w-full flex flex-col items-center" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

      {/* Image group — both images stacked, heading sandwiched between them */}
      <div className="relative w-full max-w-[1060px]" style={{ aspectRatio: "1060 / 615" }}>

        {/* bg-elements.png — behind heading */}
        <motion.div {...fadeUp(0.3)} className="absolute inset-0">
          <Image
            src="/images/Me/bg-elements.png"
            alt=""
            fill
            className="object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Heading — overlapping between the two images */}
        <motion.div
          {...fadeUp(0.0)}
          className="absolute inset-x-0 text-center"
          style={{ top: "8%", zIndex: 5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-5">
            About Me
          </p>
          <h2
            className="text-[#1a1a2e] leading-[1.15]"
            style={{ fontSize: "clamp(28px, 3.6vw, 52px)", fontFamily: "var(--font-product-sans)", fontWeight: 500 }}
          >
            I am an explorer, not<br />only as a designer,<br />but also as a hooman.
          </h2>
        </motion.div>

        {/* bg-elements-nw.png — above heading */}
        <motion.div {...fadeUp(0.45)} className="absolute inset-0 z-10 pointer-events-none">
          <Image
            src="/images/Me/bg-elements-nw.png"
            alt=""
            fill
            className="object-contain"
            draggable={false}
          />
        </motion.div>

      </div>

      {/* CTA — 24px below the image */}
      <motion.div
        {...fadeUp(0.2)}
        className="text-center"
        style={{ marginTop: 24, zIndex: 15 }}
      >
        <GradientButtonBlack href="/about">
          Know more about me
        </GradientButtonBlack>
      </motion.div>

    </section>
  );
}

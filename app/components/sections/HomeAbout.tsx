"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GradientButtonBlack from "../GradientButtonBlack";

/* Awwwards-style reveal: blur-to-sharp + scale + slide up */
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32, scale: 0.97, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, margin: "-12% 0px -12% 0px" },
  transition: {
    duration: 1.0,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

/* Lighter variant for background images — longer, more float */
const floatIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-8% 0px -8% 0px" },
  transition: {
    duration: 1.3,
    ease: [0.16, 1, 0.3, 1] as const,
    delay,
  },
});

export default function HomeAbout() {
  return (
    <section className="relative w-full flex flex-col items-center" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

      {/* Image group — both images stacked, heading sandwiched between them */}
      <div
        className="relative w-[150%] -mx-[25%] aspect-[1060/900] md:w-full md:mx-0 md:max-w-[1060px] md:aspect-[1060/615]"
      >

        {/* bg-elements.png — behind heading, floats in */}
        <motion.div {...floatIn(0.25)} className="absolute inset-0">
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
          {...reveal(0.0)}
          className="absolute inset-x-0 text-center"
          style={{ top: "8%", zIndex: 5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 mb-5">
            About Me
          </p>
          <h2
            className="text-[#1a1a2e] leading-[1.1] font-normal font-sans"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            I am an explorer, not<br />only as a designer,<br />but also as a hooman.
          </h2>
        </motion.div>

        {/* bg-elements-nw.png — above heading, floats in later */}
        <motion.div {...floatIn(0.4)} className="absolute inset-0 z-10 pointer-events-none">
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
        {...reveal(0.15)}
        className="text-center"
        style={{ marginTop: 24, zIndex: 15 }}
      >
        <GradientButtonBlack href="/about">
          Know more
        </GradientButtonBlack>
      </motion.div>

    </section>
  );
}

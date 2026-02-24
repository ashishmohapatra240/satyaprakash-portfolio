"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

export default function GlowSection() {
  const ref = useRef<HTMLDivElement>(null);

  // 1 unit = 300vh of scroll, starts when section top hits viewport top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Section is 450vh. All keyframes scaled × 2/3 vs the old 300vh version
  // so all animation timings happen at the same absolute scroll distance.
  // Gap after dissolve: 450 - (0.5 × 450) = 225vh = 3 × original 75vh.

  // Inner frame grows 0 → 40vh  (completes at 120vh scroll, same as before)
  const frameHeight = useTransform(scrollYProgress, [0, 0.267], ["0vh", "40vh"]);

  // Content fades in just before frame hits max height
  const contentOpacity = useTransform(scrollYProgress, [0.22, 0.267], [0, 1]);

  // Page overlay:
  //   0 → 0.04 : swift snap to black (~18vh)
  //   0.04 → 0.9 : holds at full black
  //   0.9 → 1.0 : dissolves — completes exactly when section bottom hits viewport top,
  //                which is the moment the 50vh spacer's end lands at viewport center
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.9, 1.0],
    [0, 1, 1, 0]
  );

  // Signal Navbar when overlay is active
  useMotionValueEvent(overlayOpacity, "change", (v) => {
    document.documentElement.classList.toggle("page-dark", v > 0.5);
  });

  return (
    <section
      ref={ref}
      style={{ height: "450vh", position: "relative" }}
      className="w-full"
    >
      {/* Fixed full-page black overlay — fades in swiftly, dissolves out */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#000",
          opacity: overlayOpacity,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Sticky container — z-index 20, sits above the overlay */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner frame: 0px → 40vh, black fill, overflow hidden, max 900px */}
        <motion.div
          style={{
            height: frameHeight,
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "#000",
            overflow: "hidden",
            position: "relative",
            borderRadius: "24px",
          }}
        >
          {/* blurcircle.png — fits full width of frame */}
          <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
            <Image
              src="/images/blurcircle.png"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Header + Loader — fade in just before frame reaches max height */}
          <motion.div
            style={{
              opacity: contentOpacity,
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <div className="relative w-full h-16">
              <Image
                src="/images/Header.png"
                alt="Header"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-24 h-24">
              <Image
                src="/images/Loader.png"
                alt="Loader"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>

          {/* Noise texture — overlay blend, 60% opacity */}
          <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
            <Image
              src="/images/Noise.png"
              alt=""
              fill
              style={{
                objectFit: "cover",
                mixBlendMode: "overlay",
                opacity: 0.6,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

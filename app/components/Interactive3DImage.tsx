/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface Interactive3DImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Interactive3DImage({
  src,
  alt,
  width,
  height,
}: Interactive3DImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate shadow position

      // Apply shadow effect to overlay
      overlay.style.background = `
        radial-gradient(
          circle at ${e.clientX - left}px ${e.clientY - top}px,
          rgba(255, 199, 162, 0.4) 0%,
          rgba(255, 199, 162, 0.1) 40%,
          transparent 70%
        )
      `;
    };

    const handleMouseLeave = () => {
      overlay.style.background = "transparent";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-[#1e293b]"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        layout="responsive"
        className="relative z-10 opacity-95"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 transition-all duration-200 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 30px rgba(255, 199, 162, 0.3)",
        }}
      />
    </motion.div>
  );
}

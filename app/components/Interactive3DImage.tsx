"use client";

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
  const imageRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const shadow = shadowRef.current;
    if (!container || !image || !shadow) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentScale = 1;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const mouseX = (e.clientX - left - width / 2) / width;
      const mouseY = (e.clientY - top - height / 2) / height;

      // Reverse direction for opposite movement
      targetX = mouseX * -40; // Increased movement range
      targetY = mouseY * -30;

      const animate = () => {
        // Smooth easing with spring-like effect
        const easing = 0.08;
        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;

        // Dynamic scale based on cursor distance from center
        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        const targetScale = 1 + distance * 0.1; // Max scale 1.1
        currentScale += (targetScale - currentScale) * easing;

        // Apply transforms to image
        image.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          scale(${currentScale})
        `;

        // Update shadow position (opposite to mouse movement)
        const shadowX = currentX * -0.5;
        const shadowY = currentY * -0.5;
        const shadowSpread = Math.abs(currentX) + Math.abs(currentY) + 30;

        shadow.style.boxShadow = `inset ${shadowX}px ${shadowY}px ${shadowSpread}px rgba(255, 199, 162, 0.5)`;

        rafId = requestAnimationFrame(animate);
      };

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      const resetAnimation = () => {
        const easing = 0.1;
        currentX *= 1 - easing;
        currentY *= 1 - easing;
        currentScale += (1 - currentScale) * easing;

        if (
          Math.abs(currentX) < 0.01 &&
          Math.abs(currentY) < 0.01 &&
          Math.abs(currentScale - 1) < 0.001
        ) {
          image.style.transform = "";
          shadow.style.boxShadow = "inset 0 0 30px rgba(255, 199, 162, 0.5)";
          return;
        }

        image.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          scale(${currentScale})
        `;

        rafId = requestAnimationFrame(resetAnimation);
      };

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(resetAnimation);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-[#1e293b]"
    >
      <div
        ref={imageRef}
        className="relative transition-all duration-100 ease-out"
        style={{ willChange: "transform" }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout="responsive"
          className="relative z-10"
        />
      </div>
      <div
        ref={shadowRef}
        className="absolute inset-0 z-20 pointer-events-none bg-black/20 transition-all duration-100"
        style={{
          boxShadow: "inset 0 0 30px rgba(255, 199, 162, 0.5)",
        }}
      />
    </div>
  );
}

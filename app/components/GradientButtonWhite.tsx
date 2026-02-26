"use client";

import { useState } from "react";

interface GradientButtonWhiteProps {
  children?: React.ReactNode;
  href?: string;
}

export default function GradientButtonWhite({ children, href }: GradientButtonWhiteProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => href && window.open(href, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[#1a1a2e] font-semibold text-base whitespace-nowrap"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #B6BEFF 100%)",
        boxShadow: isHovered
          ? "inset 0 0 4px 0 #374AFF, 0 0 8px 0 rgba(55, 74, 255, 0.3)"
          : "inset 0 0 4px 0 #374AFF",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      {children}
    </button>
  );
}

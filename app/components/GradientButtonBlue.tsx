"use client";

import { useState } from "react";

interface GradientButtonBlueProps {
  children?: React.ReactNode;
  href?: string;
}

export default function GradientButtonBlue({ children, href }: GradientButtonBlueProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => href && window.open(href, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-base whitespace-nowrap"
      style={{
        background: "linear-gradient(135deg, #0019FF 0%, #3A4DFF 100%)",
        boxShadow: isHovered
          ? "inset 0 0 4px 0 rgba(255, 255, 255, 1), 0 0 8px 0 rgba(0, 25, 255, 0.3)"
          : "inset 0 0 4px 0 rgba(255, 255, 255, 1)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      {children}
    </button>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

interface GradientButtonBlackProps {
  children?: React.ReactNode;
  href?: string;
}

export default function GradientButtonBlack({ children, href = "/" }: GradientButtonBlackProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-base whitespace-nowrap"
      style={{
        background: "linear-gradient(135deg, #3D3D3D 0%, #000000 100%)",
        boxShadow: isHovered
          ? "inset 0 0 4px 0 rgba(255, 255, 255, 0.4), 0 0 8px 0 rgba(0, 0, 0, 0.4)"
          : "inset 0 0 4px 0 rgba(255, 255, 255, 0.25)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      {children}
    </Link>
  );
}

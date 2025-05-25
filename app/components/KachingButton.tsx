"use client";

import { useState } from "react";

interface KachingButtonProps {
  children: React.ReactNode;
}

export default function KachingButton({ children }: KachingButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="bg-blue-200 p-1 rounded w-fit shadow-inner">
      <button
        className={`relative bg-[#0019FF] text-white px-2 py-2 sm:px-6 py-3 rounded text-base font-medium overflow-hidden transition-all duration-150 ease-in-out transform-gpu will-change-transform${isPressed ? " scale-95 shadow-sm" : " scale-100"}`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <span className="relative z-10 antialiased flex items-center gap-2">
          {children}
        </span>
        <span className="absolute left-0 top-0 bottom-0 flex items-center animate-reflectGroup z-0">
          <span className="w-[45px] h-full bg-white/10 skew-x-[-15deg]" />
          <span className="w-[25px] h-full bg-white/10 skew-x-[-15deg] ml-[6px]" />
        </span>
      </button>
    </div>
  );
}

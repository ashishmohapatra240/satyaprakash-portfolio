"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface ButtonWhiteProps {
    children: ReactNode;
    href?: string;
}

export default function ButtonWhite({ children, href }: ButtonWhiteProps) {
    const [isPressed, setIsPressed] = useState(false);

    const buttonContent = (
        <button
            className={`relative bg-white text-[#222] px-6 py-3 rounded text-base font-medium overflow-hidden transition-all duration-150 ease-in-out transform-gpu will-change-transform${isPressed ? " scale-95 shadow-sm" : " scale-100"}`}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
        >
            <span className="relative z-10 antialiased">{children}</span>
            {/* <span
                className="absolute top-0 bottom-0 left-[-100px] w-[45px] skew-x-[-15deg] animate-reflect1 z-0"
                style={{ background: "#B5BDFF33" }}
            />
            <span
                className="absolute top-0 bottom-0 left-[-60px] w-[25px] skew-x-[-15deg] animate-reflect2 z-0"
                style={{ background: "#B5BDFF33" }}
            /> */}
            <span className="absolute left-0 top-0 bottom-0 flex items-center animate-reflectGroup z-0">
                <span className="w-[45px] h-full bg-white/10 skew-x-[-15deg] " style={{ background: "#B5BDFF33" }} />
                <span className="w-[25px] h-full bg-white/10 skew-x-[-15deg] ml-[6px] " style={{ background: "#B5BDFF33" }} />
            </span>
        </button>
    );

    if (href) {
        return (
            <div className="bg-blue-200 p-1 rounded w-fit shadow-inner">
                <Link href={href} legacyBehavior>
                    <a style={{ display: "inline-block" }} target="_blank" rel="noopener noreferrer">{buttonContent}</a>
                </Link>
            </div>
        );
    }
    return <div className="bg-blue-200 p-1 rounded w-fit shadow-inner">{buttonContent}</div>;
} 
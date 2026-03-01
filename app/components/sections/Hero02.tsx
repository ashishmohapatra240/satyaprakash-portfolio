"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ------------------------------------------------------------------ */
/*  Custom ease – a punchy expo-out that decelerates beautifully      */
/* ------------------------------------------------------------------ */
const EXPO_OUT = "expo.out";          // gsap built-in – extremely smooth decel
const CIRC_OUT = "circ.out";          // slightly snappier alternative

export default function Hero02() {
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const wrap1Ref = useRef<HTMLSpanElement>(null);
  const wrap2Ref = useRef<HTMLSpanElement>(null);
  const wrap3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const scribbleRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: EXPO_OUT, duration: 1.2 },
    });

    /* 1 ─ Scribble: scale + micro-rotate + fade */
    tl.to(scribbleRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration: 1.4,
      ease: "power3.out",
    })

    /* 2 ─ Greeting: blur-to-sharp + slide up */
    .to(greetingRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: EXPO_OUT,
    }, "-=1.0")

    /* 3 ─ Heading lines: clip-reveal slide up with stagger */
    .to([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: "0%",
      stagger: 0.1,
      duration: 1.3,
      ease: "power4.out",
    }, "-=0.7")

    /* 4 ─ Sub-text: blur-to-sharp + gentle drift */
    .to(subRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: CIRC_OUT,
    }, "-=1.0")

    /* 5 ─ Divider: width wipe from left */
    .to(dividerRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.6")

    /* 6 ─ Button gradient: slide up + fade */
    .to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: EXPO_OUT,
      onComplete: () => {
        [wrap1Ref, wrap2Ref, wrap3Ref].forEach((ref) => {
          if (ref.current) ref.current.style.overflow = "visible";
        });
      },
    }, "-=0.7");
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative">

      {/* Center scribble image */}
      <div className="flex-1 flex items-center justify-center">
        <div
          ref={scribbleRef}
          style={{
            opacity: 0,
            transform: "scale(0.88) rotate(-2deg)",
            filter: "blur(8px)",
          }}
        >
          <Image
            src="/images/Me/Logo Scribble.png"
            alt="Logo scribble"
            width={784}
            height={490}
            className="w-full md:w-[90%] h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom text block */}
      <div className="pb-0">
        {/* Greeting */}
        <p
          ref={greetingRef}
          className="text-base text-slate-600 mb-4"
          style={{ opacity: 0, transform: "translateY(18px)", filter: "blur(6px)" }}
        >
          Hey I&apos;m Satya
        </p>

        {/* Heading + sub-text — row on md+, column on mobile */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
          <h1 className="text-[clamp(40px,5vw,72px)] font-sans font-normal leading-[1.05] text-[#1a1a2e] tracking-tight md:max-w-[60%]">
            <span ref={wrap1Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line1Ref} style={{ display: "block", transform: "translateY(110%)" }}>
                A curious designer
              </span>
            </span>
            <span ref={wrap2Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line2Ref} style={{ display: "block", transform: "translateY(110%)" }}>
                chasing chaos &amp;
              </span>
            </span>
            <span ref={wrap3Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line3Ref} style={{ display: "block", transform: "translateY(110%)" }}>
                calmness
              </span>
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-sm text-slate-500 leading-relaxed md:text-right max-w-[220px] md:mb-2 md:flex-shrink-0"
            style={{ opacity: 0, transform: "translateY(20px)", filter: "blur(5px)" }}
          >
            Currently working with Supanote AI to shape the healthcare sector
          </p>
        </div>
      </div>

      {/* Divider + button gradient */}
      <div className="mt-10">
        <hr
          ref={dividerRef}
          className="border-t border-slate-200"
          style={{ opacity: 0, transform: "scaleX(0)", transformOrigin: "left center" }}
        />

        <div
          ref={btnRef}
          className="flex justify-center pt-6 pb-2"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <Image
            src="/images/Button gradient.png"
            alt="Button gradient"
            width={3573}
            height={395}
            className="w-[140%] md:w-full max-w-[1200px] h-auto -mx-[20%] md:mx-0"
            priority
          />
        </div>
      </div>
    </section>
  );
}

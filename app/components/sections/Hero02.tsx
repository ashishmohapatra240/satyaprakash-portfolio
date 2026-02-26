"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(scribbleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.0,
    })

    // greeting starts while scribble is still appearing
    .to(greetingRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.65,
    }, "-=0.8")

    // lines start as greeting is just beginning
    .to([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: "0%",
      stagger: 0.12,
      duration: 1.1,
    }, "-=0.55")

    // sub starts with the second line
    .to(subRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "power3.out",
    }, "-=0.9")

    .to(dividerRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.55")

    .to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      onComplete: () => {
        [wrap1Ref, wrap2Ref, wrap3Ref].forEach((ref) => {
          if (ref.current) ref.current.style.overflow = "visible";
        });
      },
    }, "-=0.6");
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative">

      {/* Center scribble image */}
      <div className="flex-1 flex items-center justify-center">
        <div
          ref={scribbleRef}
          style={{ opacity: 0, transform: "scale(0.92)" }}
        >
          <Image
            src="/images/Me/Logo Scribble.png"
            alt="Logo scribble"
            width={784}
            height={490}
            className="w-[90%] h-auto object-contain"
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
          style={{ opacity: 0, transform: "translateY(14px)", filter: "blur(4px)" }}
        >
          Hey I&apos;m Satya
        </p>

        {/* Heading + sub-text row */}
        <div className="flex items-end justify-between gap-8">
          <h1 className="text-[clamp(36px,5vw,72px)] font-normal leading-[1.02] text-[#1a1a2e] tracking-tight max-w-[60%]">
            <span ref={wrap1Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line1Ref} style={{ display: "block", transform: "translateY(108%)" }}>
                A curious designer
              </span>
            </span>
            <span ref={wrap2Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line2Ref} style={{ display: "block", transform: "translateY(108%)" }}>
                chasing chaos &amp;
              </span>
            </span>
            <span ref={wrap3Ref} style={{ display: "block", overflow: "hidden", paddingBottom: "0.03em" }}>
              <span ref={line3Ref} style={{ display: "block", transform: "translateY(108%)" }}>
                calmness
              </span>
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-sm text-slate-500 leading-relaxed text-right max-w-[220px] mb-2 flex-shrink-0"
            style={{ opacity: 0, transform: "translateY(16px)", filter: "blur(3px)" }}
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
          style={{ opacity: 0 }}
        />

        <div
          ref={btnRef}
          className="flex justify-center pt-6 pb-2"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <Image
            src="/images/Button gradient.png"
            alt="Button gradient"
            width={3573}
            height={395}
            className="w-full max-w-[1200px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

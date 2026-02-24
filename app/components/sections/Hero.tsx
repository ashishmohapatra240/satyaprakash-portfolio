"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Avatar — scale up from slightly small, fade in
    tl.to(avatarRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.9,
    })

    // Greeting — letter-feel: blur + slide up
    .to(greetingRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.65,
    }, "-=0.45")

    // Heading lines — curtain reveal (slides up from overflow:hidden parent)
    .to([line1Ref.current, line2Ref.current], {
      y: "0%",
      stagger: 0.11,
      duration: 1.1,
    }, "-=0.35")

    // Sub text — fade + slide
    .to(subRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "power3.out",
    }, "-=0.55")

    // Button gradient — fade up last
    .to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
    }, "-=0.5");
  }, []);

  return (
    <section className={clsx("min-h-screen flex flex-col relative", "max-w-7xl px-5 lg:px-20 md:px-6")}>
      <div className="flex-1 flex flex-col items-center justify-center" style={{ paddingTop: "20vh" }}>
        <div className="space-y-6 w-full text-center">

          {/* Avatar + greeting */}
          <div className="flex flex-col items-center gap-3">
            <div ref={avatarRef} className="w-20 h-20 aspect-square rounded-full overflow-hidden" style={{ opacity: 0, transform: "scale(0.6)" }}>
              <Image
                src="/images/Hero-avatar.png"
                alt="Satya"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <p ref={greetingRef} className="text-base text-slate-700" style={{ opacity: 0, transform: "translateY(14px)", filter: "blur(4px)" }}>
              Hey!! I&apos;m Satya (sa-tya)
            </p>
          </div>

          {/* Main heading — each line in overflow:hidden for curtain effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-none text-dark mx-auto max-w-[90%] md:max-w-none font-sans">
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}>
              <span ref={line1Ref} style={{ display: "block", transform: "translateY(108%)" }}>Busy detailing solutions</span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}>
              <span ref={line2Ref} style={{ display: "block", transform: "translateY(108%)" }}>for complex problems.</span>
            </span>
          </h1>

          {/* Secondary text */}
          <p ref={subRef} className="text-base text-slate-500 leading-relaxed mx-auto max-w-lg" style={{ opacity: 0, transform: "translateY(22px)", filter: "blur(3px)" }}>
            Me ?? A designer driven by curiousity, and Problems. Currently designing at Supanote AI. Previously at Proximity works
          </p>

          {/* Button gradient image */}
          <div ref={btnRef} className="flex justify-center pt-[2.5rem]" style={{ opacity: 0, transform: "translateY(28px)" }}>
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
      </div>
    </section>
  );
}

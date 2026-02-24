"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Draggable);

// All anime images stacked/fanned from the same anchor point (bottom-left of card)
const ANIME_STICKERS = [
  { src: "/images/Me/anime 01.png", w: 126, h: 172, rotate: "-26deg", tx: "-86px", zIndex: 11 },
  { src: "/images/Me/anime 02.png", w: 126, h: 187, rotate: "-13deg", tx: "-43px", zIndex: 12 },
  { src: "/images/Me/anime 03.png", w: 126, h: 187, rotate: "-1deg",  tx: "2px",   zIndex: 15 },
  { src: "/images/Me/anime 04.png", w: 126, h: 196, rotate: "12deg",  tx: "46px",  zIndex: 13 },
  { src: "/images/Me/anime 05.png", w: 126, h: 175, rotate: "24deg",  tx: "91px",  zIndex: 11 },
];

const HEADER_LINES = [
  "Designer by craft.",
  "Explorer by nature.",
  "Always chasing what feels true.",
];

export default function TextReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const labelLetters = section.querySelectorAll("[data-label-letter]");
    const headingLines = section.querySelectorAll("[data-heading-line]");
    const descLines = section.querySelectorAll("[data-desc-line]");

    // Set initial visibility hidden so there's no flash before GSAP runs
    gsap.set([labelLetters, headingLines, descLines], { visibility: "visible" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power4.out" },
    });

    // ABOUT — each letter slides up from below, slight blur dissolve
    tl.from(labelLetters, {
      y: 20,
      opacity: 0,
      filter: "blur(4px)",
      stagger: 0.045,
      duration: 0.55,
    })

    // Header lines — classic curtain/clip reveal: slide up from overflow:hidden parent
    .from(
      headingLines,
      {
        y: "105%",
        stagger: 0.14,
        duration: 1.05,
        ease: "power4.out",
      },
      "-=0.15"
    )

    // Description lines — staggered fade + slide up
    .from(
      descLines,
      {
        y: 28,
        opacity: 0,
        filter: "blur(3px)",
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => { tl.kill(); };
  }, []);

  // Separate effect for Draggable so it doesn't depend on ScrollTrigger timing
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const els = Array.from(card.querySelectorAll<HTMLElement>("[data-drag]"));
    if (!els.length) return;

    const instances = Draggable.create(els, {
      type: "x,y",
      cursor: "grab",
      activeCursor: "grabbing",
      zIndexBoost: true,
    });

    return () => { instances.forEach((d) => d.kill()); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center max-w-7xl px-3 md:px-6 lg:px-20"
      style={{ minHeight: "100vh", margin: "0 auto", width: "100%", paddingTop: "0px", paddingBottom: "20vh" }}
    >
      {/* ABOUT label — letter by letter */}
      <div className="flex mb-3" style={{ letterSpacing: "0.15em" }}>
        {"ABOUT".split("").map((char, i) => (
          <span
            key={i}
            data-label-letter
            className="text-base font-medium uppercase"
            style={{ visibility: "hidden" }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Header — each line inside overflow:hidden for curtain effect */}
      <h2
        className="text-5xl font-medium leading-tight mb-8"
        style={{ maxWidth: "820px" }}
      >
        {HEADER_LINES.map((line, i) => (
          <div key={i} style={{ overflow: "hidden", lineHeight: 1.25 }}>
            <span
              data-heading-line
              style={{ display: "block", visibility: "hidden" }}
            >
              {line}
            </span>
          </div>
        ))}
      </h2>

      {/* Description — two lines, each fades up independently */}
      <p
        className="text-lg font-normal leading-relaxed"
        style={{ maxWidth: "560px" }}
      >
        <span
          data-desc-line
          style={{ display: "block", visibility: "hidden" }}
        >
          4+ years shaping products across Fintech, Edtech, and beyond —
        </span>
        <span
          data-desc-line
          style={{ display: "block", visibility: "hidden" }}
        >
          driven by curiosity, grounded by open trails and long rides.
        </span>
      </p>

      {/* Unified bento grid — banner + 4 cards */}
      {/* At lg+: aspect-[4/3] container + 1.8fr:1fr:1fr rows keeps banner = 1.8× card height */}
      <div
        className="mt-16 grid grid-cols-12 gap-3"
      >

        {/* ── Row 1: Know me banner — full width ── */}
        <div
          ref={cardRef}
          className="col-span-12 relative select-none overflow-hidden"
        >
          {/* Banner card — overflow-hidden preserved */}
          <div className="aspect-[1200/400] rounded-2xl overflow-hidden relative">
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(120deg, #E8A882 0%, #A8A8DC 45%, #5060CC 100%)",
              }}
            />

            {/* Noise texture overlay */}
            <Image
              src="/images/Noise.png"
              alt=""
              fill
              className="object-cover pointer-events-none"
              style={{ opacity: 0.7, mixBlendMode: "overlay" }}
            />

          {/* Centre text — p-4 for 16px padding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3 p-4">
            <h3
              className="text-white text-center text-4xl"
              style={{
                fontFamily: "'Cactus Classical Serif', serif",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
              }}
            >
              A Little about<br />myself...
            </h3>
            <p
              className="text-white/80 text-base tracking-wide"
              style={{
                fontFamily: "'Cactus Classical Serif', serif",
                textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
              }}
            >
              exploration in progress
            </p>
            {/* Loader image */}
            <Image
              src="/images/Loader.png"
              alt="Loader"
              width={120}
              height={Math.round(120 * 56 / 346)}
              className="mt-1 opacity-80"
            />
          </div>

          {/* ── Left: anime posters fanned/stacked — draggable ── */}
          {ANIME_STICKERS.map((s, i) => (
            <div
              key={i}
              data-drag="true"
              className="absolute"
              style={{ bottom: "-10px", left: "28px", zIndex: s.zIndex, cursor: "grab", touchAction: "none" }}
            >
              <div
                style={{
                  transform: `translateX(${s.tx}) rotate(${s.rotate})`,
                  transformOrigin: "bottom center",
                  filter:
                    "drop-shadow(0px 2px 3px rgba(0,0,0,0.32)) drop-shadow(0px 8px 16px rgba(0,0,0,0.22)) drop-shadow(0px 20px 40px rgba(0,0,0,0.14))",
                }}
              >
                <Image src={s.src} alt={`anime ${i + 1}`} width={s.w} height={s.h} draggable={false} />
              </div>
            </div>
          ))}

          {/* Basketball — draggable */}
          <div
            data-drag="true"
            className="absolute"
            style={{ bottom: "-28px", left: "-22px", zIndex: 20, cursor: "grab", touchAction: "none" }}
          >
            <div
              style={{
                transform: "rotate(-8deg)",
                filter:
                  "drop-shadow(0px 4px 6px rgba(0,0,0,0.3)) drop-shadow(0px 12px 24px rgba(0,0,0,0.2)) drop-shadow(0px 24px 48px rgba(0,0,0,0.12))",
              }}
            >
              <Image src="/images/Me/Basketball.png" alt="Basketball" width={252} height={252} draggable={false} />
            </div>
          </div>

          {/* PS5 — static, right edge */}
          <div
            className="absolute"
            style={{
              top: "-24px",
              right: "-16px",
              zIndex: 10,
              filter:
                "drop-shadow(-4px 4px 6px rgba(0,0,0,0.28)) drop-shadow(-8px 16px 32px rgba(0,0,0,0.2)) drop-shadow(0px 32px 60px rgba(0,0,0,0.12))",
            }}
          >
            <Image src="/images/Me/PS5.png" alt="PS5" width={216} height={396} draggable={false} />
          </div>
          </div>{/* ── end inner banner (overflow-hidden) ── */}

          {/* Helmet — in outer wrapper (no inner overflow-hidden), so drag works freely.
              Outer wrapper overflow-hidden clips the bottom half out of view. */}
          <div
            data-drag="true"
            className="absolute"
            style={{ bottom: "-132px", left: "calc(50% - 132px)", zIndex: 10, cursor: "grab", touchAction: "none" }}
          >
            <div
              style={{
                filter:
                  "drop-shadow(0px 2px 4px rgba(0,0,0,0.35)) drop-shadow(0px 10px 20px rgba(0,0,0,0.22)) drop-shadow(0px 28px 56px rgba(0,0,0,0.14))",
              }}
            >
              <Image src="/images/Me/Helmet.png" alt="Helmet" width={264} height={264} draggable={false} />
            </div>
          </div>
        </div>{/* ── end outer cardRef wrapper ── */}

        {/* ── Row 2, col 1: Dog photo — "Give belly rubs" ── */}
        <div className="col-span-12 aspect-[384/308] lg:col-start-1 lg:col-span-4 lg:row-start-2 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/with-dog.png"
            alt="Give belly rubs"
            fill
            className="object-cover"
          />
          {/* Gradient — black 100% at bottom, fades to black 0% at 80% height */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)" }}
          />
          {/* Text */}
          <div className="absolute bottom-0 left-0 p-4">
            <p
              className="text-white text-3xl leading-tight"
              style={{
                fontFamily: "'Cactus Classical Serif', serif",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
              }}
            >
              Give<br />belly rubs
            </p>
            <p
              className="text-sm mt-2"
              style={{
                fontFamily: "'Cactus Classical Serif', serif",
                color: "rgba(255,255,255,0.6)",
                textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
              }}
            >
              i love animals,<br />not only dogs
            </p>
          </div>
        </div>

        {/* ── Row 2–3, col 2: Candid photo ── */}
        <div className="col-span-12 aspect-[4/3] lg:aspect-auto lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:row-span-2 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/about/about-1.jpeg"
            alt="Candid"
            fill
            className="object-cover object-top"
          />
          {/* CANDID watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              className="text-white/[0.12] font-bold tracking-[0.3em] uppercase"
              style={{ fontSize: "clamp(40px, 8vw, 80px)", transform: "rotate(-5deg)" }}
            >
              CANDID
            </span>
          </div>
          {/* Top-left label */}
          <div className="absolute top-4 left-4 text-white/60 text-xs leading-relaxed">
            <p>not very photogenic</p>
            <p>but trying my best for a</p>
          </div>
        </div>

        {/* ── Row 2–3, col 3: Spotify player ── */}
        <div className="col-span-12 aspect-[4/3] lg:aspect-auto lg:col-start-9 lg:col-span-4 lg:row-start-2 lg:row-span-2 rounded-2xl overflow-hidden flex flex-col bg-[#111]">
          {/* Player body */}
          <div className="flex-1 flex flex-col p-4 gap-3 min-h-0">
            <p className="text-white/50 text-xs">I try to enjoy today because</p>
            {/* Album + track info */}
            <div className="flex gap-3 items-center">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                <Image src="/images/about/about-2.jpg" alt="Album art" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold leading-tight truncate">Zindagi Ek Safar Hai Suhana</p>
                <p className="text-white/40 text-xs mt-1">Kishore Kumar</p>
              </div>
            </div>
            {/* Progress bar */}
            <div>
              <div className="w-full h-[3px] rounded-full bg-white/20">
                <div className="h-full rounded-full bg-white" style={{ width: "65%" }} />
              </div>
              <div className="flex justify-between text-white/30 text-[10px] mt-1">
                <span>1:40</span>
                <span>2:45</span>
              </div>
            </div>
            {/* Controls */}
            <div className="flex items-center justify-between text-white/50 mt-auto">
              <Shuffle size={15} />
              <SkipBack size={18} className="text-white/80" />
              <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Play size={16} className="text-black fill-black ml-0.5" />
              </button>
              <SkipForward size={18} className="text-white/80" />
              <Repeat size={15} />
            </div>
          </div>
          {/* Listen to playlist — fixed-height strip */}
          <div
            className="flex-shrink-0 h-14 flex items-center justify-center gap-2 px-4 rounded-b-2xl"
            style={{ background: "#1DB954" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.469-.077-.336.132-.67.469-.746 3.809-.871 7.077-.496 9.713 1.115.293.18.386.563.207.856zm1.223-2.723c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.518-.973 3.632-1.102 8.147-.568 11.235 1.328.366.226.48.707.257 1.071zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.129-1.166-.623-.148-.495.13-1.016.623-1.166 3.532-1.073 9.404-.866 13.115 1.337.445.264.590.837.327 1.282-.264.443-.838.59-1.282.325z"/>
            </svg>
            <span className="text-white font-semibold text-sm">Listen to my playlist</span>
          </div>
        </div>

        {/* ── Row 3, col 1: Chai quote ── */}
        <div
          className="col-span-12 aspect-[384/308] lg:col-start-1 lg:col-span-4 lg:row-start-3 rounded-2xl p-4 flex flex-col justify-end"
          style={{ background: "linear-gradient(to bottom right, #363327 0%, #000000 100%)" }}
        >
          <p
            className="text-white text-2xl leading-snug"
            style={{
              fontFamily: "'Cactus Classical Serif', serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
            }}
          >
            Need a break ??<br />Naah..<br />Need a chai..
          </p>
          <p
            className="text-xs mt-2"
            style={{
              fontFamily: "'Cactus Classical Serif', serif",
              color: "rgba(255,255,255,0.4)",
              textShadow: "0 0 4px #ffffff, 0 0 4px #ffffff",
            }}
          >
            i love animals, not only dogs
          </p>
        </div>

      </div>
    </section>
  );
}

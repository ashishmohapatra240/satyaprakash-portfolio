"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { warmupAudioCtx } from "@/app/utils/mechanicalClick";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Tracks whether the user explicitly clicked pause — the only thing that
  // should prevent auto-resume on tab return.
  const userPausedRef = useRef(false);
  // Tracks whether audio has ever started (need a gesture on first load).
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 0.35;

    function play() {
      return audio!.play().then(() => {
        startedRef.current = true;
        setIsPlaying(true);
        cleanup(); // remove gesture listeners once playing
      });
    }

    function cleanup() {
      window.removeEventListener("click",       onFirstGesture, true);
      window.removeEventListener("pointerdown", onFirstGesture, true);
      window.removeEventListener("touchstart",  onFirstGesture, true);
      window.removeEventListener("keydown",     onFirstGesture, true);
    }

    // ── First-gesture fallback ──────────────────────────────────────────────
    // Registered BEFORE the autoplay attempt to eliminate the race condition
    // where a user gesture fires during the async gap of play().catch().
    function onFirstGesture() {
      if (startedRef.current) return;
      cleanup();
      // Pre-warm the mechanical click AudioContext while we have the gesture,
      // so click sounds in the Work section fire with zero delay.
      warmupAudioCtx();
      // Browser allows play() called directly inside a user gesture handler
      // regardless of buffer state — no readyState check needed.
      audio!.play().then(() => {
        startedRef.current = true;
        setIsPlaying(true);
      }).catch(() => {});
    }

    window.addEventListener("click",       onFirstGesture, true);
    window.addEventListener("pointerdown", onFirstGesture, true);
    window.addEventListener("touchstart",  onFirstGesture, true);
    window.addEventListener("keydown",     onFirstGesture, true);

    // No immediate autoplay — music only starts on explicit user gesture
    // (the LoadingScreen click triggers the listeners registered above).

    // ── Tab visibility ──────────────────────────────────────────────────────
    function handleVisibility() {
      if (!startedRef.current) return;

      if (document.visibilityState === "hidden") {
        audio!.pause();
        setIsPlaying(false);
      } else if (document.visibilityState === "visible") {
        if (!userPausedRef.current) {
          audio!.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cleanup();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      audio.play().then(() => {
        startedRef.current = true;
        setIsPlaying(true);
      }).catch(() => {});
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/images/ES_Tat Twam Asi - Valante.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggle}
        title={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-6 left-6 z-[300] flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur-md text-slate-600 hover:text-slate-900 hover:bg-white/90 transition-colors shadow-sm"
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isPlaying ? (
            <motion.svg
              key="playing"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </motion.svg>
          ) : (
            <motion.svg
              key="muted"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

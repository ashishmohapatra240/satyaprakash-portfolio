"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      });
    }

    // ── First-gesture fallback ──────────────────────────────────────────────
    // Removed once audio starts successfully.
    function onFirstGesture() {
      if (startedRef.current) return;
      window.removeEventListener("pointerdown", onFirstGesture, true);
      window.removeEventListener("keydown", onFirstGesture, true);

      if (audio!.readyState >= 3) {
        // Browser has enough data — play immediately
        play().catch(() => {});
      } else {
        // Wait until the browser has buffered enough to play without stalling
        audio!.addEventListener("canplay", () => play().catch(() => {}), { once: true });
      }
    }

    // ── Try immediate autoplay ──────────────────────────────────────────────
    // Works if the browser already trusts the origin (e.g. after first-ever visit).
    // Falls back to gesture listener if blocked.
    play().catch(() => {
      window.addEventListener("pointerdown", onFirstGesture, true);
      window.addEventListener("keydown", onFirstGesture, true);
    });

    // ── Tab visibility ──────────────────────────────────────────────────────
    function handleVisibility() {
      if (!startedRef.current) return;

      if (document.visibilityState === "hidden") {
        // Pause whenever user leaves the tab
        audio!.pause();
        setIsPlaying(false);
      } else if (document.visibilityState === "visible") {
        // Resume on return — but only if the user hasn't manually paused
        if (!userPausedRef.current) {
          play().catch(() => {});
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture, true);
      window.removeEventListener("keydown", onFirstGesture, true);
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

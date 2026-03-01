"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const [skipLoader, setSkipLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 768) {
      setSkipLoader(true);
    }
  }, []);

  // Children always render — loader overlays on top so layout is ready on dismiss
  // LoadingScreen only mounts after hydration to avoid SSR/client style mismatch
  return (
    <>
      {children}
      {mounted && !skipLoader && !done && <LoadingScreen onDismiss={() => setDone(true)} />}
    </>
  );
}

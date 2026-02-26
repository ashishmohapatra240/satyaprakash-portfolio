"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <LoadingScreen onDismiss={() => setDone(true)} />}
      {done && children}
    </>
  );
}

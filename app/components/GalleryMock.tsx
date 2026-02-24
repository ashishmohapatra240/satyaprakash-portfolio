"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GalleryMockProps {
  bgColor?: string;
  image?: string;
  video?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function GalleryMock({
  bgColor = "#e5e7eb",
  image,
  video,
  onHoverStart,
  onHoverEnd,
}: GalleryMockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    // Outer: flex layout item — oversized to fully contain the scaled card.
    // overflow: hidden clips the animation so it never bleeds into neighbours.
    <div
      style={{
        width: 320,
        height: 256,
        flexShrink: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {/* Inner: actual card — animates freely within the clipping wrapper */}
      <motion.div
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        whileHover={{ scale: 1.07, y: -12 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: 288,
          height: 216,
          borderRadius: 24,
          overflow: "hidden",
          backgroundColor: bgColor,
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        {video ? (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", borderRadius: 24 }}
          />
        ) : image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 24 }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}

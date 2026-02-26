"use client";

import { useEffect, useRef } from "react";

interface GalleryMockProps {
  bgColor?: string;
  image?: string;
  video?: string;
}

export default function GalleryMock({
  bgColor = "#e5e7eb",
  image,
  video,
}: GalleryMockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      style={{
        width: 320,
        height: 240,
        borderRadius: 24,
        overflow: "hidden",
        backgroundColor: bgColor,
        flexShrink: 0,
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
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
        />
      ) : image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : null}
    </div>
  );
}

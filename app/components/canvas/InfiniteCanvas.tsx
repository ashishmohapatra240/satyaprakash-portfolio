"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useCanvasGestures } from "./useCanvasGestures";
import CanvasControls from "./CanvasControls";

export interface CanvasItem {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface InfiniteCanvasProps {
  items: CanvasItem[];
  canvasHeight?: string;
  minZoom?: number;
  maxZoom?: number;
  initialZoom?: number;
  initialPosition?: { x: number; y: number };
  showControls?: boolean;
  showGrid?: boolean;
}

export default function InfiniteCanvas({
  items,
  canvasHeight = "80vh",
  minZoom = 0.1,
  maxZoom = 3,
  initialZoom = 1,
  initialPosition = { x: 0, y: 0 },
  showControls = true,
  showGrid = true,
}: InfiniteCanvasProps) {
  const [showHint, setShowHint] = useState(true);

  const {
    containerRef,
    innerRef,
    zoom,
    isPanning,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    zoomIn,
    zoomOut,
    resetView,
  } = useCanvasGestures({
    minZoom,
    maxZoom,
    initialZoom,
    initialPosition,
    onFirstInteraction: () => setShowHint(false),
  });

  const gridStyle = useMemo(
    () =>
      showGrid
        ? {
            backgroundImage:
              "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }
        : {},
    [showGrid]
  );

  return (
    <div className="relative w-screen -mx-[calc((100vw-100%)/2)]">
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-gray-50 select-none"
        style={{
          height: canvasHeight,
          cursor: isPanning ? "grabbing" : "grab",
          touchAction: "none",
          ...gridStyle,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Transform layer */}
        <div
          ref={innerRef}
          className="absolute top-0 left-0 will-change-transform origin-top-left"
          style={{
            transform: `translate3d(${initialPosition.x}px, ${initialPosition.y}px, 0) scale(${initialZoom})`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="absolute rounded-lg overflow-hidden shadow-md"
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.height,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Hint overlay */}
        {showHint && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="bg-black/60 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm animate-pulse">
              Drag to pan &middot; Scroll to zoom
            </div>
          </div>
        )}

        {/* Controls */}
        {showControls && (
          <CanvasControls
            zoom={zoom}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={resetView}
          />
        )}
      </div>
    </div>
  );
}

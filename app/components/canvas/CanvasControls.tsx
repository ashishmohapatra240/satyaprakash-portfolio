"use client";

import { Plus, Minus, Maximize2 } from "lucide-react";

interface CanvasControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export default function CanvasControls({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
}: CanvasControlsProps) {
  return (
    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-1 z-10">
      <button
        onClick={onZoomOut}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Zoom out"
      >
        <Minus size={16} className="text-gray-700" />
      </button>
      <span className="text-sm text-gray-600 font-medium min-w-[48px] text-center select-none">
        {Math.round(zoom * 100)}%
      </span>
      <button
        onClick={onZoomIn}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Zoom in"
      >
        <Plus size={16} className="text-gray-700" />
      </button>
      <div className="w-px h-5 bg-gray-200" />
      <button
        onClick={onReset}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Reset view"
      >
        <Maximize2 size={16} className="text-gray-700" />
      </button>
    </div>
  );
}

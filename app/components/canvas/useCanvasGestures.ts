"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface CanvasGesturesOptions {
  minZoom?: number;
  maxZoom?: number;
  initialZoom?: number;
  initialPosition?: { x: number; y: number };
  onFirstInteraction?: () => void;
}

export function useCanvasGestures({
  minZoom = 0.1,
  maxZoom = 3,
  initialZoom = 1,
  initialPosition = { x: 0, y: 0 },
  onFirstInteraction,
}: CanvasGesturesOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(initialZoom);
  const [offset, setOffset] = useState(initialPosition);
  const [isPanning, setIsPanning] = useState(false);

  // Mutable drag state to avoid re-renders during drag
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastOffsetX: initialPosition.x,
    lastOffsetY: initialPosition.y,
    currentZoom: initialZoom,
    currentOffsetX: initialPosition.x,
    currentOffsetY: initialPosition.y,
    hasInteracted: false,
    // Pinch state
    activePointers: new Map<number, { x: number; y: number }>(),
    lastPinchDist: 0,
    lastPinchCenter: { x: 0, y: 0 },
  });

  const applyTransform = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    const { currentOffsetX, currentOffsetY, currentZoom } = dragState.current;
    el.style.transform = `translate3d(${currentOffsetX}px, ${currentOffsetY}px, 0) scale(${currentZoom})`;
  }, []);

  const markInteraction = useCallback(() => {
    if (!dragState.current.hasInteracted) {
      dragState.current.hasInteracted = true;
      onFirstInteraction?.();
    }
  }, [onFirstInteraction]);

  const clampZoom = useCallback(
    (z: number) => Math.min(maxZoom, Math.max(minZoom, z)),
    [minZoom, maxZoom]
  );

  // Pointer events for pan
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      const ds = dragState.current;
      ds.activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (ds.activePointers.size === 1) {
        // Single pointer — start pan
        ds.isDragging = true;
        ds.startX = e.clientX;
        ds.startY = e.clientY;
        ds.lastOffsetX = ds.currentOffsetX;
        ds.lastOffsetY = ds.currentOffsetY;
        setIsPanning(true);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      } else if (ds.activePointers.size === 2) {
        // Two pointers — start pinch
        ds.isDragging = false;
        const pts = Array.from(ds.activePointers.values());
        ds.lastPinchDist = Math.hypot(
          pts[1].x - pts[0].x,
          pts[1].y - pts[0].y
        );
        ds.lastPinchCenter = {
          x: (pts[0].x + pts[1].x) / 2,
          y: (pts[0].y + pts[1].y) / 2,
        };
      }
      markInteraction();
    },
    [markInteraction]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const ds = dragState.current;
      if (ds.activePointers.has(e.pointerId)) {
        ds.activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      }

      if (ds.activePointers.size === 2) {
        // Pinch zoom
        const pts = Array.from(ds.activePointers.values());
        const dist = Math.hypot(
          pts[1].x - pts[0].x,
          pts[1].y - pts[0].y
        );
        const ratio = dist / ds.lastPinchDist;
        const newZoom = clampZoom(ds.currentZoom * ratio);

        const center = {
          x: (pts[0].x + pts[1].x) / 2,
          y: (pts[0].y + pts[1].y) / 2,
        };
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          const cx = center.x - rect.left;
          const cy = center.y - rect.top;
          const scale = newZoom / ds.currentZoom;
          ds.currentOffsetX = cx - scale * (cx - ds.currentOffsetX);
          ds.currentOffsetY = cy - scale * (cy - ds.currentOffsetY);
        }

        ds.currentZoom = newZoom;
        ds.lastPinchDist = dist;
        ds.lastPinchCenter = center;
        applyTransform();
        return;
      }

      if (!ds.isDragging) return;
      const dx = e.clientX - ds.startX;
      const dy = e.clientY - ds.startY;
      ds.currentOffsetX = ds.lastOffsetX + dx;
      ds.currentOffsetY = ds.lastOffsetY + dy;
      applyTransform();
    },
    [applyTransform, clampZoom]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      const ds = dragState.current;
      ds.activePointers.delete(e.pointerId);

      if (ds.activePointers.size < 2) {
        // If we were pinching and now have 1 or 0 pointers, sync state
        setZoom(ds.currentZoom);
        setOffset({ x: ds.currentOffsetX, y: ds.currentOffsetY });
      }

      if (ds.activePointers.size === 0) {
        ds.isDragging = false;
        setIsPanning(false);
        setZoom(ds.currentZoom);
        setOffset({ x: ds.currentOffsetX, y: ds.currentOffsetY });
      } else if (ds.activePointers.size === 1) {
        // Switch from pinch back to pan
        const [pt] = Array.from(ds.activePointers.values());
        ds.isDragging = true;
        ds.startX = pt.x;
        ds.startY = pt.y;
        ds.lastOffsetX = ds.currentOffsetX;
        ds.lastOffsetY = ds.currentOffsetY;
      }
    },
    []
  );

  // Wheel zoom — attached via useEffect with { passive: false }
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const ds = dragState.current;
      markInteraction();

      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      const zoomFactor = e.deltaY > 0 ? 0.92 : 1.08;
      const newZoom = clampZoom(ds.currentZoom * zoomFactor);
      const scale = newZoom / ds.currentZoom;

      ds.currentOffsetX = cx - scale * (cx - ds.currentOffsetX);
      ds.currentOffsetY = cy - scale * (cy - ds.currentOffsetY);
      ds.currentZoom = newZoom;

      applyTransform();
      setZoom(newZoom);
      setOffset({ x: ds.currentOffsetX, y: ds.currentOffsetY });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [applyTransform, clampZoom, markInteraction]);

  // Safari gesture events — prevent native page zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prevent = (e: Event) => e.preventDefault();
    container.addEventListener("gesturestart", prevent);
    container.addEventListener("gesturechange", prevent);
    return () => {
      container.removeEventListener("gesturestart", prevent);
      container.removeEventListener("gesturechange", prevent);
    };
  }, []);

  // Zoom controls
  const zoomIn = useCallback(() => {
    const ds = dragState.current;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const newZoom = clampZoom(ds.currentZoom * 1.25);
    const scale = newZoom / ds.currentZoom;
    ds.currentOffsetX = cx - scale * (cx - ds.currentOffsetX);
    ds.currentOffsetY = cy - scale * (cy - ds.currentOffsetY);
    ds.currentZoom = newZoom;

    applyTransform();
    setZoom(newZoom);
    setOffset({ x: ds.currentOffsetX, y: ds.currentOffsetY });
  }, [applyTransform, clampZoom]);

  const zoomOut = useCallback(() => {
    const ds = dragState.current;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const newZoom = clampZoom(ds.currentZoom * 0.8);
    const scale = newZoom / ds.currentZoom;
    ds.currentOffsetX = cx - scale * (cx - ds.currentOffsetX);
    ds.currentOffsetY = cy - scale * (cy - ds.currentOffsetY);
    ds.currentZoom = newZoom;

    applyTransform();
    setZoom(newZoom);
    setOffset({ x: ds.currentOffsetX, y: ds.currentOffsetY });
  }, [applyTransform, clampZoom]);

  const resetView = useCallback(() => {
    const ds = dragState.current;
    ds.currentZoom = initialZoom;
    ds.currentOffsetX = initialPosition.x;
    ds.currentOffsetY = initialPosition.y;

    applyTransform();
    setZoom(initialZoom);
    setOffset(initialPosition);
  }, [applyTransform, initialZoom, initialPosition]);

  return {
    containerRef,
    innerRef,
    zoom,
    offset,
    isPanning,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    zoomIn,
    zoomOut,
    resetView,
  };
}

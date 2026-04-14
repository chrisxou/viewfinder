"use client";

import { useEffect, useRef } from "react";
import { Photo } from "@/lib/photos";

interface ImageTrackProps {
  photos: Photo[];
  orientation: "landscape" | "portrait";
}

export default function ImageTrack({ photos, orientation }: ImageTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const mouseDownAt = useRef(0);
  const prevOffset = useRef(0);    // % on desktop, px on mobile
  const currentOffset = useRef(0);
  const isDown = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Cancel any held WAAPI animations so orientation change resets cleanly
    track.getAnimations().forEach((a) => a.cancel());
    for (const img of track.getElementsByClassName("image")) {
      (img as HTMLElement).getAnimations().forEach((a) => a.cancel());
    }

    // Reset interaction state
    prevOffset.current = 0;
    currentOffset.current = 0;
    mouseDownAt.current = 0;
    isDown.current = false;

    const isMobile = window.innerWidth <= 768;
    // Vertical mode: mobile always, or desktop when portrait is selected
    const isVertical = isMobile || orientation === "portrait";

    // ── Vertical: pixel-based Y scroll (mobile + desktop portrait) ─────────
    if (isVertical) {
      const HEADER_H = 64;
      const PAD = 16;
      const maxPx = Math.min(
        0,
        -(track.clientHeight - window.innerHeight + HEADER_H + PAD)
      );
      const clampPx = (v: number) => Math.max(Math.min(v, 0), maxPx);

      const animate = (px: number) => {
        const progress = maxPx !== 0 ? px / maxPx : 0;
        track.animate(
          { transform: `translate(-50%, ${px}px)` },
          { duration: 1200, fill: "forwards" }
        );
        for (const img of track.getElementsByClassName("image")) {
          (img as HTMLElement).animate(
            { objectPosition: `center ${progress * 100}%` },
            { duration: 1200, fill: "forwards" }
          );
        }
      };

      const onDown = (y: number) => { isDown.current = true; mouseDownAt.current = y; };
      const onUp   = () => { isDown.current = false; prevOffset.current = currentOffset.current; };
      const onMove = (y: number) => {
        if (!isDown.current) return;
        const delta = mouseDownAt.current - y;
        const next = clampPx(prevOffset.current - delta);
        currentOffset.current = next;
        animate(next);
      };
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const next = clampPx(currentOffset.current - d * 2);
        currentOffset.current = next;
        prevOffset.current = next;
        animate(next);
      };

      const onMouseDown  = (e: MouseEvent) => onDown(e.clientY);
      const onMouseUp    = ()              => onUp();
      const onMouseMove  = (e: MouseEvent) => onMove(e.clientY);
      const onTouchStart = (e: TouchEvent) => onDown(e.touches[0].clientY);
      const onTouchEnd   = ()              => onUp();
      const onTouchMove  = (e: TouchEvent) => onMove(e.touches[0].clientY);

      window.addEventListener("mousedown",  onMouseDown);
      window.addEventListener("mouseup",    onMouseUp);
      window.addEventListener("mousemove",  onMouseMove);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchend",   onTouchEnd);
      window.addEventListener("touchmove",  onTouchMove);
      window.addEventListener("wheel",      onWheel, { passive: false });

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("mousedown",  onMouseDown);
        window.removeEventListener("mouseup",    onMouseUp);
        window.removeEventListener("mousemove",  onMouseMove);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend",   onTouchEnd);
        window.removeEventListener("touchmove",  onTouchMove);
        window.removeEventListener("wheel",      onWheel);
      };
    }

    // ── Desktop: percentage-based horizontal scroll ─────────────────────────
    const animate = (next: number) => {
      track.animate(
        { transform: `translate(${next}%, -50%)` },
        { duration: 1200, fill: "forwards" }
      );
      for (const img of track.getElementsByClassName("image")) {
        (img as HTMLElement).animate(
          { objectPosition: `${100 + next}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const clamp = (v: number) => Math.max(Math.min(v, 0), -100);

    const handleDown = (x: number) => { isDown.current = true; mouseDownAt.current = x; };
    const handleUp   = () => { isDown.current = false; prevOffset.current = currentOffset.current; };
    const handleMove = (x: number) => {
      if (!isDown.current) return;
      const delta = mouseDownAt.current - x;
      const next = clamp(prevOffset.current + (delta / (window.innerWidth / 2)) * -100);
      currentOffset.current = next;
      animate(next);
    };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const next = clamp(currentOffset.current + delta * -0.08);
      currentOffset.current = next;
      prevOffset.current = next;
      animate(next);
    };

    const onMouseDown  = (e: MouseEvent) => handleDown(e.clientX);
    const onMouseUp    = ()              => handleUp();
    const onMouseMove  = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchStart = (e: TouchEvent) => handleDown(e.touches[0].clientX);
    const onTouchEnd   = ()              => handleUp();
    const onTouchMove  = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    window.addEventListener("mousedown",  onMouseDown);
    window.addEventListener("mouseup",    onMouseUp);
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend",   onTouchEnd);
    window.addEventListener("touchmove",  onTouchMove);
    window.addEventListener("wheel",      handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("mousedown",  onMouseDown);
      window.removeEventListener("mouseup",    onMouseUp);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
      window.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("wheel",      handleWheel);
    };
  }, [orientation]);

  return (
    <div
      id="image-track"
      className={orientation === "portrait" ? "portrait" : ""}
      ref={trackRef}
    >
      {photos.map((photo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={photo.id}
          className="image"
          src={photo.url}
          alt={photo.alt}
          draggable={false}
        />
      ))}
    </div>
  );
}

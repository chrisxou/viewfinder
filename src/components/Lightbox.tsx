"use client";

import { useEffect } from "react";
import { Photo } from "@/lib/photos";

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1.2"/>
          <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      </button>

      {/* Prev arrow */}
      {onPrev && (
        <button
          type="button"
          className="absolute left-4 md:left-8 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <polyline points="7,1 1,7 7,13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {onNext && (
        <button
          type="button"
          className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <polyline points="1,1 7,7 1,13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
          </svg>
        </button>
      )}

      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.url}
        alt={photo.alt}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
    </div>
  );
}

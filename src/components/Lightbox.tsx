"use client";

import { useEffect } from "react";
import { Photo } from "@/lib/photos";

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    // Backdrop — click outside the photo closes it
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors text-lg"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Photo — stop propagation so clicking on it doesn't close */}
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

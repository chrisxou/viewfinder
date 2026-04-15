"use client";

import { useState } from "react";
import { Photo } from "@/lib/photos";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => setSelectedIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
  const handleNext = () => setSelectedIndex((i) => (i !== null ? Math.min(photos.length - 1, i + 1) : null));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <ImageCard src={photo.url} alt={photo.alt} priority={index < 6} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          photo={photos[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={selectedIndex > 0 ? handlePrev : undefined}
          onNext={selectedIndex < photos.length - 1 ? handleNext : undefined}
        />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { Photo } from "@/lib/photos";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="cursor-pointer"
            onClick={() => setSelected(photo)}
          >
            <ImageCard src={photo.url} alt={photo.alt} priority={index < 6} />
          </div>
        ))}
      </div>

      {selected && (
        <Lightbox photo={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

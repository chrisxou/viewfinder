"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ImageTrack from "@/components/ImageTrack";
import { Photo } from "@/lib/photos";

export default function HomeClient({ photos }: { photos: Photo[] }) {
  const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape");

  return (
    <>
      <Header orientation={orientation} onOrientationChange={setOrientation} />
      <ImageTrack photos={photos} orientation={orientation} />
    </>
  );
}

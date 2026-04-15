"use client";

import Header from "@/components/Header";
import ImageTrack from "@/components/ImageTrack";
import { Photo } from "@/lib/photos";

export default function HomeClient({ photos }: { photos: Photo[] }) {
  return (
    <>
      <Header />
      <ImageTrack photos={photos} orientation="landscape" />
    </>
  );
}

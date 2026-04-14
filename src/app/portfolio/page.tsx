import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";
import { getPhotos } from "@/lib/photos";

export default async function Portfolio() {
  const photos = await getPhotos();

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
            Portfolio — {photos.length} photos
          </p>
          <PhotoGrid photos={photos} />
        </div>
      </main>
    </>
  );
}

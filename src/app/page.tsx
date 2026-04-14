import HomeClient from "./HomeClient";
import { getPhotos } from "@/lib/photos";

export default async function Home() {
  const photos = await getPhotos();
  return <HomeClient photos={photos} />;
}

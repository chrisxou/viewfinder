import fs from "fs";
import path from "path";
import { supabase } from "./supabase";

export interface Photo {
  id: string;
  url: string;
  alt: string;
  title?: string;
  order: number;
}

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getLocalPhotos(): Photo[] {
  const dir = path.join(process.cwd(), "public", "photos");
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((file, index) => ({
      id: String(index + 1),
      url: `/photos/${file}`,
      alt: `Photo ${index + 1}`,
      order: index + 1,
    }));
}

export async function getPhotos(): Promise<Photo[]> {
  if (!supabase) return getLocalPhotos();

  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .eq("published", true)
    .order("order", { ascending: true });

  if (error || !data?.length) return getLocalPhotos();
  return data as Photo[];
}

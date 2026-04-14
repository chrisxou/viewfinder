import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ImageCard = ({ src, alt, priority = false }: ImageCardProps) => {
  return (
    <div className="relative aspect-[3/4] overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageCard;

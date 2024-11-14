import Image from "next/image";

export default function SrcSetImage({ src, alt, srcSet, sizes }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        srcSet={srcSet}
        className="object-cover"
        sizes={sizes}
        priority
        fill
      />
    </div>
  );
}

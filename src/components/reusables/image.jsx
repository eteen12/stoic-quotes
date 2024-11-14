import Image from "next/image";

export default function ThisImage({ src, alt }) {
  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} className="object-cover" fill />
    </div>
  );
}

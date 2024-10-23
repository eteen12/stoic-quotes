import Image from "next/image";

export default function StoicVisual1() {
  return (
    <div className="relative mx-auto h-[600px] sm:max-w-[1300px] sm:h-[800px] md:h-[800px] lg:h-[1000px]">
      <Image
        src="/stoicVisual1/stoicVisual1.png"
        alt="Stoic Visual 1"
        className="object-cover hidden sm:block mx-auto"
        fill
        priority
      />

      <Image
        src="/stoicVisual1/stoicVisual1Mobile.png"
        alt="Stoic Visual 1"
        className="object-cover sm:hidden mx-auto"
        fill
        priority
      />
    </div>
  );
}

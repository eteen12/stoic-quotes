import Image from "next/image";

export default function PhilosopherPage({ philosopher }) {
  return (
    <div className="h-fit py-32 sm:pt-40 px-4 sm:px-8 max-w-[1700px] mx-auto">
      <div className="relative isolate px-6 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-[20%_80%] gap-8">
          <div className="w-full min-h-full relative">
            <div className="relative flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full transition-transform duration-300 transform hover:scale-105">
              <Image
                alt="Ethan Breitkreutz author and owner of Teleta Development"
                src={philosopher.image}
                className="object-cover rounded-full"
                fill
              />
            </div>
          </div>
          <div className="w-full h-full">
            <h1 className="text-3xl leading-normal sm:text-4xl sm:leading-relaxed max-w-3xl mx-auto xl:text-5xl xl:leading-normal">
              {philosopher.bio}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

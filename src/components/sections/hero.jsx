import Image from "next/image";


export default function Hero() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow h-[87vh] w-full md:h-screen">
      <div className="sm:h-10"></div>
      <div className="relative mx-auto h-[100%] w-[100%] ">
        <Image
          src="/hero/heroImageDesktop.webp"
          alt="Hero Image"
          className="object-contain object-right hidden sm:block"
          fill
          priority
        />
        <Image
          src="/hero/heroImageMobile.png"
          alt="Hero Image"
          className="object-cover sm:hidden"
          fill
          priority
        />
        <div className="absolute left-0 bottom-0 flex flex-col justify-center items-center blackText p-5 tracking-tighter bold text-2xl md:text-3xl">
          <h1 className="">
            Discover what it means <br /> to be stoic
            <button
              type="button"
              className="absolute rounded-md blackBg px-7 py-1.5 whiteText shadow-sm hoverBg ml-2 tracking-tighter bold text-base md:text-lg md:px-8 md:ml-6"
            >
              learn more
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

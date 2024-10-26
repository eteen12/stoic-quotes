import Link from "next/link";
import Image from "next/image";
import NavBar from "../layout/navBar";

export default function Hero() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow h-[720px] sm:h-[800px] xl:h-[850px] w-full pb-2 md:pb-5">
      <div className="-ml-2 -mr-2 -mt-2">
        <NavBar />
      </div>
      <div className="relative mx-auto sm:h-[630px] lg:h-[700px] xl:h-[750px] w-full hidden sm:block ">
        <Image
          src="/hero/heroImageDesktop.webp"
          alt="black and white marcus aurelius equestrian statue in black and white"
          className="object-contain hidden sm:block ml-32 lg:ml-20"
          fill
          priority
        />
      </div>
      <div className="relative mx-auto h-[600px] w-full sm:hidden">
        <Image
          src="/hero/heroImageMobile_nxcvhm_c_scale,w_830.webp"
          alt="black and white marcus aurelius equestrian statue"
          className="object-cover sm:hidden object-left"
          sizes="(max-width: 830px) 100vw, 830px"
          srcSet="
          /hero/heroImageMobile_nxcvhm_c_scale,w_300.webp 300w,
          /hero/heroImageMobile_nxcvhm_c_scale,w_713.webp 713w,
          /hero/heroImageMobile_nxcvhm_c_scale,w_830.webp 830w"
          fill
          priority
        />
      </div>
      <div className="relative flex flex-col blackText px-5 tracking-tighter bold text-2xl md:text-3xl -mt-4 sm:mt-8 md:mt-4 lg:-mt-12">
        <h1>
          Discover what it means <br /> to be stoic
          <Link
            href="/quotes"
            className="relative rounded-md blackBg px-7 py-1.5 sm:py-2 sm:text-lg whiteText shadow-sm hoverBg ml-4 tracking-tighter bold text-base md:text-lg md:px-8 md:ml-10 transition-transform duration-300 transform hover:scale-105"
            aria-label="Learn more about Stoic quotes and philosophy"
          >
            discover
          </Link>
        </h1>
      </div>
    </div>
  );
}

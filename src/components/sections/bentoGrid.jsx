import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

import DailyQuote from "../quotes/dailyQuote";
import Date from "../quotes/date";

const philosophers = [
  { name: "Marcus Aurelius", link: "marcus-aurelius" },
  { name: "Seneca The Younger", link: "seneca-the-younger" },
  { name: "Epictetus", link: "epictetus" },
];

export default function BentoGrid() {
  return (
    <div className=" py-12">
      <div className="mx-auto px-2 max-w-none">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg whiteBg lg:rounded-l-[2rem]"></div>
            <div className="relative h-[44rem] grid grid-cols-1 grid-rows-[40%_60%] overflow-hidden text-xl">
              <div className="relative w-full h-full">
                <Image
                  className="object-contain"
                  src="/bento/marcusFace.png"
                  alt="marcusFace"
                  fill
                />
              </div>
              <div className="relative z-10 px-6 md:py-16 pt-20 grid grid-cols-1 grid-rows-[18%_18%_18%] lg:grid-rows-[20%_20%_20%] gap-5 w-full blackText tracking-tighter bold text-2xl md:text-3xl">
                {philosophers.map((philosopher) => (
                  <Link
                    key={philosopher.name}
                    href={philosopher.link}
                    className="flex justify-between "
                  >
                    <h2>{philosopher.name}</h2>
                    <IoIosArrowForward className="mt-px text-3xl md:text-4xl md:mt-0" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1 h-[21rem]">
            <div className="absolute inset-px rounded-lg whiteBg  max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="grid grid-cols-1 grid-rows-[70%_30%] w-full h-full blackText tracking-tighter bold text-2xl md:text-3xl">
                <div className="grid grid-cols-[40%_60%] rounded-full p-5">
                  <div className="flex flex-col justify-between">
                    <h3>
                      Quote of the <br /> Day
                    </h3>
                    <div className="flex gap-5">
                      <FaXTwitter className="text-3xl md:text-4xl" />
                      <FaFacebook className="text-3xl md:text-4xl" />
                      <FaInstagram className="text-3xl md:text-4xl" />
                    </div>
                  </div>
                  <div className=" w-full h-full text-right">
                    <DailyQuote />
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className=" blackBg whiteText w-full h-full  text-3xl md:text-6xl flex justify-center items-center shadow-none ring-0 ">
                  <Date />
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg whiteBg "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 h-[21rem]">
                <Image
                  src="/bento/epictetusWriting.jpg"
                  alt="epictetusWriting"
                  className="object-cover"
                  fill
                />
                <div className="absolute bottom-0 right-0 z-50 whiteText tracking-tighter bold text-2xl md:text-3xl p-10">
                  <h2 className="">
                    Read weekly stoic <br /> blogs
                  </h2>
                  <button>

                  </button>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg whiteBg  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 grid grid-cols-1 grid-rows-[5%_70%_25%] h-[44rem] blackText tracking-tighter bold text-2xl md:text-3xl justify-items-center items-center text-center">
                
              </div>
            </div>

            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ShareButtons from "../misc/shareButtons";

import DailyQuote from "../misc/dailyQuote";
import Date from "../misc/date";

const philosophers = [
  { name: "Marcus Aurelius", link: "marcus-aurelius" },
  { name: "Seneca The Younger", link: "seneca-the-younger" },
  { name: "Epictetus", link: "epictetus" },
];

export default function BentoGrid() {
  return (
    <div className=" py-12">
      <div className="mx-auto px-2 max-w-none">
        <div className=" mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2 whiteBg shadow-lg h-[30rem] sm:h-[44rem] rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <div className="grid grid-cols-1 grid-rows-[70%_30%] w-full h-full blackText tracking-tighter bold text-2xl md:text-3xl">
              <div className="grid grid-rows-[40%_60%] p-5">
                <div className="flex flex-col justify-between ">
                  <h3 className="sm:text-3xl ">
                    Quote of the <br /> Day
                  </h3>
                </div>
                <div className="w-full h-full text-center sm:text-3xl">
                  <DailyQuote />
                </div>
                <div className="-mt-10">
                  <ShareButtons />
                </div>
              </div>
              <div className="blackBg whiteText w-full h-full text-4xl md:text-6xl flex justify-center items-center rounded-b-lg">
                <Date />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 rounded-lg"></div>
          </div>
          <div className="relative max-lg:row-start-1 h-[21rem]">
            <div className="absolute inset-px rounded-lg whiteBg  max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] shadow-lg transition-transform duration-300 transform hover:scale-105">
              <div className="absolute inset-px rounded-lg whiteBg"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] ">
                <div className=" sm:px-10 flex flex-col justify-center h-full">
                  <div className="flex flex-col justify-center text-center items-center h-full blackText">
                    <p>made by</p>
                    <a href="https://TeletaDevelopment.com">
                      <h2 className="text-center mb-1 text-3xl md:text-4xl blackText bold tracking-tight ">
                        Teleta Development.
                      </h2>
                    </a>
                    <p>a web development company in Kelowna Canada</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-300 transform hover:scale-105">
            <div className="absolute inset-px rounded-lg whiteBg "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 h-[21rem]">
                <Image
                  src="/bento/epictetusWriting.jpg"
                  alt="epictetusWriting"
                  className="object-cover"
                  fill
                />
                <div className="absolute bottom-0 right-0 z-50 whiteText tracking-tighter bold text-2xl md:text-3xl p-14 flex flex-col  text-left">
                  <h2 className="">
                    Read weekly stoic <br /> blogs
                    <button
                      type="button"
                      className="absolute rounded-md blackBg px-7 py-1.5 whiteText shadow-sm hoverBg ml-2 tracking-tighter bold text-base md:text-lg md:px-8 md:ml-6"
                    >
                      read now
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2 transition-transform duration-300 transform hover:scale-105">
            <div className="absolute inset-px rounded-lg whiteBg"></div>
            <div className="relative h-[44rem] grid grid-cols-1 grid-rows-[40%_60%] overflow-hidden text-xl">
              <div className="relative w-full h-full">
                <h2 className="text-center mt-5 text-3xl md:text-4xl blackText bold tracking-tight">Discover quotes by</h2>
                <Image
                  className="object-contain mt-16"
                  src="/bento/marcusFace.png"
                  alt="marcusFace"
                  fill
                />
              </div>
              <div className="relative z-10 px-6 pt-32 grid grid-cols-1 grid-rows-[18%_18%_18%] lg:grid-rows-[20%_20%_20%] gap-5 w-full blackText tracking-tighter bold text-2xl md:text-3xl">
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
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

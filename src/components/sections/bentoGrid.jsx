import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const philosophers = [
  { name: "Marcus Aurelius", link: "marcus-aurelius" },
  { name: "Seneca The Younger", link: "seneca-the-younger" },
  { name: "Epictetus", link: "epictetus" },
];

export default function BentoGrid() {
  return (
    <div className=" py-24 sm:py-32">
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
                    className="flex justify-between border-b-4 border-black "
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
              <div className="grid grid-cols-1 grid-rows-[75%_25%] w-full h-full">
                <div className="grid grid-cols-[50%_50%]">
                  <div className="blackText">
                    {" "}
                    <h3>Daily Quote</h3>
                  </div>
                  <div className="blackBg w-full h-full">
                    <h3>the quote</h3>
                  </div>
                </div>
                <div className="blackBg w-full h-full">
                  {" "}
                  <h3>{new Date().toLocaleDateString()}</h3>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg whiteBg "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg whiteBg  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    {/* Your code example */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

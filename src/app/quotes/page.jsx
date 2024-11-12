import DateDisplay from "@/components/misc/date";
import Button from "@/components/reusables/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Inspiring Stoic Quotes: Wisdom from Marcus Aurelius, Seneca, and Epictetus",
  description:
    "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
  keywords:
    "Stoic philosophy, inspirational quotes, Marcus Aurelius, Seneca, Epictetus, wisdom, resilience, personal development, mental strength, daily motivation",
  author: "Teleta Development",
  og: {
    title: "Inspiring Stoic Quotes",
    description:
      "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
    url: "https://www.stoicquotes.ca/quotes",
    image: "https://www.stoicquotes.ca/marcusFaceLogo.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspiring Stoic Quotes",
    description:
      "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
    image: "https://www.stoicquotes.ca/marcusFaceLogo.webp",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Inspiring Stoic Quotes",
    url: "https://www.stoicquotes.ca/quotes",
    description:
      "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
    image: "https://www.stoicquotes.ca/marcusFaceLogo.webp",
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/Teleta_Development/",
      "https://www.linkedin.com/in/ethan-breitkreutz",
      "https://www.youtube.com/@TeletaDevelopment",
      "https://github.com/eteen12",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.stoicquotes.ca/quotes/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

function Page() {
  return (
    <>
      <div className=" h-fit py-24 pt-32 sm:pt-52 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
        <div className="blackText w-full pt-10 flex">
          <h1 className="blackText text-6xl sm:text-8xl md:text-9xl ">
            Quotes
          </h1>
          <span className="aria-hidden h-1.5 w-10 blackBg mt-8 ml-2 sm:mt-14 sm:h-2 sm:w-12 md:mt-20 md:h-3 md:w-14"></span>
        </div>
        <div className="flex gap-2 mt-5 sm:mt-6">
          <Button
            link="/about"
            text="My pick"
            className="transition3 shrinkAnimation"
          />
        </div>

        <div className="w-full relative mt-14">
          <div className="w-full mt-16 text-lg sm:text-xl sm:mt-24 ">
            <h2 className="  sm:ml-auto md:w-[50%] lg:w-[30%] tracking-tight">
              Read quotes from the famous stoics, and read the daily quote. The
              blog is updated weekly with insights, ideas, and experiences on
              stoic applications to modern day life.
            </h2>
          </div>
          <div className="lg:flex lg:space-x-8">
            <div className="h-0.5 bg-black w-full sm:w-[10%] lg:w-[28%] xl:w-[29%] mt-7 hidden lg:block"></div>
            <div className="border-b-2 border-black mt-7 hidden lg:block w-[20%]"></div>
            <div className="border-b-2 border-black mt-7 sm:w-[47%] md:w-[50%] sm:ml-auto "></div>
            <div className="sm:mt-1.5 lg:hidden">
              <div className="h-0.5 blackBg sm:w-[47%] sm:-mt-2 hidden sm:block lg:hidden"></div>
            </div>
          </div>
        </div>

        <div className=" md:ml-auto lg:w-[70%] md:-mt-7">
          <p className="grayText text-lg sm:text-xl mt-10 mb-5">Pages</p>
          <ul className="space-y-2 ">
            <li>
              <Link
                href="/philosophers/marcus-aurelius"
                target="_blank"
                aria-label="Share on Facebook"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Seneca
              </Link>
            </li>
            <li>
              <Link
                href="/philosophers/marcus-aurelius"
                target="_blank"
                aria-label="Share on Facebook"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Epictetus
              </Link>
            </li>
            <li>
              <Link
                href="/philosophers/marcus-aurelius"
                target="_blank"
                aria-label="Share on Facebook"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Marcus Aurelius
              </Link>
            </li>
          </ul>
          <div className="h-0.5 bg-black w-full sm:w-[45%] mt-7 lg:hidden"></div>
        </div>

        <div className="mt-5 sm:flex sm:justify-end sm:-mt-9 lg:justify-start">
          <Button
            link="/quotes"
            text="View all quotes"
            className="w-full sm:w-auto transition3 shrinkAnimation "
          />
        </div>
      </div>
      <div className="relative grid w-full  gap-5 p-5 mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1400px] md:grid-cols-2 lg:grid-cols-3 ">
        <div className="relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg h-[600px] lg:h-[630px] ">
          <div className="relative h-full w-full">
            <div className="h-0.5 bg-black w-[50%] -mt-1"></div>

            <Image
              src="/quotes/marcusOnHorse.webp"
              alt="Marcus Aurelius equestrian statue black and white image"
              fill
              className="object-cover "
              loading="lazy"
            />
          </div>
          <div className=" h-full w-full blackText items-center flex flex-col">
            <h2 className="text-2xl text-center pt-2 bold md:text-2xl">
              Marcus Aurelius
            </h2>
            <p className="text-center mt-2 ">
              Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in
              controlling one&apos;s thoughts and emotions. His book Meditations
              is a cornerstone of Stoic thought.
            </p>
            <Link
              href="/philosophers/marcus-aurelius"
              aria-label="read marcus aurelius quotes"
              className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base absolute bottom-0 mb-10"
            >
              read quotes
            </Link>
          </div>
        </div>

        <div className="relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg shadow-lg rounded-xl h-[600px] lg:h-[630px] p-5 transition-transform duration-300 transform hover:scale-105">
          <div className="relative h-full w-full rounded-xl">
            <Image
              src="/quotes/senecaDeath.webp"
              alt="seneca's suicide, forced by nero painting black and white"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className=" h-full w-full blackText items-center flex flex-col">
            <h2 className="text-2xl text-center pt-2 bold md:text-2xl">
              Seneca The Younger
            </h2>
            <p className="text-center mt-2 ">
              Seneca, a Roman Stoic philosopher, statesman, and tutor to Emperor
              Nero, emphasized the importance of wisdom, self-control, and the
              acceptance of fate. His writings, including Letters to Lucilius,
              explore how to live virtuously in a turbulent world.
            </p>
            <Link
              href="/philosophers/seneca"
              aria-label="read seneca quotes"
              className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base absolute bottom-0 mb-10"
            >
              read quotes
            </Link>
          </div>
        </div>
        <div
          className="relative whiteBg shadow-lg grid grid-cols-1 grid-rows-[50%_50%] rounded-xl h-[600px] 
      lg:h-[630px] md:col-span-2 lg:col-span-1 md:w-[55%] lg:w-full md:flex md:flex-col md:justify-center md:mx-auto p-5 transition-transform duration-300 transform hover:scale-105"
        >
          <div className="relative h-full w-full rounded-xl">
            <Image
              sizes="(max-width: 1000px) 100vw, 1000px"
              srcSet="
                  /bento/epictetusWriting_i5itci_c_scale,w_100.webp 100w,
                  /bento/epictetusWriting_i5itci_c_scale,w_358.webp 358w,
                  /bento/epictetusWriting_i5itci_c_scale,w_621.webp 621w,
                  /bento/epictetusWriting_i5itci_c_scale,w_844.webp 844w,
                  /bento/epictetusWriting_i5itci_c_scale,w_1000.webp 1000w"
              src="/bento/epictetusWriting_i5itci_c_scale,w_1000.webp"
              alt="epictetus writing black and white photo"
              className="object-cover rounded-xl"
              loading="lazy"
              fill
            />
          </div>
          <div className=" h-full w-full blackText items-center flex flex-col">
            <h2 className="text-2xl text-center pt-2 bold md:text-2xl">
              Epictetus
            </h2>
            <p className="text-center mt-2 ">
              Born a slave, Epictetus became one of the most influential Stoic
              philosophers. He taught that freedom comes from mastering the mind
              and desires. His Discourses and Enchiridion are foundational
              texts, offering guidance on living with integrity and resilience.
            </p>
            <Link
              href="/philosophers/epictetus"
              aria-label="read epictetus quotes"
              className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base absolute bottom-0 mb-10"
            >
              read quotes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;

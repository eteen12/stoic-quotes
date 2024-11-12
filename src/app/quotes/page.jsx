import DateDisplay from "@/components/reusables/date";
import Button from "@/components/reusables/button";
import Image from "next/image";
import Link from "next/link";

const philosophers = [
  {
    name: "Marcus Aurelius",
    imageSrc: "/quotes/marcusOnHorse.webp",
    altText: "Marcus Aurelius equestrian statue black and white image",
    description:
      "Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in controlling one’s thoughts and emotions. His book Meditations is a cornerstone of Stoic thought.",
    link: "/philosophers/marcus-aurelius",
  },
  {
    name: "Marcus",
    imageSrc: "/quotes/marcusOnHorse.webp",
    altText: "Marcus Aurelius equestrian statue black and white image",
    description:
      "Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in controlling one’s thoughts and emotions. His book Meditations is a cornerstone of Stoic thought.",
    link: "/philosophers/marcus-aurelius",
  },
  {
    name: "Marcus B",
    imageSrc: "/quotes/marcusOnHorse.webp",
    altText: "Marcus Aurelius equestrian statue black and white image",
    description:
      "Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in controlling one’s thoughts and emotions. His book Meditations is a cornerstone of Stoic thought.",
    link: "/philosophers/marcus-aurelius",
  },
];

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
            link="/about"
            text="Read about the author"
            className="w-full sm:w-auto transition3 shrinkAnimation "
          />
        </div>
      </div>

      <div className="relative grid w-full gap-10 lg:gap-0 mb-20 p-5 mx-auto  grid-cols-1 max-w-[1700px]">
        {philosophers.map((philosopher, index) => (
          <div
            key={index}
            className={`relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg h-[600px] lg:h-[600px] xl:h-[630px] max-w-[600px] lg:max-w-[650px] mx-auto lg:mx-0 ${
              index === 1 ? " lg:mr-auto" : "lg:ml-auto"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={philosopher.imageSrc}
                alt={philosopher.altText}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-fit blackText flex flex-col">
              <div className={`${index === 1 ? "text-right" : ""}`}>
                <h2 className="text-2xl pt-2  md:text-2xl inline-block">
                  {philosopher.name}
                  <div className="h-0.5 bg-black w-full mt-2"></div>
                </h2>
              </div>
              <p
                className={` mt-5 ${index === 1 ? "text-left" : "text-right"}`}
              >
                {philosopher.description}
              </p>
              <div
                className={`mt-10 flex ${index === 1 ? "justify-start" : "justify-end"}`}
              >
                <Button
                  link="/quotes"
                  text="Read"
                  className="w-full sm:w-auto transition3 shrinkAnimation "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Page;

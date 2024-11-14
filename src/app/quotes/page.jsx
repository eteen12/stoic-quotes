import Button from "@/components/reusables/button";
import Link from "next/link";
import SrcSetImage from "@/components/reusables/srcSetImage";

const philosophers = [
  {
    name: "Marcus Aurelius",
    description:
      "Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in controlling one’s thoughts and emotions. His book Meditations is a cornerstone of Stoic thought. Marcus Aurelius is widely known as the philosopher king, and I could not agree more.",
    src: "/quotes/marcusOnHorse_ha1jt3_c_scale,w_1400.webp",
    srcSet:
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_200.webp 200w, " +
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_624.webp 624w, " +
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_997.webp 997w, " +
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_1378.webp 1378w, " +
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_1395.webp 1395w, " +
      "/quotes/marcusOnHorse_ha1jt3_c_scale,w_1400.webp 1400w",
    sizes: "(max-width: 1400px) 100vw, 1400px",
    alt: "Marcus Aurelius equestrian statue black and white photo",
    link: "/quotes/marcus-aurelius",
  },
  {
    name: "Seneca the Younger",
    description:
      "Seneca, a Roman Stoic philosopher, statesman, and tutor to Emperor Nero, emphasized the importance of wisdom, self-control, and the acceptance of fate. His writings, including Letters to Lucilius, explore how to live virtuously in a turbulent world.",
    src: "/quotes/senecaDeath_jurtn9_c_scale,w_1024.webp",
    srcSet:
      "/quotes/senecaDeath_jurtn9_c_scale,w_110.webp 110w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_471.webp 471w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_666.webp 666w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_781.webp 781w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_913.webp 913w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_1020.webp 1020w, " +
      "/quotes/senecaDeath_jurtn9_c_scale,w_1024.webp 1024w",
    sizes: "(max-width: 1024px) 100vw, 1024px",
    alt: "Seneca the Younger statue or portrait",
    link: "/quotes/seneca",
  },
  {
    name: "Epictetus",
    description:
      "Born a slave, Epictetus became one of the most influential Stoic philosophers. He taught that freedom comes from mastering the mind and desires. His Discourses and Enchiridion are foundational texts, offering guidance on living with integrity and resilience.",
    src: "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1380.webp",
    srcSet:
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_110.webp 110w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_364.webp 364w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_456.webp 456w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_555.webp 555w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_642.webp 642w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_713.webp 713w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_913.webp 913w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1029.webp 1029w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1012.webp 1012w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1243.webp 1243w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1351.webp 1351w, " +
      "/quotes/epictetusWriting_1_e6wlgd_c_scale,w_1380.webp 1380w",
    sizes: "(max-width: 1380px) 100vw, 1380px",
    alt: "Epictetus writing or portrait",
    link: "/quotes/epictetus",
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
      "https://www.linkedin.com/company/teleta-development",
      "https://www.youtube.com/@TeletaDevelopment",
      "https://x.com/12Eteen",
      "https://github.com/eteen12",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.stoicquotes.ca/quotes/search?q=stoic+quotes",
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
                href="/philosophers/seneca"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Seneca
              </Link>
            </li>
            <li>
              <Link
                href="/philosophers/epictetus"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Epictetus
              </Link>
            </li>
            <li>
              <Link
                href="/philosophers/marcus-aurelius"
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
              <SrcSetImage
                src={philosopher.src}
                alt={philosopher.alt}
                srcSet={philosopher.srcSet}
                sizes={philosopher.sizes}
              />
            </div>
            <div className="h-fit blackText flex flex-col">
              <div className={`${index === 1 ? "text-right" : ""}`}>
                <h2 className="text-2xl pt-2  md:text-2xl inline-block">
                  {philosopher.name}
                  <div className="h-[1.5px] bg-black w-full mt-2"></div>
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
                  link={philosopher.link}
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

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
    image: "https://www.stoicquotes.ca/bento/marcusFaceLogo.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspiring Stoic Quotes",
    description:
      "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
    image: "https://www.stoicquotes.ca/bento/marcusFaceLogo.webp",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Inspiring Stoic Quotes",
    url: "https://www.stoicquotes.ca/quotes",
    description:
      "Explore profound insights and motivational quotes from Stoic philosophers Marcus Aurelius, Seneca, and Epictetus. Enhance your resilience and wisdom with timeless teachings.",
    image: "https://www.stoicquotes.ca/bento/marcusFaceLogo.webp",
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/Teleta_Development/",
      "https://www.linkedin.com/in/ethan-breitkreutz-43399b322/",
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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:type" content={metadata.og.type} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify(metadata.schema)}
        </script>
      </Head>

      <div className="pb-20">
        <div className="relative isolate px-6 lg:px-8 ">
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-transform duration-300 transform hover:scale-105">
                read about the developer and writer{" "}
                <Link
                  href="/about"
                  className="font-semibold blackText"
                  aria-label="read about ethan, the stoic quotes developer"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight blackText sm:text-7xl">
                Timeless Wisdom from the Great Stoics.
              </h1>
              <p className="mt-8 text-lg blackText sm:text-xl/8">
                A curated collection of profound insights from the greatest
                Stoic philosophers, offering guidance on life, resilience, and
                inner peace
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative grid w-full  gap-5 p-5 mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1400px] md:grid-cols-2 lg:grid-cols-3 ">
        <div className="relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg shadow-lg rounded-xl h-[600px] lg:h-[630px] p-5 transition-transform duration-300 transform hover:scale-105">
          <div className="relative h-full w-full rounded-xl">
            <Image
              src="/quotes/marcusOnHorse.webp"
              alt="Marcus Aurelius equestrian statue black and white image"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className=" h-full w-full blackText items-center flex flex-col">
            <h2 className="text-2xl text-center pt-2 bold md:text-2xl">
              Marcus Aurelius
            </h2>
            <p className="text-center mt-2 ">
              Roman Emperor and Stoic philosopher, Marcus Aurelius, believed in
              controlling one's thoughts and emotions. His book Meditations is a
              cornerstone of Stoic thought.
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
              src="/bento/epictetusWriting.webp"
              alt="epictetus writing black and white image"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
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

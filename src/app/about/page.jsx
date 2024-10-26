import Image from "next/image";

export const metadata = {
  title: "Ethan Breitkreutz - About Me",
  description:
    "Learn more about Ethan Breitkreutz, a passionate Canadian web developer and business owner. Discover insights on Stoicism and explore his web development services at Teleta Development.",
  keywords:
    "Ethan Breitkreutz, web developer, Teleta Development, Stoicism, philosophy, personal growth, Canadian entrepreneur",
  openGraph: {
    title: "Ethan Breitkreutz - About Me",
    description:
      "Learn more about Ethan Breitkreutz, a passionate Canadian web developer and business owner. Discover insights on Stoicism and explore his web development services at Teleta Development.",
    url: "https://TeletaDevelopment.com/about", 
    type: "website",
    images: "https://www.stoicquotes.ca/misc/ethan.webp", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Breitkreutz - About Me",
    description:
      "Learn more about Ethan Breitkreutz, a passionate Canadian web developer and business owner. Discover insights on Stoicism and explore his web development services at Teleta Development.",
    image: "https://TeletaDevelopment.com/misc/ethan.webp", 
  },
};

export default function Page() {
  return (
    <>
      <div className="pb-20">
        <div className="relative isolate px-6 lg:px-8 ">
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-transform duration-300 transform hover:scale-105">
                visit teleta development{" "}
                <a
                  href="https://TeletaDevelopment.com"
                  target="_blank"
                  className="font-semibold blackText"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  see more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight blackText sm:text-7xl">
                Meet the one man show.
              </h1>
              <p className="mt-8 text-lg blackText sm:text-xl/8">
                Ethan Breitkreutz, Canadian business owner
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32 rounded-xl">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <p className="mt-2 text-4xl bold tracking-tight sm:text-5xl blackText">
                  About Me
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  My name is Ethan Breitkreutz, and I&apos;m passionate about
                  philosophy, particularly Stoicism, which has been a large part
                  of my life. As a high school student and an up-and-coming web
                  developer, I&apos;ve learned the value of simplicity and inner
                  strength that Stoicism teaches.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Here on this site, I share some quotes that have done me good,
                  and I hope they will do the same for you.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  For web development services or general inquiries, feel free
                  to contact me.
                </p>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden blackBg px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                />
                <div className="relative h-[500px] mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <Image
                    alt="Product screenshot"
                    src="/misc/ethan.webp"
                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 object-cover"
                    fill
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

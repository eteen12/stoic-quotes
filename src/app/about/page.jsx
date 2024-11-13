import ListSection from "@/components/sections/philosophers";
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
      <div className="h-fit py-32 sm:pt-40 px-4 sm:px-8 max-w-[1700px] mx-auto">
        <div className="relative isolate px-6 lg:px-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-[20%_80%] gap-8">
            <div className="w-full min-h-full relative">
              <div className="relative flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full transition-transform duration-300 transform hover:scale-105">
                <Image
                  alt="Ethan Breitkreutz author and owner of Teleta Development"
                  src="/misc/ethan.webp"
                  className="object-cover rounded-full"
                  fill
                />
              </div>
            </div>
            <div className="w-full h-full">
              <h1 className="text-3xl leading-normal sm:text-4xl sm:leading-relaxed max-w-3xl mx-auto xl:text-5xl xl:leading-normal">
                Ethan Breitkreutz is a{" "}
                <span className="underline">Canadian web developer</span>, who
                is passionate about Stoic philosophy, amongst other things.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ListSection
        title="Social links"
        items={[
          {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/ethan-breitkreutz",
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/ethan_breitkreutz/",
          },
          { name: "Github", link: "https://github.com/eteen12" },
        ]}
        buttonText="Want to talk?"
        buttonLink="https://teletadevelopment.com/contact"
      />
    </>
  );
}

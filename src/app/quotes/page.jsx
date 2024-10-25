import Image from "next/image";

export default function Page() {
  const cards = [
    { title: "Card 1", content: "This is the content for card 1." },
    { title: "Card 2", content: "This is the content for card 2." },
    { title: "Card 3", content: "This is the content for card 3." },
  ];

  return (
    <div className="relative grid w-full  gap-5 p-5 mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1400px] md:grid-cols-2 lg:grid-cols-3 ">
      <div className="relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg shadow-lg rounded-xl h-[550px] lg:h-[630px] p-5">
        <div className="relative h-full w-full rounded-xl">
          <Image
            src="/bento/epictetusWriting.png"
            alt="hi"
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
          <button
            type="button"
            className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base"
          >
            learn more
          </button>
        </div>
      </div>

      <div className="relative grid grid-cols-1 grid-rows-[50%_50%] whiteBg shadow-lg rounded-xl h-[550px] lg:h-[630px] p-5">
        <div className="relative h-full w-full rounded-xl">
          <Image
            src="/bento/epictetusWriting.png"
            alt="hi"
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
          <button
            type="button"
            className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base"
          >
            learn more
          </button>
        </div>
      </div>
      <div
        className="relative whiteBg shadow-lg grid grid-cols-1 grid-rows-[50%_50%] rounded-xl h-[550px] 
      lg:h-[630px] md:col-span-2 lg:col-span-1 md:w-[55%] lg:w-full md:flex md:flex-col md:justify-center md:mx-auto p-5"
      >
        <div className="relative h-full w-full rounded-xl">
          <Image
            src="/bento/epictetusWriting.png"
            alt="hi"
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
          <button
            type="button"
            className="rounded-md mt-10 blackBg px-7 py-1.5 whiteText shadow-sm hoverBg  tracking-tighter bold text-base"
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}

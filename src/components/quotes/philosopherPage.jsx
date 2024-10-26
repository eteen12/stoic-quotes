import Image from "next/image";

export default function PhilosopherPage({ philosopher }) {
  return (
    <div className="overflow-hidden whiteBg rounded-xl blackText tracking-tight py-16 shadow-lg">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base ">
          <h2 className="text-lg font-semibold ">About/Quotes</h2>
          <h3 className="mt-2 text-3xl font-bold leading-8 sm:text-4xl text-gray-900">
            {philosopher.name} - Quotes and Biography
          </h3>
        </div>
        <div className="mt-8">
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative mx-auto max-w-[700px] text-base">
              <Image
                alt={`Bust of ${philosopher.name} with a shadow transparent image`}
                src={philosopher.image}
                width={1184}
                height={1376}
                className="rounded-lg object-cover object-center "
              />
            </div>
          </div>
          <div className="mt-8 blackBg rounded-xl whiteText shadow-2xl px-12 p-10">
            <div className="mx-auto  text-base">
              <p className="text-lg">{philosopher.bio}</p>
            </div>
            <ul className="about-list text-lg mt-4">
              {philosopher.details.map((detail, index) => (
                <li key={index} className="pt-4 lightText">
                  <strong className="bold whiteText">{detail.label}:</strong>{" "}
                  {detail.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

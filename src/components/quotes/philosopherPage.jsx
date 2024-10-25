import Image from "next/image";

export default function PhilosopherPage({ philosopher }) {
  return (
    <div className="overflow-hidden whiteBg rounded-xl">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">About</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {philosopher.name} quotes, and biography
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <Image
                alt={philosopher.name}
                src={philosopher.image}
                width={1184}
                height={1376}
                className="rounded-lg object-cover object-center shadow-lg"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg blackText">{philosopher.bio}</p>
            </div>
            <ul className="about-list blackText">
              {philosopher.details.map((detail, index) => (
                <li key={index} className="pt-2">
                  <strong>{detail.label}:</strong> {detail.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

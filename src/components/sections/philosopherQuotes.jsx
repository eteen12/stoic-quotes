import Link from "next/link";

function PhilosopherQuotes({ thisPhilosopher }) {
  return (
    <>
      <div className="quote-container blackText tracking-tight flex justify-center p-5 px-4 sm:px-8 ">
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-[1700px]"
        >
          {thisPhilosopher.quotes.map((quote, index) => (
            <li
              key={index}
              className="py-6 border-b-2 border-black shrinkAnimation transition3"
            >
              <blockquote className="quote text-lg lg:text-xl">
                &quot;{quote.text}&quot;
              </blockquote>
              <div className="flex justify-between">
                <p className="text-lg lg:text-xl bold">- {displayName}</p>
                <Link
                  href={`/quotes/${thisPhilosopher.name.toLowerCase()}/${index}`}
                  aria-label={`Share quote from ${displayName}: ${quote.text}`}
                  className="text-lg lg:text-xl grayText"
                >
                  Share
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PhilosopherQuotes;

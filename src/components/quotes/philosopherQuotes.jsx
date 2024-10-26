import { FaShareFromSquare } from "react-icons/fa6";
import Link from "next/link";

function PhilosopherQuotes({ thisPhilosopher }) {
  // Check if the philosopher's name is Marcus-Aurelius
  const displayName =
    thisPhilosopher.name === "Marcus-Aurelius" ? "Marcus Aurelius" : thisPhilosopher.name;

  return (
    <>
      <h2 className="flex justify-center text-center blackText text-3xl md:text-4xl tracking-tight font-bold mt-10">
        Famous Quotes
      </h2>
      <div className="quote-container blackText tracking-tight flex justify-center p-5 ">
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px]"
        >
          {thisPhilosopher.quotes.map((quote, index) => (
            <li
              key={index} // Use index for the key, as quote.index is not defined in the map
              className="py-6 border-b border-gray-400 last:border-0 transition-transform duration-300 transform hover:scale-105"
            >
              <blockquote className="quote text-lg lg:text-xl">
                "{quote.text}"
              </blockquote>
              <div className="flex gap-10 mt-2">
                <p className="text-lg lg:text-xl">
                  - <strong>{displayName}</strong> {/* Use displayName here */}
                </p>
                <Link
                  href={`/philosophers/${thisPhilosopher.name.toLowerCase()}/${index}`} // Change quote.index to index
                  aria-label={`Share quote from ${displayName}: ${quote.text}`} // Use displayName here as well
                >
                  <FaShareFromSquare className="mt-1 text-2xl" />
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

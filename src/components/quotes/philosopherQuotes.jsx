import { FaShareFromSquare } from "react-icons/fa6";
import Link from "next/link";

function PhilosopherQuotes({ thisPhilosopher }) {
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
          {thisPhilosopher.quotes.map((quote) => (
            <li
              key={quote.index}
              className="py-6 border-b border-gray-400 last:border-0 transition-transform duration-300 transform hover:scale-105"
            >
              <blockquote className="quote text-lg lg:text-xl">
                {quote.text}
              </blockquote>
              <div className="flex gap-10 mt-2">
                <p className="text-lg lg:text-xl">
                  - <strong>{thisPhilosopher.name}</strong>
                </p>
                <Link
                  href={`/philosophers/${thisPhilosopher.name.toLowerCase()}/${quote.index - 1}`}
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

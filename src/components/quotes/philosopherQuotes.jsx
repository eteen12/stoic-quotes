import { FaShareFromSquare } from "react-icons/fa6";

function PhilosopherQuotes({ thisPhilosophersQuotes }) {
  return (
    <div className="quote-container blackText tracking-tight flex justify-center p-5">
      <ul role="list" className="divide-y divide-gray-200 max-w-[700px]">
        {thisPhilosophersQuotes.quotes.map((quote) => (
          <li key={quote.index} className="py-10">
            <blockquote className="quote text-lg lg:text-xl">
              {quote.text}
            </blockquote>
            <div className="flex gap-10">
              <p className="text-lg lg:text-xl">
                - <strong>{thisPhilosophersQuotes.name}</strong>
              </p>
              <FaShareFromSquare className="mt-1 text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhilosopherQuotes;

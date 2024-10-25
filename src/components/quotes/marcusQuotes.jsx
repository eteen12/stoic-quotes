"use client";
import { FaShareFromSquare } from "react-icons/fa6";
import { useState, useEffect } from "react";
import philosophers from "@/data/quotes.json";

function MarcusQuotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Array.isArray(philosophers.philosophers)) {
      const marcusQuotes = philosophers.philosophers.find(
        (philosopher) => philosopher.name === "Marcus Aurelius"
      )?.quotes;

      setData(marcusQuotes || []);
    }
  }, []);

  return (
    <div className="quote-container blackText tracking-tight flex justify-center p-5">
      <ul role="list" className="divide-y divide-gray-200 max-w-[700px]">
        {data.map((quote) => (
          <li key={quote.index} className="py-10">
            <p className="quote text-lg lg:text-xl">"{quote.text}"</p>
            <div className="flex gap-10">
              <p className="text-lg lg:text-xl">
                - <strong>Marcus Aurelius</strong>
              </p>
              <FaShareFromSquare className="mt-1 text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarcusQuotes;

"use client";
import { useState, useEffect } from "react";
import philosophers from "@/data/quotes.json";

function MarcusQuotesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Array.isArray(philosophers.philosophers)) {
      // Access the 'philosophers' array in the JSON
      const marcusQuotes = philosophers.philosophers.find(
        (philosopher) => philosopher.name === "Marcus Aurelius"
      )?.quotes;

      setData(marcusQuotes || []);
    }
  }, []);

  return (
    <div className="quote-container blackText">
      <h1>Marcus Aurelius Quotes</h1>
      {data.map((quote) => (
        <p key={quote.index} className="quote">
          {quote.text}
        </p>
      ))}
    </div>
  );
}

export default MarcusQuotesPage;

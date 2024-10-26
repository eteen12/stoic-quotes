"use client";
import { useEffect, useState } from "react";
import quotes from "@/data/dailyQuotes.json";

const DailyQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const id =
      (new Date().getDate() + new Date().getMonth() * 31) % quotes.length;
    const { quote, author } = quotes[id];
    setQuote(quote);
    setAuthor(author);
  }, []);

  return (
    <h2>
      &quot;{quote}&quot; - {author}
    </h2>
  );
};

export default DailyQuote;

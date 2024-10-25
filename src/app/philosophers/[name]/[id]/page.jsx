import { notFound } from "next/navigation";
import thisPhilosophers from "@/data/quotes.json";

export default function Page({ params }) {
    const {thisPhilosophers}
  return (
    <div>
      <h1>{quotes.name}</h1>
      <blockquote>{quote.text}</blockquote>
      <p>
        - <strong>{quotes.name}</strong>
      </p>
    </div>
  );
}

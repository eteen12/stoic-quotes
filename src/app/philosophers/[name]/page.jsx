import PhilosopherPage from "@/components/quotes/philosopherPage";
import PhilosopherQuotes from "@/components/quotes/philosopherQuotes";

import philosopherBio from "@/data/philosopherBio";
import philosopherQuotes from "@/data/quotes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const philosopherParams = Object.keys(philosopherBio).map((key) => ({
    name: key,
  }));
  const quoteParams = Object.keys(philosopherQuotes).map((key) => ({
    name: key,
  }));

  return [...philosopherParams, ...quoteParams];
}

export default async function Philosopher({ params }) {
  const { name } = await params;
  const philosopher = philosopherBio[name.toLowerCase()];
  const quotes = philosopherQuotes[name.toLowerCase()];

  if (!philosopher) {
    return notFound();
  }
  console.log("Philosopher Data:", philosopher);
  console.log("Quotes Data:", quotes);

  return (
    <>
      <PhilosopherPage philosopher={philosopher} />
      {/* <PhilosopherQuotes quotes={philosopher.quotes} /> */}
    </>
  );
}

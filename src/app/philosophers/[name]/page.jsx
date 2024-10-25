import PhilosopherPage from "@/components/quotes/philosopherPage";
import PhilosopherQuotes from "@/components/quotes/philosopherQuotes";

import philosopherBio from "@/data/philosopherBio";
import philosopherQuotesData from "@/data/quotes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const philosopherParams = Object.keys(philosopherBio).map((key) => ({
    name: key,
  }));
  const quoteParams = Object.keys(philosopherQuotesData).map((key) => ({
    name: key,
  }));

  return [...philosopherParams, ...quoteParams];
}

export default async function Philosopher({ params }) {
  const { name } = await params;
  const philosopher = philosopherBio[name.toLowerCase()];
  const thisPhilosopher = philosopherQuotesData[name.toLowerCase()];

  if (!philosopher) {
    return notFound();
  }

  return (
    <>
      <PhilosopherPage philosopher={philosopher} />
      <PhilosopherQuotes thisPhilosopher={thisPhilosopher} />
    </>
  );
}

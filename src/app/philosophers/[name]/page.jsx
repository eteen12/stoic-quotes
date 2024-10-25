import PhilosopherPage from "@/components/quotes/philosopherPage";
import philosophersData from "@/data/philosopherData";
import philosophers from "@/data/quotes";
import PhilosopherQuotes from "@/components/quotes/philosopherQuotes";
import { notFound } from "next/navigation";

// Example function to generate static paths
export async function generateStaticParams() {
  return Object.keys(philosophersData).map((key) => ({
    name: key,
  }));
}

export default async function Philosopher({ params }) {
  const { name } = await params;
  const philosopher = philosophersData[name];

  if (!philosopher) {
    return notFound();
  }
  const quote = philosophers.name;

  return (
    <>
      <PhilosopherPage philosopher={philosopher} />
      <PhilosopherQuotes name={name} quote={quote} />
    </>
  );
}

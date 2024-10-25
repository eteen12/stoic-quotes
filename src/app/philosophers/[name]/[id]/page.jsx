import { notFound } from "next/navigation";
import philosopherQuotesData from "@/data/quotes";

export async function generateStaticParams() {
  const quoteParams = [];

  for (const [philosopherKey, philosopher] of Object.entries(
    philosopherQuotesData
  )) {
    const name = philosopher.name.toLowerCase();

    philosopher.quotes.forEach((_, index) => {
      quoteParams.push({
        name,
        id: index.toString(),
      });
    });
  }
  return quoteParams;
}

export default async function Page({ params }) {
  const { id, name } = await params;
  const philosopher = Object.values(philosopherQuotesData).find(
    (p) => p.name.toLowerCase() === name
  );

  if (!philosopher) {
    notFound();
  }

  const quoteIndex = parseInt(id, 10);
  const quote = philosopher.quotes[quoteIndex];

  if (!quote) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center h-screen blackText">
      <h1 className="text-6xl font-bold">{quote.text}</h1>
    </div>
  );
}

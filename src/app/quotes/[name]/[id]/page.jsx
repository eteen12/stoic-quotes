import { notFound } from "next/navigation";
import philosopherQuotesData from "@/data/quotes";
import ShareButtons from "@/components/reusables/shareButtons";

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

export async function generateMetadata({ params }) {
  const { id, name } = await params;
  const philosopher = Object.values(philosopherQuotesData).find(
    (p) => p.name.toLowerCase() === name
  );

  if (!philosopher) {
    return {
      title: "Philosopher Not Found",
      description: "No such philosopher exists.",
    };
  }

  const quoteIndex = parseInt(id, 10);
  const quote = philosopher.quotes[quoteIndex];

  if (!quote) {
    return {
      title: "Quote Not Found",
      description: "This quote does not exist.",
    };
  }

  const postUrl = `https://www.stoicquotes.ca/${philosopher.name}/${id}`;

  const metaDescription = `${quote.text} - A quote by ${philosopher.name}`;
  const metaTitle = `${philosopher.name}: "${quote.text}"`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: postUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
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

  const postUrl = `https://www.stoicquotes.ca/philosophers/${philosopher.name.toLowerCase()}/${id}`;

  const displayName =
    philosopher.name === "Marcus-Aurelius"
      ? "Marcus Aurelius"
      : philosopher.name;

  return (
    <>
      <div className="h-screen py-32 sm:pt-40 px-4 sm:px-8 max-w-[1700px] mx-auto flex flex-col  justify-center">
        <div className="flex">
          <div className="sm:w-[45%]">
            <h1 className="text-3xl">&quot;{quote.text}&quot;</h1>
            <div className="h-0.5 blackBg w-full mt-5"></div>
          </div>
          <div className="sm:w-[45%] sm:ml-auto">
            <dir className="h-full p-0 m-0"></dir>
            <div className="h-0.5 blackBg w-full -mt-px hidden sm:block"></div>
            <p className="text-3xl mt-5 tracking-tight text-right">
              -{displayName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { notFound } from "next/navigation";
import philosopherQuotesData from "@/data/quotes";
import ShareButtons from "@/components/misc/shareButtons";

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

// Use async generateMetadata for dynamic metadata
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

  // Create meta description and title
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
      <div className="flex items-center justify-center h-[80vh] blackText flex-col text-center p-2">
        <h1 className="text-4xl font-bold">&quot;{quote.text}&quot;</h1>
        <p className="text-4xl mt-10">-{displayName}</p>
      </div>
      <div className="px-3">
        <div className=" whiteText blackBg rounded-t-xl flex flex-col pb-5">
          <div className="flex justify-center items-center gap-5 whiteText blackBg rounded-t-xl h-24 cursor-pointer">
            <ShareButtons
              postUrl={postUrl}
              quoteText={`"${quote.text}" - ${displayName}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

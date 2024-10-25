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

  const postUrl = `https://www.stoicquotes.ca/${philosopher.name}/${id}`;

  if (philosopher.name === "Marcus-Aurelius") {
    return (
      <>
        {" "}
        <div className="flex items-center justify-center h-[80vh] blackText flex-col text-center p-2">
          <h1 className="text-4xl font-bold">&quot;{quote.text}&quot;</h1>
          <p className="text-4xl mt-10">-Marcus Aurelius</p>
        </div>
        <div className="px-3">
          <div className=" whiteText blackBg rounded-t-xl flex flex-col pb-5">
            <div className="flex justify-center items-center gap-5 whiteText blackBg rounded-t-xl h-24 cursor-pointer">
              <ShareButtons
                postUrl={postUrl}
                quoteText={`"${quote.text}" - ${philosopher.name}`}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {" "}
      <div className="flex items-center justify-center h-[80vh] blackText flex-col text-center p-2">
        <h1 className="text-4xl font-bold">&quot;{quote.text}&quot;</h1>
        <p className="text-4xl mt-10">-{philosopher.name}</p>
      </div>
      <div className="px-3">
        <div className=" whiteText blackBg rounded-t-xl flex flex-col pb-5">
          <div className="flex justify-center items-center gap-5 whiteText blackBg rounded-t-xl h-24 cursor-pointer">
            <ShareButtons
              postUrl={postUrl}
              quoteText={`"${quote.text}" - ${philosopher.name}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

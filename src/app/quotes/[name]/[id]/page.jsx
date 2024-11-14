import { notFound } from "next/navigation";
import philosopherQuotesData from "@/data/quotes";
import ShareButtons from "@/components/reusables/shareButtons";
import Copy from "@/components/reusables/handleCopy";

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

  const postUrl = `https://www.stoicquotes.ca/quotes/${philosopher.name}/${id}`;

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

  const displayName =
    philosopher.name === "Marcus-Aurelius"
      ? "Marcus Aurelius"
      : philosopher.name;

  const postUrl = `https://www.stoicquotes.ca/quotes/${philosopher.name.toLowerCase()}/${id}`;
  const quoteText = `${quote.text} - ${displayName}`;

  return (
    <>
      <div className="h-screen py-32 sm:pt-40 px-4 sm:px-8 max-w-[1700px] mx-auto flex flex-col  justify-center">
        <div className="sm:flex">
          <div className="sm:w-[45%]">
            <h1 className="text-3xl sm:w-[75%]">&quot;{quote.text}&quot;</h1>
            <div className="h-0.5 blackBg w-full mt-5"></div>
          </div>
          <div className=" sm:w-[45%] sm:ml-auto">
            <dir className="h-full p-0 m-0"></dir>
            <div className="h-0.5 blackBg w-full -mt-px hidden sm:block"></div>
            <p className="text-3xl mt-5 tracking-tight text-right">
              -{displayName}
            </p>
            <div className="h-0.5 blackBg w-full mt-5 sm:hidden"></div>
          </div>
        </div>
        <div className="w-full md:w-[%] md:ml-auto lg:w-[61%] xl:w-[60%] 2xl:w-[59%] mt-5">
          <ul className="space-y-3 text-2xl">
            <li className="grayText">Share</li>
            <li className="">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                target="_blank"
                aria-label="Share on Facebook"
                className=" transition3 hoverText"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(quoteText)}`}
                target="_blank"
                aria-label="Share on Twitter"
                className=" transition3 hoverText"
              >
                Twitter
              </a>
            </li>
            <li>
              <Copy postUrl={postUrl} textSize="text-2xl" />
              <div className="h-0.5 bg-black w-28 mt-5"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

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

export async function generateMetadata({ params }) {
  const { name } = await params;
  const philosopher = philosopherBio[name.toLowerCase()];
  console.log(philosopher.image);

  if (!philosopher) {
    return {};
  }

  return {
    title: `${philosopher.name} - Biography and Quotes`,
    description: `Explore the biography and famous quotes of ${philosopher.name}. Discover insights and wisdom from one of the greatest philosophers.`,
    keywords: `Philosophy, ${philosopher.name}, Quotes, Biography, Wisdom, Life Lessons, Personal Development`,
    author: "Teleta Development",
    og: {
      title: `${philosopher.name} - Biography and Quotes`,
      description: `Explore the biography and famous quotes of ${philosopher.name}. Discover insights and wisdom from one of the greatest philosophers.`,
      url: `https://stoicquotes.ca/philosophers/${philosopher.name.toLowerCase()}`, // Update this with your actual URL
      image: philosopher.image,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${philosopher.name} - Biography and Quotes`,
      description: `Explore the biography and famous quotes of ${philosopher.name}.`,
      image: philosopher.image,
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${philosopher.name} - Biography and Quotes`,
      url: `https://stoicquotes.ca/philosophers/${philosopher.name.toLowerCase()}`, // Update this with your actual URL
      description: `Explore the biography and famous quotes of ${philosopher.name}. Discover insights and wisdom from one of the greatest philosophers.`,
      image: philosopher.image,
      sameAs: [
        "https://www.facebook.com/TeletaDevelopment",
        "https://www.instagram.com/Teleta_Development/",
        "https://www.linkedin.com/company/teleta-development",
        "https://www.youtube.com/@TeletaDevelopment",
        "https://github.com/eteen12",
      ],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.stoicquotes.ca/quotes/search?q=stoic+quotes",
        "query-input": "required name=search_term_string",
      },
    },
  };
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

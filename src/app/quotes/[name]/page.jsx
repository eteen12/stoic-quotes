import PhilosopherPage from "@/components/sections/philosopherPage";
import PhilosopherQuotes from "@/components/sections/philosopherQuotes";

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
      url: `https://www.stoicquotes.ca/quotes/${philosopher.name.toLowerCase()}`,
      image: philosopher.image,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${philosopher.name} - Biography and Quotes`,
      description: `Explore the biography and famous quotes of ${philosopher.name}.`,
      image: philosopher.image,
    },
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${philosopher.name} - Biography and Quotes`,
        url: `https://www.stoicquotes.ca/quotes/${philosopher.name.toLowerCase()}`,
        description: `Explore the biography and famous quotes of ${philosopher.name}. Discover insights and wisdom from one of the greatest philosophers.`,
        image: philosopher.image,
        sameAs: [
          "https://www.facebook.com/TeletaDevelopment",
          "https://www.instagram.com/Teleta_Development/",
          "https://www.linkedin.com/company/teleta-development",
          "https://www.youtube.com/@TeletaDevelopment",
          "https://x.com/12Eteen",
          "https://github.com/eteen12",
        ],
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.stoicquotes.ca/quotes/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Teleta Development",
        url: "https://teletadevelopment.com",
        logo: "https://teletadevelopment.com/teletaLogo.png",
        sameAs: [
          "https://www.facebook.com/TeletaDevelopment",
          "https://www.instagram.com/Teleta_Development/",
          "https://www.linkedin.com/company/teleta-development",
          "https://www.youtube.com/@TeletaDevelopment",
          "https://x.com/12Eteen",
          "https://github.com/eteen12",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-778-581-9151",
          contactType: "Customer Service",
          areaServed: "CA",
          availableLanguage: "English",
        },
      },
    ],
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

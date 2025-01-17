import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navBar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Stoic Quotes - Daily Wisdom from Stoic Philosophy",
  description:
    "Explore blogs and quotes from Stoic philosophers to inspire resilience and inner strength. Made by Teleta Development, a Canadian web development company.",
  keywords:
    "Stoicism, Stoic quotes, philosophy, wisdom, Marcus Aurelius, Seneca, Epictetus, daily quotes, personal growth, resilience",
  author: "Teleta Development",
  metadataBase: new URL("https://www.stoicquotes.ca"),
  og: {
    title: "Stoic Quotes",
    description:
      "Explore quotes from Stoic philosophers to inspire resilience and inner strength. Made by Teleta Development, a Canadian web development company.",
    url: "https://www.stoicquotes.ca",
    image: "https://www.stoicquotes.ca/stoicQuotesLogo.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stoic Quotes",
    description:
      "Explore daily Stoic quotes to inspire resilience and inner strength.",
    image: "https://www.stoicquotes.ca/stoicQuotesLogo.jpg",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Stoic Quotes",
      url: "https://www.stoicquotes.ca",
      description:
        "A collection of daily quotes and insights from Stoic philosophy.",
      image: "https://www.stoicquotes.ca/stoicQuotesLogo.jpg",
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
        target: "https://www.stoicquotes.ca/search?q={search_term_string}",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </head>

      <body
        className={`${inter.variable} antialiased transition-all duration-700`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

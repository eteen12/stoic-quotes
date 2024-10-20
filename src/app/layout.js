import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Stoic Quotes - Daily Wisdom from Stoic Philosophy",
  description:
    "Explore quotes from Stoic philosophers to inspire resilience and inner strength. Made by Teleta Development, a Canadian web development company.",
  keywords:
    "Stoicism, Stoic quotes, philosophy, wisdom, Marcus Aurelius, Seneca, Epictetus, daily quotes, personal growth, resilience",
  author: "Teleta Development",
  charset: "UTF-8",
  og: {
    title: "Stoic Quotes",
    description:
      "Explore quotes from Stoic philosophers to inspire resilience and inner strength. Made by Teleta Development, a Canadian web development company.",
    url: "https://www.stoicquotes.ca",
    image: "https://www.stoicquotes.ca/rando.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stoic Quotes",
    description:
      "Explore daily Stoic quotes to inspire resilience and inner strength.",
    image: "https://www.stoicquotes.ca/rando.png",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stoic Quotes",
    url: "https://www.stoicquotes.ca",
    description:
      "A collection of daily quotes and insights from Stoic philosophy.",
    image: "https://www.stoicquotes.ca/rando.png",
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/Teleta_Development/",
      "https://www.linkedin.com/in/ethan-breitkreutz-43399b322/",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.stoicquotes.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add Open Graph and Twitter meta tags */}
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
        {/* Add Schema.org markup for Google+ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

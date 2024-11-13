import NavBar from "@/components/layout/navBar";
import "../globals.css";

export const metadata = {
  title: "Read The Stoic Quotes Blog",
  description:
    "Explore a collection of stoic philosophy blogs, quotes, and insights to foster personal growth and resilience.",
  keywords:
    "Stoicism, philosophy, personal growth, quotes, Marcus Aurelius, Seneca, Epictetus, Canada",
  openGraph: {
    title: "Stoic Quotes Blog",
    description:
      "Explore a collection of stoic philosophy blogs, quotes, and insights to foster personal growth and resilience.",
    url: "https://www.stoicquotes.ca/blog",
    type: "website",
    images: "https://www.stoicquotes.ca/marcusFaceLogo.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stoic Quotes Blog",
    description:
      "Explore a collection of stoic philosophy blogs, quotes, and insights to foster personal growth and resilience.",
    images: "https://www.stoicquotes.ca/marcusFaceLogo.webp",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
}

import blogs from "@/components/blog/blogs";
import { notFound } from "next/navigation";
import Head from "next/head";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Head>
        <title>{post.title} | Stoic Quotes</title>
        <meta name="description" content={post.description} />
        <meta
          name="keywords"
          content="Stoicism, philosophy, Marcus Aurelius, Epictetus, Seneca, personal growth, canada"
        />
        <meta name="author" content="Teleta Development" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.imageUrl} />
        <meta
          property="og:url"
          content={`https://www.stoicquotes.ca/blog/${post.id}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.imageUrl} />

        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.imageUrl,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Teleta Development",
              logo: {
                "@type": "ImageObject",
                url: "https://www.stoicquotes.ca/logo.png", // Add your logo URL
              },
            },
            datePublished: post.date,
            description: post.description,
          })}
        </script>
      </Head>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="my-6" />
      <p>{post.content}</p>
      <div className="mt-6 text-gray-500">
        {post.author} &middot; {post.date}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

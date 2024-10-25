import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Head from "next/head";
import ShareButtons from "@/components/misc/shareButtons";
import blogs from "@/data/blogs";
import Author from "@/components/blog/author";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  const quoteText = `${post.title} - a stoic blog by ${post.author}`;
  const postUrl = `https://www.stoicquotes.ca/blog/${id}`;

  return (
    <div className="mx-auto mt-10 sm:mt-20 px-5 blackText mb-10 max-w-3xl text-center">
      <Head>
        <title>{post.title} | Stoic Quotes</title>
        <meta name="description" content={post.description} />
        <meta
          name="keywords"
          content="Stoicism, philosophy, Marcus Aurelius, Epictetus, Seneca, personal growth, Canada"
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
                url: "https://www.stoicquotes.ca/logo.png",
              },
            },
            datePublished: post.date,
            description: post.description,
          })}
        </script>
      </Head>

      <div>
        {/* Post Header */}
        <div className="pb-8">
          <p className="text-base font-semibold leading-7 tracking-tighter mediumBold lg:text-xl">
            {post.subject}
          </p>
          <h1 className="text-3xl font-semibold tracking-tighter bold sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-1 text-lg leading-8 tracking-tighter lg:text-2xl">
            {post.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[30rem] rounded-xl whiteBg mx-auto mb-8">
          <Image
            alt={post.alt}
            src={post.src}
            className="object-cover rounded-xl"
            fill
            priority
          />
        </div>

        {/* Content Sections */}
        <div className="text-left mx-auto max-w-xl leading-7 tracking-tighter">
          <h2 className="text-2xl lg:text-3xl bold">{post.h2}</h2>
          <p className="mt-2 lg:text-xl">{post.content}</p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5 lg:text-3xl">
            Relevant Quotes
          </h2>
          <p className="mt-2 lg:text-xl">{post.quotes}</p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5 lg:text-3xl">
            {post.h2v2}
          </h2>
          <p className="mt-2 lg:text-xl">{post.reflection}</p>
        </div>

        
        <div className="mt-10 text-center sm:flex justify-center gap-5 items-center">

          <ShareButtons postUrl={postUrl} quoteText={quoteText} />

          <Link href="/about" className="mb-6 flex justify-center items-center ">
            <Author post={post} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

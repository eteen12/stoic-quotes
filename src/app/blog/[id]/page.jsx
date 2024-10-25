import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Head from "next/head";

import blogs from "@/components/blog/blogs";
import Author from "@/components/blog/author";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="mx-auto mt-10 sm:mt-20 px-5 blackText mb-10">
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

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-9xl lg:grid-cols-2 lg:gap-x-8 ">
          <div className="lg:pr-4">
            <div className="">
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
          </div>
        </div>
        <div className="relative lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden w-full h-[30rem] rounded-xl whiteBg">
          <div className="relative w-full h-full rounded-xl">
            <Image
              alt={post.alt}
              src={post.src}
              className="object-cover rounded-xl"
              fill
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 ">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg tracking-tighter">
              <h2 className=" text-2xl lg:text-3xl bold">{post.h2}</h2>
              <p className="mt-2 lg:text-xl">{post.content}</p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5 lg:text-3xl">
                Relevant quotes
              </h2>
              <p className="mt-2 lg:text-xl">{post.quotes}</p>

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5 lg:text-3xl">
                {post.h2v2}
              </h2>
              <p className="mt-2 lg:text-xl">{post.reflection}</p>
            </div>
          </div>
        </div>
        <Link href="/about" className="flex">
          <Author post={post} />
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

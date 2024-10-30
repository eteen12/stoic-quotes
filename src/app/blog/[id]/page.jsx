import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/misc/shareButtons";
import blogs from "@/data/blogs";
import Author from "@/components/blog/author";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id);

  return {
    title: post.title,
    description: post.description,
    keywords: `Stoicism, ${post.title}, ${post.subject}, Marcus Aurelius, Epictetus, Seneca`,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.src],
      url: `https://www.stoicquotes.ca/blog/${post.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      image: post.imageUrl,
    },
  };
}

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
            alt={`${post.attributionText} ${", "} ${post.attributionDescription}`}
            src={post.src}
            className="object-cover rounded-xl"
            fill
            priority
          />
        </div>
        <div>
          <div className="text-xs -mt-8 text-right">
            <div className="flex justify-end">
              <a
                href={post.attributionLink}
                className="underline"
                target="_blank"
                aria-label={`link to ${post.attributionText} ${""} ${post.attributionDescription}`}
              >
                {post.attributionText}
              </a>
              <p>, {post.attributionDescription}</p>
            </div>
            <a
              className="mt-2 underline"
              target="_blank"
              href={post.imageLicense}
              aria-label="link to image license"
            >
              license
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="text-left mx-auto max-w-3xl leading-7 tracking-tighter mt-5">
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
          <ShareButtons
            postUrl={postUrl}
            quoteText={quoteText}
            className="transition-transform duration-300 transform hover:scale-105"
          />

          <Link
            href="/about"
            className="mb-6 flex justify-center items-center "
          >
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

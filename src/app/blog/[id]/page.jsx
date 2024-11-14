import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/reusables/shareButtons";
import blogs from "@/data/blogs";
import Author from "@/components/reusables/author";

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
    <div className="mx-auto pt-32 px-4 sm:px-8 mb-10 max-w-[1700px] text-center">
      <div>
        {/* Post Header */}
        <div className="text-left md:w-[60%] lg:w-[50%] pt-10 mb-5">
          <h1 className="relative blackText text-4xl md:text-6xl lg:text-7xl inline-block">
            {post.title}
            <div className="h-0.5 blackBg w-full mt-5 "></div>
          </h1>
        </div>
        <div className="text-right md:w-[40%] lg:w-[30%] sm:ml-auto">
          <p className="text-lg lg:text-xl">{post.description}</p>
        </div>

        <div className="relative w-full h-[30rem] lg:h-[40rem] whiteBg mx-auto mt-8 max-w-4xl lg:mx-0 lg:ml-auto">
          <Image
            alt={`${post.attributionText} ${", "} ${post.attributionDescription}`}
            src={post.src}
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="text-right mt-5 ">
          <div className="flex flex-col justify-end text-xs max-w-[200px] ml-auto">
            <a
              href={post.attributionLink}
              className="underline"
              target="_blank"
              aria-label={`link to ${post.attributionText} ${post.attributionDescription}`}
            >
              {post.attributionText},
            </a>

            <span> {post.attributionDescription}</span>

            <a
              className="underline"
              target="_blank"
              href={post.imageLicense}
              aria-label="link to image license"
            >
              license
            </a>
          </div>
        </div>
        {/* Content Sections */}
        <div className="mt-10">
          <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-5 py-5">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-left">{post.h2}</h2>
              <div className="h-0.5 blackBg w-full mt-5 inline-block lg:w-[98%]"></div>
              <p className="text-lg lg:text-xl mt-5 lg:text-left">
                {post.content}
              </p>
            </div>
            <div>
              <div className="py-5 lg:py-0">
                <h2 className="text-4xl md:text-5xl lg:text-right ">
                  {post.h2v2}
                </h2>
                <div className="h-0.5 blackBg w-full mt-5 inline-block lg:w-[98%]"></div>
                <p className="text-lg lg:text-xl mt-5 lg:text-right">
                  {post.reflection}
                </p>
              </div>
              <div className="py-5">
                <p className="text-lg lg:text-xl mt-5 lg:text-right">
                  {post.quotes}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-5 justify-center lg:justify-start">
          <ShareButtons postUrl={postUrl} quoteText={quoteText} className="" />

          <Link href="/about" className="mb-6 flex ">
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

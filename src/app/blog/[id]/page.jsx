import blogs from "@/components/blog/blogs";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="my-6" />
      <p>{post.content}</p>
      <div className="mt-6 text-gray-500">
        {post.author} &middot; {post.date} &middot; {post.readingTime}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

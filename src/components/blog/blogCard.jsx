import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <img
          alt={post.title}
          src={post.imageUrl}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              {post.title}
            </h2>

            <p className="mt-3 text-base text-gray-500">{post.description}</p>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            {post.author} &middot; {post.date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

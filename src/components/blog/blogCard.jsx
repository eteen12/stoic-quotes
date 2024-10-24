import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col overflow-hidden whiteBg rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        <div className="relative h-48">
          <Image alt={post.alt} src={post.src} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <p className="text-sm font-medium text-indigo-600">
              {post.subject}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="mt-3 text-base text-gray-500">{post.description}</p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block h-8 w-8 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time>{post.date}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

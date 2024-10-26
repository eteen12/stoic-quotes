import Link from "next/link";
import Image from "next/image";
import Author from "./author";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-black min-h-[500px] max-w-[500px] mx-auto">
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={`${post.attributionText} ${", "} ${post.attributionDescription}`}
            src={post.src}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <p className="text-sm lg:text-base font-medium">{post.subject}</p>
            <h3 className="mt-2 lg:mt-1 text-xl lg:text-2xl font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="mt-3 text-base lg:text-lg text-gray-500 line-clamp-3 overflow-hidden max-h-[100px]">
              {post.description}
            </p>
          </div>
          <Author post={post} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

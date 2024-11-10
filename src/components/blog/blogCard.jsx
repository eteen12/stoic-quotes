import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} className="mb-5">
      <div className="flex flex-col overflow-hidden hover:shadow-sm shrinkAnimation transition3 blackText min-h-[500px] h-full max-w-[500px] mx-auto">
        {/*BORDER*/}
        <div className="flex w-full">
          <span className="h-0.5 blackBg w-[70%] mt-2"></span>
          <div className="mr-auto px-2 text-nowrap text-sm">{post.subject}</div>
          <span className="h-0.5 blackBg w-[20%] mt-2"></span>
        </div>
        {/*CONTENT*/}
        <div className="relative h-60 overflow-hidden">
          <Image
            alt={`${post.attributionText} ${", "} ${post.attributionDescription}`}
            src={post.src}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <h1 className="mt-2 lg:mt-1 text-xl lg:text-2xl font-semibold text-gray-900">
              {post.title}
            </h1>
            <p className="mt-3 text-base lg:text-lg grayText line-clamp-3 overflow-hidden max-h-[100px]">
              {post.description}
            </p>
          </div>
        </div>
        {/*BORDER*/}
        <div className="flex w-full">
          <span className="h-0.5 blackBg w-[20%] mt-2"></span>
          <div className="mr-auto px-2 text-nowrap text-sm">{post.date}</div>
          <span className="h-0.5 blackBg w-[70%] mt-2"></span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

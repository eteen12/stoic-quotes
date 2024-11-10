import BlogCard from "../blog/blogCard";
import blogData from "@/data/blogs";

export default function FeaturedBlogs() {
  const featuredBlogIds = ["8", "1"];
  const featuredPosts = blogData.filter((post) =>
    featuredBlogIds.includes(post.id)
  );

  return (
    <div className="h-fit w-full pb-12 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl lg:text-5xl tracking-tight text-right">
          - Featured Blogs
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 md:w-[70%] mr-auto">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

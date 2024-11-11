import BlogCard from "../blog/blogCard";
import blogData from "@/data/blogs";
import Button from "../reusables/button";

export default function FeaturedBlogs() {
  const featuredBlogIds = ["8", "1"];
  const featuredPosts = blogData.filter((post) =>
    featuredBlogIds.includes(post.id)
  );

  return (
    <div className="h-fit w-full pb-12 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
      <div className="mb-20 md:mb-32">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl lg:text-5xl tracking-tight text-right">
          - Featured Blogs
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-16 md:w-[70%] lg:w-[60%] mr-auto ">
        {featuredPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            className={`h-[350px] sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[800px]`}
            imageHeight={`h-60 sm:h-72 md:h-80 lg:h-[400px] xl:h-[600px]`}
            textSize={`text-2xl sm:text-2xl xl:text-3xl lg:text-4xl`}
            blogBorderTextSize={`text-sm sm:text-base md:text-lg lg:text-xl`}
          />
        ))}
      </div>
      <Button link="/blogs" text="View all blogs" className="" />
    </div>
  );
}

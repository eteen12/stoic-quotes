import BlogCard from "./blogCard";
import blogData from "@/data/blogs";
import Button from "../reusables/button";

export default function FeaturedBlogs() {
  const featuredBlogIds = ["2", "1"];
  const featuredPosts = blogData.filter((post) =>
    featuredBlogIds.includes(post.id)
  );

  return (
    <>
      <div className="h-fit w-full pb-24 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-left">
            Featured Blogs -
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-16 md:w-[70%] lg:w-[50%] ml-auto ">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              className={`h-[350px] sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[800px]`}
              imageHeight={`h-60 sm:h-72 md:h-80 lg:h-[400px] xl:h-[550px]`}
              textSize={`text-2xl sm:text-2xl xl:text-3xl lg:text-4xl`}
              blogBorderTextSize={`text-sm sm:text-base md:text-lg lg:text-xl -mt-px md:-mt-1.5`}
            />
          ))}
        </div>
        <div className="w-full flex md:justify-start md:-mt-20 md:pt-1">
          <Button
            link="/blog"
            text="View all blogs"
            aria="go to the blogs page section"
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </>
  );
}

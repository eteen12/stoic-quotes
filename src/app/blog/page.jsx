"use client";
import { useState } from "react";
import Link from "next/link";

import Button from "@/components/reusables/button";
import Search from "@/components/reusables/search";
import BlogCard from "@/components/sections/blogCard";
import blogs from "@/data/blogs";

function Page() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  return (
    <>
      <div className="pb-20">
        <div className=" h-fit py-24 pt-32 sm:pt-52 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto ">
          <div className="blackText w-full pt-10 flex">
            <h1 className="blackText text-6xl sm:text-8xl md:text-9xl ">
              Blog
            </h1>
            <span className="aria-hidden h-1.5 w-10 blackBg mt-8 ml-2 sm:mt-14 sm:h-2 sm:w-12 md:mt-20 md:h-3 md:w-14"></span>
          </div>
          <div className="flex gap-2 mt-5 sm:mt-6">
            <Button
              link="/about"
              text="My pick"
              className="transition3 shrinkAnimation"
            />
          </div>

          <div className="w-full relative mt-14">
            <div className="w-full mt-16 text-lg sm:text-xl sm:mt-24 ">
              <h2 className="  sm:ml-auto md:w-[50%] lg:w-[30%] tracking-tight">
                Posting weekly blogs containing stoic perspectivies, wisdom,
                ideas, and thoughts conerning modern day life, and events. Read
                the blog and share the links with others.
              </h2>
            </div>
            <div className="lg:flex lg:space-x-8">
              <div className="h-0.5 bg-black w-full sm:w-[10%] lg:w-[28%] xl:w-[29%] mt-7 hidden lg:block"></div>
              <div className="border-b-2 border-black mt-7 hidden lg:block w-[20%]"></div>
              <div className="border-b-2 border-black mt-7 sm:w-[47%] md:w-[50%] sm:ml-auto "></div>
              <div className="sm:mt-1.5 lg:hidden">
                <div className="h-0.5 blackBg sm:w-[47%] sm:-mt-2 hidden sm:block lg:hidden"></div>
              </div>
            </div>
          </div>

          <div className=" md:ml-auto lg:w-[100%] md:-mt-7">
            <p className="text-lg sm:text-xl mt-10">Search blogs</p>
            <Search blogs={blogs} setFilteredBlogs={setFilteredBlogs} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-[1700px] mx-auto px-4 ">
          {filteredBlogs.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              className={`min-h-[500px] h-full max-w-[500px] mx-auto`}
              imageHeight={`h-60`}
              textSize={`text-xl lg:text-2xl`}
              blogBorderTextSize={`text-sm`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;

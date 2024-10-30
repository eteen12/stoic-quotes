"use client";
import { useState } from "react";
import Link from "next/link";

import Search from "@/components/misc/search";
import BlogCard from "@/components/blog/blogCard";
import blogs from "@/data/blogs";





function Page() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  return (
    <>
      <div className="pb-20">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-transform duration-300 transform hover:scale-105">
                read about the developer and writer{" "}
                <Link href="/about" className="font-semibold blackText">
                  <span aria-hidden="true" className="absolute inset-0" />
                  read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight blackText sm:text-7xl">
                Read the stoic quotes blog.
              </h1>
              <p className="mt-8 text-lg blackText sm:text-xl/8">
                Posting weekly, containing stoic insights, wisdom and
                reflections.
              </p>

              <Search blogs={blogs} setFilteredBlogs={setFilteredBlogs} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto">
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;

"use client";
import { useState } from "react";
import { IoIosClose, IoMdSearch } from "react-icons/io";

const Search = ({ blogs, setFilteredBlogs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredBlogs = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBlogs(filteredBlogs);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilteredBlogs(blogs);
    setSubmitted(false);
  };

  return (
    <div className="items-center justify-center transition-all duration-700">
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex items-center mt-10">
          <input
            type="text"
            placeholder="Marcus Aurelius, Love..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-b-2 pr-3 py-2.5 border-black sm:w-[45%] lg:w-[49%]  placeholder:text-gray-500 text-lg sm:text-xl "
          />
          <div className="absolute right-0 -bottom-10 sm:bottom-0">
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-x-2 px-6 bold py-0.5 sm:py-1 rounded-full border-2 border-black shrinkAnimation transition3 hover:bg-black hover:text-white "
            >
              Search
            </button>
          </div>
        </div>
      </form>
      {submitted && (
        <ul className="mt-10 flex justify-start ml-1 blackText">
          <li className="flex items-center">
            <p className="text-lg"> &quot;{searchTerm}&quot;</p>
            <IoIosClose
              className="mt-px text-2xl cursor-pointer ml-2"
              onClick={handleReset}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Search;

"use client";
import { useState } from "react";
import { IoIosClose, IoMdSearch } from "react-icons/io";

const Search = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilteredItems([]);
    setSubmitted(false);
  };

  return (
    <div className="mt-10 items-center justify-center md:px-16">
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex items-center whiteBg">
          <IoMdSearch
            className="absolute w-8 h-8 left-2.5 blackText"
          />

          <input
            type="text"
            placeholder="Marcus Aurelius, Death, Love..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-14 pr-3 py-2.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
          <button
            type="submit"
            className="ml-2 blackBg white-text bold rounded-md px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      {submitted && filteredItems.length > 0 && (
        <ul className="mt-10 flex justify-start ml-1 blackText">
          {filteredItems.map((item) => (
            <li key={item.id} className="flex items-center">
              {item.name}
              <IoIosClose
                className="mt-px text-2xl cursor-pointer ml-2"
                onClick={handleReset} // Reset on click
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

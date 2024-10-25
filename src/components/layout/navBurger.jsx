"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import "@/app/globals.css";

export default function NavBurger() {
  const [opened, setOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handleClose = (index) => {
    setActiveIndex(index);
    setOpened(false);
    setTimeout(() => setActiveIndex(null), 500); 
  };

  const menuItems = [
    { name: "Quotes", href: "/quotes" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Home", href: "/" },
  ];

  return (
    <>
      <label htmlFor="check" className="transition-all ease duration-700 z-50">
        <input
          type="checkbox"
          id="check"
          className="sr-only"
          readOnly
          onClick={handleToggle}
        />
        <span className="blackBg"></span>
        <span className="blackBg"></span>
        <span className="blackBg"></span>
      </label>
      <div
        className={`fixed top-0 left-0 w-full min-h-[100vh] whiteBg transition-opacity duration-500 ease-in-out flex flex-col z-20 
          ${opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-start py-10 pt-20 gap-8 tracking-tighter bold text-2xl md:text-3xl ">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <div
                className={`flex justify-between items-center transition-transform duration-300 
                  ${activeIndex === index ? "transform translate-x-4" : ""}`} // Move right on click
              >
                <Link
                  href={item.href}
                  className="ml-5"
                  onClick={() => handleClose(index)}
                >
                  {item.name}
                </Link>
                <Link href={item.href}>
                  <IoIosArrowForward
                    className="mt-px mr-3.5 text-5xl"
                    onClick={() => handleClose(index)} // Pass index here
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

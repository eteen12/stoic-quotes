"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import styles from "./Burgers.module.css";

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
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <label
        htmlFor="check"
        aria-label="click to see selection of website pages"
        className={`${styles.burgerLabel} transition-all ease duration-700 z-50`}
      >
        <input
          type="checkbox"
          aria-label="click to see selection of website pages"
          id="check"
          className={styles.hiddenCheckbox}
          readOnly
          onClick={handleToggle}
        />
        <span
          className={`${styles.burgerSpan} bg-black ${opened ? styles.checkedSpan1 : ""}`}
        ></span>
        <span
          className={`${styles.burgerSpan} bg-black ${opened ? styles.checkedSpan2 : ""}`}
        ></span>
        <span
          className={`${styles.burgerSpan} bg-black ${opened ? styles.checkedSpan3 : ""}`}
        ></span>
      </label>
      <div
        className={`fixed top-0 left-0 w-full min-h-[100vh] whiteBg transition-opacity duration-500 ease-in-out flex flex-col z-20 mt-12 sm:mt-14 px-4 sm:px-8 
          ${opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-start gap-4 tracking-tighter text-xl sm:text-2xl">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <div
                className={`flex justify-between items-center transition-transform duration-300 
                  ${activeIndex === index ? "transform translate-x-4" : ""}`}
              >
                <Link
                  href={item.href}
                  className=""
                  aria-label={`go to the ${item.name} page section`}
                  onClick={() => handleClose(index)}
                >
                  {item.name}
                </Link>
                <Link href={item.href}>
                  <GoArrowRight
                    className="mt-px  text-5xl"
                    aria-label={`go to the ${item.name} page section`}
                    onClick={() => handleClose(index)}
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

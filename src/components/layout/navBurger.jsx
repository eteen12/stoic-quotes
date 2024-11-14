"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
        className={`fixed top-0 left-0 w-full min-h-[100vh] bg-black transition-opacity duration-500 ease-in-out flex flex-col z-20 pt-56 px-8
          ${opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-start whiteText tracking-tighter text-3xl  space-y-4">
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
              </div>
            </li>
          ))}
        </ul>

        <div className="text-right w-full mt-4">
          <div className="h-1 w-full whiteBg"></div>
          <p className="whiteText">
            <span className="text-sm/6 ">
              &copy; 2024{" "}
              <a
                className="hoverText shrinkAnimation transition3 text-sm"
                href="https://teletadevelopment.com"
                target="_blank"
              >
                Teleta Development
              </a>{" "}
              , All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

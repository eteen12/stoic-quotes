"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function NavBurger() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((prevOpened) => !prevOpened);
  };
  const handleClose = () => {
    setOpened(false);
  };

  const menuItems = [
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "Faq", href: "/#faq" },
    { name: "Home", href: "/" },
  ];

  return (
    <>
      <label htmlFor="check" className="transition-all ease duration-700 z-50 ">
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
        <ul className="flex flex-col items-start py-10 pt-20 gap-8 tracking-tighter bold text-2xl md:text-3xl">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 w-full">
              <div className="flex justify-between items-center">
                <Link href={item.href} className="ml-5" onClick={handleClose}>
                  {item.name}
                </Link>
                <Link href={item.href}>
                  <IoIosArrowForward
                    className="mt-px mr-3 text-3xl"
                    onClick={handleClose}
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

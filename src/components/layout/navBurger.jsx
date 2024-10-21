"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function NavBurger() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
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
      <div
        className={classNames(`tham tham-e-squeeze tham-w-6`, {
          "tham-active": opened,
        })}
        onClick={handleToggle}
        aria-label={opened ? "Close menu" : "Open menu"}
        aria-expanded={opened}
        role="button"
      >
        <div className="tham-box">
          <div className="tham-inner darkColor" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames(
          "fixed top-16 left-0 w-full h-screen bg-gray-50 transition-opacity duration-500 ease-in-out flex flex-col",
          {
            "opacity-100 pointer-events-auto": opened,
            "opacity-0 pointer-events-none": !opened,
          }
        )}
      >
        <ul
          className="flex flex-col items-start py-10 gap-8 text-2xl ralewayBold darkColor"
          style={{ "--font-weight": "500" }}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 w-full">
              <div className="flex justify-between items-center">
                <Link href={item.href} className="ml-6" onClick={handleClose}>
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
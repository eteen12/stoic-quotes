"use client";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useNavHandler } from "../hooks/useNavHandler";
import NavBurger from "./navBurger";

const links = [
  { href: "/quotes", text: "Quotes" },
  { href: "/blog", text: "Blog" },
  { href: "/about", text: "About" },
  { href: "https://ethanbdev.com/contact", text: "Contact" },
];
const menuItems = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "https://ethanbdev.com/contact" },
  { name: "Policies", path: "/policies" },
  { name: "Home", path: "/" },
];

export default function NavBar() {
  const { scrollingDown, shadow, opacity } = useNavHandler();

  return (
    <header
      className={`fixed justify-between items-center w-full h-14 z-50 transition-all duration-700 blackText tracking-tight text-2xl
    ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}
      style={{
        boxShadow: shadow,
        background: `rgba(255, 255, 255, ${opacity})`,
      }}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-8  mt-2.5 mx-auto max-w-[1700px]">
        <Link href="/" aria-label="Go to stoic quotes home page">
          <h2 className="relative tracking-tight shrinkAnimation transition3 hoverText">
            Stoicquotes.ca
          </h2>
        </Link>

        <div className="hidden md:flex items-center px-2 tracking-tight">
          <ul className="flex items-center">
            {links.map((link, index) => (
              <li key={index} className="ml-10 hoverText">
                <Link
                  aria-label={`go to the ${link.text} section page`}
                  href={link.href}
                  rel={link.href === "/shop" ? "preload" : undefined}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="text-xl md:text-2xl"></li>
          </ul>
        </div>

        <div className="md:hidden flex gap-5">
          <NavBurger />
        </div>
      </div>
    </header>
  );
}

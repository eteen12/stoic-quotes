"use client";

import { useNavHandler } from "@/hooks/useNavHandler";
import Link from "next/link";
import NavBurger from "./navBurger";

export default function NavBar() {
  const { scrollingDown, shadow, background, text } = useNavHandler();

  return (
    <header
      className={`fixed flex justify-between items-center w-full h-16 z-50 transition-all duration-700  ${
        scrollingDown ? "-translate-y-full" : "translate-y-0 "
      }`}
      style={{
        boxShadow: shadow,
        background,
      }}
    >
      <div
        className={`flex justify-between items-center w-full px-5 lg:px-8 xl:px-12 2xl:px-20 transition-all duration-700
          `}
        style={{
          color: text,
        }}
      >
        <Link href="/" aria-label="Go to Plumbing homepage">
          <h2 className="relative tracking-tighter text-2xl bold">
            Stoic Quotes
          </h2>
        </Link>
        <div className="sm:hidden flex gap-5">
          <NavBurger />
        </div>
        <div className="hidden sm:flex items-center px-2 tracking-tighter">
          <ul className="flex items-center">
            <Link href="/shop" rel="preload">
              <li className="ml-10 hover:border-b text-xl md:text-2xl">Shop</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 hover:border-b text-xl md:text-2xl">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b text-xl md:text-2xl">Home</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

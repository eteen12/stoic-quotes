"use client";

import { useNavHandler } from "@/hooks/useNavHandler";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import NavBurger from "./navBurger";

export default function NavBar() {
  const { scrollingDown, shadow, background, text } = useNavHandler();

  const links = [
    { href: "/shop", text: "Quotes" },
    { href: "/contact", text: "Blog" },
  ];

  const menuItems = [
    { name: "Bookstore", path: "/bookstore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Policies", path: "/policies" },
  ];

  return (
    <header
      className={`fixed flex justify-between items-center w-full h-16 z-50 transition-all duration-700 md:h-24 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0 "
      }`}
      style={{
        boxShadow: shadow,
        background,
      }}
    >
      <div
        className={`flex justify-between items-center w-full px-5 lg:px-8 xl:px-12 2xl:px-20 transition-all duration-700`}
        style={{
          color: text,
        }}
      >
        <Link href="/" aria-label="Go to Plumbing homepage">
          <h2 className="relative tracking-tighter text-2xl bold z-50">
            Stoic Quotes
          </h2>
        </Link>

        <div className="hidden sm:flex items-center px-2 tracking-tighter">
          <ul className="flex items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                rel={link.href === "/shop" ? "preload" : undefined}
              >
                <li className="ml-10 hover:border-b text-xl md:text-2xl bold">
                  {link.text}
                </li>
              </Link>
            ))}
            <li className="ml-10 hover:border-b text-xl md:text-2xl">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="rounded-md blackBg px-8 py-1.5 whiteText shadow-sm hoverBg tracking-tighter bold text-xl flex">
                    More
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {menuItems.map((item, index) => (
                      <MenuItem key={index}>
                        {item.isButton ? (
                          <button
                            type="submit"
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            {item.name}
                          </Link>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </ul>
        </div>

        <div className="sm:hidden flex gap-5">
          <NavBurger />
        </div>
      </div>
    </header>
  );
}

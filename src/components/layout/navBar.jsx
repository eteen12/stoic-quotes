import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import NavBurger from "./navBurger";

export default function NavBar() {
  const links = [
    { href: "/quotes", text: "Quotes" },
    { href: "/blog", text: "Blog" },
  ];
  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Policies", path: "/policies" },
    { name: "Home", path: "/" },
  ];

  return (
    <header className="fixed justify-between items-center w-full h-14 z-50 transition-all duration-700 blackText tracking-tight text-xl sm:text-2xl md:text-2xl whiteBg">
      <div className="flex justify-between items-center w-full px-4 sm:px-8  mt-2.5  max-w-7xl mx-auto">
        <Link href="/" aria-label="Go to stoic quotes home page">
          <h2 className="relative tracking-tight z-50 transition-transform duration-300 transform hoverText">
            StoicQuotes.ca
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
            <li className="ml-10 text-xl md:text-2xl">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className="rounded-md blackBg px-8 py-1.5 whiteText shadow-sm hoverBg flex tracking-tight md:text-2xl -mr-2 transition-transform duration-300 transform hover:scale-105"
                    aria-label="click the more button for an extended choice of pages"
                  >
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
                            aria-label={`go to the ${item.name} page`}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            aria-label={`go to the ${item.name} page`}
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

        <div className="md:hidden flex gap-5">
          <NavBurger />
        </div>
      </div>
    </header>
  );
}

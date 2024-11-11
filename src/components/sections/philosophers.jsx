"use client";
import Button from "../reusables/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function PhilosopherSection() {
  const philosophers = [
    { name: "Marcus Aurelius", link: "/philosophers/marcus-aurelius" },
    { name: "Seneca the Younger", link: "/philosophers/seneca" },
    { name: "Epictetus", link: "/philosophers/epictetus" },
  ];

  return (
    <div className="h-full py-24">
      <div className="h-full w-full px-6 lg:px-8 max-w-[1700px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl lg:text-5xl tracking-tight text-right">
            - Read quotes from the <br /> famous stoics
          </h2>
        </div>

        <div className="py-10">
          <ul className="space-y-8">
            {philosophers.map((philosopher) => (
              <li
                key={philosopher.name}
                className="border-b border-gray-300 pb-5 text-lg sm:text-xl liStyle"
              >
                <Link
                  href={philosopher.link}
                  className="flex justify-between"
                  onClick={(e) => handleClick(e, philosopher.link)}
                >
                  {philosopher.name}
                  <FaArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button text="View all philosophers" link="/" className="" />
      </div>
    </div>
  );
}
const handleClick = (e, link) => {
  e.preventDefault();

  const anchor = e.currentTarget;
  anchor.classList.add("hovered");

  setTimeout(() => {
    window.location.href = link;
  }, 500);
};

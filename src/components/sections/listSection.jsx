"use client";
import Button from "../reusables/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ListSection({ title, items, buttonText, buttonLink }) {
  const handleClick = (e, link) => {
    e.preventDefault();

    const anchor = e.currentTarget;
    anchor.classList.add("hovered");

    setTimeout(() => {
      window.location.href = link;
    }, 500);
  };

  return (
    <div className="h-full pb-24">
      <div className="h-full w-full px-6 lg:px-8 max-w-[1700px] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-right">
            - {title}
          </h2>
        </div>

        <div className="py-10">
          <ul className="space-y-8">
            {items.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-300 pb-5 text-lg sm:text-xl liStyle"
              >
                <Link
                  href={item.link}
                  className="flex justify-between"
                  onClick={(e) => handleClick(e, item.link)}
                >
                  {item.name}
                  <FaArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button
          text={buttonText}
          link={buttonLink}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}

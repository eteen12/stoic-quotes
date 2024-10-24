import Link from "next/link";
import Search from "@/components/misc/search";

const items = [
  { id: 1, name: "Marcus Aurelius" },
  { id: 2, name: "Death" },
  { id: 3, name: "Love" },
  { id: 4, name: "Loneliness" },
  { id: 5, name: "Seneca" },
  { id: 6, name: "Epictetus" },
];

export default function Page() {
  return (
    <div className="">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              read about the developer and writer{" "}
              <Link href="/about" className="font-semibold blackText">
                <span aria-hidden="true" className="absolute inset-0" />
                read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight blackText sm:text-7xl">
              Read the stoic quotes blog.
            </h1>
            <p className="mt-8 text-lg blackText sm:text-xl/8">
              Posted weekly, containing stoic insights, wisdom and reflections.
            </p>
            <Search items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

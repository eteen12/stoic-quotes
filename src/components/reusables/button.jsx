import Link from "next/link";

export default function Button({ link, text, className = "" }) {
  return (
    <Link
      type="button"
      href={link}
      className={`inline-flex justify-center items-center gap-x-2 px-6  bold lg:text-lg rounded-full border border-black
         shrinkAnimation transition3 hover:bg-black hover:text-white  ${className}`}
    >
      {text}
    </Link>
  );
}

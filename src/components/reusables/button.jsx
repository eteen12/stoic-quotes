import Link from "next/link";

export default function Button({ link, text, className = "", aria }) {
  return (
    <Link
      href={link}
      aria-label={aria}
      className={`inline-flex justify-center items-center gap-x-2 px-6 bold py-0.5 sm:py-1 rounded-full border-2 border-black 
         shrinkAnimation transition3 hover:bg-black hover:text-white  ${className}`}
    >
      {text}
    </Link>
  );
}

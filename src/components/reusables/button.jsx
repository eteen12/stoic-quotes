import Link from "next/link";

export default function Button({ link, text, className = "" }) {
  return (
    <Link
      type="button"
      href={link}
      className={`inline-flex justify-center items-center gap-x-2 px-6 bold rounded-full border-2 border-black py-1
         shrinkAnimation transition3 hover:bg-black hover:text-white  ${className}`}
    >
      {text}
    </Link>
  );
}

"use client";
import Link from "next/link";

import DailyQuote from "../misc/dailyQuote";
import Date from "../misc/date";

export default function DailyQuoteSection() {
  const quoteText = `Visit the site to see the daily quote \n`;
  const postUrl = `https://www.stoicquotes.ca/#daily-quote`;
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    alert("Link copied to clipboard!");
  };
  return (
    <>
      <div className="h-fit w-full pb-12 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
        <div className="pb-5 sm:pb-10 md:w-[50%] lg:w-[60%]">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl lg:text-5xl tracking-tight">
            Developer chosen daily <br /> quote -
          </h2>
        </div>
        <div className="md:w-[50%] md:ml-auto lg:w-[40%] xl:w-[30%]">
          <Link href="/#daily-quote">
            <h3 className="grayText text-lg sm:text-xl tracking-tight">
              <DailyQuote />
            </h3>
          </Link>
          <div className="flex mt-10">
            <span className="h-0.5 blackBg w-[70%] mt-3"></span>
            <div className="ml-auto px-2 text-nowrap text-lg sm:text-xl">
              <Date />
            </div>
            <span className="h-0.5 blackBg w-[20%] mt-3"></span>
          </div>
        </div>
      </div>
    </>
  );
}

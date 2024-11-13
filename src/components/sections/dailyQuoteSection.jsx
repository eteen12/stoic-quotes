import Link from "next/link";
import DailyQuote from "../reusables/dailyQuote";
import Date from "../reusables/date";
import Button from "../reusables/button";
import Copy from "../reusables/handleCopy";

export default function DailyQuoteSection() {
  const quoteText = `Visit StoicQuotes.ca to see the daily quote. \n`;
  const postUrl = `https://www.stoicquotes.ca/#daily-quote`;

  return (
    <>
      <div className="h-fit w-full pb-24 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
        <div className="pb-5 sm:pb-10 md:w-[50%] lg:w-[60%]">
          <h2 className="text-3xl sm:text-4xl tracking-tight">
            Daily quote from <br /> the fathers of Stoicism -
          </h2>
        </div>
        <div className="md:w-[50%] md:ml-auto lg:w-[40%] xl:w-[35%]">
          <Link href="/#daily-quote">
            <h3 className=" text-lg sm:text-xl tracking-tight">
              <DailyQuote />
            </h3>
          </Link>
        </div>
        <div className="flex mt-10 md:w-[50%] md:ml-auto lg:w-[40%] xl:w-[35%]">
          <span className="h-0.5 blackBg w-[70%] mt-3"></span>
          <div className="ml-auto px-2 text-nowrap text-lg sm:text-xl">
            <Date />
          </div>
          <span className="h-0.5 blackBg w-[20%] mt-3"></span>
        </div>
        {/*Links*/}
        <div className="md:w-[%] md:ml-auto lg:w-[65%] xl:w-[49%] md:-mt-7">
          <span className="h-0.5 blackBg w-[45%] lg:w-[30%] xl:w-[20%] mt-3 hidden md:flex"></span>
          <ul className="space-y-3 ">
            <li className="grayText text-lg sm:text-xl sm:mt-5">Share</li>
            <li className="">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                target="_blank"
                aria-label="Share on Facebook"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(quoteText)}`}
                target="_blank"
                aria-label="Share on Twitter"
                className="text-lg sm:text-xl transition3 hoverText"
              >
                Twitter
              </a>
            </li>
            <li>
              <Copy postUrl={postUrl} />
              <div className="h-[1.5px] bg-black w-20 sm:w-24 mt-5"></div>
            </li>
          </ul>
        </div>
        <div className="mt-10 sm:flex sm:justify-end sm:-mt-9">
          <Button
            link="/quotes"
            text="View all quotes"
            className="w-full sm:w-auto transition3 shrinkAnimation "
          />
        </div>
      </div>
    </>
  );
}

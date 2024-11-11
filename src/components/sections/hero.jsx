import React from "react";
import Button from "../reusables/button";
import SrcSetImage from "../reusables/srcSetImage";

export default function Hero() {
  return (
    <div className=" h-fit py-24 pt-32 sm:pt-52 px-4 sm:px-8 transition-all duration-700 max-w-[1700px] mx-auto">
      <div className="blackText w-full pt-10 flex">
        <h1 className="blackText text-6xl sm:text-8xl md:text-9xl ">
          Stoicism
        </h1>
        <span className="aria-hidden h-1.5 w-10 blackBg mt-8 ml-2 sm:mt-14 sm:h-2 sm:w-12 md:mt-20 md:h-3 md:w-14"></span>
      </div>
      <div className="flex gap-1 mt-5 sm:mt-6">
        <Button
          link="/blog"
          text="BLOGS"
          className="py-0.5 text-xs sm:text-sm"
        />
        <Button
          link="/quotes"
          text="QUOTES"
          className="py-0.5 text-xs sm:text-sm"
        />
      </div>
      <div className="w-full mt-16 text-lg sm:text-xl sm:mt-24 md:w-[65%] md:ml-auto ">
        <h2 className="lg:w-[50%] xl:w-[40%] tracking-tight">
          Read quotes from the famous stoics, and read the daily quote. The blog
          is updated weekly with insights on stoic applications to modern day
          life.
        </h2>
        <div className="relative w-full h-full mt-8">
          <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
            <SrcSetImage
              sizes="(max-width: 1000px) 100vw, 1000px"
              srcSet="
             /bento/epictetusWriting_i5itci_c_scale,w_100.webp 100w,
             /bento/epictetusWriting_i5itci_c_scale,w_358.webp 358w,
             /bento/epictetusWriting_i5itci_c_scale,w_621.webp 621w,
             /bento/epictetusWriting_i5itci_c_scale,w_844.webp 844w,
             /bento/epictetusWriting_i5itci_c_scale,w_1000.webp 1000w"
              src="/bento/epictetusWriting_i5itci_c_scale,w_1000.webp"
              alt="epictetus writing black and white photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

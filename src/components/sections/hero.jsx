import React from "react";
import Button from "../reusables/button";
import SrcSetImage from "../reusables/srcSetImage";

export default function Hero() {
  return (
    <div className=" h-screen py-24 px-4">
      <div className="blackText w-full pt-10 flex">
        <h1 className="blackText text-6xl">Stoicism</h1>
        <span className="aria-hidden h-1.5 w-10 blackBg mt-8 ml-2"></span>
      </div>
      <div className="flex gap-1 mt-5">
        <Button link="/blog" text="BLOGS" />
        <Button link="/quotes" text="QUOTES" />
      </div>
      <div className="w-full mt-16 text-lg">
        <h2>
          Read quotes from the famous stoics, and read the daily quote. The blog
          is updated weekly with insights on stoic applications to modern day
          life.
        </h2>
        <div className="relative w-full h-full mt-8">
          <div className="relative w-full h-[350px]">
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

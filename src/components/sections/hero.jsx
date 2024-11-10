import React from "react";
import Button from "../reusables/button";

export default function Hero() {
  return (
    <div className="h-screen py-24 px-2">
      <div className="blackText w-full pt-10 flex">
        <h1 className="blackText text-6xl">Stoicism</h1>
        <span className="aria-hidden h-1.5 w-10 blackBg mt-8 ml-2"></span>
      </div>
      <div className="flex gap-1 mt-4">
        <Button link="/blog" text="BLOGS" />
        <Button link="/quotes" text="QUOTES" />
      </div>
      <div className="w-full mt-16 text-lg">
        <h2>
          Read quotes from the famous stoics, and read the daily quote. The blog
          is updated weekly with insights on stoic applications to modern day
          life.
        </h2>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(color === "black" ? "lightblue" : "black");
  };

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: color }} // Apply background color here
    >
      <h1 className="text-4xl font-bold text-center">Hello, world!</h1>
      <button onClick={changeColor} className="px-4 py-2 bg-gray-300 rounded">
        Change Color
      </button>
    </div>
  );
}

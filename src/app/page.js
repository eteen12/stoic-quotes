import React from "react";

import Hero from "@/components/sections/hero";
import BentoGrid from "@/components/sections/bentoGrid";
export default function Home() {
  return (
    <div>
      <div className="p-2 md:p-5">
        <Hero />
      </div>
      <BentoGrid />
    </div>
  );
}

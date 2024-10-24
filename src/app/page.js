import React from "react";
import RootLayout from "./layout";

import Hero from "@/components/sections/hero";
import BentoGrid from "@/components/sections/bentoGrid";

export default function Home() {
  return (
    <RootLayout>
      <div className="p-2 md:p-5">
        <Hero />
      </div>
      <div className="px-2 md:px-3">
        <BentoGrid />
      </div>
    </RootLayout>
  );
}

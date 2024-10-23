import React from "react";
import Link from "next/link";

import Hero from "@/components/sections/hero";
import StoicVisual1 from "@/components/sections/stoicVisual1";
import BentoGrid from "@/components/sections/bentoGrid";
export default function Home() {
  return (
    <div>
      <div className="p-2 md:p-5">
        <Hero />
      </div>
      <div className="pt-20">
        <StoicVisual1 />
      </div>
      <BentoGrid />
    </div>
  );
}

import React from "react";

import Hero from "@/components/sections/hero";
import DailyQuoteSection from "@/components/sections/dailyQuoteSection";
import FeaturedBlogs from "@/components/sections/featuredBlogs";
import PhilosopherSection from "@/components/sections/philosophers";
import CreatedBy from "@/components/sections/createdBy";

export default function Home() {
  return (
    <div>
      <Hero />
      <DailyQuoteSection />
      <FeaturedBlogs />
      <PhilosopherSection />
      <CreatedBy />
    </div>
  );
}

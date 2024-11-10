import React from "react";

import Hero from "@/components/sections/hero";
import DailyQuoteSection from "@/components/sections/dailyQuoteSection";
import FeaturedBlogs from "@/components/sections/featuredBlogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <DailyQuoteSection />
      <FeaturedBlogs />
    </div>
  );
}

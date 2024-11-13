import React from "react";

import Hero from "@/components/sections/hero";
import DailyQuoteSection from "@/components/sections/dailyQuoteSection";
import FeaturedBlogs from "@/components/sections/featuredBlogs";
import ListSection from "@/components/sections/listSection";
import CreatedBy from "@/components/sections/createdBy";

export default function Home() {
  return (
    <div>
      <Hero />
      <DailyQuoteSection />
      <FeaturedBlogs />
      <ListSection
        title="Read quotes from the famous stoics"
        items={[
          { name: "Marcus Aurelius", link: "/philosophers/marcus-aurelius" },
          { name: "Seneca the Younger", link: "/philosophers/seneca" },
          { name: "Epictetus", link: "/philosophers/epictetus" },
        ]}
        buttonText="View all philosophers"
        buttonLink="/philosophers"
      />
      <CreatedBy />
    </div>
  );
}

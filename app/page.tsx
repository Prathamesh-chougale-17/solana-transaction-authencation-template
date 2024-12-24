import React from "react";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Benefits from "@/components/sections/benefits";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
    </main>
  );
}

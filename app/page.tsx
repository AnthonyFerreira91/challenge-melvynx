import { Hero } from "@/features/landing/Hero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { StatsSection } from "@/features/landing/StatsSection";
import { Footer } from "@/features/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16"></div>

      <LandingHeader />

      <Hero />

      <StatsSection />

      <Footer />
    </div>
  );
}

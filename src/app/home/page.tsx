import AppPreview from "@/components/app-preview";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Hero />
        <AppPreview />
        <Features />
        <CTA />
      </main>
    </div>
  );
}

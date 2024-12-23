import AppPreview from "@/components/app-preview";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <AppPreview />
        <Features />
        <CTA />
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Triviiia. All rights reserved.
      </footer>
    </div>
  );
}

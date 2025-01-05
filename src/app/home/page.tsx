import AppPreview from "@/components/app-preview";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        {/* <Navbar /> */}
        <Hero />
        <AppPreview />
        <Features />
      </main>
    </div>
  );
}

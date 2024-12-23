import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-emerald-500" id="download">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
          Download Triviiia now and join millions of users who are making
          learning fun and engaging through trivia games.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="gap-2">
            <Apple className="w-5 h-5" />
            App Store
          </Button>
          <Button size="lg" variant="secondary" className="gap-2">
            <Play className="w-5 h-5" />
            Play Store
          </Button>
        </div>
      </div>
    </section>
  );
}

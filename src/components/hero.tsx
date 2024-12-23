import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Through Fun Trivia Games
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Challenge yourself and compete with friends in various categories.
            Make learning fun with Triviiia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Download Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

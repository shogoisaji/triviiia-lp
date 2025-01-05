import { Brain, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Learn Something New Daily",
    description: "Start your day with an interesting fact or two.",
  },
  {
    icon: Zap,
    title: "Perfect for Downtime",
    description: "Enjoy a quick trivia round during your commute or breaks.",
  },
  {
    icon: Trophy,
    title: "Become a Trivia Master",
    description: "Expand your knowledge and impress your friends.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-emerald-600" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-100 font-bold text-center mb-12">
          Why Choose Triviiia?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl text-gray-100 font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

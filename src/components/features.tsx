import { Brain, Trophy, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Learn Anything",
    description:
      "Thousands of questions across various categories to expand your knowledge",
  },
  {
    icon: Users,
    title: "Compete with Friends",
    description: "Challenge your friends and see who knows more",
  },
  {
    icon: Zap,
    title: "Quick Rounds",
    description: "Perfect for short breaks, each game takes only 5 minutes",
  },
  {
    icon: Trophy,
    title: "Win Rewards",
    description: "Earn points and climb the leaderboard to unlock achievements",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-custom-dark" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-100 font-bold text-center mb-12">
          Why Choose Triviiia?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl text-gray-100 font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

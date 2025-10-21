import { Users, BookOpen, Trophy, MessageSquare } from "lucide-react";

const stats = [
  { icon: Users, value: "10K+", label: "Active Students" },
  { icon: BookOpen, value: "5K+", label: "Questions" },
  { icon: Trophy, value: "500+", label: "Quizzes" },
  { icon: MessageSquare, value: "1K+", label: "Doubts Solved" },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-card mb-4 neon-glow">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

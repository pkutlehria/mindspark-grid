import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic Education" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-primary border border-primary/20">
              Next Generation Learning Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Every Topic with
            <span className="block gradient-text">Smart Practice</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered question banks, instant feedback, and collaborative learning. 
            Track your progress and excel in every subject.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="neon-glow group">
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card">
              Browse Questions
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto-Graded Quizzes</h3>
              <p className="text-muted-foreground text-sm">
                Instant feedback and detailed explanations for every answer
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Topic-Wise Practice</h3>
              <p className="text-muted-foreground text-sm">
                Organized question banks by subject, chapter, and topic
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Doubt Forum</h3>
              <p className="text-muted-foreground text-sm">
                Ask questions and learn from teachers and peers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, TrendingUp } from "lucide-react";

const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  const percentage = Math.round((score / total) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding!", color: "text-green-400" };
    if (percentage >= 70) return { message: "Great job!", color: "text-blue-400" };
    if (percentage >= 50) return { message: "Good effort!", color: "text-yellow-400" };
    return { message: "Keep practicing!", color: "text-orange-400" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card p-8 text-center animate-scale-in">
            <div className="mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
              <p className={`text-2xl font-semibold ${performance.color}`}>
                {performance.message}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 rounded-lg">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">{score}/{total}</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">{percentage}%</div>
                <div className="text-sm text-muted-foreground">Percentage</div>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">+{score * 10}</div>
                <div className="text-sm text-muted-foreground">XP Earned</div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Performance Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Correct Answers</span>
                  <span className="text-green-400 font-semibold">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Incorrect Answers</span>
                  <span className="text-red-400 font-semibold">{total - score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="text-primary font-semibold">{percentage}%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/quizzes')}>
                Back to Quizzes
              </Button>
              <Button className="neon-glow" onClick={() => navigate('/dashboard')}>
                View Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default QuizResults;

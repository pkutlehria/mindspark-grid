import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Target } from "lucide-react";

const quizzes = [
  {
    title: "Mathematics - Algebra Basics",
    questions: 20,
    duration: 30,
    difficulty: "Easy",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Physics - Mechanics",
    questions: 25,
    duration: 40,
    difficulty: "Medium",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Chemistry - Periodic Table",
    questions: 15,
    duration: 20,
    difficulty: "Easy",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Biology - Cell Structure",
    questions: 30,
    duration: 45,
    difficulty: "Hard",
    color: "from-orange-500 to-red-500"
  },
];

const Quizzes = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Auto-Graded Quizzes</h1>
          <p className="text-muted-foreground text-lg">
            Test your knowledge with instant feedback and detailed explanations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quizzes.map((quiz, index) => (
            <Card 
              key={quiz.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${quiz.color} flex items-center justify-center mb-4`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{quiz.title}</h3>
              
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="w-4 h-4" />
                  <span>{quiz.questions} Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{quiz.duration} mins</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant={quiz.difficulty === "Easy" ? "secondary" : quiz.difficulty === "Medium" ? "default" : "destructive"}>
                  {quiz.difficulty}
                </Badge>
                <Button 
                  className="neon-glow"
                  onClick={() => navigate(`/quiz/${index + 1}`)}
                >
                  Start Quiz
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Quizzes;

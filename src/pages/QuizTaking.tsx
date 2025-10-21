import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the square root of 16?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1
  }
];

const QuizTaking = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft] = useState(1800); // 30 minutes in seconds

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((acc, answer, idx) => {
      return acc + (answer === quizQuestions[idx].correctAnswer ? 1 : 0);
    }, 0);
    navigate(`/quiz/${quizId}/results`, { state: { score, total: quizQuestions.length } });
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold">Quiz in Progress</h1>
              <p className="text-muted-foreground">Question {currentQuestion + 1} of {quizQuestions.length}</p>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-mono">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
          </div>

          <Progress value={progress} className="mb-6" />

          <Card className="glass-card p-8 mb-6 animate-scale-in">
            <h2 className="text-xl font-semibold mb-6">{quizQuestions[currentQuestion].question}</h2>
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(idx)}
                  className={`w-full text-left p-4 rounded-lg glass-card hover:bg-primary/10 transition-all ${
                    selectedAnswers[currentQuestion] === idx
                      ? 'border-2 border-primary bg-primary/10'
                      : 'border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === idx
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedAnswers[currentQuestion] === idx && (
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            {currentQuestion === quizQuestions.length - 1 ? (
              <Button onClick={handleSubmit} className="neon-glow">
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNext} className="neon-glow">
                Next Question
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizTaking;

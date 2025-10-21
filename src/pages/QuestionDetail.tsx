import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CheckCircle } from "lucide-react";

const sampleQuestions = [
  {
    id: 1,
    question: "Solve for x: 2x + 5 = 15",
    options: ["x = 5", "x = 10", "x = 7.5", "x = 20"],
    answer: "x = 5",
    explanation: "Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
  },
  {
    id: 2,
    question: "What is the derivative of x²?",
    options: ["2x", "x", "2x²", "x²/2"],
    answer: "2x",
    explanation: "Using the power rule: d/dx(x²) = 2x"
  },
  {
    id: 3,
    question: "Factor: x² - 9",
    options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "Cannot be factored"],
    answer: "(x-3)(x+3)",
    explanation: "This is a difference of squares: a² - b² = (a-b)(a+b)"
  }
];

const QuestionDetail = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 animate-fade-in"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">{topic?.replace(/-/g, ' ')}</h1>
          <p className="text-muted-foreground text-lg">
            Practice questions with detailed solutions
          </p>
        </div>

        <div className="space-y-6">
          {sampleQuestions.map((q, index) => (
            <Card
              key={q.id}
              className="glass-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">{q.question}</h3>
                  <div className="space-y-2 mb-4">
                    {q.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`glass-card p-3 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors ${
                          option === q.answer ? 'border-2 border-primary' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {option === q.answer && (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          )}
                          <span>{option}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card p-4 rounded-lg bg-primary/5">
                    <p className="text-sm font-semibold mb-1 text-primary">Explanation:</p>
                    <p className="text-sm text-muted-foreground">{q.explanation}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default QuestionDetail;

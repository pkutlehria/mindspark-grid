import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, FileText } from "lucide-react";

const subjects = [
  { name: "Mathematics", chapters: 12, questions: 450, color: "from-blue-500 to-cyan-500" },
  { name: "Physics", chapters: 10, questions: 380, color: "from-purple-500 to-pink-500" },
  { name: "Chemistry", chapters: 11, questions: 420, color: "from-green-500 to-teal-500" },
  { name: "Biology", chapters: 9, questions: 350, color: "from-orange-500 to-red-500" },
];

const QuestionBankPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Question Bank</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive collection of questions organized by subjects, chapters, and topics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Card 
              key={subject.name}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {subject.name}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span>{subject.chapters} Chapters</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{subject.questions} Questions</span>
                </div>
              </div>

              <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                Explore
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionBankPreview;

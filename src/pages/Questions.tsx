import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight } from "lucide-react";

const subjects = [
  {
    name: "Mathematics",
    chapters: [
      { name: "Algebra", topics: ["Linear Equations", "Quadratic Equations", "Polynomials"] },
      { name: "Geometry", topics: ["Triangles", "Circles", "Coordinate Geometry"] },
      { name: "Calculus", topics: ["Derivatives", "Integrals", "Limits"] },
    ]
  },
  {
    name: "Physics",
    chapters: [
      { name: "Mechanics", topics: ["Motion", "Force", "Energy"] },
      { name: "Electricity", topics: ["Current", "Voltage", "Circuits"] },
    ]
  },
];

const Questions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Question Bank</h1>
          <p className="text-muted-foreground text-lg">
            Browse through our comprehensive collection of questions organized by subjects
          </p>
        </div>

        <div className="space-y-8">
          {subjects.map((subject, subjectIndex) => (
            <Card key={subject.name} className="glass-card p-6 animate-scale-in" style={{ animationDelay: `${subjectIndex * 0.1}s` }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                {subject.name}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subject.chapters.map((chapter) => (
                  <div key={chapter.name} className="glass-card p-4 rounded-lg hover:scale-105 transition-all">
                    <h3 className="font-semibold mb-3 text-lg">{chapter.name}</h3>
                    <div className="space-y-2">
                      {chapter.topics.map((topic) => (
                        <Button 
                          key={topic}
                          variant="ghost" 
                          className="w-full justify-between group"
                          size="sm"
                        >
                          <span className="text-sm">{topic}</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Questions;

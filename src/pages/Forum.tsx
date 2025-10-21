import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, ThumbsUp, MessageCircle, Search } from "lucide-react";

const doubts = [
  {
    id: 1,
    question: "How to solve quadratic equations using the formula?",
    author: "Student A",
    subject: "Mathematics",
    replies: 5,
    likes: 12,
    time: "2 hours ago"
  },
  {
    id: 2,
    question: "What is Newton's third law of motion?",
    author: "Student B",
    subject: "Physics",
    replies: 3,
    likes: 8,
    time: "5 hours ago"
  },
  {
    id: 3,
    question: "Explain the process of photosynthesis",
    author: "Student C",
    subject: "Biology",
    replies: 7,
    likes: 15,
    time: "1 day ago"
  },
];

const Forum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Doubt Forum</h1>
          <p className="text-muted-foreground text-lg">
            Ask questions and learn from teachers and peers
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search doubts..." 
              className="pl-10 glass-card"
            />
          </div>
          <Button className="neon-glow">
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask Question
          </Button>
        </div>

        <div className="space-y-4">
          {doubts.map((doubt, index) => (
            <Card 
              key={doubt.id}
              className="glass-card p-6 hover:scale-[1.02] transition-all cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    {doubt.question}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{doubt.author}</span>
                    <span>•</span>
                    <span className="text-primary">{doubt.subject}</span>
                    <span>•</span>
                    <span>{doubt.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{doubt.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{doubt.replies} replies</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Forum;

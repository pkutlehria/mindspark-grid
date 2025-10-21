import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, BookOpen, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Quizzes Completed", value: 12, icon: Trophy, color: "text-blue-400" },
    { label: "Questions Solved", value: 245, icon: Target, color: "text-cyan-400" },
    { label: "Doubts Asked", value: 8, icon: BookOpen, color: "text-purple-400" },
    { label: "Current Streak", value: "5 days", icon: TrendingUp, color: "text-green-400" },
  ];

  const recentQuizzes = [
    { title: "Mathematics - Algebra", score: 85, total: 100, date: "2 days ago" },
    { title: "Physics - Mechanics", score: 92, total: 100, date: "5 days ago" },
    { title: "Chemistry - Periodic Table", score: 78, total: 100, date: "1 week ago" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Track your progress and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="glass-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-primary/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Recent Quiz Results
            </h2>
            <div className="space-y-4">
              {recentQuizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-lg hover:scale-[1.02] transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{quiz.title}</h3>
                    <span className="text-primary font-bold">
                      {quiz.score}/{quiz.total}
                    </span>
                  </div>
                  <Progress value={quiz.score} className="mb-2" />
                  <p className="text-sm text-muted-foreground">{quiz.date}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-6">Subject Progress</h2>
            <div className="space-y-6">
              {[
                { subject: "Mathematics", progress: 75, color: "from-blue-500 to-cyan-500" },
                { subject: "Physics", progress: 60, color: "from-purple-500 to-pink-500" },
                { subject: "Chemistry", progress: 85, color: "from-green-500 to-teal-500" },
                { subject: "Biology", progress: 45, color: "from-orange-500 to-red-500" },
              ].map((item) => (
                <div key={item.subject}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.subject}</span>
                    <span className="text-muted-foreground">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TeacherUploadDialog from "@/components/TeacherUploadDialog";
import { Upload, FileText, Plus } from "lucide-react";

const Teacher = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Teacher Portal</h1>
          <p className="text-muted-foreground text-lg">
            Upload content, create quizzes, and manage student questions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-8 text-center hover:scale-105 transition-all cursor-pointer animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Notes</h3>
            <p className="text-muted-foreground mb-4">Add study materials and notes</p>
            <TeacherUploadDialog 
              title="Upload Notes" 
              icon={<Upload className="w-5 h-5" />}
              type="notes"
            />
          </Card>

          <Card className="glass-card p-8 text-center hover:scale-105 transition-all cursor-pointer animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Quiz</h3>
            <p className="text-muted-foreground mb-4">Design auto-graded quizzes</p>
            <TeacherUploadDialog 
              title="Create Quiz" 
              icon={<Plus className="w-5 h-5" />}
              type="quiz"
            />
          </Card>

          <Card className="glass-card p-8 text-center hover:scale-105 transition-all cursor-pointer animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Questions</h3>
            <p className="text-muted-foreground mb-4">Expand question bank</p>
            <TeacherUploadDialog 
              title="Add Questions" 
              icon={<FileText className="w-5 h-5" />}
              type="questions"
            />
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Uploads</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 rounded-lg glass-card">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Chapter {item} Notes</h4>
                    <p className="text-sm text-muted-foreground">Uploaded 2 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Teacher;

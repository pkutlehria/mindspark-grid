import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Trophy, MessageSquare, Upload } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold gradient-text">EduTech</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/questions" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Questions</span>
            </Link>
            <Link to="/quizzes" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Trophy className="w-4 h-4" />
              <span>Quizzes</span>
            </Link>
            <Link to="/forum" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>Forum</span>
            </Link>
            <Link to="/teacher" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Upload className="w-4 h-4" />
              <span>Teacher</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Link to="/dashboard">
              <Button className="neon-glow">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

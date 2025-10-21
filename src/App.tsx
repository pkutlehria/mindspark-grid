import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Questions from "./pages/Questions";
import QuestionDetail from "./pages/QuestionDetail";
import Quizzes from "./pages/Quizzes";
import QuizTaking from "./pages/QuizTaking";
import QuizResults from "./pages/QuizResults";
import Forum from "./pages/Forum";
import DoubtDetail from "./pages/DoubtDetail";
import Teacher from "./pages/Teacher";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:topic" element={<QuestionDetail />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:quizId" element={<QuizTaking />} />
          <Route path="/quiz/:quizId/results" element={<QuizResults />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:doubtId" element={<DoubtDetail />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

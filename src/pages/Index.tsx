import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuestionBankPreview from "@/components/QuestionBankPreview";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <QuestionBankPreview />
    </div>
  );
};

export default Index;

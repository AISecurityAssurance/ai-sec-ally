import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import WhyAIStorm from "@/components/WhyAIStorm";
import ClosingCTA from "@/components/ClosingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VisionSection />
      <WhyAIStorm />
      <ClosingCTA />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyAIStorm from "@/components/WhyAIStorm";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyAIStorm />
      <Products showContactButton={false} />
      <Contact showTitle={false} />
    </div>
  );
};

export default Index;

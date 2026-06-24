import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import AnimatedLogo from "./AnimatedLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content - pt-20 accounts for fixed navbar height across all screen sizes */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <AnimatedLogo className="h-20 w-20 md:h-32 md:w-32" />
          </div>

          <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 text-muted-foreground/70">
            AI Security Assurance
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
            Trustworthy systems,
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              accelerated.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Imagine a world where the systems we depend on—defense, critical infrastructure, the
            software behind every critical mission—are trustworthy by design: proven secure and
            safe before they're ever relied on.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            That's the world we're building. Our mission is to accelerate the delivery of trustworthy
            systems—assured for both security and safety, across the whole system and its entire lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="bg-gradient-accent hover:opacity-90">
                Learn What We're Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

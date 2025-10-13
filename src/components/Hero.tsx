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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-0">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <AnimatedLogo className="h-20 w-20 md:h-32 md:w-32" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            AI-Storm:
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Provable Security by Design
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Security analysis shouldn't trap expert knowledge in tedious manual processes or force teams to choose between
            thoroughness and speed. Starting with AI-automated security analysis you can use today, we're building toward
            AI-automated formal verification to deliver provable security for any system—from enterprise applications to
            safety and security-critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us About Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                Learn About AI-Storm
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

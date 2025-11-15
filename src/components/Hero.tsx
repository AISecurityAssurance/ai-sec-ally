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
            <span className="block text-3xl md:text-5xl bg-gradient-accent bg-clip-text text-transparent">
              AI-powered Systems-Theoretic Operational Risk Mitigation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            AI-Storm finds deep, systemic, and logical vulnerabilities in your systems and software—the kind that
            memory-safe languages and traditional tools miss. We automate end-to-end security analysis from
            high-level STPA-Sec threat modeling down to your actual source code (C/C++, Java, Go, Python),
            and formally verify the results.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Our interactive web UI provides full transparency and control—review, refine, or override AI decisions
            at every step with human-in-the-loop oversight when you need it.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            The output: a formally verified, machine-readable assurance case that either proves your system is
            secure-by-design or pinpoints the exact logical vulnerabilities that must be fixed.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto italic">
            Find the deep, systemic flaws that other security tools miss—in any codebase, from new systems to legacy code.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto italic">
            We address the OWASP Top 10 "Insecure Design" category, bridging system-level design and implementation to surface design flaws early.
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

import {
  Check,
  Compass,
  Rocket,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductRoadmap = () => {
  const tiers = [
    {
      name: "AI-Storm Horizon",
      icon: Compass,
      tagline: "Coming Soon",
      color: "primary",
      description: "End-to-end systems-theoretic and STRIDE security analysis for early stage high-level design analysis or low-level code implementation analysis.",
      demoUrl: "/videos/ai-storm-horizon-demo.mp4",
      features: [
        "Ingests diagrams and system documentation or small codebase",
        "STPA-Sec + STRIDE threat modeling",
        "Single-level of abstraction",
        "Simple CLI and browser-based Human-AI teaming",
        "Formal mathematical proofs of traceability and completeness",
        "GSN assurance case documentation",
      ],
      comingSoon: true,
    },
    {
      name: "AI-Storm Navigator",
      icon: Rocket,
      tagline: "Planned",
      color: "purple",
      description: "End-to-end multi-level design and implementation analysis, bridging the chasm of abstraction, especially in software-based systems.",
      highlight: true,
      features: [
        "Ingests diagrams, system documentation, and codebases",
        "Unified knowledge graph representing system",
        "Multiple levels of abstraction and focus areas",
        "Advanced CLI and browser-based Human-AI teaming",
        "Formal mathematical security proofs of mitigation constraint logical soundness and authentication and authorization",
        "Trace design flaws and insecurities to the code that causes them",
        "Demonstrate evidence of mitigation constraints in code or documentation",
        "GSN assurance case documentation",
      ],
      comingSoon: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Security Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two paths to provable security—start where you are, grow with us
          </p>
        </div>

        {/* Tier Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {tiers.map((tier) => {
              const isPurple = tier.color === "purple";
              const accentColor = isPurple ? "text-purple-500" : "text-primary";
              const accentBg = isPurple ? "bg-purple-500" : "bg-primary";
              const accentBgLight = isPurple ? "bg-purple-500/10" : "bg-primary/10";
              const borderColor = isPurple ? "border-purple-500/30" : "border-primary/30";

              return (
                <div
                  key={tier.name}
                  className={`relative ${tier.highlight ? "md:-mt-4 md:mb-4" : ""}`}
                >

                  <div
                    className={`h-full rounded-xl border ${borderColor} ${tier.highlight ? "bg-card/80 shadow-lg" : "bg-card/40"
                      } p-8 transition-all duration-300 hover:border-opacity-60`}
                  >
                    {/* Tier Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${accentBgLight}`}>
                          <tier.icon className={`h-5 w-5 ${accentColor}`} />
                        </div>
                        <span className={`text-sm font-medium ${accentColor}`}>
                          {tier.tagline}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {tier.description}
                      </p>
                    </div>


                    {/* Demo Button */}
                    {tier.demoUrl && (
                      <div className="mb-6">
                        <a
                          href={tier.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className={`w-full ${accentColor} border-current hover:bg-primary/10`}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Watch Demo (9 min)
                          </Button>
                        </a>
                      </div>
                    )}

                    {/* Key Features */}
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">
                        Key features:
                      </p>
                      <ul className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${accentColor}`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRoadmap;

import {
  Check,
  Compass,
  Rocket,
} from "lucide-react";

const ProductRoadmap = () => {
  const tiers = [
    {
      name: "AI-Storm Horizon",
      icon: Compass,
      tagline: "Foundation",
      color: "primary",
      description: "Start your security journey with proven methodologies and powerful automation.",
      chooseIf: [
        "You're securing individual applications or microservices",
        "You want to adopt STPA-Sec + STRIDE methodology",
        "You need formal verification for critical systems",
        "You're building compliance documentation from scratch",
      ],
      features: [
        "STPA-Sec + STRIDE threat modeling",
        "Intuitive UI and CLI interface",
        "Formal mathematical security proofs",
        "GSN assurance case documentation",
        "Single application analysis",
        "Standard support",
      ],
    },
    {
      name: "AI-Storm Navigator",
      icon: Rocket,
      tagline: "Full Enterprise",
      color: "purple",
      description: "Everything in Horizon, plus enterprise scale and advanced capabilities.",
      highlight: true,
      chooseIf: [
        "You're securing complex enterprise systems",
        "You need multi-level hierarchical analysis",
        "You want AI-assisted security orchestration",
        "You require SOC 2, ISO 27001, or FedRAMP compliance",
      ],
      features: [
        "Everything in Horizon",
        "Multi-level hierarchical decomposition",
        "Auto-generated architecture diagrams",
        "Extended formal verification",
        "SOC 2, ISO 27001, FedRAMP support",
        "Aisha AI orchestrator",
        "Priority support & onboarding",
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
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {tier.name}
                        </h3>
                        {tier.comingSoon && (
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {tier.description}
                      </p>
                    </div>


                    {/* Choose If Section */}
                    <div className="mb-8">
                      <p className="text-sm text-foreground mb-3">
                        <span className="font-semibold">Choose {tier.name.split(" ")[1]}</span> if you:
                      </p>
                      <ul className="space-y-2">
                        {tier.chooseIf.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-muted-foreground/60 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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

// Updated: 2026-06-23
// Brief, tools-focused "What we provide" section (Chip Scan style) that leads into the
// product page. Avoids "AI tools" framing: emphasizes automated, deterministic-first,
// neuro-symbolic tooling where AI is kept in a narrow supporting role and never in control.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, ShieldCheck, Gauge, ArrowRight } from "lucide-react";

const WhyAIStorm = () => {
  const capabilities = [
    {
      icon: Network,
      title: "Sees the whole system",
      description:
        "Automated analysis of how a system's parts work together—surfacing the security and safety risks that hide in the interactions, not just the parts.",
    },
    {
      icon: ShieldCheck,
      title: "Trustworthy by construction",
      description:
        "Deterministic methods wherever possible, with AI applied narrowly and kept in a supporting role—never in control. The tools you trust to assure a system are built to be trusted themselves.",
    },
    {
      icon: Gauge,
      title: "Assurance at the speed of delivery",
      description:
        "Work that once took scarce experts months, our tooling does in a fraction of the time—so assurance keeps pace with how fast systems are built.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What we provide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated tooling for whole-system security and safety assurance—rigorous enough to trust,
            fast enough to keep up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {capability.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/products">
            <Button variant="outline" size="lg">
              Explore our capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyAIStorm;

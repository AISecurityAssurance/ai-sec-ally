import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Network, ShieldCheck, CheckCircle2 } from "lucide-react";

const WhyAIStorm = () => {
  const benefits = [
    {
      icon: Workflow,
      title: "Automates STPA-Sec End-to-End",
      description:
        "First fully automated STPA-Sec engine—from control structure analysis through UCA identification to formal loss scenario generation. Domain-specific taxonomies constrain LLMs to reduce hallucinations and ensure high-level security goals align with industry standards and compliance requirements. Interactive web UI provides human-in-the-loop oversight.",
    },
    {
      icon: Network,
      title: "Bridges High-Level Threats to Code",
      description:
        "Sentinel-M2 engine builds a multi-language (C/C++, Java, Go, Python) semantic abstraction layer using Code Property Graphs. This allows high-level STPA-Sec analysis to reason about actual implementation—solving the 'design-only' limitation.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-Framework Integration",
      description:
        "Unifies STPA-Sec with STRIDE threat modeling, attack tree analysis, and formal scenario generation. Creates a comprehensive, machine-queryable security model that covers system-level to implementation-level threats.",
    },
    {
      icon: CheckCircle2,
      title: "Formal Verification & Assurance Cases",
      description:
        "Generates formally verified, machine-readable GSN assurance cases. Combines targeted SAST/DAST analysis with LLM-in-the-loop formal verification to either prove secure-by-design or pinpoint exact logical vulnerabilities.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four integrated innovations that bridge the gap from high-level security analysis to verified code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAIStorm;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, Workflow } from "lucide-react";

const WhyAIStorm = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Accelerate Time-to-Delivery",
      description:
        "Traditional security analysis is time-intensive. AI-Storm automates the heavy lifting, dramatically reducing the time required to deliver comprehensive security analysis—whether that's hours instead of days, or days instead of weeks.",
    },
    {
      icon: Wrench,
      title: "Simplify Framework Complexity",
      description:
        "Systematic security frameworks are powerful but complex to execute. AI-Storm's AI engine performs the framework analysis—identifying threats, generating documentation, and creating structured artifacts—while security analysts supervise and guide the process through our interactive interface. Edit, add, or remove AI-generated findings as needed. The AI does the heavy lifting; you provide the expertise and oversight.",
    },
    {
      icon: Workflow,
      title: "Ensure Comprehensive Coverage",
      description:
        "Manual analysis is prone to oversights and inconsistencies. AI-Storm systematically applies proven security frameworks across your entire system, ensuring thorough threat identification and consistent analysis quality—reducing the risk of missing critical vulnerabilities.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why AI-Storm?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Security analysis for the speed of modern development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

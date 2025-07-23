import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShieldCheck, Zap, Target, AlertTriangle, BarChart3 } from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze security threats in real-time, staying ahead of evolving attack vectors."
    },
    {
      icon: ShieldCheck,
      title: "Automated Security Assessment",
      description: "Comprehensive system scanning and vulnerability assessment powered by AI to ensure continuous security monitoring."
    },
    {
      icon: Zap,
      title: "Rapid Response Systems",
      description: "Lightning-fast incident response capabilities that minimize downtime and reduce the impact of security breaches."
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Deep insights into security patterns and trends, helping teams make data-driven decisions for stronger defense."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Management",
      description: "Identify potential security risks before they become threats with predictive AI analysis and early warning systems."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Detailed security reports and compliance documentation that meet industry standards and regulatory requirements."
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            AI Security Products in Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building the next generation of AI-powered security solutions to revolutionize how teams protect their systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShieldCheck, Zap, Target, AlertTriangle, BarChart3 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Brain,
      title: "Security Assurance Platform",
      description: "AI-assisted security analysis using STPA-Sec, STRIDE, PASTA, and MAESTRO methodologies to identify and assess system vulnerabilities comprehensively."
    },
    {
      icon: ShieldCheck,
      title: "Testing Arena",
      description: "Advanced testing environment powered by AI-assisted DREAD, OCTAVE, and HAZOP analysis tools for thorough security validation and risk assessment."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
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
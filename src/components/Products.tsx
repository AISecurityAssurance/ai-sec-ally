import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShieldCheck } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: Brain,
      title: "Security Assurance Platform",
      description: "AI-assisted security analysis using STPA-Sec, STRIDE, PASTA, and MAESTRO methodologies to identify and assess system vulnerabilities comprehensively."
    },
    {
      icon: ShieldCheck,
      title: "Cortex Arena",
      description: "Advanced testing environment powered by AI-assisted DREAD, OCTAVE, and HAZOP, STRIDE, etc analysis tools for thorough security architecture validation and risk assessment."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
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
            <AlertDialog key={index}>
              <AlertDialogTrigger asChild>
                <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant cursor-pointer">
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
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Product In Development</AlertDialogTitle>
                  <AlertDialogDescription>
                    The {product.title} is currently under active development. We are working hard to bring you the best security assurance tools. For more information or to inquire about early access, please get in touch with us.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction asChild>
                    <Link to="/contact">Contact Us</Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

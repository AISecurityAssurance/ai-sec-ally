import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";

interface ProductsProps {
  showContactButton?: boolean;
}

const Products = ({ showContactButton = true }: ProductsProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Our Approach */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive four-phase process for systematic security analysis
              </p>
            </div>

            <div className="space-y-8">
              {/* Ingestion */}
              <Card className="bg-card/80 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Ingestion
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    AI-Storm reads your documentation and code and generates a unified knowledge graph representing your system.
                  </p>
                </CardContent>
              </Card>

              {/* System Analysis */}
              <Card className="bg-card/80 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      System Analysis
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    AI-Storm performs a step-by-step system-theoretic process (STPA-Sec) plus STRIDE analysis, generating:
                  </p>
                  <ul className="space-y-3 ml-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">High-level system intent and security goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-base mb-2">Detailed control structure and dataflow analysis, identifying:</div>
                        <ul className="ml-8 space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">◦</span>
                            <span>Design and architectural flaws</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">◦</span>
                            <span>Insecure interactions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">◦</span>
                            <span>Improper access control constraints</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">Detailed causal scenarios + STRIDE categorization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">Detailed constraint and mitigation requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Evidence */}
              <Card className="bg-card/80 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Evidence
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    AI-Storm applies formal verification to check that the system analysis is effective:
                  </p>
                  <ul className="space-y-3 ml-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">Maintains traceability from high-level security goals to causal scenarios and mitigations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">Proposed mitigation constraints are logically sound</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base">Controls for authentication and authorization are in place</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-base leading-relaxed mb-3">
                      AI-Storm also checks for evidence of existing mitigation implementation, reducing human labor:
                    </p>
                    <ul className="space-y-3 ml-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-base">Trace security vulnerabilities to source code</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-base">Perform code analysis on targeted code</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Documentation */}
              <Card className="bg-card/80 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Documentation
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    AI-Storm combines system analysis and evidence into a goal structured notation (GSN) assurance case report,
                    providing a scaffolding for human analysts to review and document additional mitigations and controls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Who Is AI-Storm For */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Software Systems & Beyond
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              AI-Storm provides automated STPA-Sec analysis for any system. For software systems, we go further—
              bridging from high-level security analysis down to your actual code with formal verification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Software Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Software Systems
                </CardTitle>
                <CardDescription className="text-base">
                  C/C++, Java, Go, Python codebases—from web apps to embedded systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">What You Get:</p>
                  <p className="text-muted-foreground">
                    Full end-to-end analysis: automated STPA-Sec → Sentinel-M2 code analysis →
                    UCA-to-code tracing → targeted SAST/DAST → formal verification → GSN assurance cases
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Output:</p>
                  <p className="text-muted-foreground">
                    Machine-readable assurance case with mathematical proofs, linking high-level security
                    goals to verified code implementation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Right Column: Non-Software Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Hardware, Processes & Organizations
                </CardTitle>
                <CardDescription className="text-base">
                  Medical devices, industrial control systems, operational procedures, organizational policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">What You Get:</p>
                  <p className="text-muted-foreground">
                    Automated STPA-Sec analysis identifying system-level security vulnerabilities in hardware
                    components, human processes, organizational structures, and physical systems
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Output:</p>
                  <p className="text-muted-foreground">
                    Comprehensive threat analysis and security requirements—without needing specialized STPA-Sec expertise
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Get Early Access
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're building AI-Storm to bridge the gap from high-level security analysis to verified code.
              We're looking for forward-thinking organizations to partner with us—whether as early adopters,
              beta testers, research collaborators, or investors.
            </p>
            <div className="bg-card/50 border border-border rounded-lg p-8 mb-8">
              <p className="text-lg font-semibold text-foreground mb-4">
                Interested in:
              </p>
              <ul className="text-left text-muted-foreground space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Getting early access to our MVP and providing feedback?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Exploring how AI-Storm fits your security workflow?
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Collaborating on formal verification research?
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Supporting our mission as an investor or strategic partner?
                  </span>
                </li>
              </ul>
            </div>
            {showContactButton && (
              <>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's talk about how we can work together.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Us to Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

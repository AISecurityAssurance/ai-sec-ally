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
  Building2,
  ShieldCheck,
  Brain,
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
      {/* The Vision: Provable Security by Design */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                The Vision: Provable Security by Design
              </h2>
              <p className="text-lg text-muted-foreground">
                Mathematical proof that your system is secure
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Our ultimate vision is <strong className="text-foreground">provable security through
                formal verification</strong>—not just identifying vulnerabilities, but providing
                mathematical proof that security properties hold in your system. This is the highest
                level of assurance, essential for safety and security-critical applications, yet historically
                inaccessible due to complexity and expertise requirements.
              </p>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Beyond Traditional Security Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Traditional security analysis—even systematic approaches like STPA-Sec—identifies
                    potential vulnerabilities and recommends mitigations. Formal verification provides
                    <strong className="text-foreground"> mathematical proof</strong> that security
                    properties actually hold. For medical devices, aerospace systems, autonomous
                    vehicles, and critical infrastructure, this level of assurance isn't optional—it's
                    essential.
                  </p>
                  <p>
                    We're actively researching multiple approaches to make formal verification accessible:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Temporal logic verification of control actions and security constraints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Attack tree formal analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete mediation proofs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>LLM-guided proof generation and validation</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    Our goal: democratize provable security, making formal verification practical for
                    any development team—not just academic researchers.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-base leading-relaxed">
                  <strong className="text-foreground">Our Approach:</strong> We're building AI-Storm
                  through parallel capability tracks. Starting with our MVP, we continuously expand both
                  automated analysis (evolving to STPA-Sec+) and formal verification capabilities, while
                  preparing to scale across industries. This research-intensive work requires continued
                  R&D investment through grants, contracts, and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Phase 1 */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              AI-Storm Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic security analysis with foundational formal verification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: STPA-Sec Foundation */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    STPA-Sec: The Backbone
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm is built on Systems-Theoretic Process Analysis for
                  Security (STPA-Sec), a systematic methodology that identifies
                  security vulnerabilities at the system level—not just
                  component-level threats. STPA-Sec ensures comprehensive coverage
                  of emergent security properties that traditional methods miss.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Identify system-level security issues before they become incidents
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Integrated Threat Modeling */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Multi-Framework Analysis
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm integrates STRIDE threat modeling alongside STPA-Sec,
                  providing both system-level and component-level security analysis.
                  With support for additional frameworks, AI-Storm adapts to your
                  security needs—including emerging areas like AI-based systems.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive coverage across methodologies</span>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: AI-Augmented Workflow */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Human-in-the-Loop Intelligence
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm's AI engine performs comprehensive framework analysis—identifying
                  threats, generating documentation, creating structured artifacts—with full
                  automation as the goal. Our interactive interface lets you review, edit, or
                  refine findings as needed.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Scale expertise without sacrificing quality</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuously Evolving Platform
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AI-Storm is being developed in rapid, iterative cycles to keep pace with the AI industry.
                We're currently building our MVP with an interactive web UI (launching by year-end),
                integrating core STPA-Sec, STRIDE, and foundational formal verification capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">On the horizon:</strong> Continuously expanding both
                automated analysis (STPA-Sec+ with additional frameworks, enhanced repository ingestion,
                domain-specific fine-tuning) and formal verification methods (temporal logic, attack trees,
                LLM-guided proofs), while preparing for industry-specific adaptations and enterprise scale.
                As the AI landscape evolves, so does AI-Storm—we adapt our priorities based on emerging threats,
                research breakthroughs, and partner feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is AI-Storm For */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Security Analysis for Every System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe all systems deserve security-by-design. AI-Storm serves
              teams across the spectrum—from rapid development teams to
              high-assurance engineering groups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Enterprise & Routine Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Enterprise & Routine Systems
                </CardTitle>
                <CardDescription className="text-base">
                  Web applications, mobile apps, SaaS platforms, internal tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Mode:</p>
                  <p className="text-muted-foreground">
                    AI-driven automation with optional expert review
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Benefit:</p>
                  <p className="text-muted-foreground">
                    Fast, comprehensive analysis without dedicated security teams
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    <strong className="text-foreground">Example:</strong> Identify
                    authentication vulnerabilities in a microservices architecture
                    in hours, not weeks
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Right Column: Safety & Security-Critical Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Safety & Security-Critical Systems
                </CardTitle>
                <CardDescription className="text-base">
                  Aerospace, defense, medical devices, critical infrastructure, automotive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Mode:</p>
                  <p className="text-muted-foreground">
                    Full automation with optional expert oversight
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Benefit:</p>
                  <p className="text-muted-foreground">
                    Expert-level analysis with AI efficiency
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    <strong className="text-foreground">Example:</strong> Systematic
                    security analysis for autonomous vehicle control systems with
                    expert oversight
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
              Shape the Future of Security Analysis
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're building AI-Storm through parallel capability tracks—continuously expanding automated
              analysis, formal verification, and preparing for scaled adoption. We're looking for
              forward-thinking organizations to partner with us—whether as early adopters, beta testers,
              research collaborators, or investors in our vision of provable security.
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

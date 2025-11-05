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
  Zap,
} from "lucide-react";

interface ProductsProps {
  showContactButton?: boolean;
}

const Products = ({ showContactButton = true }: ProductsProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* The Technical Approach */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Technical Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Bridging the chasm of abstraction from system-level security to verified code
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-base leading-relaxed">
                  Traditional tools scan "bottom-up" for millions of implementation bugs but miss systemic design flaws.
                  AI-Storm provides <strong className="text-foreground">automated, end-to-end STPA-Sec analysis</strong> for
                  any system—hardware, software, processes, or organizations. For software systems, we go further: bridging the
                  <strong className="text-foreground"> "chasm of abstraction"</strong> between high-level, system-theoretic
                  security analysis and low-level, implementation-specific source code—tracing systemic vulnerabilities down to
                  exact lines of code and formally verifying the results.
                  Our solution is built on five core innovations:
                </p>
              </div>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Innovation 1: The Automated, General-Purpose STPA-Sec Backbone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We are building the world's first fully automated, STPA-Sec analysis engine. This AI-driven "backbone"
                    is a general-purpose innovation of great importance to the analysis community. While fully automated,
                    it also runs step-by-step, allowing a user to pause after each sub-step (e.g., after defining losses,
                    hazards, or control structures) to edit the LLM-generated artifacts.
                  </p>
                  <p>
                    This process is managed via an interactive web UI with "Aisha," an integrated chat agent that guides users
                    through the analysis and answers questions. This "Human-in-the-Loop" (HITL) approach allows security experts
                    to oversee and refine the AI-generated analysis at every step, ensuring accuracy and alignment with domain-specific
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Innovation 2: STPA-Sec for Software via Semantic Abstraction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Our second innovation extends this general-purpose backbone to the software domain—something that has not
                    been done. This "Sentinel-M2" component solves the unmanageable complexity of code. It ingests millions
                    of lines of heterogeneous code (C/C++, Java, Go) into a unified Code Property Graph (CPG) and uses novel
                    graph-theory and data-flow analysis to algorithmically infer the high-level control structure from the
                    code itself.
                  </p>
                  <p>
                    This inferred model (Controllers, Process Variables, etc.) is fed into the STPA-Sec backbone (Innovation 1),
                    where the SME can validate or refine it using the HITL web UI.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Innovation 3: "UCA-to-Code" Traceability & Targeted Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    This innovation connects the analysis to the implementation. Once the STPA-Sec analysis (from 1 & 2)
                    generates its conceptual flaws (Unsafe/Insecure Control Actions, or UCAs), our "UCA-to-Code" engine translates each
                    UCA (e.g., "Controller provides launch_missile command when target_lock is false") into a targeted,
                    graph-based query and traces it to the exact lines of code.
                  </p>
                  <p>
                    The traced code snippet becomes a high-priority target for analysis using static (SAST), dynamic (DAST),
                    or other traditional code analysis tools, searching for implementation-level evidence that a vulnerability
                    exists or mitigations are satisfied. This targeted approach minimizes false positives by focusing
                    analysis on specific, high-risk code paths identified through system-level reasoning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Innovation 4: Automated Formal Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    To provide mathematical certainty, our pipeline auto-translates the code and security constraint into a
                    formal problem for a theorem prover (Lean). We use an <strong className="text-foreground">"LLM-in-the-loop"</strong>
                    co-pilot to generate and verify a mathematical proof of the vulnerability's existence (or absence).
                  </p>
                  <p>
                    This is a breakthrough in making formal verification accessible—traditionally requiring specialized expertise
                    and months of effort, now automated through AI-guided proof generation. The result is provable evidence,
                    not just detection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Innovation 5: Machine-Readable GSN Assurance Cases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    The final innovation links all evidence back to high-level security goals through
                    <strong className="text-foreground"> Goal Structuring Notation (GSN) assurance cases</strong>.
                    This machine-readable artifact automatically synthesizes evidence from STPA-Sec analysis,
                    targeted code analysis (Innovation 3), and formal verification (Innovation 4).
                  </p>
                  <p>
                    The result is a provable, traceable security argument—from high-level security goals down through
                    architectural analysis to verified code—providing verifiable evidence of either a correctly implemented
                    mitigation or a specific vulnerability that must be addressed.
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

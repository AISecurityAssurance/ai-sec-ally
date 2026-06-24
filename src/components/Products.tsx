// Updated: 2026-06-23
// Capabilities page. Product name intentionally omitted for now (product not yet defined);
// focuses on the problem and the company's capabilities. Presented as modules with two
// "ways in" (cyber teams vs. systems engineers). Confident present-tense framing.
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
  FileSearch,
  Network,
  Code2,
  BadgeCheck,
  Users,
  Boxes,
  Workflow,
} from "lucide-react";

const Products = () => {
  const pipeline = [
    {
      step: "1",
      title: "Start with what you have",
      description: "Source code, binaries, or your existing system and engineering models.",
    },
    {
      step: "2",
      title: "Recover the real design",
      description: "Automatically reconstruct what the system actually is—not just what the documentation claims.",
    },
    {
      step: "3",
      title: "Build one model of the whole system",
      description: "A single, unified representation that captures how every part connects and interacts.",
    },
    {
      step: "4",
      title: "Analyze for security & safety risks",
      description: "Surface the dangerous flaws that hide in how components interact—across the whole system.",
    },
    {
      step: "5",
      title: "Produce the evidence",
      description: "Mitigations, formal verification, and assurance cases that show what's sound and what must change.",
    },
    {
      step: "6",
      title: "Review together",
      description: "A human-AI workspace where your experts explore, refine, and stay in control of every decision.",
    },
  ];

  const modules = [
    {
      icon: FileSearch,
      name: "Sentinel",
      tagline: "Recover the real design",
      description:
        "Reconstructs a system's true architecture directly from source code or binaries—so analysis starts from what's actually built, not just what was documented. Useful on its own, and the foundation for everything downstream.",
    },
    {
      icon: Network,
      name: "Whole-system analysis",
      tagline: "Built on STPA",
      description:
        "Grounded in Systems-Theoretic Process Analysis (STPA)—a proven systems-engineering method—this examines the whole system for the security and safety risks that emerge from how parts interact, not just the parts themselves.",
    },
    {
      icon: Code2,
      name: "Software security analysis",
      tagline: "The Insecure Design problem",
      description:
        "Brings the same analysis down to software at the implementation level—targeting the design and interaction flaws cybersecurity teams know as Insecure Design, an OWASP Top 10 risk.",
    },
    {
      icon: BadgeCheck,
      name: "Formal Verification for Security",
      tagline: "Evidence you can trust",
      description:
        "Mathematically checks critical security properties—like authentication and authorization—and backs findings with formal assurance, not opinion.",
    },
    {
      icon: Users,
      name: "Human-AI Workspace",
      tagline: "You stay in control",
      description:
        "A collaborative environment where automated analysis is reviewed, refined, and explored by your experts. AI assists where it earns its place; people decide.",
    },
    {
      icon: Boxes,
      name: "Integrations",
      tagline: "Fits your toolchain",
      description:
        "Built on the SysML V2 modeling standard and designed to connect with the model-based software and systems engineering tools your teams already use—so assurance fits the way you already work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Product hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-4 bg-gradient-accent bg-clip-text text-transparent">
              What we're building
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Whole-system security and safety assurance—
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                from code or models to evidence.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              We're building automated tooling that proves your systems are secure and safe by design.
              Give it your software or your system models, and it recovers the true design, finds the
              risks that hide in how parts interact, and produces the evidence to back it up.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="bg-gradient-accent hover:opacity-90">
                Request More Info
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              The most dangerous flaws are designed in.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The systems we rely on are assembled from many parts that each work—yet can still fail
              together. The most damaging security and safety flaws don't live in any single component.
              They live in how components interact, invisible to tools that examine each part alone.
              Finding them today is slow, manual work that only a handful of experts can do—and it usually
              stops at the design, never reaching the code.
            </p>
          </div>
        </div>
      </section>

      {/* What it does — the pipeline */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              One automated path from what you have to evidence you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pipeline.map((stage) => (
              <Card
                key={stage.step}
                className="bg-card/60 border-border hover:border-primary/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-xl font-bold text-primary">{stage.step}</span>
                    </div>
                    <CardTitle className="text-lg text-foreground">{stage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Two ways in */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Two ways in—one system
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you start from software or from system models, you land in the same whole-system analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">For software & cybersecurity teams</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Have a codebase, not a model?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Start from source or binaries. Our tooling recovers the design and finds the
                  interaction-level security flaws—the Insecure Design problem—without requiring
                  systems-theory expertise from your team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">For systems engineers</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Already working in MBSE / MBSD?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Bring your models. Our tooling runs whole-system analysis across safety, security, and
                  beyond—on the systems you're already designing, using the systems-theoretic methods you
                  already trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The building blocks */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The building blocks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each capability delivers value on its own. Together, they form one integrated system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modules.map((module) => (
              <Card
                key={module.name}
                className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant"
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{module.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {module.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founded on proven methods */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Founded on methods the field already trusts
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Systems engineers know them as Systems-Theoretic Process Analysis (STPA)—a rigorous method
              for finding the risks that emerge from how a system's parts interact. Cybersecurity teams
              know the same class of failure as Insecure Design, an OWASP Top 10 risk. We bring both
              worlds together.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We pair STPA-based, whole-system analysis to find the problem with formal verification for
              security to prove it's addressed—following the NIST systems security engineering framework
              (SP 800-160), and expressed in SysML V2, the modern standard for model-based systems
              engineering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              See what automated assurance can do for your systems.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're partnering with forward-thinking government and commercial teams. Let's talk about
              your systems and what assurance could look like for them.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

import Navigation from "@/components/Navigation";
import { Lightbulb, Target, Users, Sparkles } from "lucide-react";

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              The Journey to AI-Storm
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Academic Research to Security Democratization
            </p>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Where It Started: Recognizing the Automation Gap
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                AI-Storm's foundation traces back to groundbreaking academic work integrating
                systematic security analysis with formal verification. Building on MIT Professor Nancy Leveson's
                STPA (System-Theoretic Process Analysis) methodology, Dr. William Young of MIT and the U.S. Air
                Force developed STPA-Sec—extending STPA from safety analysis into the realm of security to create
                a unified safety and security analysis methodology. Professor Shiu-kai Chin and Professor Susan
                Older of Syracuse University developed CSBD (Certified Security by Design), which formally verifies
                security properties with respect to authentication and authorization. Their collaboration created
                STORM (System-Theoretic Operational Risk Management)—a holistic systems security engineering
                framework for analyzing systems with a focus on secure-by-design principles.
              </p>

              <p className="leading-relaxed">
                Our co-founder Lori Pickering's master's research applied STORM to different system types,
                demonstrating the framework's broad applicability. The experience revealed fundamental
                challenges: these methods were time-consuming, required deep expertise, and involved
                tedious manual processes. Like many engineers, she recognized that the systematic nature
                of these methodologies made them ideal candidates for automation—a goal shared by others
                in the field. Working with a team at AIS (Rome, NY), she built an early prototype
                automating portions of CSBD. However, the technology wasn't ready for full automation—until
                now. Recent advances in LLMs have finally made comprehensive automation practical.
              </p>

              <p className="leading-relaxed">
                Dr. John P. Thomas of MIT's Engineering Systems Laboratory stands as an early visionary of
                STPA automation. His work transformed STPA from a heuristic methodology into a comprehensive,
                systematic approach through two key innovations: First, he developed a method to exhaustively
                extract unsafe control action scenarios from process control diagrams—these scenarios are what
                enable current LTL-based formal verification. Second, he systematized the nomenclature for
                scenario specification, making STPA artifacts machine-readable. This groundwork set the stage
                for both automation and formal verification. However, two critical gaps remained. First, the
                natural language analysis, diagram interpretation, and threat reasoning were still tedious,
                time-consuming, primarily manual processes requiring deep expertise. Second, while formal
                verification has been demonstrated in research projects and specialized engineering applications,
                it remains primarily a manual task requiring PhD-level expertise and custom toolchain
                integration—leaving formal verification inaccessible as a practical capability for most
                development teams.
              </p>

              <p className="leading-relaxed">
                This represented both a challenge and an opportunity: What if AI could handle both the
                cognitive-intensive analysis tasks and enable formal verification through an LLM-in-the-loop
                approach? This would bring these powerful, proven methodologies to a broader audience,
                enabling wider adoption and transforming <strong className="text-foreground">provable
                security</strong> from an academic capability into a practical tool for any development team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meeting of Minds: Research Meets Practice
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                The vision for AI-Storm crystallized when Lori connected with Alvin, a cybersecurity
                professional with extensive experience in enterprise systems and practical threat modeling.
                Alvin actively uses frameworks like STRIDE alongside AI-powered tools such as STRIDE GPT
                to enhance his security analysis work.
              </p>

              <p className="leading-relaxed">
                Alvin brought crucial insights from the cybersecurity practitioner's world. He understood
                the real-world constraints—the time pressure, the expertise scarcity, the tension between
                security thoroughness and release velocity. Recent research demonstrates that combining
                STPA-Sec's structured systems analysis with STRIDE's domain-specific language enables
                cybersecurity professionals to perform more comprehensive threat analysis. This synergy
                was exactly what AI-Storm needed: a way to bridge systems security engineering with
                traditional cybersecurity practice.
              </p>

              <p className="leading-relaxed">
                Beyond his practical expertise, Alvin's proactive approach to learning and hunger for
                research engagement helped crystallize the product vision. Together, Lori and Alvin saw
                the potential: combine systematic methodologies like STPA-Sec with established frameworks
                like STRIDE, automate the tedious manual work with AI, and make comprehensive security
                analysis accessible to every team—regardless of their security expertise or system criticality.
              </p>

              <p className="leading-relaxed">
                As they explored the landscape, another opportunity emerged. While STPA-Sec combined with
                STRIDE provides powerful analysis, emerging threat domains demand additional frameworks.
                AI systems require specialized analysis techniques like MAESTRO, and privacy can no longer
                be an afterthought. Their expanded vision: build <strong className="text-foreground">STPA-Sec+</strong>—a
                comprehensive analysis platform with STPA-Sec as the backbone, incorporating proven frameworks
                for emerging domains. Combined with formal verification capabilities, STPA-Sec+ represents the
                complete vision for AI-Storm.
              </p>

              <p className="leading-relaxed font-semibold text-foreground">
                AI-Storm was born from this partnership—bridging academic rigor with practical necessity,
                systems security engineering with cybersecurity practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Democratizing Security Analysis
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed font-semibold text-foreground text-xl">
                Our mission is clear: make security-by-design the default, not
                the exception.
              </p>

              <p className="leading-relaxed">
                For too long, comprehensive security analysis has been:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too slow:</strong> Taking
                    far too long relative to modern development cycles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too manual:</strong>{" "}
                    Expert-level analysis trapped in tedious, error-prone manual processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too scarce:</strong>{" "}
                    Limited access to security experts creates bottlenecks for teams who need analysis
                  </span>
                </li>
              </ul>

              <p className="leading-relaxed">
                AI-Storm changes this equation. By automating the labor-intensive
                parts of STPA-Sec and integrating proven frameworks like STRIDE,
                we're making it possible for any team to perform systematic security
                analysis—whether they're building a mobile app or a medical device.
              </p>

              <p className="leading-relaxed">
                We remain committed to research and publication, continuously
                improving how AI can augment human expertise in security analysis
                while maintaining the quality and rigor that safety and security-critical systems
                demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Path to Provable Security */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Path to Provable Security
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed font-semibold text-foreground text-xl">
                Our ultimate vision: make provable security accessible to every development team.
              </p>

              <p className="leading-relaxed">
                While AI-Storm's initial prototype focuses on automating STPA-Sec and STRIDE analysis—demonstrating
                the power of AI-driven security frameworks—this is just the first step toward our larger goal.
              </p>

              <div className="bg-card/50 border border-border rounded-lg p-6 my-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Two-Phase Roadmap
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Phase 1: Automated Security Analysis (Current)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      AI-driven STPA-Sec, STRIDE, and multi-framework analysis with human-in-the-loop
                      oversight. Early prototype in active development.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Phase 2: Formal Verification with LLM-in-the-Loop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Extending AI-Storm to formally verify security properties using advanced
                      formal methods and LLM-guided proof generation. This transforms security
                      analysis from "comprehensive" to "provable."
                    </p>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed">
                <strong className="text-foreground">Why formal verification matters:</strong> Traditional
                security analysis identifies potential vulnerabilities, but formal verification provides
                mathematical proof that security properties hold. For safety and security-critical systems—medical devices,
                aerospace, autonomous vehicles, critical infrastructure—this level of assurance is essential.
                Yet formal verification has remained inaccessible due to its complexity and the specialized
                expertise required.
              </p>

              <p className="leading-relaxed">
                <strong className="text-foreground">Our research direction:</strong> We're exploring multiple
                approaches to make formal verification accessible through AI and LLMs—from temporal logic
                verification of control actions and security constraints, to attack tree formal analysis,
                to complete mediation proofs, to LLM-guided proof generation. The goal is to automate the
                tedious, time-consuming manual processes while enabling experts to scale their knowledge
                and allowing teams without specialized formal methods expertise to benefit from these
                powerful techniques.
              </p>

              <p className="leading-relaxed">
                This research-intensive work requires continued R&D investment through grants, contracts,
                and partnerships. We're actively seeking collaborators and funding to advance this vision.
                The STPA-Sec prototype demonstrates our capability to automate complex security frameworks
                with AI—formal verification is the natural next step, and it's where AI-Storm will truly
                differentiate itself in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;

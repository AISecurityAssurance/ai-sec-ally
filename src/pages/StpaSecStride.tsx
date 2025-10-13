import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, BookOpen, ExternalLink, FileText, Calendar } from "lucide-react";

const StpaSecStride = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Storm Engineering
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Elevating Threat Modeling: The Power of STPA-Sec + STRIDE
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>August 2, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Technical Deep Dive</span>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For security leaders and high-level engineers who rely on established threat modeling methodologies, the STRIDE framework is a familiar and valuable tool. It excels at brainstorming potential threats across six critical categories. However, to truly elevate your security posture and ensure resources are allocated effectively, we propose a more integrated and powerful approach: combining STRIDE with System-Theoretic Process Analysis for Security (STPA-Sec).
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Limitations of STRIDE Alone: Missing the Bigger Picture</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                While excellent for threat enumeration, STRIDE's inherent bottom-up, component-level focus often leads to:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Lack of Prioritization:</strong> Generating a vast list of threats without a systematic way to determine which truly impact the system's mission. This can lead to wasted effort on technically possible but ultimately low-impact threats.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Component-Level Myopia:</strong> Focusing on individual parts can miss emergent system-level vulnerabilities that arise from complex interactions between components.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Difficulty Justifying Mitigation:</strong> Without a clear link to unacceptable system-level losses, it's challenging to justify the investment in mitigating specific threats.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The STPA-Sec + STRIDE Advantage: A Disciplined, Dual-Role Integration</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                STPA-Sec provides the crucial strategic, top-down framework that grounds your security analysis in the system's core mission and goals. By integrating STRIDE at two key stages, you create a more effective and efficient workflow.
              </p>

              <div className="space-y-8">
                <div className="bg-card/50 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Step 1 (Strategic) & 2 (Descriptive)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The analysis begins by defining unacceptable losses and system-level hazards, followed by modeling the system's functional control structure. This establishes what we are protecting and how the system operates, immediately focusing the analysis on what is most critical.
                  </p>
                </div>

                <div className="bg-card/50 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Step 3 (Analytical) with STRIDE as a Categorization Framework</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The focus here is on identifying functionally unsafe/unsecure control actions (UCAs). In this step, STRIDE is used as a structured vocabulary to ensure comprehensive coverage. For each control action, the team asks:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• How could <strong className="text-foreground">Spoofing</strong> make this action hazardous? (e.g., An unauthorized entity provides the control action).</li>
                    <li>• How could <strong className="text-foreground">Tampering</strong> make this action hazardous? (e.g., The control action is altered in transit).</li>
                    <li>• How could a <strong className="text-foreground">Denial of Service</strong> attack make this action hazardous? (e.g., The control action is prevented from being provided when needed).</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    This process enriches the UCA list beyond what a purely safety-focused analysis might produce, resulting in a comprehensive set of functional vulnerabilities like: "The Management Console provides a resource allocation command that leads to resource exhaustion."
                  </p>
                </div>

                <div className="bg-card/50 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Step 4 (Diagnostic) with STRIDE as a Causal Analysis Tool</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Now, we investigate why the UCA from Step 3 might occur. STRIDE is used again, but this time to brainstorm the specific, technical attack scenarios. For the UCA above, we ask:
                  </p>
                  <p className="text-muted-foreground mb-4 italic">
                    How could an attacker achieve the Tampering that causes this UCA?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This leads directly to the more insightful scenario: An attacker tampers with the monitoring data feed to provide false information to the Management Console, tricking its control algorithm into causing a system-wide Denial of Service. In this scenario, STPA-Sec guides STRIDE to pinpoint the real critical vulnerability (the flawed control algorithm), which would likely be missed by a traditional, component-focused STRIDE analysis.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Combined Power: A More Effective and Efficient Approach</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By integrating STPA-Sec with STRIDE in this dual-role capacity, you gain:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Strategic Clarity</h3>
                  <p className="text-muted-foreground">
                    STPA-Sec's top-down framework ensures all analysis is focused on preventing unacceptable system-level losses, aligning security efforts with organizational goals.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Comprehensive and Targeted Threat Analysis</h3>
                  <p className="text-muted-foreground">
                    STRIDE is used first for broad categorization in Step 3, ensuring no functional vulnerabilities are missed, and then for deep, targeted investigation in Step 4, identifying realistic attack vectors.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Holistic Security</h3>
                  <p className="text-muted-foreground">
                    This approach moves beyond a component-centric view to address emergent vulnerabilities, leading to the design of truly resilient systems.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We believe that leveraging STPA-Sec in conjunction with STRIDE will empower your security team to make more informed decisions, optimize resource allocation, and ultimately build more secure and resilient systems for your organization.
              </p>
            </section>

            <section className="mb-12 bg-card/30 p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Addressing the Implementation Challenge: AI-Powered Automation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While the STPA-Sec + STRIDE methodology delivers unparalleled security insights, we recognize that implementing such comprehensive analysis presents significant challenges:
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">The Pain Points of Traditional Implementation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Resource Intensity:</strong> Conducting thorough STPA-Sec + STRIDE analysis requires substantial time investment from your security teams
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Expertise Requirements:</strong> The methodology demands deep subject matter expertise in both system engineering and security domains
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Scalability Constraints:</strong> Manual analysis becomes increasingly difficult as systems grow in complexity and interconnectedness
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Consistency Challenges:</strong> Maintaining analytical rigor across different teams and projects can be problematic
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Solution: AI-Driven Automation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  AI Security Assurance is developing cutting-edge solutions to transform these challenges into competitive advantages:
                </p>

                <div className="space-y-6">
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-primary">AI-Storm Security Analysis Platform</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our flagship platform leverages advanced AI to fully automate the STPA-Sec + STRIDE methodology. Our interactive interface allows security professionals to review, edit, and refine AI-generated analyses as desired, providing flexibility to add expert oversight when needed while pursuing full automation as the goal.
                    </p>
                  </div>

                  <div className="bg-background/50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Cortex Arena</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      For organizations seeking to push the boundaries of AI-powered security analysis, our Cortex Arena environment enables teams to experiment with different AI models and prompting strategies. This innovative workspace allows security teams to optimize their threat modeling workflows and develop custom approaches tailored to their unique system architectures.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">The Result: Accelerated, Enterprise-Scale Security Analysis</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  By combining the proven STPA-Sec + STRIDE methodology with intelligent automation, we enable organizations to:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Reduce analysis time from weeks to days</li>
                  <li>• Maintain consistent analytical quality across teams</li>
                  <li>• Free security experts to focus on strategic decision-making rather than manual documentation</li>
                </ul>
                <p className="text-lg text-foreground font-medium">
                  Transform your threat modeling capabilities today. Contact AI Security Assurance to learn how our AI-powered solutions can elevate your security posture while optimizing your team's valuable time and expertise.
                </p>
              </div>
            </section>
          </div>

          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Related Research & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://mitpress.mit.edu/books/engineering-safer-world" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground mt-2">
                      Engineering a Safer World: Systems Thinking Applied to Safety
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Nancy G. Leveson, MIT Press (2011)</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      The foundational text on STAMP/STPA methodology, introducing system-theoretic approaches to safety and security analysis. Essential reading for understanding the theoretical underpinnings of STPA-Sec.
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <a href="http://psas.scripts.mit.edu/home/wp-content/uploads/2014/03/2014-STPA-Sec-Young-Leveson.pdf" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground mt-2">
                      STPA-Sec: A Systems-Theoretic Approach to Security Risk Analysis
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">William Young & Nancy Leveson, MIT (2014)</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      The seminal paper extending STPA to cybersecurity applications, demonstrating how system-theoretic concepts can identify security vulnerabilities that traditional methods miss.
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <a href="https://learn.microsoft.com/en-us/training/modules/tm-stride-data-flow-diagram/" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground mt-2">
                      The STRIDE Threat Model
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Microsoft Security Development Lifecycle</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      Microsoft's comprehensive documentation on STRIDE methodology, including practical applications, threat categorization guidelines, and integration with secure development practices.
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <a href="https://www.sae.org/publications/technical-papers/content/2020-01-0145/" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground mt-2">
                      Integrating STPA into ISO 26262 for Automotive Cybersecurity
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">SAE International Journal (2020)</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      Real-world case study demonstrating the practical integration of STPA-Sec with industry standards, showing measurable improvements in threat identification and mitigation strategies.
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Looking for More Research?
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore our comprehensive research library for additional papers, case studies, and technical resources on STPA-Sec, STRIDE, and other advanced security methodologies.
              </p>
              <Link to="/insights/research">
                <Button variant="outline">
                  Visit Research Library
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Transform Your Security Analysis?</h3>
            <p className="text-muted-foreground mb-6">
              Learn how our AI-powered platforms can help your organization implement STPA-Sec + STRIDE methodology efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StpaSecStride;
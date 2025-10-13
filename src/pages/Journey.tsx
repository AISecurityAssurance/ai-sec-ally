import Navigation from "@/components/Navigation";
import { Lightbulb, Target, Users, Sparkles, BookOpen, Zap, Network, Rocket } from "lucide-react";

const Journey = () => {
  const timelineItems = [
    {
      icon: Lightbulb,
      decorativeIcon: BookOpen,
      title: "The Academic Foundation",
      content: "AI-Storm's foundation traces back to groundbreaking academic work integrating systematic security analysis with formal verification. Building on MIT Professor Nancy Leveson's STPA (System-Theoretic Process Analysis) methodology, Dr. William Young developed STPA-Sec—extending STPA from safety into security. Professor Shiu-kai Chin and Professor Susan Older of Syracuse University developed CSBD (Certified Security by Design), which formally verifies security properties. Their collaboration created STORM (Systems-Theoretic Operational Risk Management)—a holistic systems security engineering framework.",
      side: "left"
    },
    {
      icon: Target,
      decorativeIcon: Zap,
      title: "Recognizing the Automation Gap",
      content: "Our co-founder Lori Pickering's master's research applied STORM to different system types, revealing fundamental challenges: these methods were time-consuming, required deep expertise, and involved tedious manual processes. She recognized that the systematic nature of these methodologies made them ideal candidates for automation. Working with a team at AIS (Rome, NY), she built an early prototype automating portions of CSBD. However, the technology wasn't ready—until now. Recent advances in LLMs have finally made comprehensive automation practical.",
      side: "right"
    },
    {
      icon: Sparkles,
      decorativeIcon: Lightbulb,
      title: "The Visionary Groundwork",
      content: "Dr. John P. Thomas of MIT's Engineering Systems Laboratory stands as an early visionary of STPA automation. His work transformed STPA from a heuristic methodology into a comprehensive, systematic approach through two key innovations: developing a method to exhaustively extract unsafe control action scenarios, and systematizing the nomenclature for scenario specification, making STPA artifacts machine-readable. However, two critical gaps remained: the manual analysis work and inaccessible formal verification.",
      side: "left"
    },
    {
      icon: Lightbulb,
      decorativeIcon: Sparkles,
      title: "The AI Opportunity",
      content: "This represented both a challenge and an opportunity: What if AI could handle both the cognitive-intensive analysis tasks and enable formal verification through an LLM-in-the-loop approach? This would bring these powerful, proven methodologies to a broader audience, enabling wider adoption and transforming provable security from an academic capability into a practical tool for any development team.",
      side: "right"
    },
    {
      icon: Users,
      decorativeIcon: Users,
      title: "Meeting of Minds",
      content: "The vision for AI-Storm crystallized when Lori connected with Alvin, a cybersecurity professional with extensive experience in enterprise systems and practical threat modeling. Alvin actively uses frameworks like STRIDE alongside AI-powered tools to enhance his security analysis work. He brought crucial insights from the cybersecurity practitioner's world—the time pressure, the expertise scarcity, the tension between security thoroughness and release velocity.",
      side: "left"
    },
    {
      icon: Target,
      decorativeIcon: Network,
      title: "Bridging Worlds",
      content: "Recent research demonstrates that combining STPA-Sec's structured systems analysis with STRIDE's domain-specific language enables cybersecurity professionals to perform more comprehensive threat analysis. This synergy was exactly what AI-Storm needed: a way to bridge systems security engineering with traditional cybersecurity practice. Together, Lori and Alvin saw the potential to make comprehensive security analysis accessible to every team.",
      side: "right"
    },
    {
      icon: Sparkles,
      decorativeIcon: Rocket,
      title: "The Complete Vision: AI-Storm",
      content: "As they explored the landscape, another opportunity emerged. While STPA-Sec combined with STRIDE provides powerful analysis, emerging threat domains demand additional frameworks. Their expanded vision: build STPA-Sec+—a comprehensive analysis platform with STPA-Sec as the backbone, incorporating proven frameworks for emerging domains. AI-Storm represents this complete vision: AI-automated STPA-Sec+ combined with AI-driven formal verification, transforming provable security from a manual, expert-only capability into an accessible, automated reality.",
      side: "left",
      highlight: true
    },
    {
      icon: Target,
      decorativeIcon: Target,
      title: "Our Mission",
      content: "Make security-by-design the default, not the exception. For too long, comprehensive security analysis has been too slow, too manual, and too scarce. AI-Storm changes this equation. By automating the labor-intensive parts of STPA-Sec and integrating proven frameworks like STRIDE, we're making it possible for any team to perform systematic security analysis—whether they're building a mobile app or a medical device.",
      side: "right"
    },
    {
      icon: Sparkles,
      decorativeIcon: Sparkles,
      title: "The Path to Provable Security",
      content: "Our ultimate vision: make provable security accessible to every development team. While AI-Storm's initial prototype focuses on automating STPA-Sec and STRIDE analysis, this is just the first step. We're exploring multiple approaches to make formal verification accessible through AI—from temporal logic verification to attack tree formal analysis to LLM-guided proof generation. The goal: automate tedious processes while enabling experts to scale their knowledge and allowing teams without specialized expertise to benefit from these powerful techniques.",
      side: "left"
    }
  ];

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

      {/* Timeline Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline bar - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`relative flex items-center ${item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>
                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${item.side === 'left' ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className={`bg-card/50 border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 hover:shadow-lg ${item.highlight ? 'ring-2 ring-primary/50' : ''}`}>
                          <div className={`flex items-center gap-3 mb-3 ${item.side === 'left' ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>

                      {/* Center dot - hidden on mobile */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                      {/* Decorative elements on empty side */}
                      <div className="hidden md:block w-5/12 relative">
                        <div className={`flex ${item.side === 'left' ? 'justify-start pl-12' : 'justify-end pr-12'} items-center h-full`}>
                          {/* Gradient orb with icon */}
                          <div className="relative">
                            {/* Background gradient orb */}
                            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                              index % 3 === 0 ? 'from-primary/20 to-primary/5' :
                              index % 3 === 1 ? 'from-purple-500/20 to-purple-500/5' :
                              'from-blue-500/20 to-blue-500/5'
                            } blur-2xl absolute inset-0`}></div>

                            {/* Icon container */}
                            <div className="relative w-20 h-20 flex items-center justify-center">
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${
                                index % 3 === 0 ? 'from-primary/30 to-primary/10' :
                                index % 3 === 1 ? 'from-purple-500/30 to-purple-500/10' :
                                'from-blue-500/30 to-blue-500/10'
                              } border border-primary/20`}></div>
                              {(() => {
                                const DecorativeIcon = item.decorativeIcon;
                                return <DecorativeIcon className={`h-10 w-10 relative z-10 ${
                                  index % 3 === 0 ? 'text-primary' :
                                  index % 3 === 1 ? 'text-purple-500' :
                                  'text-blue-500'
                                }`} />;
                              })()}
                            </div>

                            {/* Geometric accent lines */}
                            <div className={`absolute top-1/2 ${item.side === 'left' ? 'left-full ml-6' : 'right-full mr-6'} transform -translate-y-1/2`}>
                              <div className={`flex ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center gap-2`}>
                                <div className={`w-12 h-px bg-gradient-to-r ${
                                  item.side === 'left' ? 'from-primary/40 to-transparent' : 'from-transparent to-primary/40'
                                }`}></div>
                                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                <div className={`w-6 h-px bg-gradient-to-r ${
                                  item.side === 'left' ? 'from-primary/30 to-transparent' : 'from-transparent to-primary/30'
                                }`}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Tracks */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card/50 border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Development Tracks
              </h3>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                AI-Storm is a unified platform where AI-automated security analysis provides the foundation for
                AI-driven formal verification. After our MVP, we continuously evolve both capabilities together
                while preparing for scale.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <p className="font-semibold text-foreground mb-2 text-lg">
                    Track 1: Automated Analysis
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 font-medium text-primary">
                    Continuous Evolution
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Starting with STPA-Sec and STRIDE, expanding to STPA-Sec+ with additional frameworks,
                    enhanced memory and indexing, full repository analysis, and domain-specific fine-tuning.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    From prototype to comprehensive analysis platform
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <p className="font-semibold text-foreground mb-2 text-lg">
                    Track 2: Formal Verification
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 font-medium text-purple-500">
                    Continuous Evolution
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Starting with foundational formal methods, expanding to temporal logic verification,
                    attack tree analysis, LLM-guided proof generation, and advanced verification techniques.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    From comprehensive to provable security
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <p className="font-semibold text-foreground mb-2 text-lg">
                    Track 3: Scale & Adoption
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 font-medium text-blue-500">
                    Future Growth
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Expanding from early adopters to serve diverse teams and industries at scale.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Making advanced security analysis accessible everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;

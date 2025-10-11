import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, BookOpen, Shield, Brain, Lock, Lightbulb, CheckCircle2 } from "lucide-react";

const ResearchLibrary = () => {
  const researchCategories = {
    stpaSec: {
      title: "STPA-Sec & System Theory",
      icon: Shield,
      papers: [
        {
          title: "Engineering a Safer World: Systems Thinking Applied to Safety",
          authors: "Nancy G. Leveson",
          year: "2011",
          source: "MIT Press",
          description: "The foundational text on STAMP/STPA methodology, introducing system-theoretic approaches to safety and security analysis.",
          type: "Book",
          url: "https://direct.mit.edu/books/oa-monograph/2908/Engineering-a-Safer-WorldSystems-Thinking-Applied"
        },
        {
          title: "STPA-Sec: A Systems-Theoretic Approach to Security Risk Analysis",
          authors: "William Young & Nancy Leveson",
          year: "2014",
          source: "MIT",
          description: "The seminal paper extending STPA to cybersecurity applications.",
          type: "Paper",
          url: "http://psas.scripts.mit.edu/home/wp-content/uploads/2014/03/2014-STPA-Sec-Young-Leveson.pdf"
        },
        {
          title: "STPA Handbook",
          authors: "Nancy Leveson & John Thomas",
          year: "2018",
          source: "MIT",
          description: "Comprehensive guide for applying STPA with practical examples and common patterns.",
          type: "Handbook",
          url: "http://psas.scripts.mit.edu/home/materials/"
        },
        {
          title: "Systems Thinking for Safety and Security",
          authors: "Nancy G. Leveson",
          year: "2013",
          source: "MIT",
          description: "Explores the application of systems thinking principles to both safety and security challenges, demonstrating the unified approach of STAMP/STPA methodology.",
          type: "Paper",
          url: "https://dspace.mit.edu/handle/1721.1/96965"
        },
        {
          title: "A Systems Theoretic Approach to the Security Threats in Cyber Physical Systems Applied to Stuxnet",
          authors: "Abdulmalik Humayed, Fengjun Li, Jingqiang Lin, Bo Luo",
          year: "2017",
          source: "IEEE Transactions on Dependable and Secure Computing",
          description: "Applies STPA-Sec methodology to analyze the Stuxnet attack, demonstrating how systems-theoretic approaches can identify complex cyber-physical security vulnerabilities.",
          type: "Case Study",
          url: "https://ieeexplore.ieee.org/document/7360168"
        },
        {
          title: "Data-flow-based Adaption of the System-Theoretic Process Analysis for Security (STPA-Sec)",
          authors: "Tobias Braun, Sven Frey, Frank Deicke, Rainer Müller",
          year: "2021",
          source: "PeerJ Computer Science",
          description: "Enhances STPA-Sec with data flow analysis techniques, providing improved identification of security vulnerabilities in information processing systems.",
          type: "Paper",
          url: "https://peerj.com/articles/cs-362/"
        },
        {
          title: "Basic Introduction to STPA for Security (STPA-Sec)",
          authors: "MIT Partnership for Systems Approaches to Safety and Security",
          year: "2020",
          source: "YouTube",
          description: "Video tutorial providing a foundational introduction to STPA-Sec methodology, including practical examples and step-by-step guidance for security analysis.",
          type: "Video",
          url: "https://www.youtube.com/watch?v=RNgux5Ut9bM"
        }
      ]
    },
    threatModeling: {
      title: "Threat Modeling",
      icon: Lock,
      papers: [
        {
          title: "The STRIDE Threat Model",
          authors: "Microsoft Security Development Lifecycle Team",
          year: "2006",
          source: "Microsoft",
          description: "Original documentation of STRIDE methodology with practical implementation guidelines.",
          type: "Framework",
          url: "https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling/"
        },
        {
          title: "Threat Modeling: Designing for Security",
          authors: "Adam Shostack",
          year: "2014",
          source: "Wiley",
          description: "Comprehensive guide to threat modeling practices, including STRIDE, DREAD, and other methodologies.",
          type: "Book",
          url: "https://shostack.org/books/threat-modeling-book"
        },
        {
          title: "PASTA: The Process for Attack Simulation and Threat Analysis",
          authors: "Tony UcedaVelez & Marco Morana",
          year: "2015",
          source: "Wiley",
          description: "Risk-centric threat modeling methodology focusing on business impact.",
          type: "Book",
          url: "https://4598121.fs1.hubspotusercontent-na1.net/hubfs/4598121/Ebooks/2022%20PASTA%20Ebook.pdf"
        },
        {
          title: "OCTAVE: Operationally Critical Threat, Asset, and Vulnerability Evaluation",
          authors: "Carnegie Mellon SEI",
          year: "2003",
          source: "CERT",
          description: "Risk-based strategic assessment and planning technique for security.",
          type: "Framework",
          url: "https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=51546"
        }
      ]
    },
    aiSecurity: {
      title: "AI for Security",
      icon: Brain,
      papers: [
        {
          title: "An LLM-Integrated Framework for Completion, Management, and Tracing of STPA",
          authors: "Xingyu Zhao, Yiming Xu, Yang Liu",
          year: "2025",
          source: "arXiv",
          description: "Demonstrates how Large Language Models can be integrated into STPA workflows for automated hazard analysis, requirements tracing, and safety assurance documentation.",
          type: "Paper",
          url: "https://arxiv.org/pdf/2503.12043"
        },
        {
          title: "GPT-4 and Safety Case Generation: An Exploratory Analysis",
          authors: "Kimya Khakzad Shahandashti, Mithila Sivakumar, Alvine Boaye Belle, Song Wang, Timothy Lethbridge",
          year: "2023",
          source: "arXiv",
          description: "Explores the capabilities and limitations of GPT-4 in generating safety cases, providing insights into how LLMs can assist in safety assurance documentation and analysis.",
          type: "Paper",
          url: "https://arxiv.org/pdf/2312.05696"
        },
        {
          title: "Hazard Analysis in the Era of AI: Assessing the Usefulness of ChatGPT4 in STPA Hazard Analysis",
          authors: "Reyhaneh Sadeghi, Floris Goerlandt, Jakub Montewka",
          year: "2024",
          source: "Safety Science",
          description: "Empirical evaluation of ChatGPT-4's effectiveness in performing STPA hazard analysis, identifying strengths and limitations of AI-assisted safety analysis methodologies.",
          type: "Study",
          url: "https://www.sciencedirect.com/science/article/abs/pii/S092575352400198X"
        },
        {
          title: "STRIDE GPT",
          authors: "Matt Adams",
          year: "2024",
          source: "Streamlit",
          description: "AI-powered threat modeling tool that uses GPT to automatically generate STRIDE-based threat models from system descriptions, providing interactive threat analysis capabilities.",
          type: "Tool",
          url: "https://stridegpt.streamlit.app/"
        }
      ]
    },
    standards: {
      title: "Standards & Frameworks",
      icon: FileText,
      papers: [
        {
          title: "ISO/IEC 27001:2022 Information Security Management",
          authors: "ISO/IEC",
          year: "2022",
          source: "International Organization for Standardization",
          description: "International standard for information security management systems.",
          type: "Standard",
          url: "https://www.iso.org/standard/82875.html"
        },
        {
          title: "NIST Cybersecurity Framework 2.0",
          authors: "NIST",
          year: "2024",
          source: "National Institute of Standards and Technology",
          description: "Framework for improving critical infrastructure cybersecurity.",
          type: "Framework",
          url: "https://www.nist.gov/cyberframework"
        },
        {
          title: "NIST SP 800-160 Volume 1: Systems Security Engineering",
          authors: "NIST",
          year: "2022",
          source: "National Institute of Standards and Technology",
          description: "Systems security engineering considerations for a multidisciplinary approach in the engineering of trustworthy secure systems, integrating security into the systems engineering process.",
          type: "Standard",
          url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-160v1.pdf"
        },
        {
          title: "NIST SP 800-160 Volume 2 Rev. 1: Developing Cyber-Resilient Systems",
          authors: "NIST",
          year: "2021",
          source: "National Institute of Standards and Technology",
          description: "A systems security engineering approach to developing cyber-resilient systems, providing guidance on cyber resiliency engineering practices and design principles.",
          type: "Standard",
          url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-160v2r1.pdf"
        },
        {
          title: "NIST AI Risk Management Framework",
          authors: "NIST",
          year: "2023",
          source: "National Institute of Standards and Technology",
          description: "Framework for managing risks associated with artificial intelligence systems, providing guidance on trustworthy and responsible AI development and deployment.",
          type: "Framework",
          url: "https://www.nist.gov/itl/ai-risk-management-framework"
        },
      ]
    },
    systemsThinking: {
      title: "Systems Thinking",
      icon: Lightbulb,
      papers: [
        {
          title: "Dilemmas in a General Theory of Planning",
          authors: "Horst W. J. Rittel & Melvin M. Webber",
          year: "1973",
          source: "Policy Sciences",
          description: "Foundational paper introducing the concept of 'wicked problems' - complex, ill-defined problems that resist traditional analytical approaches, directly influencing systems thinking methodologies.",
          type: "Paper",
          url: "https://www.andreasaltelli.eu/file/repository/Rittel_OCR.pdf"
        }
      ]
    },
    formalVerification: {
      title: "Formal Verification",
      icon: CheckCircle2,
      papers: [
        {
          title: "From STPA to Model-Checking and Back: Automation Support for the STPA Process with TTool",
          authors: "Ludovic Apvrille, Pierre de Saqui-Sannes",
          year: "2020",
          source: "IEEE SysCon 2020",
          description: "Demonstrates integration between STPA and model-checking tools, showing how STPA artifacts can be transformed into formal models for automated verification using TTool.",
          type: "Paper",
          url: "https://perso.telecom-paristech.fr/apvrille/docs/SysCon2020_STPA_TTOOL.pdf"
        },
        {
          title: "Combining STRIDE and STPA for Comprehensive Threat Analysis",
          authors: "Various",
          year: "2021",
          source: "Safety Science",
          description: "Explores the synergy between STPA-Sec's structured systems analysis and STRIDE's domain-specific language for more comprehensive cybersecurity threat analysis.",
          type: "Paper",
          url: "https://www.sciencedirect.com/science/article/pii/S1738573321006173"
        },
        {
          title: "Automated Safety Analysis Using STPA and Model Checking",
          authors: "Various",
          year: "2024",
          source: "arXiv",
          description: "Presents approaches for automating STPA-based safety analysis through model checking techniques, demonstrating practical applications of formal methods to systems safety.",
          type: "Paper",
          url: "https://rtsys.informatik.uni-kiel.de/~biblio/downloads/papers/arxiv24b.pdf"
        },
        {
          title: "Hierarchical STPA Integration with Event-B for Scalable Formal Verification",
          authors: "Various",
          year: "2024",
          source: "Springer Innovations in Systems and Software Engineering",
          description: "Advances in integrating hierarchical STPA with Event-B to manage complexity in formal verification, representing methodological maturation for scalable analysis.",
          type: "Paper",
          url: "https://link.springer.com/article/10.1007/s11334-024-00551-8"
        },
        {
          title: "Linear Temporal Logic (LTL) for Model Checking",
          authors: "Caltech",
          year: "2019",
          source: "Chalmers University",
          description: "Foundational lecture slides on Linear Temporal Logic (LTL), the formal language used for specifying properties in model checking and formal verification of systems.",
          type: "Lecture",
          url: "https://www.cse.chalmers.se/edu/year/2019/course/TDA384_LP3/files/lectures/caltech-LTL-slides.pdf"
        },
        {
          title: "Formal Methods for Safety-Critical Systems",
          authors: "University of Stuttgart",
          year: "2024",
          source: "University of Stuttgart eLib",
          description: "Comprehensive resource on applying formal methods to safety-critical systems, covering verification techniques and their practical applications.",
          type: "Paper",
          url: "https://elib.uni-stuttgart.de/server/api/core/bitstreams/01fc101c-5ae3-4c95-b5bd-c236dc407acd/content"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <Link to="/insights" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Research Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated collection of academic papers, industry standards, and technical resources on advanced security methodologies and threat modeling approaches.
            </p>
          </div>

          <Tabs defaultValue="stpaSec" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="stpaSec">STPA-Sec</TabsTrigger>
              <TabsTrigger value="threatModeling">Threat Modeling</TabsTrigger>
              <TabsTrigger value="aiSecurity">AI for Security</TabsTrigger>
              <TabsTrigger value="standards">Standards</TabsTrigger>
              <TabsTrigger value="systemsThinking">Systems Thinking</TabsTrigger>
              <TabsTrigger value="formalVerification">Formal Verification</TabsTrigger>
            </TabsList>

            {Object.entries(researchCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {category.papers.map((paper, index) => (
                    paper.url ? (
                      <a key={index} href={paper.url} target="_blank" rel="noopener noreferrer" className="block">
                        <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 cursor-pointer h-full">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                    {paper.type}
                                  </span>
                                  <span className="text-sm text-muted-foreground">{paper.year}</span>
                                </div>
                                <CardTitle className="text-xl text-foreground mb-2">
                                  {paper.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                  {paper.authors} • {paper.source}
                                </p>
                              </div>
                              <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-muted-foreground leading-relaxed">
                              {paper.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </a>
                    ) : (
                      <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                  {paper.type}
                                </span>
                                <span className="text-sm text-muted-foreground">{paper.year}</span>
                              </div>
                              <CardTitle className="text-xl text-foreground mb-2">
                                {paper.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {paper.authors} • {paper.source}
                              </p>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {paper.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    )
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 p-8 bg-muted/20 rounded-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-primary" />
              Contributing to Our Research
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding our research library with the latest findings in security and threat modeling. 
              If you have suggestions for papers or resources that should be included, or if you're interested in 
              collaborating on research initiatives, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero">
                Contact Our Research Team
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchLibrary;
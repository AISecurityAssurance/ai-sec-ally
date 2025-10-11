import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the team behind AI Security Assurance
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionaries behind AI Security Assurance, melding passions for
              cybersecurity and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&q=80"
                    alt="Co-Founder"
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Co-Founder & Co-CEO
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Lori Pickering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left leading-relaxed indent-8">
                  Lori is a machine learning engineer and researcher pioneering the automation of
                  security analysis through AI. She holds a master's degree in Biomedical Forensic Science
                  and another master's degree in Computer Science, with her thesis focusing on Systems
                  Theoretic Process Analysis for Security (STPA-Sec) and Certified Security by Design (CSBD, a formal methods framework for
                  proving properties of complete mediation). Her unique educational foundation also
                  includes a dual B.S. in Physics and Applied Computational Mathematics. Currently serving as a
                  Machine Learning Engineer at a hardware cybersecurity and assurance company,
                  she previously held positions at the Air Force Research Laboratory Information
                  Directorate and as an Associate Computer Scientist, and at Syracuse University in the
                  College of Engineering and Computer Science as a Research Assistant.
                  </p>
                  <p className="text-muted-foreground text-left leading-relaxed indent-8 mt-4">
                  With deep
                  expertise in both AI/ML and systems security engineering, Lori is passionate about
                  automating mission and systems assurance methodologies. As Co-founder and Co-CEO, she
                  leads the company's vision to transform how organizations approach security analysis
                  by leveraging cutting-edge AI to make comprehensive security frameworks accessible and actionable.
                </p>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=300&q=80"
                    alt="Co-Founder"
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Co-Founder & Co-CEO
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Alvin Kuruvilla
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left leading-relaxed indent-8">
                  Alvin is a security engineer and researcher passionate about advancing the
                  intersection of AI and cybersecurity. He holds an M.S. in Computer Science,
                  where his thesis focused on zero-knowledge proof systems, and a B.S. in
                  Computer Science and Cybersecurity. Currently serving as an Associate Security
                  Engineer at a Fortune 500 company, Alvin specializes in application security
                  and security architecture.
                </p>
                <p className="text-muted-foreground text-left leading-relaxed indent-8 mt-4">
                  His expertise in threat modeling and security
                  frameworks drives our mission to revolutionize how organizations approach
                  security analysis through AI automation. As Co-founder and Co-CEO, Alvin leads
                  the technical development of our security analysis platforms, bringing rigorous
                  academic research and enterprise security experience to create tools that make
                  comprehensive security analysis faster and more accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

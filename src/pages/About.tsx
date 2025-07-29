import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Users, Building2, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About AI Security Assurance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a small startup building cutting-edge systems security and
              cybersecurity analysis tools leveraging AI to empower security
              professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Company Profile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded on the vision of revolutionizing cybersecurity through
              artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                alt="AI Technology"
                className="rounded-lg shadow-elegant w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At AI Security Assurance, we believe that advanced artificial
                intelligence should be accessible to every security team. Our
                mission is to democratize enterprise-grade security analysis
                tools, making sophisticated security architecture review and
                risk assessment available to organizations of all sizes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">
                    AI-Powered Analysis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">
                    Real-time Detection
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We’re building the first tool that turns messy system docs and
                diagrams into actionable threat models—automating STRIDE,
                STPA-Sec, and other security frameworks so engineers can spot
                real risks without slogging through manuals or docs. Security
                architecture reviews shouldn’t take weeks or demand a PhD; it
                should be fast, focused, and built into the design process.{" "}
              </p>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Security shouldn't be reactive. With AI, we can make it
                    predictive and proactive."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Software Development"
                className="rounded-lg shadow-elegant w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-muted/20">
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
                  Co-Founder & CEO
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  [Your Name Here]
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  [Add your background and expertise in cybersecurity, AI, or
                  relevant fields. Mention your vision for the company and what
                  drives your passion for security innovation.]
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
                  Co-Founder & CTO
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Alvin Kuruvilla
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Alvin builds the tech alongside Lori, handling everything from security to scaling. With a background and passion for cybersecurity and AI, they’re focused on solving real problems with practical, no-nonsense solutions.
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

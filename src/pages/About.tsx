// Updated: 2026-06-23
// Team-focused About page. Data-driven roster (3 current + 1 incoming). Headshots load from
// /public/team/<slug>.jpg with a graceful initials fallback until photos are added.
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  slug: string;
  bio?: string;
  comingSoon?: boolean;
  focus?: string;
}

const team: TeamMember[] = [
  {
    name: "Lori Pickering",
    title: "CEO & CFO",
    slug: "lori-pickering",
    bio:
      "Lori is a machine learning engineer and researcher focused on automating security and safety assurance. She holds an M.S. in Computer Science—with a thesis on Systems-Theoretic Process Analysis for Security (STPA-Sec) and Certified Security by Design (CSBD)—an M.S. in Biomedical Forensic Science, and a B.S. with a double major in Physics and Applied Computational Mathematics. She has worked at the Air Force Research Laboratory Information Directorate and as a research assistant at Syracuse University's College of Engineering and Computer Science. As CEO, Lori leads the company's mission to accelerate the delivery of trustworthy systems.",
  },
  {
    name: "Alvin Kuruvilla",
    title: "CTO & CISO",
    slug: "alvin-kuruvilla",
    bio:
      "Alvin is a security engineer and researcher working at the intersection of cybersecurity, software code analysis, and secure-by-design architecture. He holds an M.S. in Computer Science, with a thesis on zero-knowledge proof systems, and a B.S. with a double major in Computer Science and Cybersecurity, along with a CompTIA Security+ certification. As CTO and CISO, Alvin leads the technical development of our tooling and our own security posture—bringing rigorous research and enterprise security experience to building automation that makes deep assurance practical.",
  },
  {
    name: "Jack Vining, Ph.D.",
    title: "Chief Scientific Officer (CSO)",
    slug: "jack-vining",
    bio:
      "Jack is a computer scientist and mathematician whose work spans formal methods, software code analysis, and the mathematics that underpins them—graph theory, combinatorics, topology, and quantum computing. He holds a Ph.D. in Computer Science, an M.S. in Mathematics, and a B.S. in Computational Mathematics. Jack has built and analyzed software in industry and has taught formal methods—the discipline of mathematically proving that a system behaves as intended. As Chief Scientific Officer, he leads the scientific foundations of our work, bringing mathematical rigor to how we recover, model, and formally verify the systems we analyze.",
  },
  {
    name: "Chief AI Officer",
    title: "Joining us soon",
    slug: "chief-ai-officer",
    comingSoon: true,
    focus:
      "AI engineering, multi-agent workflows, retrieval-augmented generation, full-stack production software, UX, and cybersecurity.",
  },
];

const initials = (name: string) =>
  name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TeamAvatar = ({ member }: { member: TeamMember }) => {
  const [errored, setErrored] = useState(false);
  const showImage = !member.comingSoon && !errored;

  return (
    <div className="mx-auto mb-4">
      {showImage ? (
        <img
          src={`/team/${member.slug}.jpg`}
          alt={member.name}
          onError={() => setErrored(true)}
          className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
        />
      ) : (
        <div className="w-32 h-32 rounded-full mx-auto shadow-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">
            {member.comingSoon ? "?" : initials(member.name)}
          </span>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About AI Security Assurance
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to accelerate the delivery of trustworthy systems—systems proven secure
              and safe by design.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              AI Security Assurance is a small, deeply technical team building automated tooling for
              whole-system security and safety assurance. We bring together two worlds that rarely meet:
              the systems-theoretic methods trusted by systems engineers, and the software-level security
              practice cybersecurity teams live in—grounded in formal methods and applied AI.
            </p>
            <p>
              We build for the missions where failure is not an option—government, defense, critical
              infrastructure, and high-assurance software. We're a remote-first company, registered in
              Virginia and operating as a distributed team across the United States.
            </p>
          </div>
          <div className="text-center mt-10">
            <a
              href="/opportunities/Capability-Statement-23June2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="hero" size="lg" className="bg-gradient-accent hover:opacity-90">
                <FileDown className="mr-2 h-5 w-5" />
                Download our Capability Statement (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our team</h2>
            <p className="text-lg text-muted-foreground">
              Systems-theoretic security is well known to systems engineers and almost unknown to software
              engineers. We live in both worlds—plus formal methods and AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card
                key={member.slug}
                className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group hover:shadow-elegant"
              >
                <CardHeader className="text-center">
                  <TeamAvatar member={member} />
                  <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  {member.bio ? (
                    <p className="text-muted-foreground text-left leading-relaxed">{member.bio}</p>
                  ) : (
                    <p className="text-muted-foreground text-center leading-relaxed">
                      We're adding a founding leader for AI. Focus: {member.focus}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

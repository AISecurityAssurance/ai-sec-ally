import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

interface JobMetadata {
  title: string;
  salary: string;
  location: string;
  type: string;
  status: string;
  slug: string;
}

const Careers = () => {
  const [jobs, setJobs] = useState<JobMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job listings from the opportunities directory
    const loadJobs = async () => {
      try {
        // Import all markdown files from opportunities directory
        const modules = import.meta.glob('/opportunities/*.md', { as: 'raw' });
        const jobsData: JobMetadata[] = [];

        for (const path in modules) {
          const content = await modules[path]();
          const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);

          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const metadata: Partial<JobMetadata> = {};

            frontmatter.split('\n').forEach(line => {
              const [key, ...valueParts] = line.split(':');
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              if (key && value) {
                metadata[key.trim() as keyof JobMetadata] = value;
              }
            });

            if (metadata.status === 'open' && metadata.slug) {
              jobsData.push(metadata as JobMetadata);
            }
          }
        }

        setJobs(jobsData);
      } catch (error) {
        console.error('Error loading jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Join Us in Revolutionizing Security Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're building AI-Storm to make provable security accessible to every development team.
              Join our remote-first team and help bridge the chasm from high-level security analysis to verified code.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Join AI Security Assurance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Cutting-Edge Technical Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work on 5 integrated innovations combining AI, formal verification, and systems-theoretic
                    security analysis. Solve real research problems at the intersection of AI and cybersecurity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Remote-First & Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Distributed team across the United States. We're open about our progress and challenges.
                    Transparency is a core value.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Early-Stage Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your contributions directly shape the product. Wear multiple hats in a fast-moving startup
                    environment where your work makes a difference.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Comprehensive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Health/Dental/Vision, 401(k), Life Insurance, Short-Term and Long-Term Disability coverage.
                    Competitive salary and occasional travel opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Open Positions</h2>

            {loading ? (
              <div className="text-center text-muted-foreground">Loading opportunities...</div>
            ) : jobs.length === 0 ? (
              <Card className="bg-card/50 border-border">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground text-lg mb-4">
                    No positions currently available. Check back soon!
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Interested in future opportunities? Contact us at{' '}
                    <a href="mailto:careers@aisecurityassurance.com" className="text-primary hover:underline">
                      careers@aisecurityassurance.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {jobs.map((job) => (
                  <Card key={job.slug} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl text-foreground">{job.title}</CardTitle>
                        <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                      <CardDescription className="text-base flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/careers/${job.slug}`}>
                        <Button variant="default" size="lg" className="w-full sm:w-auto">
                          View Details & Apply
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

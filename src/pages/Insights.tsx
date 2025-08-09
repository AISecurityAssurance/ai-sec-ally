import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight, Library } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      slug: "stpa-sec-stride",
      title: "Elevating Threat Modeling: The Power of STPA-Sec + STRIDE",
      description: "Learn how combining STPA-Sec with STRIDE creates a more effective and efficient approach to security analysis, moving beyond component-level threats to address emergent system vulnerabilities.",
      readTime: "8 min read",
      featured: true,
      tags: ["Threat Modeling", "STPA-Sec", "STRIDE", "Security Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Security Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore cutting-edge security methodologies, industry best practices, and innovative approaches to building resilient systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {articles.map((article) => (
              <Card key={article.slug} className={`bg-card/20 border-border backdrop-blur-sm hover:bg-card/30 transition-all duration-300 ${article.featured ? 'ring-2 ring-primary/50' : ''}`}>
                <CardHeader>
                  {article.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                      Featured Article
                    </div>
                  )}
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-3">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm">Technical Deep Dive</span>
                      </div>
                    </div>
                    <Link to={`/insights/${article.slug}`}>
                      <Button variant="hero" className="group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card/20 border-border backdrop-blur-sm rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Library className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Library</h3>
                  <p className="text-muted-foreground mt-1">
                    Explore academic papers, standards, and technical resources
                  </p>
                </div>
              </div>
              <Link to="/insights/research">
                <Button variant="hero">
                  Browse Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Have questions about our methodologies or want to discuss your security challenges?
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
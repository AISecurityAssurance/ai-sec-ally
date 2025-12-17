import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobData {
  metadata: {
    title: string;
    salary: string;
    location: string;
    type: string;
    status: string;
    slug: string;
  };
  content: string;
}

const CareerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadJobData = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        // Import all markdown files from public/opportunities directory
        const modules = import.meta.glob('/public/opportunities/*.md', { as: 'raw' });
        let found = false;

        for (const path in modules) {
          const content = await modules[path]();
          const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);

          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const metadata: any = {};

            frontmatter.split('\n').forEach(line => {
              const [key, ...valueParts] = line.split(':');
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              if (key && value) {
                metadata[key.trim()] = value;
              }
            });

            if (metadata.slug === slug) {
              // Extract content after frontmatter
              const markdownContent = content.replace(/^---\n[\s\S]+?\n---\n/, '');

              setJobData({
                metadata,
                content: markdownContent
              });
              found = true;
              break;
            }
          }
        }

        if (!found) {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading job data:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadJobData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  if (notFound || !jobData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Position Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The position you're looking for doesn't exist or is no longer available.
            </p>
            <Link to="/careers">
              <Button variant="default">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Content - pt-20 accounts for fixed navbar height */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/careers" className="inline-block mb-8">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Opportunities
            </Button>
          </Link>

          {/* Job Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 text-foreground mt-8">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 text-foreground mt-6">{children}</h3>,
                p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">{children}</ul>,
                li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              }}
            >
              {jobData.content}
            </ReactMarkdown>
          </div>

          {/* Application Form */}
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Apply for this Position</h2>
            <CareerApplicationForm jobTitle={jobData.metadata.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;

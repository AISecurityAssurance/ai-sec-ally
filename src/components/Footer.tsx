// Created: 2026-08-27
// Global site footer, rendered on every page. Keeps the Capability Statement and contact
// info one click away so customers (especially government) never have to search for them.
// Plain grammar, no em-dashes.
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown, Mail } from "lucide-react";

const CAPABILITY_STATEMENT = "/opportunities/Capability-Statement-Templates-v2-27August2026.pdf";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card/40 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <p className="text-lg font-bold text-foreground">AI Security Assurance</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Accelerating the delivery of trustworthy systems.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors w-fit">
              Product
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors w-fit">
              About
            </Link>
            <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors w-fit">
              Careers
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors w-fit">
              Contact
            </Link>
          </div>

          {/* Capability statement + contact */}
          <div className="flex flex-col items-start gap-4">
            <a
              href={CAPABILITY_STATEMENT}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" />
                Capability Statement (PDF)
              </Button>
            </a>
            <a
              href="mailto:contact@aisecurityassurance.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@aisecurityassurance.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {year} AI Security Assurance, LLC. Remote-first, registered in Virginia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

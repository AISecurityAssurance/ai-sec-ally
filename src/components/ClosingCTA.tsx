// Created: 2026-06-23
// Low-key closing band for the vision/landing homepage. Points visitors to the dedicated
// contact page rather than embedding a prominent contact form on the landing page.
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Interested in what we're building, or want to follow along?
        </p>
        <Link to="/contact">
          <Button variant="outline" size="lg">
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ClosingCTA;

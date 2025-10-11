# AI-Storm Website Update Specification

**Project**: AI Security Assurance Website Redesign  
**Repository**: github.com/AISecurityAssurance/ai-sec-ally  
**Technology**: React + TypeScript + Vite + shadcn/ui  
**Hosting**: Firebase  
**Date**: October 10, 2025

---

## Executive Summary

This specification outlines updates to refocus the AI Security Assurance website on a single flagship product: **AI-Storm**. The updates address Homepage and Products page to attract investors and early partners by emphasizing AI-Storm's mission to democratize security analysis through AI automation with human-in-the-loop workflows.

### Key Changes:
1. **Homepage**: Product-first approach featuring AI-Storm
2. **Products Page**: Single product focus (remove Security Assurance Platform and Cortex Arena)
3. **About Page**: Updated origin story and team narrative

---

## Strategic Objectives

1. **Investor Appeal**: Position AI-Storm as a compelling investment opportunity
2. **Market Positioning**: Democratizing security analysis for ALL systems (not just safety-critical)
3. **Early Partnerships**: Invite companies to work with early prototype
4. **Dual Audience**: Appeal to both technical practitioners and executives
5. **HITL Emphasis**: AI performs analysis; humans supervise and guide

---

## Files to Modify

### Primary Files:
1. `src/components/Hero.tsx` - Homepage hero section
2. `src/components/Products.tsx` - Products listing (complete overhaul)
3. `src/pages/About.tsx` - Company story and team
4. `src/pages/Home.tsx` - Add new "Why AI-Storm" section after Hero

### Supporting Files (if needed):
- `src/components/ui/*` - Use existing shadcn components
- Update any routes/navigation as needed

---

# SECTION 1: HOMEPAGE UPDATES

## File: `src/components/Hero.tsx`

### Current State:
- Generic "AI-Powered Security Assurance" messaging
- No product focus
- Links to "Learn More" (About page)

### New Implementation:

```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - KEEP EXISTING */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content - UPDATE */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary animate-pulse-glow" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            AI-Storm:
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Democratizing Security Analysis Through AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Security analysis shouldn't require PhD-level expertise, weeks of work, or delayed releases. 
            AI-Storm combines AI automation with STPA-Sec methodology to deliver fast, comprehensive 
            security analysis for any system—from enterprise applications to safety-critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us About Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                Learn About AI-Storm
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay - KEEP EXISTING */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
```

---

## New Component: `src/components/WhyAIStorm.tsx`

### Purpose:
New section for Homepage explaining the three core value propositions

### Implementation:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, Workflow } from "lucide-react";

const WhyAIStorm = () => {
  const benefits = [
    {
      icon: Zap,
      title: "From Weeks to Days",
      description:
        "Traditional security analysis is time-intensive. AI-Storm automates the heavy lifting, delivering comprehensive STPA-Sec analysis in a fraction of the time.",
    },
    {
      icon: Wrench,
      title: "Framework Complexity, Simplified",
      description:
        "Systematic security frameworks like STPA-Sec are powerful but complex to execute. AI-Storm's AI engine performs the framework analysis—identifying threats, generating documentation, and creating structured artifacts—while security analysts supervise and guide the process through our interactive interface. Edit, add, or remove AI-generated findings as needed. The AI does the heavy lifting; you provide the expertise and oversight.",
    },
    {
      icon: Workflow,
      title: "Security Without Delays",
      description:
        "Stop treating security as an afterthought. AI-Storm integrates into your development workflow, making security analysis a continuous process, not a bottleneck.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why AI-Storm?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Security analysis for the speed of modern development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAIStorm;
```

---

## File: `src/pages/Home.tsx`

### Update:
Add the new `WhyAIStorm` component after Hero

```tsx
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import WhyAIStorm from "@/components/WhyAIStorm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyAIStorm />
      <Footer />
    </div>
  );
};

export default Home;
```

---

# SECTION 2: PRODUCTS PAGE UPDATES

## File: `src/components/Products.tsx`

### Current State:
- Shows 2 products: Security Assurance Platform and Cortex Arena
- Generic "in development" messaging
- Alert dialog for "product in development"

### New Implementation:
**COMPLETELY REPLACE** the entire `Products.tsx` component with the following:

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  Brain,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Our Flagship Product
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              AI-Storm: AI-Driven Security Analysis Platform
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Built on STPA-Sec. Powered by AI. Designed for Every System.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI-Storm is a comprehensive security analysis platform that combines 
              proven methodologies with AI automation. Whether you're building 
              enterprise software or safety-critical systems, AI-Storm helps you 
              identify and address security vulnerabilities systematically—without 
              the traditional time and expertise barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Systematic Security Analysis, Automated
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-Storm combines rigorous methodology with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: STPA-Sec Foundation */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    STPA-Sec: The Backbone
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm is built on Systems-Theoretic Process Analysis for 
                  Security (STPA-Sec), a systematic methodology that identifies 
                  security vulnerabilities at the system level—not just 
                  component-level threats. STPA-Sec ensures comprehensive coverage 
                  of emergent security properties that traditional methods miss.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Identify system-level security issues before they become incidents
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Integrated Threat Modeling */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Multi-Framework Analysis
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm integrates STRIDE threat modeling alongside STPA-Sec, 
                  providing both system-level and component-level security analysis. 
                  With support for additional frameworks, AI-Storm adapts to your 
                  security needs—including emerging areas like AI-based systems.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive coverage across methodologies</span>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: AI-Augmented Workflow */}
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Human-in-the-Loop Intelligence
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  AI-Storm's AI engine performs framework analysis—identifying 
                  threats, generating documentation, creating structured 
                  artifacts—while security analysts supervise through our 
                  interactive interface. Edit, add, or remove findings as needed. 
                  For safety-critical systems, expert oversight ensures quality; 
                  for routine applications, automation speeds delivery.
                </CardDescription>
                <div className="flex items-start space-x-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Scale expertise without sacrificing quality</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is AI-Storm For */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Security Analysis for Every System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe all systems deserve security-by-design. AI-Storm serves 
              teams across the spectrum—from rapid development teams to 
              high-assurance engineering groups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Enterprise & Routine Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Enterprise & Routine Systems
                </CardTitle>
                <CardDescription className="text-base">
                  Web applications, mobile apps, SaaS platforms, internal tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Mode:</p>
                  <p className="text-muted-foreground">
                    AI-driven automation with optional expert review
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Benefit:</p>
                  <p className="text-muted-foreground">
                    Fast, comprehensive analysis without dedicated security teams
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    <strong className="text-foreground">Example:</strong> Identify 
                    authentication vulnerabilities in a microservices architecture 
                    in hours, not weeks
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Right Column: Safety & Security-Critical Systems */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Safety & Security-Critical Systems
                </CardTitle>
                <CardDescription className="text-base">
                  Aerospace, defense, medical devices, critical infrastructure, automotive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Mode:</p>
                  <p className="text-muted-foreground">
                    AI augmentation + mandatory Human-in-the-Loop
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Benefit:</p>
                  <p className="text-muted-foreground">
                    Expert-level analysis with AI efficiency
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    <strong className="text-foreground">Example:</strong> Systematic 
                    security analysis for autonomous vehicle control systems with 
                    expert oversight
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How AI-Storm Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How AI-Storm Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple workflow, powerful results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Input</h3>
                <p className="text-sm text-muted-foreground">
                  Upload system documentation, diagrams, architecture
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  AI processes with STPA-Sec + STRIDE frameworks
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">
                  Human-in-the-loop validation for critical systems
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Output</h3>
                <p className="text-sm text-muted-foreground">
                  Actionable security findings and recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Shape the Future of Security Analysis
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AI-Storm is currently in active development with our first prototype 
              expected by end of October 2025. We're looking for forward-thinking 
              organizations to partner with us during this critical phase—whether as 
              early adopters, beta testers, or collaborators with specific security 
              analysis needs.
            </p>
            <div className="bg-card/50 border border-border rounded-lg p-8 mb-8">
              <p className="text-lg font-semibold text-foreground mb-4">
                Interested in:
              </p>
              <ul className="text-left text-muted-foreground space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Testing our tools and providing feedback?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Exploring how AI-Storm fits your security workflow?
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Discussing custom features or domain-specific requirements?
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Let's talk about how we can work together.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us to Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
```

---

# SECTION 3: ABOUT PAGE UPDATES

## File: `src/pages/About.tsx`

### Current State:
- Generic "small startup building cutting-edge tools"
- Generic mission/vision statements
- No origin story

### New Implementation:
**REPLACE** the content sections (keep Navigation and structure) with:

```tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Lightbulb, Target, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              The Journey to AI-Storm
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Academic Research to Security Democratization
            </p>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Where It Started: Recognizing the Automation Gap
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                AI-Storm began with a master's thesis exploring the integration of 
                Systems-Theoretic Process Analysis for Security (STPA-Sec) with 
                Communicating Sequential Processes with Broadcast (CSBD). During 
                this research, our founder Lori Pickering recognized something 
                crucial: both STPA-Sec and CSBD are systematic, structured 
                methodologies—making them ideal candidates for automation.
              </p>

              <p className="leading-relaxed">
                While previous work by researchers like Dr. Thomas had made strides 
                in automating the structural elements of security analysis—organizing 
                data, creating templates, managing workflows—a critical gap remained. 
                The natural language analysis, diagram interpretation, and threat 
                reasoning were still entirely manual processes requiring deep expertise.
              </p>

              <p className="leading-relaxed">
                This gap represented both a challenge and an opportunity: What if AI 
                could handle these cognitive-intensive tasks while maintaining 
                analytical rigor?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meeting of Minds: Research Meets Practice
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                The vision for AI-Storm crystallized when Lori connected with Alvin, 
                a cybersecurity professional with extensive experience in enterprise 
                systems and practical threat modeling using frameworks like STRIDE.
              </p>

              <p className="leading-relaxed">
                Alvin brought a practitioner's perspective: he understood the 
                real-world pain points of security analysis—the time pressure, the 
                expertise scarcity, the tension between security thoroughness and 
                release velocity. His enterprise systems knowledge complemented 
                Lori's research background perfectly.
              </p>

              <p className="leading-relaxed">
                Together, they saw the potential: combine systematic methodologies 
                like STPA-Sec with AI automation to make high-quality security 
                analysis accessible to every team, regardless of their security 
                expertise or system criticality.
              </p>

              <p className="leading-relaxed font-semibold text-foreground">
                AI-Storm was born from this partnership—bridging academic rigor 
                with practical necessity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Democratizing Security Analysis
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed font-semibold text-foreground text-xl">
                Our mission is clear: make security-by-design the default, not 
                the exception.
              </p>

              <p className="leading-relaxed">
                For too long, comprehensive security analysis has been:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too slow:</strong> Taking 
                    weeks when development cycles demand days
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too specialized:</strong> 
                    Requiring PhD-level expertise that most teams lack
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong className="text-foreground">Too disruptive:</strong> 
                    Creating bottlenecks that delay releases
                  </span>
                </li>
              </ul>

              <p className="leading-relaxed">
                AI-Storm changes this equation. By automating the labor-intensive 
                parts of STPA-Sec and integrating proven frameworks like STRIDE, 
                we're making it possible for any team to perform systematic security 
                analysis—whether they're building a mobile app or a medical device.
              </p>

              <p className="leading-relaxed">
                We remain committed to research and publication, continuously 
                improving how AI can augment human expertise in security analysis 
                while maintaining the quality and rigor that safety-critical systems 
                demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team - Placeholder */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Team
              </h2>
            </div>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Bridging Research and Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our team combines deep academic research in formal methods and 
                  security engineering with practical cybersecurity experience in 
                  enterprise systems. Together, we're building the future of 
                  security analysis.
                </p>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  [Team profiles and photos to be added]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
```

---

# SECTION 4: NAVIGATION & ROUTING

## No Changes Required

The existing navigation in `src/components/Navigation.tsx` already has links to:
- Products
- Insights  
- About
- Contact

These should all continue to work. Just verify that routes are properly configured.

---

# IMPLEMENTATION CHECKLIST

## Phase 1: Homepage
- [ ] Update `src/components/Hero.tsx` with new headline and subheadline
- [ ] Create new `src/components/WhyAIStorm.tsx` component
- [ ] Update `src/pages/Home.tsx` to include WhyAIStorm component
- [ ] Test hero CTA buttons link to correct pages

## Phase 2: Products Page
- [ ] Completely replace `src/components/Products.tsx` with new single-product implementation
- [ ] Verify all icons import correctly from lucide-react
- [ ] Test "Contact Us to Learn More" CTA links to contact page
- [ ] Check responsive layout on mobile/tablet

## Phase 3: About Page
- [ ] Update `src/pages/About.tsx` with new narrative content
- [ ] Verify icons import correctly
- [ ] Test page flow and readability

## Phase 4: Testing & QA
- [ ] Run `npm run dev` and verify all pages load
- [ ] Test all internal links and CTAs
- [ ] Check mobile responsiveness
- [ ] Verify shadcn/ui components render correctly
- [ ] Check for TypeScript errors with `npm run lint`

## Phase 5: Deployment
- [ ] Build for production: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Deploy to Firebase: `npm run deploy` or `npm run deploy:all`
- [ ] Verify live site at www.aisecurityassurance.com

---

# KEY MESSAGING THEMES

Ensure these themes appear consistently throughout:

1. **"Built on STPA-Sec"** - STPA-Sec is the backbone/foundation
2. **"Democratizing Security"** - Making security analysis accessible
3. **"Speed + Quality"** - Automation without sacrificing rigor
4. **"Human-in-the-Loop"** - AI performs analysis; humans supervise
5. **"All Systems"** - Not just safety-critical, but enterprise too

---

# TONE & VOICE GUIDELINES

- **Confident but not arrogant**: We're solving real problems
- **Technical but accessible**: Explain frameworks without jargon overload
- **Research-driven**: Mention academic foundations when relevant
- **Action-oriented**: Focus on what AI-Storm does, not just what it is
- **Dual audience**: Speak to both technical practitioners and executives
- **Investor-friendly**: Emphasize market opportunity and vision

---

# DESIGN NOTES

- Use existing shadcn/ui components (Card, Button, etc.)
- Maintain existing color scheme and gradients
- Use lucide-react icons consistently
- Keep animations subtle (fade-in, hover effects)
- Ensure mobile-first responsive design
- Use existing Tailwind classes from current implementation

---

# CONTENT OWNERSHIP

**Primary Author**: Lori Pickering  
**Content Review**: [To be completed]  
**Technical Implementation**: Claude Code  
**Final Approval**: [To be completed]

---

# FUTURE UPDATES (Not in this spec)

- Team profiles with photos and bios
- Case studies or use cases
- Technical documentation or demos
- Blog/insights content expansion
- Formal verification details (when ready)
- MAESTRO framework integration details (when ready)

---

# QUESTIONS OR ISSUES?

If Claude Code encounters any issues during implementation:

1. **Missing imports**: Verify lucide-react icons are available
2. **TypeScript errors**: Check component prop types
3. **Routing issues**: Verify React Router setup in main.tsx
4. **Styling problems**: Ensure Tailwind config includes all custom classes
5. **Build errors**: Check for missing dependencies in package.json

Contact: lori@aisecurityassurance.com

---

**END OF SPECIFICATION**

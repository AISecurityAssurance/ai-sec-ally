import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to Secure Your Systems?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our security experts to learn how AI Security Assurance can protect your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card/20 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First name" className="bg-background/50" />
                <Input placeholder="Last name" className="bg-background/50" />
              </div>
              <Input placeholder="Email address" className="bg-background/50" />
              <Input placeholder="Company" className="bg-background/50" />
              <Textarea 
                placeholder="Tell us about your security needs..." 
                rows={4}
                className="bg-background/50"
              />
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to transform your cybersecurity approach? Our team of experts is here to help you implement AI-powered security solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">contact@aisecurityassurance.com</p>
                </div>
              </div>
              
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">United States (Remote First)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
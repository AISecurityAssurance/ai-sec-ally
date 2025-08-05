import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://us-east1-active-tome-467816-s6.cloudfunctions.net/submitContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: result.message || "We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: ""
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First name" 
                    className="bg-background/50" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last name" 
                    className="bg-background/50" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  placeholder="Email address" 
                  className="bg-background/50" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  name="company"
                  placeholder="Company" 
                  className="bg-background/50" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <Textarea 
                  name="message"
                  placeholder="Tell us about your security needs..." 
                  rows={4}
                  className="bg-background/50"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Upload, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CareerApplicationFormProps {
  jobTitle: string;
}

const CareerApplicationForm = ({ jobTitle }: CareerApplicationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: ""
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      if (fileType === 'resume') {
        setResumeFile(file);
      } else {
        setCoverLetterFile(file);
      }
    }
  };

  const removeFile = (fileType: 'resume' | 'coverLetter') => {
    if (fileType === 'resume') {
      setResumeFile(null);
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } else {
      setCoverLetterFile(null);
      const fileInput = document.getElementById('coverLetter') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to continue",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('jobTitle', jobTitle);
      submitData.append('resume', resumeFile);

      // Optional fields
      if (formData.phone) submitData.append('phone', formData.phone);
      if (formData.linkedin) submitData.append('linkedin', formData.linkedin);
      if (formData.github) submitData.append('github', formData.github);
      if (formData.website) submitData.append('website', formData.website);
      if (coverLetterFile) submitData.append('coverLetter', coverLetterFile);

      const response = await fetch("/api/career-application", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Application submitted!",
          description: result.message || "We'll review your application and get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          website: ""
        });
        setResumeFile(null);
        setCoverLetterFile(null);
        const resumeInput = document.getElementById('resume') as HTMLInputElement;
        if (resumeInput) resumeInput.value = '';
        const coverLetterInput = document.getElementById('coverLetter') as HTMLInputElement;
        if (coverLetterInput) coverLetterInput.value = '';
      } else {
        throw new Error(result.error || "Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again or email your resume to careers@aisecurityassurance.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-card/50 border-border">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className="bg-background/50"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="bg-background/50"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              className="bg-background/50"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              className="bg-background/50"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* LinkedIn */}
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn URL</Label>
            <Input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              className="bg-background/50"
              value={formData.linkedin}
              onChange={handleInputChange}
            />
          </div>

          {/* GitHub */}
          <div className="space-y-2">
            <Label htmlFor="github">GitHub URL</Label>
            <Input
              id="github"
              name="github"
              type="url"
              placeholder="https://github.com/yourusername"
              className="bg-background/50"
              value={formData.github}
              onChange={handleInputChange}
            />
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website">Personal Website</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://yourwebsite.com"
              className="bg-background/50"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume">Resume / CV *</Label>
            <div className="flex items-center gap-4">
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="bg-background/50"
                onChange={(e) => handleFileChange(e, 'resume')}
              />
            </div>
            {resumeFile && (
              <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                <Upload className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground flex-1">{resumeFile.name}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile('resume')}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (max 5MB)
            </p>
          </div>

          {/* Cover Letter Upload */}
          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
            <div className="flex items-center gap-4">
              <Input
                id="coverLetter"
                name="coverLetter"
                type="file"
                accept=".pdf,.doc,.docx"
                className="bg-background/50"
                onChange={(e) => handleFileChange(e, 'coverLetter')}
              />
            </div>
            {coverLetterFile && (
              <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                <Upload className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground flex-1">{coverLetterFile.name}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile('coverLetter')}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (max 5MB)
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this application, you agree to our processing of your personal information
            for recruitment purposes. You can also email your resume directly to{' '}
            <a href="mailto:careers@aisecurityassurance.com" className="text-primary hover:underline">
              careers@aisecurityassurance.com
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default CareerApplicationForm;

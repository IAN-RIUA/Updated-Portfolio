import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm excited to work with teams and professionals who share a vision of using data to make meaningful impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass border-border/50 hover:border-primary/50 transition-all hover:glow">
            <CardHeader>
              <CardTitle className="text-xl">Open To</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                Open-source or community-driven data projects
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                Real-world analytics and research initiatives
              </p>
              <p className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                Data analytics or machine learning internships / entry-level roles
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass border-border/50 hover:border-primary/50 transition-all hover:glow">
            <CardHeader>
              <CardTitle className="text-xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a 
                href="https://linkedin.com/in/ian-riua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>linkedin.com/in/ian-riua</span>
              </a>
              
              <a 
                href="https://github.com/Ian-Riua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>github.com/Ian-Riua</span>
              </a>
              
              <a 
                href="tel:+254702773413"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+254 702 773 413</span>
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            If your work thrives on data-driven innovation, I'd love to contribute and grow alongside your team.
          </p>
          <Button
  size="lg"
  asChild
  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all hover:scale-105"
>
  <a
    href="mailto:ianriuam@gmail.com?subject=Hello%20Ian&body=Hi%20Ian,%0D%0A%0D%0AI'm%20reaching%20out%20regarding..."
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail className="w-5 h-5" />
    Send an Email
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};

export default Contact;

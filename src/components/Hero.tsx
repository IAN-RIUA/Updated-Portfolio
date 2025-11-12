import { Button } from "@/components/ui/button";
import { Github, Linkedin, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">👋 Hey there, I'm</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Ian Riua</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-normal">
            Data Analyst | Python & SQL Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-4">
            Data Science & IT Specialist
          </p>
          
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about the transformative power of data turning raw numbers into insights that drive innovation and solve real world challenges.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all hover:scale-105"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all hover:scale-105"
              asChild
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary hover:bg-primary/10 transition-all hover:scale-105"
              asChild
            >
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://linkedin.com/in/ian-riua" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Ian-Riua" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="tel:+254702773413"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

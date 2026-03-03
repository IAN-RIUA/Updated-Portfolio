import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[72vh] py-10 md:py-12 flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-3">
            <span className="text-primary text-base sm:text-lg font-medium">
              👋 Hey there, I'm
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
            <span className="gradient-text">Ian Riua Muriu</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 font-normal">
            Data Analyst | Python & SQL Developer
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-3">
            Data Science & IT Specialist
          </p>

          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Passionate about the transformative power of data, turning raw
            numbers into insights that drive innovation and solve real-world
            challenges.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all hover:scale-105"
              asChild
            >
              <Link to="/contact">Let's Work Together</Link>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <Link
              to="/services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              View Services
            </Link>
          </div>

          <div className="flex gap-6 justify-center mt-6">
            <a
              href="https://linkedin.com/in/ian-riua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ian Riua Muriu on LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/Ian-Riua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ian Riua Muriu on GitHub"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="tel:+254702773413"
              aria-label="Call Ian Riua Muriu"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

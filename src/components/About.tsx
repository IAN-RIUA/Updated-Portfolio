const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              I'm passionate about the transformative power of data — how raw numbers can be shaped 
              into insights that inform smarter decisions, drive innovation, and solve real-world challenges.
            </p>
            
            <p className="text-foreground/90">
              With a background in <span className="text-primary font-semibold">Business Information Technology</span> and 
              hands-on training in <span className="text-primary font-semibold">Data Science</span>, I bring a unique blend 
              of technical and analytical skills to bridge the gap between data, systems, and business strategy.
            </p>
            
            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground text-base italic">
                "Data is not just numbers — it's the story of patterns, trends, and opportunities waiting to be discovered."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

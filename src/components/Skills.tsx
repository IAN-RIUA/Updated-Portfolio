import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "R"]
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Predictive Modeling", "Statistical Analysis"]
  },
  {
    category: "Database & ETL",
    skills: ["PostgreSQL", "MySQL", "Data Pipelines", "ETL Processes"]
  },
  {
    category: "Business & Strategy",
    skills: ["Business Intelligence", "Data-Driven Decision Making", "Strategic Planning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

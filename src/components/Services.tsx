import { Brain, BarChart3, Filter, PieChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Transforming raw datasets into clear, actionable insights through exploratory analysis and visual storytelling using Python, excel and SQL."
  },
  {
    icon: Filter,
    title: "Data Cleaning & Preparation (Data Wrangling)",
    description: "Preparing and structuring raw data for analysis by cleaning, transforming, and validating datasets for accuracy and efficiency."
  },
  {
    icon: PieChart,
    title: "Business Intelligence & Reporting",
    description: "Translating data into strategic insights and performance dashboards that help teams measure results, track KPIs, and make informed decisions."
  },
  {
    icon: Brain,
    title: "Machine Learning & Predictive Analytics (Introductory Level)",
    description: "Exploring how predictive models can uncover trends and forecast outcomes using Python, Scikit-learn, and basic regression or classification techniques."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive data solutions to power your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

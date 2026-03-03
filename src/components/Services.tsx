import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-14 md:py-16 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Comprehensive data solutions to power your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:glow group h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-sm sm:text-base text-muted-foreground flex-1">
                  {service.summary}
                </CardDescription>
                <Button asChild type="button" variant="link" className="mt-3 w-fit px-0 text-primary self-start">
                  <Link to={`/services/${service.id}`}>Read more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10">
            <Link to="/services">Open Full Services Page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

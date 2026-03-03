import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background px-4 py-10 md:py-14">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-6 px-0 hover:bg-transparent">
          <Link to="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>

        <section className="glass rounded-2xl p-6 md:p-8">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{service.title}</h1>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{service.details}</p>
            </div>
          </div>

          <div className="mb-6 space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
            {service.longDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-primary">What this includes</h2>
            <div className="flex flex-wrap gap-2">
              {service.highlights.map((item) => (
                <Badge key={item} variant="secondary" className="border border-primary/30 bg-primary/10">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:ianriuam@gmail.com?subject=Project%20Inquiry&body=Hi%20Ian,%0D%0A%0D%0AI%27d%20love%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity.%0D%0A%0D%0ABest%20regards,">
              Discuss This Service
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default ServiceDetails;

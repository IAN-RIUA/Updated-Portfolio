import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Keyboard } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    name: "Hospital-Appointment-No-Show-Analysis-Dashboard",
    url: "https://github.com/IAN-RIUA/Hospital-Appointment-No-Show-Analysis-Dashboard",
    focus:
      "End-to-end healthcare analytics project analyzing 100,000+ appointments to uncover no-show drivers and support better scheduling decisions.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    name: "Uber_rides",
    url: "https://github.com/IAN-RIUA/Uber_rides",
    focus: "Notebook-based ride analytics project focused on trip patterns, usage behavior, and exploratory data insights.",
    stack: ["Jupyter Notebook", "Python", "Ride Analytics"],
  },
  {
    name: "Drug-stockout",
    url: "https://github.com/IAN-RIUA/Drug-stockout",
    focus:
      "Healthcare stockout analysis using notebook workflows and a Kenya hospital drug stock dataset to surface supply reliability trends.",
    stack: ["Jupyter Notebook", "CSV Data", "Healthcare Analytics"],
  },
  {
    name: "Spotify_recommender_system",
    url: "https://github.com/IAN-RIUA/Spotify_recommender_system",
    focus:
      "Recommendation system experiment using Spotify track data to explore similarity signals and user-oriented music suggestions.",
    stack: ["Jupyter Notebook", "Machine Learning", "Recommendation Systems"],
  },
  {
    name: "NLP-Project",
    url: "https://github.com/IAN-RIUA/NLP-Project",
    focus:
      "Sentiment analysis pipeline for brand/product tweets with text preprocessing, TF-IDF vectorization, and multiple classifier comparisons.",
    stack: ["Python", "NLTK", "scikit-learn", "XGBoost", "TF-IDF"],
  },
  {
    name: "practical-statistics-for-data-scientists",
    url: "https://github.com/IAN-RIUA/practical-statistics-for-data-scientists",
    focus:
      "Statistics-focused codebase with executable notebooks that reinforce practical concepts used in data science analysis workflows.",
    stack: ["Statistics", "R", "Python", "Jupyter Notebook"],
  },
  {
    name: "dsc-k-means-clustering",
    url: "https://github.com/IAN-RIUA/dsc-k-means-clustering",
    focus:
      "Unsupervised learning project covering K-means clustering, cluster evaluation, and elbow-curve interpretation using scikit-learn.",
    stack: ["Unsupervised Learning", "K-means", "scikit-learn", "Python"],
  },
  {
    name: "dsc-introduction-pandas-etl",
    url: "https://github.com/IAN-RIUA/dsc-introduction-pandas-etl",
    focus:
      "Pandas ETL project focused on transforming raw datasets into clean, structured, and analysis-ready tables.",
    stack: ["Pandas", "ETL", "Data Wrangling", "Python"],
  },
  {
    name: "dsc-pandas-data-cleaning-lab",
    url: "https://github.com/IAN-RIUA/dsc-pandas-data-cleaning-lab",
    focus:
      "Comprehensive data-cleaning lab covering missing data handling, text cleanup, table joins, reshaping, and exploratory analysis.",
    stack: ["Pandas", "Data Cleaning", "EDA", "CSV Integration"],
  },
  {
    name: "dsc-regression-model-validation",
    url: "https://github.com/IAN-RIUA/dsc-regression-model-validation",
    focus:
      "Regression validation exercise using train-test split, residual analysis, and error comparison to detect overfitting and underfitting.",
    stack: ["Regression", "Model Validation", "Train/Test Split", "Python"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const autoplay = useMemo(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }

    return { delay: 3500, disableOnInteraction: false };
  }, []);

  return (
    <section id="projects" className="pt-14 pb-8 md:pt-16 md:pb-10 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Recent Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            A curated showcase of projects that reflect my current data analysis and machine learning work.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, A11y, Keyboard]}
          spaceBetween={16}
          slidesPerView={1}
          loop={projects.length > 3}
          centeredSlides={false}
          grabCursor
          keyboard={{ enabled: true }}
          autoplay={autoplay}
          speed={700}
          breakpoints={{
            480: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.25, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-8 projects-swiper"
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous project",
            nextSlideMessage: "Next project",
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name} className="h-auto flex">
              <Card className="glass border-border/50 hover:border-primary/60 transition-all duration-300 hover:glow hover:-translate-y-1 h-full min-h-[340px] w-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg leading-snug break-words">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p
                    className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.focus}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-primary/10 text-foreground border border-primary/30">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary/40 hover:bg-primary/10">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} repository on GitHub`}>
                        <Github className="w-4 h-4 mr-2" />
                        Repository
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a
              href="https://github.com/IAN-RIUA?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all repositories on Ian Riua Murui GitHub profile"
            >
              Explore All Repositories
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed pt-1">
              {selectedProject?.focus}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2">
            {selectedProject?.stack.map((item) => (
              <Badge key={item} variant="secondary" className="bg-primary/10 border border-primary/30">
                {item}
              </Badge>
            ))}
          </div>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <a
              href={selectedProject?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${selectedProject?.name ?? "project"} repository on GitHub`}
            >
              Open Project on GitHub
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

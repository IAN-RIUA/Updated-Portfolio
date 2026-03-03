import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Skills />
        <section className="px-4 pb-10">
          <div className="container mx-auto max-w-6xl glass rounded-xl p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Explore More</h2>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/about">View About Page</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">View Projects Page</Link>
              </Button>
              <Button asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;

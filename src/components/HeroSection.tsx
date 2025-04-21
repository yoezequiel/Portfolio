
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ¡Hola! Soy{" "}
            <span className="text-primary">Casiano Ezequiel</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Estudiante de desarrollo de software con enfoque en desarrollo web y Python.
            Siempre dispuesto a explorar y aprender más.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="#projects">
                Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contactame</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

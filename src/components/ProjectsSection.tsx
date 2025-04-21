
import { Code, ExternalLink, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    demo?: string;
    code?: string;
  };
}

const projects: Project[] = [
  {
    title: "FarmaGo",
    description: "FarmaGo es una aplicación diseñada para facilitar la vida de cualquier comprador de productos de farmacias.",
    technologies: ["HTML", "CSS", "JavaScript", "Otra Tecnologia"],
    image: "/farmago.png",
    links: {
      demo: "https://farmago.onrender.com/",
      code: "https://github.com/yoezequiel/FarmaGo",
    },
  },
  {
    title: "KeyCrate",
    description: "Aplicación web para gestionar contraseñas de forma segura.",
    technologies: ["HTML", "CSS", "JavaScript", "Otra Tecnologia"],
    image: "/keycrate.png",
    links: {
      demo: "https://keycrate.onrender.com/",
      code: "https://github.com/yoezequiel/KeyCrate",
    },
  },
  {
    title: "Blog",
    description: "Mi Blog personal de tecnología.",
    technologies: ["HTML", "CSS", "JavaScript", "Otra Tecnologia"],
    image: "/blog.png",
    links: {
      demo: "https://blog-yoezequiel.onrender.com/",
      code: "https://github.com/yoezequiel/Blog",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Proyectos Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="mb-4 bg-muted rounded-md overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {project.links.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                )}
                {project.links.code && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                      <Code className="mr-2 h-4 w-4" /> Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

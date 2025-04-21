
import { BadgeCheck } from "lucide-react";

const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "Flask"
];

const AboutSection = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <h2 className="section-title">Sobre mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Soy estudiante de desarrollo de software con enfoque en desarrollo web y Python.
            Mi pasión por la tecnología me ha llevado a explorar diferentes lenguajes y frameworks,
            siempre buscando aprender y mejorar mis habilidades.
          </p>
          <p className="text-muted-foreground">
            Fundador de <span className="font-semibold text-foreground">CROBF</span>, 
            una empresa desarrolladora de software especializada en crear soluciones tecnológicas 
            innovadoras y personalizadas para diferentes industrias.
          </p>
          <p className="text-muted-foreground">
            Además, creamos <span className="font-semibold text-foreground">HEXADEVS</span>, 
            una academia online dedicada a formar desarrolladores web de alto nivel, 
            brindando educación práctica y actualizada.
          </p>
          <p className="text-muted-foreground">
            Estoy constantemente en búsqueda de nuevos desafíos y oportunidades para crecer profesionalmente.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Mis habilidades</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill} className="skill-badge flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4" /> {skill}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Educación y Experiencia</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Estudiante de Desarrollo de Software</h4>
                <p className="text-sm text-muted-foreground">En curso</p>
              </div>
              <div className="border-l-2 border-primary/60 pl-4 py-1">
                <h4 className="font-medium">Fundador de CROBF</h4>
                <p className="text-sm text-muted-foreground">Empresa de desarrollo de software</p>
              </div>
              <div className="border-l-2 border-primary/60 pl-4 py-1">
                <h4 className="font-medium">Fundador de HEXADEVS</h4>
                <p className="text-sm text-muted-foreground">Academia online de desarrollo web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


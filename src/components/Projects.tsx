import { ExternalLink, Github, Calendar, Tag, Zap, Database, Cloud, Store } from 'lucide-react';

interface ProjectData {
  id: string;
  data: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    year: string;
    status: string;
    demoUrl: string;
    codeUrl: string;
    gradient: string;
    icon?: string;
  };
}

const ICON_MAP = {
  Database,
  Cloud,
  Store,
  Zap
};

const Projects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <section id="proyectos" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Proyectos Principales
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones tecnológicas innovadoras y escalables
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => {
              const { title, description, image, technologies, year, status, demoUrl, codeUrl, gradient, icon } = project.data;
              const Icon = (icon && ICON_MAP[icon as keyof typeof ICON_MAP]) || Zap;
              
              return (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105">
                  <a href={`/projects/${project.id}`} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        style={{ viewTransitionName: `image-${project.id}` } as any}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col space-y-2">
                        {year && (
                          <div className="bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                            <div className="flex items-center space-x-1 text-white text-xs sm:text-sm">
                              <Calendar className="h-2 w-2 sm:h-3 sm:w-3" />
                              <span>{year}</span>
                            </div>
                          </div>
                        )}
                        {status && (
                          <div className="bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                            <span className="text-green-400 text-xs font-medium">{status}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                  
                  <div className="p-4 sm:p-6">
                    <a href={`/projects/${project.id}`}>
                      <h3 
                        className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3"
                        style={{ viewTransitionName: `title-${project.id}` } as any}
                      >
                        {title}
                      </h3>
                    </a>
                    <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed">{description}</p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center"
                        >
                          <Tag className="h-2 w-2 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2 sm:space-x-3">
                      <a
                        href={demoUrl}
                        className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 group flex-1 justify-center"
                        aria-label={`Ver demo de ${title}`}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform" />
                        Demo
                      </a>
                      <a
                        href={codeUrl}
                        className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-200 group flex-1 justify-center"
                        aria-label={`Ver código de ${title}`}
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:rotate-12 transition-transform" />
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
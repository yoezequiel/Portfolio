import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Zap, Database, Shield, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GitHub Metrics Engine',
      description: 'Herramienta avanzada para recolección y procesamiento de estadísticas de productividad desde la API de GitHub.',
      image: 'https://images.pexels.com/photos/25626/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Node.js', 'GitHub API', 'JSON Processing', 'Analytics'],
      year: '2024',
      status: 'Activo',
      details: [
        'Métricas de productividad (tiempos de ciclo, PRs/issues)',
        'Métricas de colaboración (reviews, comentarios)',
        'Métricas estratégicas (repos inactivos, tendencias)',
        'Métricas de mantenibilidad (branches muertos)',
        'Generación de archivos JSON con valores agregados'
      ],
      demoUrl: 'https://stats.crobf.tech',
      codeUrl: 'https://github.com/CROBF-tech/Stats',
      gradient: 'from-blue-400 to-cyan-600',
      icon: Database
    },
    {
      title: 'CROBF Infrastructure',
      description: 'Infraestructura tecnológica completa para CROBF incluyendo correos institucionales y sistemas internos.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Email Systems', 'Domain Management', 'CI/CD', 'Infrastructure'],
      year: '2023-2024',
      status: 'Operativo',
      details: [
        'Implementación de correos @crobf.tech',
        'Sistema de gestión organizacional',
        'Automatización de procesos internos',
        'Infraestructura escalable y segura'
      ],
      demoUrl: 'http://crobf.tech',
      codeUrl: 'https://github.com/CROBF-tech/website',
      gradient: 'from-green-400 to-teal-600',
      icon: Cloud
    },
    {
      title: 'Mobile Banking App',
      description: 'Aplicación móvil completa para servicios bancarios desarrollada con React Native y Expo, con integración de APIs seguras.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'API Integration'],
      year: '2024',
      status: 'Completado',
      details: [
        'Interfaz nativa para iOS y Android',
        'Autenticación biométrica integrada',
        'Transacciones seguras en tiempo real',
        'Notificaciones push personalizadas',
        'Arquitectura escalable con Redux'
      ],
      demoUrl: '#',
      codeUrl: '#',
      gradient: 'from-cyan-400 to-blue-600',
      icon: Zap
    },
    {
      title: 'E-commerce Android App',
      description: 'Aplicación nativa de Android desarrollada en Kotlin para plataforma de comercio electrónico con carrito de compras.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Kotlin', 'Android SDK', 'Room Database', 'Retrofit', 'Material Design'],
      year: '2024',
      status: 'Lanzado',
      details: [
        'Interfaz Material Design nativa',
        'Base de datos local con Room',
        'Integración con APIs REST',
        'Sistema de pagos integrado',
        'Optimización de rendimiento'
      ],
      demoUrl: 'http://endiez.com',
      codeUrl: '#',
      gradient: 'from-orange-400 to-purple-600',
      icon: Zap
    },
    {
      title: 'Única - Sistema de Gestión Comercial',
      description: 'Sistema de gestión para tienda de ropa. Desarrollo de una app intuitiva para reemplazar el control manual de stock.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS'],
      year: '2025',
      status: 'Completado',
      details: [
        'Gestión de productos, precios, etiquetas e inventario',
        'Implementación de sistema de caché para mejor rendimiento',
        'Mayor organización y eficiencia en la tienda',
        'Reducción de costos operativos',
        'Interfaz intuitiva y moderna'
      ],
      demoUrl: 'https://unica-website.vercel.app',
      codeUrl: '#',
      gradient: 'from-orange-400 to-red-600',
      icon: Database
    },
  ];

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
              const Icon = project.icon || Zap;
              return (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col space-y-2">
                      {project.year && (
                        <div className="bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <div className="flex items-center space-x-1 text-white text-xs sm:text-sm">
                            <Calendar className="h-2 w-2 sm:h-3 sm:w-3" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      )}
                      {project.status && (
                        <div className="bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <span className="text-green-400 text-xs font-medium">{project.status}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                    
                    {project.details && (
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Características Principales</h4>
                        <ul className="space-y-1">
                          {project.details.slice(0, 3).map((detail, i) => (
                            <li key={i} className="text-gray-400 text-xs flex items-start">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech, techIndex) => (
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
                        href={project.demoUrl}
                        className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 group flex-1 justify-center"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform" />
                        Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-200 group flex-1 justify-center"
                        aria-label={`Ver código de ${project.title}`}
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
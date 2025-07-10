import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Users, Code, Zap, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Estudiante de Desarrollo de Software',
      company: 'Formación Académica Continua',
      period: 'En curso',
      type: 'education',
      description: 'Formación académica especializada en desarrollo de software con enfoque en tecnologías web modernas, Python y arquitecturas escalables.',
      achievements: [
        'Especialización en desarrollo backend con Node.js y Express',
        'Dominio de bases de datos modernas (libSQL, Turso)',
        'Implementación de sistemas de autenticación JWT'
      ],
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Fundador y Director',
      company: 'CROBF - Colectivo Tecnológico',
      period: '2023 - Presente',
      type: 'leadership',
      description: 'Fundación y dirección del colectivo tecnológico. Liderazgo en la evolución organizacional hacia una estructura jerárquica profesional con contratos que regulan propiedad intelectual y confidencialidad.',
      achievements: [
        'Implementación de correos institucionales (@crobf.tech)',
        'Desarrollo de estructura contractual profesional',
        'Transición hacia figura legal (SAS)',
        'Gestión de propiedad intelectual y régimen disciplinario'
      ],
      icon: Building,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Líder de Proyecto HexaDevs',
      company: 'CROBF - Proyecto Interno',
      period: '2024 - Presente',
      type: 'product',
      description: 'Liderazgo del proyecto HexaDevs dentro de CROBF. Diseño e implementación de modelo económico profesional para productos educativos con pricing estratégico basado en nivel y tipo de curso.',
      achievements: [
        'Desarrollo de modelo económico escalable',
        'Implementación de sistema de pricing dinámico',
        'Creación de contenido educativo de alto nivel',
        'Gestión de plataforma de aprendizaje online'
      ],
      icon: Users,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Especialista en Ciberseguridad',
      company: 'Consultoría y Formación',
      period: '2024 - Presente',
      type: 'security',
      description: 'Desarrollo de campañas de concientización en ciberseguridad mediante simulaciones de spoofing y técnicas de ingeniería social.',
      achievements: [
        'Desarrollo de landing pages con trazabilidad',
        'Implementación de bases de datos para métricas',
        'Campañas internas de concientización',
        'Simulaciones de ataques controlados'
      ],
      icon: Shield,
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trayectoria Profesional
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h3>
                          <p className="text-gray-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 mt-2 lg:mt-0">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>
                      
                      {exp.achievements && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Logros Principales</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-300 text-xs sm:text-sm flex items-start">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">Remoto</span>
                      </div>
                    </div>
                  </div>
                  
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-16 sm:top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
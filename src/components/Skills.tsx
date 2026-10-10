import React from 'react';
import { Server, Database, Cloud, Shield, Code, Zap, Star, Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { 
      name: 'JavaScript/TypeScript', 
      level: 'Experto', 
      color: 'from-yellow-400 to-yellow-600', 
      icon: Code,
      experience: '3+ años',
      projects: 30
    },
    { 
      name: 'Astro & React', 
      level: 'Experto', 
      color: 'from-cyan-400 to-blue-600', 
      icon: Code,
      experience: '3+ años',
      projects: 40
    },
    { 
      name: 'Node.js & Express', 
      level: 'Experto', 
      color: 'from-green-400 to-green-600', 
      icon: Server,
      experience: '3+ años',
      projects: 25
    },
    { 
      name: 'HTML, CSS & Tailwind', 
      level: 'Experto', 
      color: 'from-orange-400 to-red-600', 
      icon: Code,
      experience: '4+ años',
      projects: 35
    },
    { 
      name: 'SQLite, Turso & Drizzle', 
      level: 'Avanzado', 
      color: 'from-purple-400 to-purple-600', 
      icon: Database,
      experience: '3+ años',
      projects: 25
    },
    { 
      name: 'React Native & Expo', 
      level: 'Avanzado', 
      color: 'from-cyan-400 to-blue-600', 
      icon: Code,
      experience: '2+ años',
      projects: 7
    },
    { 
      name: 'Auth, Seguridad & APIs', 
      level: 'Avanzado', 
      color: 'from-red-400 to-red-600', 
      icon: Shield,
      experience: '3+ años',
      projects: 20
    },
    { 
      name: 'Python', 
      level: 'Avanzado', 
      color: 'from-blue-400 to-blue-600', 
      icon: Code,
      experience: '3+ años',
      projects: 15
    },
    { 
      name: 'IA aplicada (Gemini, LLMs)', 
      level: 'Avanzado', 
      color: 'from-pink-400 to-purple-600', 
      icon: Zap,
      experience: '2+ años',
      projects: 8
    },
    { 
      name: 'Linux & VPS', 
      level: 'Avanzado', 
      color: 'from-gray-400 to-gray-600', 
      icon: Server,
      experience: '5+ años',
      projects: 25
    },
    { 
      name: 'PostgreSQL & Supabase', 
      level: 'Intermedio+', 
      color: 'from-blue-500 to-indigo-600', 
      icon: Database,
      experience: '2+ años',
      projects: 4
    },
    { 
      name: 'Rust', 
      level: 'Intermedio', 
      color: 'from-orange-500 to-amber-600', 
      icon: Code,
      experience: '1+ año',
      projects: 2
    },
    { 
      name: 'Docker & Deploy', 
      level: 'Intermedio+', 
      color: 'from-blue-500 to-cyan-600', 
      icon: Cloud,
      experience: '2+ años',
      projects: 15
    },
    { 
      name: 'MercadoPago & Pagos', 
      level: 'Intermedio+', 
      color: 'from-sky-400 to-blue-600', 
      icon: Shield,
      experience: '2+ años',
      projects: 3
    },
    { 
      name: 'Testing (Vitest, Playwright)', 
      level: 'Intermedio', 
      color: 'from-green-500 to-emerald-700', 
      icon: CheckCircle,
      experience: '1+ año',
      projects: 10
    },
    { 
      name: 'GitHub Actions & CI/CD', 
      level: 'Intermedio', 
      color: 'from-gray-600 to-gray-800', 
      icon: Cloud,
      experience: '1+ año',
      projects: 5
    },
    { 
      name: 'Java', 
      level: 'Básico', 
      color: 'from-red-400 to-orange-600', 
      icon: Code,
      experience: '1+ año',
      projects: 3
    },
    { 
      name: 'Figma & UI/UX', 
      level: 'Intermedio', 
      color: 'from-pink-400 to-purple-600', 
      icon: Code,
      experience: '2+ años',
      projects: 5
    },
  ];

  const specializations = [
    {
      title: 'Desarrollo Frontend',
      description: 'Interfaces rápidas y responsivas con SSR e islas interactivas, SEO, internacionalización y animación.',
      technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Framer Motion'],
      icon: Code,
      color: 'from-cyan-400 to-blue-600',
      badge: 'Frontend'
    },
    {
      title: 'Desarrollo Backend',
      description: 'APIs REST seguras con autenticación, roles, multi-tenant, pagos, emails y tareas programadas.',
      technologies: ['Node.js', 'Express', 'Hono', 'Zod', 'JWT', 'MercadoPago'],
      icon: Server,
      color: 'from-green-400 to-green-600',
      badge: 'Backend'
    },
    {
      title: 'Apps Móviles',
      description: 'Apps multiplataforma con funcionamiento offline, GPS, cámara, notificaciones push y sincronización.',
      technologies: ['React Native', 'Expo', 'Expo Router', 'SQLite', 'Firebase'],
      icon: Code,
      color: 'from-orange-400 to-red-600',
      badge: 'Mobile'
    },
    {
      title: 'Inteligencia Artificial Aplicada',
      description: 'IA integrada en productos reales: agentes con herramientas, modelos que corren en el teléfono y generación de contenido.',
      technologies: ['Google Gemini', 'Ollama', 'llama.rn', 'Agentes', 'OCR'],
      icon: Zap,
      color: 'from-pink-400 to-purple-600',
      badge: 'IA'
    },
    {
      title: 'Sistemas & Infraestructura',
      description: 'Software de sistemas en Rust, monitoreo de servidores, deploy en VPS y plataformas serverless.',
      technologies: ['Rust', 'Tokio', 'Tauri', 'Linux', 'Docker', 'Vercel', 'Cloudflare Workers'],
      icon: Cloud,
      color: 'from-blue-400 to-blue-600',
      badge: 'Sistemas'
    },
    {
      title: 'Bases de Datos',
      description: 'Modelado de datos, migraciones y ORMs, desde SQLite distribuido hasta PostgreSQL.',
      technologies: ['Turso', 'SQLite', 'PostgreSQL', 'Supabase', 'Drizzle', 'Prisma'],
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      badge: 'Datos'
    }
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Experto':
        return <Award className="h-4 w-4 text-yellow-400" />;
      case 'Avanzado':
        return <Star className="h-4 w-4 text-blue-400" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Experto':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Avanzado':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      default:
        return 'bg-green-500/20 text-green-400 border-green-400/30';
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Especialización Técnica
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Habilidades Técnicas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            {getLevelIcon(skill.level)}
                            <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="bg-gray-700/50 p-2 rounded-lg">
                        <p className="text-gray-400">Experiencia</p>
                        <p className="text-white font-medium">{skill.experience}</p>
                      </div>
                      <div className="bg-gray-700/50 p-2 rounded-lg">
                        <p className="text-gray-400">Proyectos</p>
                        <p className="text-white font-medium">{skill.projects}+</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Áreas de Especialización</h3>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full border border-gray-600">
                        {spec.badge}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${spec.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{spec.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${spec.color}`}></div>
                          <span className="text-gray-400 text-sm">Área de enfoque</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{spec.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {spec.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-600 hover:border-gray-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Decorative element */}
                    <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r ${spec.color} opacity-10 rounded-full blur-xl`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Resumen de Competencias</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">80+</h4>
                <p className="text-gray-300 text-sm">Repositorios con código</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Server className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">9</h4>
                <p className="text-gray-300 text-sm">Lenguajes de programación</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">5+</h4>
                <p className="text-gray-300 text-sm">Años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">6</h4>
                <p className="text-gray-300 text-sm">Áreas de especialización</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
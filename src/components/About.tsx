import React from 'react';
import { Code, Briefcase, GraduationCap, Users, Shield, Database, Cloud, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfil Profesional
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Resumen Ejecutivo</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
                  Desarrollador de Software especializado en la creación de soluciones web modernas y automatizadas. 
                  Mi enfoque combina la excelencia técnica con un criterio empresarial sólido, desarrollando 
                  mis habilidades de forma autodidacta y participando activamente en iniciativas de innovación tecnológica.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Como autodidacta, lidero el desarrollo de sistemas escalables y la estructuración organizativa en entornos colaborativos, 
                  con una comunicación clara y formal orientada a la toma de decisiones ejecutivas.
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Iniciativas de Liderazgo</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">CROBF - Fundador y Director</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Fundador y director del colectivo tecnológico. Impulsor de la evolución hacia una 
                      estructura organizacional jerárquica con contratos profesionales que regulan propiedad 
                      intelectual, confidencialidad y régimen disciplinario.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-2">HexaDevs - Proyecto CROBF</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Proyecto interno de CROBF enfocado en el diseño de un modelo económico profesional para 
                      productos de contenido educativo en español, incorporando variables como nivel y tipo de curso en el pricing estratégico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Frontend</h3>
                <p className="text-gray-400 text-xs sm:text-sm">React, Astro, HTML, CSS, JavaScript</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Backend</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Python, Django, Flask, Node.js</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">DevOps</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Linux, VPS, Docker, Apache</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-red-500/30 transition-colors">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Automatización</h3>
                <p className="text-gray-400 text-xs sm:text-sm">N8N, GitHub Actions, CI/CD</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Bases de Datos</h3>
                <p className="text-gray-400 text-xs sm:text-sm">SQL, PostgreSQL, libSQL</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-yellow-500/30 transition-colors">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Desarrollo Multiplataforma</h3>
                <p className="text-gray-400 text-xs sm:text-sm">React Native, Expo, Kotlin, Java</p>
              </div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-pink-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-pink-500/30 transition-colors">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Diseño & UX</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Figma, Tailwind CSS, UI/UX</p>
              </div>
            </div>
          </div>

          {/* Professional Approach Section */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Enfoque Profesional</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Aprendizaje Autodidacta</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Constante actualización tecnológica y dominio autónomo de nuevas herramientas.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Liderazgo Empresarial</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Fundación y dirección de CROBF con visión estratégica y enfoque en escalabilidad.</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Innovación Continua</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Desarrollo autodidacta constante en tecnologías emergentes y mejores prácticas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
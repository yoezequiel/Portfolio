import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contacto Profesional
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Tenés un proyecto en mente? Trabajemos juntos para crear soluciones tecnológicas innovadoras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-2">
              <div className="bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Información de contacto</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email profesional</p>
                      <a href="mailto:ezequielcasiano15@gmail.com" className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base">
                        ezequielcasiano15@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white text-sm sm:text-base">Remoto 🌍</p>
                      <p className="text-gray-400 text-xs">Servicios globales</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Horario de atención</p>
                      <p className="text-white text-sm sm:text-base">Lun - Vie: 9:00 - 18:00</p>
                      <p className="text-gray-400 text-xs">Respuesta en 24-48 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Available */}
              <div className="bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Servicios Disponibles</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Desarrollo web y aplicaciones móviles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Automatización con GitHub Actions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Infraestructura Linux y Docker</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Sistemas de automatización</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Redes Profesionales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-xl border border-gray-700 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">¿Listo para trabajar juntos?</h3>
                <p className="text-gray-300 mb-6">
                  Contactame directamente por email para discutir tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
                </p>
                <a
                  href="mailto:ezequielcasiano15@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Enviar Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
            <span className="text-gray-300 text-xs sm:text-sm font-medium">Desarrollador de Software • Remoto 🌍</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            ¡Hola! Soy{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
              Casiano Ezequiel
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
            Desarrollador{' '}
            <span className="text-blue-400 font-semibold">Fullstack</span> especializado en{' '}
            <span className="text-purple-400 font-semibold">infraestructura Linux</span> y{' '}
            <span className="text-green-400 font-semibold">automatización de sistemas</span>
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Dominio completo del stack tecnológico: desde interfaces React y Astro hasta APIs robustas con Node.js y Python. 
            Fundador de CROBF, autodidacta apasionado creando soluciones end-to-end innovadoras y escalables.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-2 sm:px-4">
              <Code className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              <span className="text-gray-300 text-xs sm:text-sm">React & TypeScript</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-2 sm:px-4">
              <Code className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
              <span className="text-gray-300 text-xs sm:text-sm">Python & Node.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-2 sm:px-4">
              <Code className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              <span className="text-gray-300 text-xs sm:text-sm">PostgreSQL & DevOps</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <a
              href="#proyectos"
              className="group inline-flex items-center px-6 py-3 sm:px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Ver proyectos
              <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contacto"
              className="group inline-flex items-center px-6 py-3 sm:px-8 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              Contacto profesional
              <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="mailto:ezequielcasiano15@gmail.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="Enviar email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/yoezequiel"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="Ver perfil de GitHub"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/yoezequiel/"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="Conectar en LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
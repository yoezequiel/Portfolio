import React from 'react';
import { Heart, Code2, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Casiano Ezequiel
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <span>© 2025 Hecho con</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 fill-current" />
              <span>por Casiano Ezequiel</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              <span>Remoto 🌍</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            Desarrollador de Software especializado en soluciones web modernas y escalables
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
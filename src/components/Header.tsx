
import { useState } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Casiano Ezequiel</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-link active-nav-link">Inicio</a>
          <a href="#about" className="nav-link">Sobre mí</a>
          <a href="#projects" className="nav-link">Proyectos</a>
          <a href="#contact" className="nav-link">Contacto</a>
          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/yoezequiel" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yoezequiel/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 space-y-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="nav-link active-nav-link">Inicio</a>
            <a href="#about" className="nav-link">Sobre mí</a>
            <a href="#projects" className="nav-link">Proyectos</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </nav>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/yoezequiel" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yoezequiel/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

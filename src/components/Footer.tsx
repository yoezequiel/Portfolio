
import { Github, Heart, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Casiano Ezequiel</span>
            <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/yoezequiel/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/yoezequiel"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold">
              John<span className="text-primary">Dev</span>
            </a>
            <p className="mt-2 text-neutral-400">
              Full Stack Developer | Creating modern web applications
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Dribbble"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} JohnDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

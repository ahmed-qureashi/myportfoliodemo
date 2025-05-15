import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#hero" className="text-2xl font-bold text-primary">
            John<span className="text-secondary">Dev</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-neutral-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden py-4 border-t border-neutral-200`}>
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

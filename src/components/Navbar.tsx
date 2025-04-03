
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Pioneer Classes</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('subjects')} className="text-foreground hover:text-primary transition-colors">Subjects</button>
              <button onClick={() => scrollToSection('batches')} className="text-foreground hover:text-primary transition-colors">Batches</button>
              <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('success')} className="text-foreground hover:text-primary transition-colors">Success Stories</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </nav>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('subjects')} className="text-foreground hover:text-primary transition-colors py-2">Subjects</button>
            <button onClick={() => scrollToSection('batches')} className="text-foreground hover:text-primary transition-colors py-2">Batches</button>
            <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors py-2">Features</button>
            <button onClick={() => scrollToSection('success')} className="text-foreground hover:text-primary transition-colors py-2">Success Stories</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

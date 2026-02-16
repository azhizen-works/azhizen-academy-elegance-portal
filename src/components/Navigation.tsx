import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import logo from '../assets/ac_logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    if (window.location.pathname === '/') {
      // If already on home page, scroll to hero
      scrollToSection('hero');
    } else {
      // Navigate to home page
      window.location.href = '/';
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

    const handleContactClick = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-blue-900/95 backdrop-blur-md border-b border-light-blue-300/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-9xl mx-auto px-7 lg:px-12">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo}
              alt="Azhizen Academy Logo" 
              className="h-24 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={navigateToHome}
              className="relative text-white hover:text-light-blue-400 transition-colors font-medium text-lg py-2 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-light-blue-400 transition-all duration-300 group-hover:w-full transform group-hover:scale-110 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="relative text-white hover:text-light-blue-400 transition-colors font-medium text-lg py-2 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-light-blue-400 transition-all duration-300 group-hover:w-full transform group-hover:scale-110 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('/courses')}
              className="relative text-white hover:text-light-blue-400 transition-colors font-medium text-lg py-2 group"
            >
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-light-blue-400 transition-all duration-300 group-hover:w-full transform group-hover:scale-110 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('/cohort-program')}
              className="relative text-white hover:text-light-blue-400 transition-colors font-medium text-lg py-2 group"
            >
              Cohort Program
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-light-blue-400 transition-all duration-300 group-hover:w-full transform group-hover:scale-110 rounded-full"></span>
            </button>
            <button 
              onClick={()=> handleContactClick('/contact')}
              className="relative text-white hover:text-light-blue-400 transition-colors font-medium text-lg py-2 group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-light-blue-400 transition-all duration-300 group-hover:w-full transform group-hover:scale-110 rounded-full"></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-light-blue-400">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-blue-900/95 backdrop-blur-md border-l border-light-blue-300/20">
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={navigateToHome}
                    className="text-white hover:text-light-blue-400 transition-colors font-medium text-left py-2"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="text-white hover:text-light-blue-400 transition-colors font-medium text-left py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => handleNavigation('/courses')}
                    className="text-white hover:text-light-blue-400 transition-colors font-medium text-left py-2"
                  >
                    Courses
                  </button>
                  <button 
                    onClick={() => handleNavigation('/cohort-program')}
                    className="text-white hover:text-light-blue-400 transition-colors font-medium text-left py-2"
                  >
                    Cohort Program
                  </button>
                  <button 
                    onClick={()=> handleContactClick('/contact')}
                    className="text-white hover:text-light-blue-400 transition-colors font-medium text-left py-2"
                  >
                    Contact Us
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

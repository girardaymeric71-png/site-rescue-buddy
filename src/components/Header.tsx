import { Button } from "@/components/ui/button";
import { Phone, Menu, Shield } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-secondary">Rescue Buddy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">À Propos</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Emergency Button */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-emergency hover:bg-emergency/90 text-emergency-foreground hidden sm:flex"
            >
              <Phone className="mr-2 h-4 w-4" />
              Urgence
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">À Propos</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
              <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground w-full mt-4">
                <Phone className="mr-2 h-4 w-4" />
                Urgence
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
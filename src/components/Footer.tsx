import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Rescue Buddy</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Service d'assistance d'urgence de confiance depuis plus de 15 ans. 
              Nous intervenons 24h/24 pour protéger et sauver des vies avec 
              professionnalisme et compassion.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Urgences Médicales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intervention Incendie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Secours d'Urgence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sauvetage en Groupe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formation Secourisme</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emergency" />
                <div>
                  <div className="font-semibold">Urgence</div>
                  <div className="text-emergency text-lg font-bold">15</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-5 w-5" />
                <span>contact@rescue-buddy.fr</span>
              </div>
              
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  123 Avenue des Secours<br />
                  75001 Paris, France
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Rescue Buddy. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-2xl animate-pulse px-6 py-3 text-lg font-bold rounded-full">
          <Phone className="mr-2 h-5 w-5" />
          Urgence
        </Button>
      </div>
    </footer>
  );
};
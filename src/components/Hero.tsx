import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-rescue.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl text-white">
          <div className="mb-6 flex items-center space-x-2">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold">Rescue Buddy</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Assistance d'Urgence
            <span className="block text-accent">24h/24</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">
            Intervention rapide, équipe professionnelle, sécurité garantie. 
            Nous sommes là quand vous en avez le plus besoin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-2xl px-8 py-6 text-lg font-bold"
            >
              <Phone className="mr-2 h-6 w-6" />
              Urgence: 15
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Clock className="mr-2 h-6 w-6" />
              Nos Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
              <div className="text-white/80">Disponibilité</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">&lt;5min</div>
              <div className="text-white/80">Temps d'intervention</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">1500+</div>
              <div className="text-white/80">Vies sauvées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
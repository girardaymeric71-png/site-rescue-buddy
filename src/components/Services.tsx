import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ambulance, Flame, Heart, Users, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "Urgences Médicales",
    description: "Intervention d'urgence pour toute situation médicale critique. Équipe de paramedics certifiés disponible 24h/24.",
    features: ["Transport d'urgence", "Premiers secours", "Réanimation", "Soins intensifs"]
  },
  {
    icon: Flame,
    title: "Intervention Incendie",
    description: "Lutte contre les incendies et évacuations d'urgence. Équipement professionnel et formation continue.",
    features: ["Extinction d'incendies", "Évacuation", "Sauvetage", "Prévention"]
  },
  {
    icon: Heart,
    title: "Secours d'Urgence",
    description: "Assistance immédiate en cas d'accident ou de situation de détresse. Coordination avec les services d'urgence.",
    features: ["Accidents de la route", "Chutes", "Noyade", "Situations critiques"]
  },
  {
    icon: Users,
    title: "Sauvetage en Groupe",
    description: "Opérations de sauvetage de masse et coordination d'évacuation. Expertise en gestion de crise.",
    features: ["Catastrophes naturelles", "Évacuations massives", "Recherche et sauvetage", "Coordination multi-équipes"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Nos Services d'Urgence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services de sauvetage et d'assistance d'urgence, 
            assurés par des professionnels expérimentés et certifiés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-accent p-12 rounded-3xl text-white">
          <Clock className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Besoin d'une intervention immédiate ?</h3>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe d'urgence est disponible 24 heures sur 24, 7 jours sur 7
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-6 text-lg font-bold"
          >
            Contacter l'Urgence
          </Button>
        </div>
      </div>
    </section>
  );
};
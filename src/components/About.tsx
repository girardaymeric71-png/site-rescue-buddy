import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, MapPin } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, value: "150+", label: "Professionnels certifiés" },
    { icon: Clock, value: "24/7", label: "Disponibilité continue" },
    { icon: Award, value: "15+", label: "Années d'expérience" },
    { icon: MapPin, value: "5min", label: "Temps de réponse moyen" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              À Propos de Nous
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Votre Partenaire de Confiance en Situation d'Urgence
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Depuis plus de 15 ans, <strong className="text-secondary">Rescue Buddy</strong> est 
                le leader régional des services d'assistance d'urgence. Notre équipe de professionnels 
                hautement qualifiés intervient rapidement pour sauver des vies et protéger les biens.
              </p>
              
              <p>
                Nous combinons l'expertise technique, l'équipement de pointe et une approche humaine 
                pour offrir les meilleurs services de sauvetage. Chaque intervention est menée avec 
                professionnalisme, efficacité et compassion.
              </p>
              
              <p>
                Notre engagement : être là quand vous en avez le plus besoin, avec la rapidité et 
                l'expertise nécessaires pour faire face à toute situation d'urgence.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-secondary">Certification ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-secondary">Agréé par les autorités sanitaires</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-secondary">Formation continue des équipes</span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-secondary/5 to-primary/5 p-12 rounded-3xl border border-primary/10">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-secondary mb-6">Notre Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Protéger et sauver des vies grâce à notre expertise, notre rapidité d'intervention 
              et notre engagement indéfectible envers la sécurité de nos concitoyens. Chaque seconde compte, 
              chaque vie a de la valeur."
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Contactez-Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pour toute urgence, contactez immédiatement le 15. Pour les autres demandes, 
            nous sommes à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-8">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-emergency/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emergency" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Urgence</div>
                    <div className="text-2xl font-bold text-emergency">15</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Standard</div>
                    <div className="text-lg text-muted-foreground">01 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Email</div>
                    <div className="text-lg text-muted-foreground">contact@rescue-buddy.fr</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Adresse</div>
                    <div className="text-lg text-muted-foreground">
                      123 Avenue des Secours<br />
                      75001 Paris, France
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Horaires</div>
                    <div className="text-lg text-muted-foreground">24h/24, 7j/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <Card className="p-6 bg-gradient-to-r from-emergency/5 to-primary/5 border-emergency/20">
              <h4 className="text-xl font-bold text-secondary mb-3">En Cas d'Urgence</h4>
              <p className="text-muted-foreground mb-4">
                Pour toute situation d'urgence vitale, composez immédiatement le 15 
                ou utilisez notre bouton d'urgence.
              </p>
              <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground w-full">
                <Phone className="mr-2 h-4 w-4" />
                Appeler l'Urgence
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">
                  Email *
                </label>
                <Input type="email" placeholder="votre.email@exemple.fr" required />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">
                  Téléphone
                </label>
                <Input type="tel" placeholder="01 23 45 67 89" />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">
                  Sujet *
                </label>
                <Input placeholder="Objet de votre message" required />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Décrivez votre demande..." 
                  className="min-h-32" 
                  required 
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Envoyer le Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
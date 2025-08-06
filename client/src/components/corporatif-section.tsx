import { motion } from "framer-motion";
import { Handshake, Rocket, Users, Network, Lightbulb, Shield, Monitor, Wifi, Coffee, Briefcase } from "lucide-react";

export default function CorporatifSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceTypes = [
    {
      icon: Rocket,
      title: "Lancements",
      description: "Produits, services, événements clients"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Cohésion d'équipe, réunions stratégiques"
    },
    {
      icon: Network,
      title: "Réseautage",
      description: "Conférences, événements professionnels"
    },
    {
      icon: Lightbulb,
      title: "Secteurs créatifs",
      description: "Publicité, design, innovation"
    }
  ];

  const features = [
    { icon: Shield, text: "Discrétion et confidentialité assurées" },
    { icon: Monitor, text: "Équipement audiovisuel professionnel" },
    { icon: Wifi, text: "WiFi haut débit dédié" },
    { icon: Coffee, text: "Service café et restauration premium" }
  ];

  return (
    <section id="corporatif" className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Handshake className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-5xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Volet Corporatif</h2>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Transformez vos événements professionnels en expériences mémorables. Notre salle privée allie sophistication, discrétion et flexibilité pour accueillir vos clients, partenaires ou collaborateurs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {serviceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-4"
                >
                  <type.icon className="w-8 h-8 text-gold-500 mb-2" />
                  <h4 className="text-lg font-playfair mb-2" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.title}</h4>
                  <p className="text-sm" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <feature.icon className="w-5 h-5 text-gold-500 mr-3" />
                  <span className="text-cream">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center bg-burgundy-500 text-cream px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-300"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Organiser mon événement corporate
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Événement corporatif au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 bg-gold-500 text-black px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold">
              Excellence professionnelle
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

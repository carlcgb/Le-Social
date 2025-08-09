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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 bg-burgundy-900/30 backdrop-blur-md border border-[#32bd57]/30 rounded-lg p-8">
          {/* Title, description, and service types - order 1 on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="flex items-center mb-6 text-[#ffffff]">
              <Handshake className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-responsive-4xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Volet Corporatif</h2>
            </div>
            
            <p className="text-responsive-lg mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Transformez vos événements professionnels en expériences mémorables. Notre salle privée allie sophistication, discrétion et flexibilité pour accueillir vos clients, partenaires ou collaborateurs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {serviceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md border border-[#cc871d]/30 rounded-lg p-4 text-[#ffffff] bg-[#0000007d]"
                >
                  <type.icon className="w-8 h-8 text-gold-500 mb-2" />
                  <h4 className="text-responsive-lg font-playfair mb-2" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.title}</h4>
                  <p className="text-responsive-sm" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image - order 2 on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Événement corporatif au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold bg-[#32bd57] text-white shadow-lg drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Excellence professionnelle
            </div>
          </motion.div>

          {/* Features list - order 3 on mobile (second to last) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-3 lg:col-span-2"
          >
            <div className="space-y-4 text-[#ffffff]">
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
                  <span className="text-responsive-sm text-[#ffffff]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Button - order 4 on mobile (last) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-4 lg:col-span-2 text-center mt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#16a34a',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center px-8 py-4 rounded-full transition-all duration-150 font-playfair font-bold btn-text-responsive"
              style={{backgroundColor: '#32bd57', color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              transition={{ duration: 0.15 }}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Organiser mon événement corporate
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

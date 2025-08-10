import { motion } from "framer-motion";
import { Users, Cake, Martini, Heart, ChefHat, Music, Palette, Bell, Sparkles, Camera, Car, Shield, MapPin, Clock, Users2, Utensils } from "lucide-react";

export default function EvenementsSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const eventTypes = [
    {
      icon: Cake,
      title: "Célébrations familiales",
      description: "Anniversaires, baby showers, célébrations spéciales"
    },
    {
      icon: Martini,
      title: "Soirées entre amis",
      description: "Afterworks, clubs sociaux, événements privés"
    }
  ];

  const features = [
    { icon: ChefHat, text: "Service traiteur personnalisé" },
    { icon: Music, text: "Système audio professionnel" },
    { icon: Palette, text: "Décoration sur mesure" },
    { icon: Bell, text: "Service complet inclus" },
    { icon: Sparkles, text: "Ambiance feutrée unique" },
    { icon: Camera, text: "Espaces photo dédiés" },
    { icon: Car, text: "Parking privé disponible" },
    { icon: Shield, text: "Sécurité et discrétion" },
    { icon: MapPin, text: "Localisation centrale" },
    { icon: Clock, text: "Horaires flexibles" },
    { icon: Users2, text: "Capacité jusqu'à 80 personnes" },
    { icon: Utensils, text: "Bar et cuisine équipés" },
    { icon: Sparkles, text: "Éclairage d'ambiance" },
    { icon: Music, text: "Sonorisation premium" },
    { icon: Heart, text: "Service personnalisé" }
  ];

  

  return (
    <section id="evenements" className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-6 lg:p-8">
          {/* Title, description, and event types - order 1 on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center mb-6 text-[#ffffff]">
              <Users className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-responsive-4xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Événements Privés</h2>
            </div>
            
            <p className="text-responsive-lg mb-6 lg:mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Pour vos moments les plus précieux, offrez à vos proches un lieu qui vous ressemble. Élégante, chaleureuse et adaptable, notre salle privée transforme chaque événement en souvenir inoubliable.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {eventTypes.map((type, index) => (
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

          {/* Image - order 2 on mobile, order 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Événement privé au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold bg-gold-500 shadow-lg drop-shadow-lg text-[#ffffff]" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.3)'}}>
              Moments précieux
            </div>
          </motion.div>

          {/* Features Grid - order 3 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-3 lg:col-span-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.slice(0, 7).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md border border-gold-500/20 rounded-lg p-3 text-center text-[#ffffff] bg-burgundy-900/20 hover:bg-burgundy-900/40 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <span className="text-xs leading-tight block" style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>{feature.text}</span>
                </motion.div>
              ))}
              
              {/* Call to action button in the middle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                viewport={{ once: true }}
                className="backdrop-blur-md border border-gold-500/40 rounded-lg p-3 flex items-center justify-center bg-gold-500/20 hover:bg-gold-500/30 transition-all duration-300"
              >
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full h-full flex flex-col items-center justify-center text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-6 h-6 text-gold-500 mb-2" />
                  <span className="text-xs font-bold text-gold-500 leading-tight">Planifier mon événement</span>
                </motion.button>
              </motion.div>

              {features.slice(7, 15).map((feature, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index + 8) * 0.05 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md border border-gold-500/20 rounded-lg p-3 text-center text-[#ffffff] bg-burgundy-900/20 hover:bg-burgundy-900/40 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <span className="text-xs leading-tight block" style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}

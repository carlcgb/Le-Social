import { motion } from "framer-motion";
import { Users, Cake, Martini, Utensils, Music, Palette, Bell, Heart } from "lucide-react";

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
    { icon: Utensils, text: "Service traiteur personnalisé" },
    { icon: Music, text: "Système audio professionnel" },
    { icon: Palette, text: "Décoration sur mesure" },
    { icon: Bell, text: "Service complet inclus" }
  ];

  return (
    <section id="evenements" className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="absolute -bottom-4 -left-4 bg-gold-500 text-black px-6 py-3 rounded-xl transform -rotate-12 font-playfair font-bold">
              Moments précieux
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-5xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Événements Privés</h2>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Pour vos moments les plus précieux, offrez à vos proches un lieu qui vous ressemble. Élégante, chaleureuse et adaptable, notre salle privée transforme chaque événement en souvenir inoubliable.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {eventTypes.map((type, index) => (
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

            <div className="space-y-4 mb-8 text-[#ffffff]">
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
                  <span style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center bg-burgundy-500 px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-150"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#7c2d12',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Planifier mon événement
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

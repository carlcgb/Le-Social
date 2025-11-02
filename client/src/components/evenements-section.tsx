import { motion } from "framer-motion";
import { Users, Cake, Martini, Utensils, Music, Palette, Bell, Heart } from "lucide-react";
import privateImage from "@assets/private.jpg";

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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 bg-burgundy-900/80 backdrop-blur-md rounded-lg p-6 lg:p-8">
          {/* Title, description, and event types - order 1 on mobile */}
          <div className="order-1 lg:order-2 flex flex-col">
            <div className="flex items-center mb-6 text-[#ffffff]">
              <Users className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-responsive-4xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Événements Privés</h2>
            </div>
            
            <p className="text-responsive-lg mb-6 lg:mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Pour vos moments les plus précieux, offrez à vos proches un lieu qui vous ressemble. Élégante, chaleureuse et adaptable, notre salle privée transforme chaque événement en souvenir inoubliable.
            </p>
            
            <div className="flex flex-col gap-6 flex-1">
              {eventTypes.map((type, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md rounded-lg p-4 text-[#ffffff] bg-[#000000e0] flex-1 flex flex-col justify-center"
                >
                  <type.icon className="w-8 h-8 text-gold-500 mb-2" />
                  <h4 className="text-responsive-lg font-playfair mb-2" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.title}</h4>
                  <p className="text-responsive-sm" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Features - order 2 on mobile, order 1 on desktop */}
          <div className="order-2 lg:order-1 relative">
            <img 
              src={privateImage} 
              alt="Événement privé au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto mb-6"
            />
            <div className="absolute -top-4 -right-4 px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold bg-gold-500 shadow-lg drop-shadow-lg text-[#ffffff]" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.3)'}}>
              Moments précieux
            </div>
            
            {/* Features list integrated with image */}
            <div className="space-y-4 text-[#ffffff]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center"
                >
                  <feature.icon className="w-5 h-5 text-gold-500 mr-3" />
                  <span className="text-responsive-sm" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>



          {/* Button - order 3 on mobile (last) */}
          <div className="order-3 lg:col-span-2 text-center mt-6 lg:mt-4">
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center bg-gold-500 px-8 py-4 rounded-full hover:bg-gold-600 transition-all duration-150 font-playfair font-bold btn-text-responsive"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#d97706',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Planifier mon événement
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

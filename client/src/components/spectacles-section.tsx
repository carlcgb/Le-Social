import { motion } from "framer-motion";
import { Theater, Music, Laugh, Eye, Users, CalendarPlus } from "lucide-react";

export default function SpectaclesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    { icon: Music, text: "Jazz, acoustique, chanson française" },
    { icon: Laugh, text: "Stand-up et spectacles d'humour" },
    { icon: Eye, text: "Showcases privés sur mesure" },
    { icon: Users, text: "Capacité intimiste de 50 personnes" }
  ];

  const upcomingShows = [
    { name: "Jazz Session - Marie Dubois", date: "15 Mars" },
    { name: "Stand-up Night", date: "22 Mars" },
    { name: "Soirée Chanson Française", date: "29 Mars" }
  ];

  return (
    <section id="spectacles" className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Theater className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-5xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Volet Spectacles</h2>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Plongez dans une ambiance feutrée où chaque note résonne autrement. Notre salle privée accueille des spectacles intimistes qui font vibrer vos soirées. Une expérience artistique à vivre autrement.
            </p>
            
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-6 mb-8"
            >
              <h4 className="text-xl font-playfair text-gold-500 mb-3" style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Prochains spectacles</h4>
              <div className="space-y-3">
                {upcomingShows.map((show, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gold-500/20 pb-2 last:border-b-0">
                    <span style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{show.name}</span>
                    <span className="text-gold-500" style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{show.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#7c2d12',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center bg-burgundy-500 px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-150"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              transition={{ duration: 0.15 }}
            >
              <CalendarPlus className="w-5 h-5 mr-2" />
              Réserver un spectacle
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
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Spectacle intimiste au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 text-black px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold bg-[#fbbf24]">
              Ambiance intimiste
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

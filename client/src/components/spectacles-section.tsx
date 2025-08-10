import { motion } from "framer-motion";
import { Theater, CalendarPlus } from "lucide-react";

export default function SpectaclesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  

  const upcomingShows = [
    { name: "Jazz Session - Marie Dubois", date: "15 Mars" },
    { name: "Stand-up Night", date: "22 Mars" },
    { name: "Soirée Chanson Française", date: "29 Mars" }
  ];

  return (
    <section id="spectacles" className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 bg-burgundy-900/30 backdrop-blur-md border border-[#cc871d]/30 rounded-lg p-6 lg:p-8">
          {/* Title and description - order 1 on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1 text-[#ffffff]"
          >
            <div className="flex items-center mb-6">
              <Theater className="w-10 h-10 text-gold-500 mr-4" />
              <h2 className="text-responsive-4xl font-playfair" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Volet Spectacles</h2>
            </div>
            
            <p className="text-responsive-lg mb-6 lg:mb-8 leading-relaxed" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Plongez dans une ambiance feutrée où chaque note résonne autrement. Notre salle privée accueille des spectacles intimistes qui font vibrer vos soirées. Une expérience artistique à vivre autrement.
            </p>
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
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Spectacle intimiste au Social" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 px-6 py-3 rounded-xl transform rotate-12 font-playfair font-bold shadow-lg drop-shadow-lg bg-[#cc871d] text-[#ffffff]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Ambiance intimiste
            </div>
          </motion.div>

          {/* Upcoming shows - order 3 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-3 lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="backdrop-blur-md border border-[#cc871d]/30 rounded-lg p-6 bg-[#0000007d] text-[#ffffff]"
            >
              <h4 className="text-responsive-xl font-playfair mb-3 text-[#ffffff]" style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Prochains spectacles</h4>
              <div className="space-y-3">
                {upcomingShows.map((show, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-[#cc871d]/20 pb-2 last:border-b-0">
                    <span className="text-responsive-sm" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{show.name}</span>
                    <span className="text-responsive-xs text-[#ffffff]" style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{show.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          

          {/* Button - order 5 on mobile (last) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-3 lg:col-span-2 text-center mt-6 lg:mt-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#b8670f',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center px-8 py-4 rounded-full transition-all duration-150 font-playfair font-bold btn-text-responsive"
              style={{backgroundColor: '#cc871d', color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              transition={{ duration: 0.10 }}
            >
              <CalendarPlus className="w-5 h-5 mr-2" />
              Réserver un spectacle
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

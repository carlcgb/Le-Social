import { motion } from "framer-motion";
import { Theater, Users, Briefcase, ArrowRight } from "lucide-react";

export default function ServicesSummary() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Theater,
      title: "Volet Spectacles",
      description: "Plongez dans une ambiance feutrée où chaque note résonne autrement. Notre salle privée accueille des spectacles intimistes qui font vibrer vos soirées.",
      href: "#spectacles"
    },
    {
      icon: Users,
      title: "Événements Privés",
      description: "Pour vos moments les plus précieux, offrez à vos proches un lieu qui vous ressemble. Élégante, chaleureuse et adaptable.",
      href: "#evenements"
    },
    {
      icon: Briefcase,
      title: "Volet Corporatif",
      description: "Transformez vos événements professionnels en expériences mémorables. Notre salle allie sophistication, discrétion et flexibilité.",
      href: "#corporatif"
    }
  ];

  return (
    <section className="relative py-20 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair mb-6" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Trois expériences uniques</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Le Social s'adapte à vos besoins avec trois volets distincts, chacun pensé pour créer des moments inoubliables.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8 cursor-pointer text-[#ffffff]"
              onClick={() => scrollToSection(service.href)}
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-6"
                >
                  <service.icon className="w-12 h-12 text-gold-500 mx-auto" />
                </motion.div>
                
                <h3 className="text-2xl font-playfair mb-4" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{service.title}</h3>
                <p className="mb-6 text-[20px] text-left" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{service.description}</p>
                
                <motion.button 
                  className="lien inline-flex items-center text-[#ffffff] font-extrabold relative group/link font-playfair" 
                  style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="relative">
                    En savoir plus
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gold-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative py-20 z-10">
      {/* Section background that covers the brick wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-burgundy-900/20 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-cream mb-6">Trois expériences uniques</h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
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
              className="group bg-black/40 backdrop-blur-md border-2 border-burgundy-700 rounded-2xl p-8 hover:border-burgundy-500 transition-all duration-300 cursor-pointer"
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
                
                <h3 className="text-2xl font-playfair text-cream mb-4">{service.title}</h3>
                <p className="text-cream/80 mb-6">{service.description}</p>
                
                <button className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors">
                  En savoir plus 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

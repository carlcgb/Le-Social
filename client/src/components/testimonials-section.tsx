import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie-Claire Dubois",
      role: "Directrice Marketing, TechCorp",
      initials: "MC",
      text: "Un lieu absolument magique pour notre lancement de produit. L'ambiance burlesque a créé une atmosphère parfaite pour impressionner nos clients."
    },
    {
      name: "Jean-Luc Tremblay",
      role: "Client Événement Privé",
      initials: "JL",
      text: "Pour l'anniversaire de ma femme, le Social a dépassé toutes nos attentes. Un service impeccable et une ambiance à couper le souffle."
    },
    {
      name: "Sophie Beauregard",
      role: "Critique Culturelle",
      initials: "SB",
      text: "Les spectacles au Social offrent une intimité rare. Chaque performance devient un moment privilégié entre l'artiste et le public."
    }
  ];

  return (
    <section className="relative py-20 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-burgundy-900/20 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-cream mb-6">Témoignages</h2>
          <p className="text-xl text-cream/80">Ce que nos clients disent de leurs expériences</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md border-2 border-burgundy-700 rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>
              
              <p className="text-cream/90 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-cream font-medium">{testimonial.name}</h4>
                  <p className="text-cream/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

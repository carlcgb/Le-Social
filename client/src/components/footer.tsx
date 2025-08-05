import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold-500/20 py-12 z-10">
      <div className="absolute inset-0 bg-black backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center mb-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-gold-500 mr-3" />
            </motion.div>
            <h3 className="text-3xl font-playfair text-cream">Social</h3>
          </div>
          
          <p className="text-cream/60 mb-6">Par Attelier Archibald</p>
          
          <p className="text-cream/80 text-sm max-w-2xl mx-auto">
            Un lieu d'exception, pensé pour s'accorder à chaque occasion, chaque style, chaque histoire. 
            Le Social vous offre trois expériences uniques dans une ambiance burlesque raffinée.
          </p>
          
          <div className="mt-8 pt-8 border-t border-gold-500/20">
            <p className="text-cream/60 text-sm">
              © 2024 Social Bar & Cie. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

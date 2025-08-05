import { motion } from "framer-motion";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

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
            <motion.img 
              src={logoPath} 
              alt="Social Logo" 
              className="h-16 w-auto filter brightness-0 invert"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
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

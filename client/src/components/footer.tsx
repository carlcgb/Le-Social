import { motion } from "framer-motion";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function Footer() {
  return (
    <footer className="relative bg-black py-12 z-40">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-32 w-auto filter brightness-0 invert"
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          
          <p className="mb-6 text-responsive-base" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Par Attelier Archibald</p>
          
          <div className="mt-8">
            <p className="text-responsive-xs" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              © 2025 CGB - Tous droits réservés
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

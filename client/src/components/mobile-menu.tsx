import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#spectacles", label: "Spectacles" },
    { href: "#evenements", label: "Événements Privés" },
    { href: "#corporatif", label: "Corporatif" },
    { href: "#galerie", label: "Galerie" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-50 md:hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 50%, rgba(25,25,25,0.98) 100%)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-xl relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-burgundy-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl" />
            </div>
            
            <motion.button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-lg group"
              style={{
                color: '#ffffff', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                background: 'rgba(192, 132, 47, 0.1)',
                border: '1px solid rgba(192, 132, 47, 0.3)'
              }}
              whileHover={{ 
                scale: 1.1,
                background: 'rgba(192, 132, 47, 0.2)',
                filter: 'drop-shadow(0 0 12px rgba(192, 132, 47, 0.6))',
                borderColor: 'rgba(192, 132, 47, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <X className="w-8 h-8 group-hover:text-gold-400 transition-colors duration-300" />
            </motion.button>
            
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative font-playfair font-medium text-2xl tracking-wide py-3 px-6 rounded-lg group"
                style={{
                  color: '#ffffff', 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  background: 'rgba(192, 132, 47, 0.05)',
                  border: '1px solid rgba(192, 132, 47, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(192, 132, 47, 0.15)',
                  textShadow: '0 0 15px rgba(192, 132, 47, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                  borderColor: 'rgba(192, 132, 47, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.4, ease: "easeOut" }}
              >
                <span className="relative z-10 group-hover:text-gold-400 transition-colors duration-300">
                  {item.label}
                </span>
                
                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-burgundy-500/0 via-burgundy-500/10 to-gold-500/0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="relative px-10 py-4 rounded-full font-playfair font-semibold text-xl tracking-wide overflow-hidden group mt-4"
              style={{
                background: 'linear-gradient(135deg, var(--burgundy-500) 0%, var(--burgundy-600) 100%)',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                boxShadow: '0 6px 20px rgba(199, 23, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                border: '1px solid rgba(192, 132, 47, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(199, 23, 36, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                borderColor: 'rgba(192, 132, 47, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-full border border-gold-500/30 group-hover:border-gold-400/50 transition-colors duration-300" />
              
              <span className="relative z-10">Réserver</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

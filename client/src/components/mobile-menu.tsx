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
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <motion.button
              onClick={onClose}
              className="absolute top-8 right-8 hover:text-gold-500 transition-colors duration-200"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-gold-500 transition-colors duration-200"
                style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="bg-burgundy-500 px-8 py-3 rounded-full hover:bg-burgundy-600 transition-all duration-300"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ scale: 1.05, backgroundColor: '#7c2d12' }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

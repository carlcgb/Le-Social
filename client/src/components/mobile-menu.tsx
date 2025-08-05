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
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-cream hover:text-gold-500"
            >
              <X className="w-8 h-8" />
            </button>
            
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-cream hover:text-gold-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-burgundy-500 text-cream px-8 py-3 rounded-full hover:bg-burgundy-600 transition-colors"
            >
              Réserver
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

interface NavigationProps {
  onMobileMenuToggle: () => void;
}

export default function Navigation({ onMobileMenuToggle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-black/90"
      } backdrop-blur-sm border-b border-gold-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={logoPath} 
                alt="Social Logo" 
                className="h-24 w-auto filter brightness-0 invert hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-gold-500 transition-colors font-medium"
                style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: '0 0 8px rgba(251, 191, 36, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.12 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="bg-burgundy-500 px-6 py-2 rounded-full hover:bg-burgundy-600 transition-all duration-150"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#7c2d12',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              Réserver
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <motion.button
              onClick={onMobileMenuToggle}
              className="hover:text-gold-500 transition-colors duration-150"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.1,
                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.12 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

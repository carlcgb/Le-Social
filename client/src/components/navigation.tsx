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
      className={`fixed top-0 w-full z-50 transition-all duration-500`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(5,0,0,0.90) 0%, rgba(15,8,10,0.95) 30%, rgba(25,15,20,0.90) 70%, rgba(10,5,8,0.85) 100%)' 
          : 'linear-gradient(135deg, rgba(2,0,0,0.70) 0%, rgba(8,5,7,0.75) 25%, rgba(15,10,12,0.80) 50%, rgba(20,12,15,0.75) 75%, rgba(8,3,5,0.70) 100%)',
        backdropFilter: 'blur(25px) saturate(140%) brightness(1.1)',
        WebkitBackdropFilter: 'blur(25px) saturate(140%) brightness(1.1)',
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0,0,0,0.4), 0 2px 12px rgba(199,23,36,0.2), inset 0 1px 0 rgba(192,132,47,0.1)' 
          : '0 4px 24px rgba(0,0,0,0.25), 0 1px 6px rgba(192,132,47,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        borderTop: '1px solid rgba(192,132,47,0.15)',
        borderBottom: scrolled ? '1px solid rgba(199,23,36,0.2)' : '1px solid rgba(192,132,47,0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <motion.img 
                src={logoPath} 
                alt="Social Logo" 
                className="h-14 w-auto filter brightness-0 invert cursor-pointer"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(192, 132, 47, 0.3))'
                }}
                whileHover={{ 
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 12px rgba(192, 132, 47, 0.6))',
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 font-medium font-playfair text-base tracking-wide group"
                style={{
                  color: '#ffffff', 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 12px rgba(192, 132, 47, 0.8), 2px 2px 4px rgba(0,0,0,0.8)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-gold-400">
                  {item.label}
                </span>
                
                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "80%" }}
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
              className="relative px-8 py-3 rounded-full font-playfair font-semibold text-base tracking-wide overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, var(--burgundy-500) 0%, var(--burgundy-600) 100%)',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                boxShadow: '0 4px 15px rgba(199, 23, 36, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(199, 23, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                textShadow: '0 0 12px rgba(255, 255, 255, 0.8), 2px 2px 4px rgba(0,0,0,0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
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
          
          <div className="md:hidden">
            <motion.button
              onClick={onMobileMenuToggle}
              className="relative p-2 rounded-lg transition-colors duration-300 group"
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
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Menu className="w-6 h-6 transition-colors duration-300 group-hover:text-gold-400" />
              
              {/* Background pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gold-500/10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

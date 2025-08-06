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
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
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
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-cream hover:text-gold-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-burgundy-500 text-cream px-6 py-2 rounded-full hover:bg-burgundy-600 transition-colors"
            >
              Réserver
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={onMobileMenuToggle}
              className="text-cream hover:text-gold-500"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

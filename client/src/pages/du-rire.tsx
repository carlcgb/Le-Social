import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mic, Star, Heart, ArrowLeft, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/1644940442207271865intro-soire-unscreen_1754402335262.gif";
import { BrickWall } from "@/components";

export default function DuRirePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-20T20:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cream font-inter">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-burgundy-500/20 backdrop-blur-sm border border-[#32a2bd] rounded-full p-3 hover:bg-burgundy-500/30 transition-all duration-300 text-cream"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        </Link>
      </div>

      {/* Reserve button - fixed top right */}
      <div className="fixed top-8 right-8 z-50">
        <motion.a
          href="https://app.tixigo.com/TOffice?token=sNozI5aN0tE7QVy3zaUxCFBQFtB%2Bg7sW0cWMhItujXo%3D&fbclid=IwY2xjawL-8z9leHRuA2FlbQIxMABicmlkETFibFdFQ0doVVFTOVdnSVc3AR4ABF-vM7_NsRFZfEUztGTJ5NL1YxibJpbmV3i3GVeE7IhiCy3inGDwReJMdw_aem_-7nVUgUJXOxeZJvH2oiH5Q"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-black/80 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-[#c71724] inline-block transition-all duration-300 hover:scale-105 neon-button"
        >
          Réserver votre place
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient with brick wall - 100% viewport height */}
        <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800 z-0">
          <BrickWall />
        </div>
        

        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src={logoAnimated} 
              alt="La Soirée du Rire de Granby - Logo animé" 
              className="max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto opacity-100 brightness-[0.85] contrast-125 saturate-110"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-cream/90 mb-8 font-light"
          >
            L'événement signature du Social Bar & Cie
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="bg-burgundy-500/20 backdrop-blur-sm rounded-2xl px-8 py-6 flex flex-col items-center max-w-2xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 mr-3 text-gold-500" />
                <span className="text-cream text-2xl font-semibold">Prochain Spectacle</span>
              </div>
              <div className="text-lg text-gold-400 mb-6 font-medium">
                20 septembre 2025 - 20h
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">{timeLeft.days}</div>
                  <div className="text-lg text-cream/70 font-medium">jours</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">{timeLeft.hours}</div>
                  <div className="text-lg text-cream/70 font-medium">heures</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">{timeLeft.minutes}</div>
                  <div className="text-lg text-cream/70 font-medium">min</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">{timeLeft.seconds}</div>
                  <div className="text-lg text-cream/70 font-medium">sec</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-cream mb-6">
              Une soirée d'humour unique
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              Chaque mois, le Social Bar & Cie se transforme en scène de comédie pour accueillir 
              les meilleurs humoristes de la région dans une ambiance burlesque incomparable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#32a2bd] rounded-lg p-8 text-center"
            >
              <Mic className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-cream mb-4">Humoristes locaux</h3>
              <p className="text-cream/80">
                Découvrez les talents émergents et confirmés de la scène humoristique québécoise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#32a2bd] rounded-lg p-8 text-center"
            >
              <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-cream mb-4">Ambiance intimiste</h3>
              <p className="text-cream/80">
                Une proximité unique avec les artistes dans notre cadre burlesque authentique
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#32a2bd] rounded-lg p-8 text-center"
            >
              <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-cream mb-4">Expérience complète</h3>
              <p className="text-cream/80">
                Spectacle, cocktails signature et ambiance festive pour une soirée mémorable
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-cream mb-6">
              Informations pratiques
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-cream mb-2">Lieu</h3>
                  <p className="text-cream/80">
                    Social Bar & Cie<br />
                    150 Rue Saint-Jacques<br />
                    Granby, QC J2G 3V3
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-cream mb-2">Suivez-nous</h3>
                  <div className="flex space-x-4 mt-3">
                    <motion.a
                      href="https://facebook.com/social.bar.cie"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/social_par_attelier_archibald"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-cream mb-2">Horaires</h3>
                  <p className="text-cream/80">
                    Ouverture pour souper : 17h<br />
                    Début du spectacle : 20h<br />
                    Fin de soirée : 23h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Star className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-cream mb-2">Tarifs</h3>
                  <p className="text-cream/80">
                    Prévente : 15$ par personne<br />
                    À la porte : 20$ par personne<br />
                    Réservation recommandée
                  </p>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mic, Star, Heart, ArrowLeft, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/1644940442207271865intro-soire-unscreen_1754402335262.gif";

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
            className="bg-burgundy-500/20 backdrop-blur-sm border border-[#c71724] rounded-full p-3 hover:bg-burgundy-500/30 transition-all duration-300 text-cream"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        </Link>
      </div>

      {/* Reserve button - fixed top right */}
      <div className="fixed top-8 right-8 z-50">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-burgundy-500 to-burgundy-600 text-cream px-6 py-3 rounded-full hover:from-burgundy-600 hover:to-burgundy-700 transition-all duration-300 font-medium text-lg shadow-lg shadow-burgundy-900/50 backdrop-blur-sm border border-gold-500/30"
        >
          Réserver votre place
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient - 100% viewport height */}
        <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800 z-0"></div>
        

        
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
              className="max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto opacity-75"
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
            <div className="relative bg-gradient-to-br from-burgundy-800/40 via-burgundy-900/30 to-black/40 backdrop-blur-md border-2 border-gold-500/30 rounded-3xl px-10 py-8 flex flex-col items-center max-w-3xl shadow-2xl shadow-burgundy-900/50">
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold-500/60"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold-500/60"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gold-500/60"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gold-500/60"></div>
              
              {/* Ornamental flourish at top */}
              <div className="mb-4 text-gold-500/40 text-4xl">✦</div>
              
              <div className="flex items-center mb-6">
                <Calendar className="w-10 h-10 mr-4 text-gold-500 drop-shadow-lg" />
                <span className="text-cream text-3xl font-playfair font-bold tracking-wide">Prochain Spectacle</span>
              </div>
              
              <div className="text-xl text-gold-300 mb-8 font-playfair italic tracking-wider border-b border-gold-500/30 pb-4">
                20 septembre 2025 - 20h
              </div>
              
              <div className="flex gap-8 md:gap-12">
                <div className="text-center relative">
                  <div className="relative bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-6xl md:text-7xl font-black mb-3 drop-shadow-2xl font-playfair">
                    {timeLeft.days}
                  </div>
                  <div className="text-lg text-cream/80 font-playfair font-semibold uppercase tracking-widest">jours</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                </div>
                
                <div className="text-center relative">
                  <div className="relative bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-6xl md:text-7xl font-black mb-3 drop-shadow-2xl font-playfair">
                    {timeLeft.hours}
                  </div>
                  <div className="text-lg text-cream/80 font-playfair font-semibold uppercase tracking-widest">heures</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                </div>
                
                <div className="text-center relative">
                  <div className="relative bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-6xl md:text-7xl font-black mb-3 drop-shadow-2xl font-playfair">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-lg text-cream/80 font-playfair font-semibold uppercase tracking-widest">min</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                </div>
                
                <div className="text-center relative">
                  <div className="relative bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-6xl md:text-7xl font-black mb-3 drop-shadow-2xl font-playfair">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-lg text-cream/80 font-playfair font-semibold uppercase tracking-widest">sec</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                </div>
              </div>
              
              {/* Ornamental flourish at bottom */}
              <div className="mt-6 text-gold-500/40 text-2xl">✦ ✦ ✦</div>
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
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#c71724] rounded-lg p-8 text-center"
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
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#c71724] rounded-lg p-8 text-center"
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
              className="bg-burgundy-900/30 backdrop-blur-sm border border-[#c71724] rounded-lg p-8 text-center"
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
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

export default function GallerySection() {
  const instagramHandle = "social_par_attelier_archibald";
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

  return (
    <section id="galerie" className="relative py-20 z-10">
      <div className="absolute inset-0 bg-black backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-12 h-12 text-gold-500 mr-4" />
            <h2 className="text-5xl font-playfair text-cream">Notre Instagram</h2>
          </div>
          <p className="text-xl text-cream/80 mb-8">
            Suivez-nous pour découvrir l'atmosphère unique du Social en temps réel
          </p>
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-6 h-6 mr-3" />
            @{instagramHandle}
            <ExternalLink className="w-5 h-5 ml-3" />
          </motion.a>
        </motion.div>
        
        {/* Instagram Feed Container */}
        <div className="bg-black/40 backdrop-blur-md border-2 border-burgundy-700 rounded-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-playfair text-cream mb-4">
              Découvrez nos dernières actualités
            </h3>
            <p className="text-cream/80 text-lg mb-8">
              Ambiance burlesque, spectacles exclusifs, événements privés et moments uniques au Social Bar & Cie
            </p>
          </motion.div>

          {/* Instagram Embed Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-xl p-8 border border-gold-500/20">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
                
                <div className="text-center">
                  <h4 className="text-2xl font-playfair text-cream mb-2">
                    Feed Instagram en direct
                  </h4>
                  <p className="text-cream/70 mb-6">
                    Cliquez sur le bouton ci-dessus pour voir nos dernières publications, stories et découvrir l'ambiance burlesque du Social en temps réel.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="grid md:grid-cols-3 gap-6 w-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-burgundy-800/30 rounded-lg p-4 border border-gold-500/20"
                  >
                    <div className="text-gold-500 text-3xl mb-2">🎭</div>
                    <h5 className="text-cream font-semibold mb-1">Spectacles</h5>
                    <p className="text-cream/70 text-sm">Nos performances burlesque exclusives</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-burgundy-800/30 rounded-lg p-4 border border-gold-500/20"
                  >
                    <div className="text-gold-500 text-3xl mb-2">🍷</div>
                    <h5 className="text-cream font-semibold mb-1">Ambiance</h5>
                    <p className="text-cream/70 text-sm">L'atmosphère raffinée de nos soirées</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-burgundy-800/30 rounded-lg p-4 border border-gold-500/20"
                  >
                    <div className="text-gold-500 text-3xl mb-2">🎉</div>
                    <h5 className="text-cream font-semibold mb-1">Événements</h5>
                    <p className="text-cream/70 text-sm">Nos événements privés et corporatifs</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Follow us section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gold-500/20"
          >
            <p className="text-cream/80 text-lg mb-4">
              Ne manquez aucun de nos moments magiques
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Suivre
              </motion.a>
              <motion.a
                href={`${instagramUrl}/tagged`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 border-gold-500 text-gold-500 px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                Voir plus
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

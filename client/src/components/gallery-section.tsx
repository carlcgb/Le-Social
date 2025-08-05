import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import galleryImage1 from "@assets/523852904_122213781302128593_1046532013144842213_n_1754398633265.jpg";
import galleryImage2 from "@assets/images_1754399318468.jpg";
import galleryImage3 from "@assets/image_1754399805103.png";
import galleryImage4 from "@assets/image_1754399907307.png";

export default function GallerySection() {
  const instagramHandle = "social_par_attelier_archibald";
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

  const instagramPosts = [
    {
      id: 1,
      image: galleryImage1,
      caption: "Soirée burlesque inoubliable au Social 🎭✨ #BurlesqueNight #SocialBar",
      likes: 127,
      comments: 23,
      time: "2h"
    },
    {
      id: 2,
      image: galleryImage2,
      caption: "L'ambiance sophistiquée qui fait notre réputation 🍷 #AttelerArchibald",
      likes: 89,
      comments: 15,
      time: "1j"
    },
    {
      id: 3,
      image: galleryImage3,
      caption: "Événement privé dans nos salons d'exception 🎉 #EventPrive #Social",
      likes: 156,
      comments: 31,
      time: "2j"
    },
    {
      id: 4,
      image: galleryImage4,
      caption: "Spectacle exclusif - une soirée magique 🌟 #Spectacle #Burlesque",
      likes: 203,
      comments: 42,
      time: "3j"
    }
  ];

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
            {/* Instagram Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-md border-2 border-burgundy-700 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Instagram Post Header */}
                  <div className="flex items-center p-4 border-b border-gold-500/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-cream font-semibold text-sm">@{instagramHandle}</h5>
                      <p className="text-cream/60 text-xs">{post.time}</p>
                    </div>
                    <motion.a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gold-500 hover:text-gold-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Instagram Post Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Instagram Post Footer */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center text-gold-500 hover:text-red-500 transition-colors"
                        >
                          <Heart className="w-5 h-5 mr-1" />
                          <span className="text-sm">{post.likes}</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center text-gold-500 hover:text-blue-400 transition-colors"
                        >
                          <MessageCircle className="w-5 h-5 mr-1" />
                          <span className="text-sm">{post.comments}</span>
                        </motion.button>
                      </div>
                    </div>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
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

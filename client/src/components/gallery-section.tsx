import { motion } from "framer-motion";
import { Facebook, ExternalLink, Heart, MessageCircle, Calendar, Users, AlertCircle, Loader2 } from "lucide-react";
import { useFacebookFeed } from "@/hooks/useFacebookFeed";
import FacebookPostComponent from "@/components/facebook-post";
import FacebookEventComponent from "@/components/facebook-event";
import galleryImage1 from "@assets/523852904_122213781302128593_1046532013144842213_n_1754398633265.jpg";
import galleryImage2 from "@assets/images_1754399318468.jpg";
import galleryImage3 from "@assets/image_1754399805103.png";
import galleryImage4 from "@assets/image_1754399907307.png";
import soireeRireLogo from "@assets/1644940442207271865intro-soire-unscreen_1754402025281.gif";

export default function GallerySection() {
  const facebookPage = "social.bar.cie";
  const facebookUrl = `https://facebook.com/${facebookPage}`;

  // Fetch real Facebook data
  const { data: facebookFeed, isLoading, error, isError } = useFacebookFeed();

  // Fallback data for when Facebook API is not available
  const fallbackEvents = [
    {
      id: 1,
      image: galleryImage1,
      title: "Soirée Burlesque - Spectacle Exclusif",
      description: "Une soirée inoubliable dans l'ambiance raffinée du Social. Spectacle burlesque avec nos artistes invités.",
      date: "15 Février 2025",
      time: "20h00",
      attending: 45,
      interested: 127,
      type: "Spectacle"
    },
    {
      id: 2,
      image: galleryImage2,
      title: "Événement Corporatif - Soirée Networking",
      description: "Organisez votre événement d'entreprise dans nos salons privés. Ambiance sophistiquée garantie.",
      date: "22 Février 2025",
      time: "18h30",
      attending: 32,
      interested: 89,
      type: "Corporatif"
    },
    {
      id: 3,
      image: galleryImage3,
      title: "Célébration Privée - Location Exclusive",
      description: "Privatisez le Social pour vos occasions spéciales. Service personnalisé et ambiance unique.",
      date: "28 Février 2025",
      time: "19h00",
      attending: 28,
      interested: 156,
      type: "Privé"
    },
    {
      id: 4,
      image: soireeRireLogo,
      title: "La Soirée du Rire de Granby",
      description: "Ouverture pour souper: 17h • Spectacle: 20h • Fin: 23h • Tarifs: 15$ prévente / 20$ porte",
      date: "8 Mars 2025",
      time: "17h00 - 23h00",
      attending: 67,
      interested: 203,
      type: "Spectacle"
    }
  ];

  return (
    <section id="galerie" className="relative py-20 z-10">
      <div className="absolute inset-0 backdrop-blur-sm bg-[#00000000]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Facebook className="w-12 h-12 text-gold-500 mr-4" />
            <h2 className="text-5xl font-playfair text-cream">Nos Événements</h2>
          </div>
          <p className="text-xl text-cream/80 mb-8">
            Découvrez nos prochains événements et réservez votre place au Social
          </p>
          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Facebook className="w-6 h-6 mr-3" />
            Social Bar & Cie
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
              Événements à venir
            </h3>
            <p className="text-cream/80 text-lg mb-8">
              Spectacles burlesque, événements privés, soirées corporatives - Réservez dès maintenant
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
            {/* Loading State */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-gold-500 animate-spin mb-4" />
                <p className="text-cream/80">Chargement des données Facebook...</p>
              </div>
            )}

            {/* Error State */}
            {isError && (
              <div className="flex flex-col items-center justify-center py-12">
                <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-cream/80 text-center mb-4">
                  Connexion à Facebook temporairement indisponible
                </p>
                <p className="text-cream/60 text-sm text-center">
                  Affichage des événements de démonstration
                </p>
              </div>
            )}

            {/* Facebook Events and Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Display real Facebook events if available */}
              {facebookFeed?.events?.map((event, index) => (
                <FacebookEventComponent key={event.id} event={event} index={index} />
              ))}
              
              {/* Display real Facebook posts if available */}
              {facebookFeed?.posts?.slice(0, 4).map((post, index) => (
                <FacebookPostComponent key={post.id} post={post} index={index + (facebookFeed?.events?.length || 0)} />
              ))}

              {/* Display fallback events if no Facebook data or error */}
              {(!facebookFeed || (facebookFeed.events.length === 0 && facebookFeed.posts.length === 0) || isError) && fallbackEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-md border-2 border-burgundy-700 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Facebook Event Header */}
                  <div className="flex items-center p-4 border-b border-gold-500/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-3">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-cream font-semibold text-sm">Social Bar & Cie</h5>
                      <p className="text-cream/60 text-xs flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date} • {event.time}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Spectacle' ? 'bg-purple-600 text-white' :
                      event.type === 'Corporatif' ? 'bg-blue-600 text-white' :
                      'bg-pink-600 text-white'
                    }`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Facebook Event Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Facebook Event Details */}
                  <div className="p-4">
                    <h4 className="text-cream font-playfair text-lg mb-2 leading-tight">
                      {event.title}
                    </h4>
                    <p className="text-cream/80 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gold-500">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="text-sm">{event.attending} participants</span>
                        </div>
                        <div className="flex items-center text-gold-500/70">
                          <Heart className="w-4 h-4 mr-1" />
                          <span className="text-sm">{event.interested} intéressés</span>
                        </div>
                      </div>
                    </div>
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
              Réservez votre place pour nos prochains événements
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Voir les événements
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 border-gold-500 text-gold-500 px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

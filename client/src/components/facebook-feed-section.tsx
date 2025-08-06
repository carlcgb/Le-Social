import { motion } from "framer-motion";
import { Facebook, AlertTriangle, RefreshCw, ExternalLink } from "lucide-react";
import { useFacebookFeed } from "@/hooks/useFacebookFeed";
import FacebookPostComponent from "@/components/facebook-post";
import FacebookEventComponent from "@/components/facebook-event";

interface FacebookFeedSectionProps {
  facebookUrl: string;
}

export default function FacebookFeedSection({ facebookUrl }: FacebookFeedSectionProps) {
  const { data: facebookFeed, isLoading, error, isError, refetch } = useFacebookFeed();
  
  const hasContent = facebookFeed && (facebookFeed.events.length > 0 || facebookFeed.posts.length > 0);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mb-6">
          <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
        <p className="text-cream/80 text-lg">Chargement du contenu Facebook...</p>
        <p className="text-cream/60 text-sm mt-2">Récupération des derniers posts et événements</p>
      </motion.div>
    );
  }

  if (isError || !hasContent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        {isError && (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-playfair text-cream mb-3">
              Feed Facebook temporairement indisponible
            </h3>
            <p className="text-cream/70 mb-6 max-w-md mx-auto">
              Nous affichons du contenu de démonstration en attendant. 
              Les vrais posts apparaîtront dès que la connexion sera rétablie.
            </p>
          </>
        )}
        
        <div className="flex justify-center space-x-4">
          <motion.button
            onClick={() => refetch()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Réessayer
          </motion.button>
          
          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Voir sur Facebook
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Success indicator when real data is loaded */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center mb-6 text-green-500"
      >
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
        <span className="text-sm">Données Facebook en direct</span>
      </motion.div>

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
      </div>

      {/* Footer with Facebook link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center pt-8 border-t border-gold-500/20"
      >
        <p className="text-cream/70 mb-4">
          Contenu mis à jour automatiquement depuis Facebook
        </p>
        <motion.a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Voir plus sur Facebook
          <ExternalLink className="w-4 h-4 ml-2" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { Facebook, AlertCircle, RefreshCw } from "lucide-react";

interface FacebookErrorStateProps {
  onRetry?: () => void;
}

export default function FacebookErrorState({ onRetry }: FacebookErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-blue-500" />
      </div>
      
      <h3 className="text-2xl font-playfair text-cream mb-4">
        Connexion Facebook indisponible
      </h3>
      
      <div className="max-w-md text-cream/80 space-y-2 mb-6">
        <p>
          Pour afficher les vrais posts et événements Facebook, veuillez configurer vos clés API.
        </p>
        <p className="text-sm text-cream/60">
          Les variables nécessaires sont : FACEBOOK_ACCESS_TOKEN et FACEBOOK_PAGE_ID
        </p>
      </div>

      <div className="flex items-center space-x-4">
        {onRetry && (
          <motion.button
            onClick={onRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Réessayer
          </motion.button>
        )}
        
        <motion.a
          href="https://developers.facebook.com/tools/explorer/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Obtenir les clés API
        </motion.a>
      </div>
    </motion.div>
  );
}
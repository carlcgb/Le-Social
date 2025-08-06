import { motion } from "framer-motion";
import { Facebook, ExternalLink, Key, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function FacebookSetupGuide() {
  const steps = [
    {
      number: 1,
      title: "Créer une app Facebook",
      description: "Allez sur developers.facebook.com et créez une nouvelle application",
      link: "https://developers.facebook.com/",
      linkText: "Facebook Developers"
    },
    {
      number: 2, 
      title: "Obtenir un token d'accès",
      description: "Utilisez l'explorateur d'API pour générer un token avec les bonnes permissions",
      link: "https://developers.facebook.com/tools/explorer/",
      linkText: "Graph API Explorer"
    },
    {
      number: 3,
      title: "Récupérer l'ID de page",
      description: "Trouvez l'ID unique de votre page Social Bar & Cie",
      link: "https://developers.facebook.com/tools/explorer/",
      linkText: "Utilisez /me/accounts"
    },
    {
      number: 4,
      title: "Configurer dans Replit",
      description: "Ajoutez les clés dans les Secrets Replit pour sécuriser l'accès",
      link: null,
      linkText: ""
    }
  ];

  const permissions = [
    "pages_show_list",
    "pages_read_engagement", 
    "pages_read_user_content"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-burgundy-900/30 to-burgundy-800/20 backdrop-blur-sm border border-gold-500/20 rounded-xl p-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <Facebook className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-playfair text-cream mb-2">
          Configuration Facebook API
        </h2>
        <p className="text-cream/80">
          Suivez ce guide pour connecter votre page Facebook
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-black/20 rounded-lg border border-gold-500/10"
          >
            <div className="w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="text-cream font-semibold mb-1">{step.title}</h3>
              <p className="text-cream/70 text-sm mb-2">{step.description}</p>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {step.linkText}
                </a>
              )}
            </div>
            <ArrowRight className="w-5 h-5 text-gold-500/50 flex-shrink-0" />
          </motion.div>
        ))}
      </div>

      {/* Permissions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-black/20 rounded-lg p-6 border border-gold-500/10 mb-6"
      >
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-gold-500 mr-3" />
          <h3 className="text-cream font-semibold">Permissions requises</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {permissions.map((permission) => (
            <div key={permission} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <code className="text-cream/80 text-sm bg-black/30 px-2 py-1 rounded">
                {permission}
              </code>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Important Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4"
      >
        <div className="flex items-start space-x-3">
          <Key className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-cream font-medium mb-2">Token permanent</h4>
            <p className="text-cream/80 text-sm">
              Les tokens de page Facebook ne expirent jamais, contrairement aux tokens utilisateur. 
              Assurez-vous d'utiliser le token de page, pas le token utilisateur.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Action Button */}
      <div className="text-center mt-8">
        <motion.a
          href="https://developers.facebook.com/tools/explorer/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Facebook className="w-5 h-5 mr-3" />
          Commencer la configuration
          <ExternalLink className="w-4 h-4 ml-3" />
        </motion.a>
      </div>
    </motion.div>
  );
}
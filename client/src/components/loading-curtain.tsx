import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LoadingCurtain() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed inset-0 z-50 bg-burgundy-500 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 text-gold-500 mx-auto mb-4" />
          </motion.div>
          <div className="text-2xl font-playfair text-cream">Le plaisir d'être...</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

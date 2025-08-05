import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function LoadingCurtain() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="fixed inset-0 z-[9999] bg-burgundy-500 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 1.3, opacity: 1 }}
            animate={{ 
              scale: [1.3, 1.4, 0.75], 
              opacity: [1, 1, 1],
              filter: ["brightness(0)", "brightness(0)", "brightness(0) invert(1)"]
            }}
            transition={{ 
              duration: 2.8, 
              times: [0, 0.2, 1],
              ease: "easeInOut"
            }}
            className="mb-4"
          >
            <img 
              src={logoPath} 
              alt="Social Logo" 
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </motion.div>
          <div className="text-2xl font-playfair text-cream">Le plaisir d'être...</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

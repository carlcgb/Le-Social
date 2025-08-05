import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function LoadingCurtain() {
  return (
    <AnimatePresence>
      <>
        {/* Rideau avec logo noir */}
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="fixed inset-0 z-[9999] bg-burgundy-500 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo noir qui disparaît */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.0,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img 
                src={logoPath} 
                alt="Social Logo" 
                className="h-56 md:h-64 lg:h-72 w-auto filter brightness-0"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Logo blanc qui reste après le rideau */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.0,
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
        >
          <img 
            src={logoPath} 
            alt="Social Logo" 
            className="h-56 md:h-64 lg:h-72 w-auto filter brightness-0 invert"
          />
        </motion.div>
      </>
    </AnimatePresence>
  );
}

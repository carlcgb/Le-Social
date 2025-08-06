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
          className="fixed inset-0 z-[9999] bg-burgundy-500"
        >
          {/* Logo noir qui disparaît pendant l'animation des rideaux */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.0,
              ease: "easeInOut"
            }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
            <div className="relative z-30 text-center max-w-4xl mx-auto px-4">
              <div className="mb-12 relative">
                <img 
                  src={logoPath} 
                  alt="Social Logo" 
                  className="h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto mx-auto filter brightness-0 relative z-10"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Logo blanc permanent qui remplace exactement le hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.0,
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-[25] pointer-events-none"
        >
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-30 text-center max-w-4xl mx-auto px-4">
              <div className="mb-12 relative">
                <img 
                  src={logoPath} 
                  alt="Social Logo" 
                  className="h-56 md:h-64 lg:h-72 w-auto mx-auto filter brightness-0 invert relative z-10"
                />
              </div>
            </div>
          </section>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
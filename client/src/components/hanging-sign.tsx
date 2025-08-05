import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HangingSign() {
  return (
    <div className="fixed top-20 right-8 z-30">
      <Link href="/du-rire">
        <motion.div
          initial={{ rotate: -8, y: -20, opacity: 0 }}
          animate={{ 
            rotate: [-8, -12, -4, -8], 
            y: [0, 5, -2, 0],
            opacity: 1
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 1, delay: 2 }
          }}
          whileHover={{ scale: 1.05, rotate: -5 }}
          className="cursor-pointer group"
        >
          {/* Hanging rope/chain */}
          <div className="flex justify-center mb-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 shadow-lg"></div>
          </div>
          
          {/* Wooden sign */}
          <div className="relative">
            {/* Wood texture background */}
            <div className="bg-gradient-to-br from-yellow-800 via-yellow-700 to-amber-900 rounded-lg shadow-2xl border-2 border-yellow-900 p-4 min-w-[200px]">
              {/* Wood grain lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-yellow-900 to-transparent"></div>
                <div className="absolute top-2 left-0 right-0 h-0.5 bg-amber-900 opacity-50"></div>
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-amber-900 opacity-30"></div>
                <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-amber-900 opacity-40"></div>
              </div>
              
              {/* Arrow pointing left */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-red-600 border-b-[8px] border-b-transparent group-hover:border-r-red-500 transition-colors"></div>
              </div>
              
              {/* Sign content */}
              <div className="relative z-10 text-center">
                <div className="text-red-700 font-bold text-sm leading-tight mb-1">
                  La Soirée
                </div>
                <div className="text-red-800 font-extrabold text-base leading-tight mb-1">
                  Du Rire
                </div>
                <div className="text-red-700 font-bold text-sm leading-tight">
                  de Granby
                </div>
              </div>
              
              {/* Nails/screws */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full shadow-inner"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full shadow-inner"></div>
            </div>
            
            {/* Shadow */}
            <div className="absolute top-1 left-1 right-1 bottom-1 bg-black/20 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
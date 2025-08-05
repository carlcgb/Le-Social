import { motion } from "framer-motion";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Intérieur du Social",
      title: "Ambiance feutrée"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Scène du Social",
      title: "Scène intimiste"
    },
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Bar du Social",
      title: "Bar sophistiqué"
    },
    {
      src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Salle privée",
      title: "Salle privée"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0c6f3de6bec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Détails architecture",
      title: "Détails raffinés"
    },
    {
      src: "https://images.unsplash.com/photo-1574391884720-bbc273f3df5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Ambiance burlesque",
      title: "Esprit burlesque"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-cream mb-6">Galerie</h2>
          <p className="text-xl text-cream/80">Découvrez l'atmosphère unique du Social à travers nos images</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-cream">
                  <h4 className="font-playfair text-lg">{image.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

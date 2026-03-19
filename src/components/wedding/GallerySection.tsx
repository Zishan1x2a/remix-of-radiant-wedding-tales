import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

const GallerySection = ({ photos }: GallerySectionProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-cream-dark relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-2">Cherished Memories</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold gold-shimmer">Our Moments Together</h2>
          <p className="font-body text-muted-foreground text-sm mt-2">A glimpse into our beautiful journey</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-body tracking-wider uppercase transition-colors ${
                activeCategory === cat
                  ? "bg-maroon text-primary-foreground"
                  : "border border-gold/40 text-muted-foreground hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-deep">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon-dark/0 group-hover:bg-maroon-dark/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <p className="text-center text-muted-foreground font-body text-sm py-12">
            Photos will be added soon...
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-maroon-dark/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground z-50"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

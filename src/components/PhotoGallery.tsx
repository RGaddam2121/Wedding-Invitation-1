import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './IndianDecorations';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const { gallery } = weddingData;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % gallery.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="moments" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#F9EFE0] via-ivory to-[#FFFDF7] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-maroon font-semibold">
            Cherished Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark mt-1">
            Our Moments
          </h2>
          <p className="font-telugu text-lg text-maroon font-medium mt-1">
            మధుర క్షణాలు
          </p>
          <GoldDivider className="my-6 max-w-xs mx-auto" />
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto font-serif italic">
            Glimpses into our journey of love, laughter, shared dreams, and joyous beginnings.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gold/30 hover:border-gold"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-base font-semibold text-ivory">
                    {photo.caption}
                  </p>
                  <Maximize2 className="w-5 h-5 text-gold shrink-0 ml-2" />
                </div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-gold mt-1">
                  View Fullscreen
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Current Photo Frame */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={gallery[selectedPhotoIndex].url}
                alt={gallery[selectedPhotoIndex].caption}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border-2 border-gold/40 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-ivory font-semibold">
                  {gallery[selectedPhotoIndex].caption}
                </p>
                <p className="text-xs text-gold/80 font-sans tracking-widest uppercase mt-0.5">
                  Photo {selectedPhotoIndex + 1} of {gallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

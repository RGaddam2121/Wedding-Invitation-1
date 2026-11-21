import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldDivider, LotusIcon } from './IndianDecorations';
import { Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { couple } = weddingData;

  return (
    <section id="couple" className="relative py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FFFDF7] via-ivory to-[#F9EFE0] overflow-hidden">
      {/* Decorative Traditional Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Sacred Sanskrit Invocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 space-y-2"
        >
          <div className="inline-flex items-center justify-center space-x-2 text-gold">
            <LotusIcon className="w-6 h-6 text-maroon" />
            <span className="font-serif tracking-widest text-xs uppercase text-maroon font-semibold">
              Subhamasthu · Kalyanam
            </span>
            <LotusIcon className="w-6 h-6 text-maroon scale-x-[-1]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark">
            You Are Cordially Invited
          </h2>

          <p className="max-w-2xl mx-auto text-gray-700 font-serif italic text-base sm:text-lg leading-relaxed pt-2">
            "We cordially invite your gracious presence with family and friends on the auspicious occasion of the marriage of"
          </p>
        </motion.div>

        <GoldDivider className="my-8 max-w-md mx-auto" />

        {/* Couple Presentation (Side-by-Side on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center max-w-5xl mx-auto">
          {/* GROOM CARD (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 border-gold/40 shadow-xl relative group hover:border-gold transition-all duration-300"
          >
            {/* Photo with Ornate Royal Gold Frame */}
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-gold shadow-gold-lg p-1.5 bg-gradient-to-tr from-gold to-ivory">
                <img
                  src={couple.groom.photo}
                  alt={couple.groom.name}
                  className="w-full h-full object-cover rounded-full shadow-inner"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-1 bg-maroon text-gold px-3 py-1 rounded-full text-xs font-serif font-bold border border-gold shadow-sm">
                The Groom
              </div>
            </div>

            {/* Groom Details */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-sans uppercase tracking-wider text-maroon-light bg-maroon/5 font-semibold mb-2">
              {couple.groom.label}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-dark">
              {couple.groom.name}
            </h3>
            <p className="font-telugu text-xl text-maroon font-semibold mb-3">
              {couple.groom.teluguName}
            </p>

            <div className="space-y-1 text-sm text-gray-700 font-serif border-t border-gold/20 pt-3">
              <p className="font-semibold text-gray-900">
                Son of {couple.groom.mother} & {couple.groom.father}
              </p>
              <p className="text-xs text-gray-600 italic">
                {couple.groom.familyDetails}
              </p>
            </div>

            <p className="text-xs text-gray-600 mt-4 leading-relaxed font-sans">
              {couple.groom.about}
            </p>
          </motion.div>

          {/* WEDDING MOTIF CONNECTOR (1 col on desktop, middle badge on mobile) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-2 lg:my-0">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-maroon to-maroon-light text-gold flex items-center justify-center shadow-lg border-2 border-gold"
            >
              <Heart className="w-7 h-7 fill-gold" />
            </motion.div>
            <span className="hidden lg:block text-xs font-serif font-bold text-maroon mt-2 uppercase tracking-wider">
              Weds
            </span>
          </div>

          {/* BRIDE CARD (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 border-gold/40 shadow-xl relative group hover:border-gold transition-all duration-300"
          >
            {/* Photo with Ornate Royal Gold Frame */}
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-gold shadow-gold-lg p-1.5 bg-gradient-to-tr from-gold to-ivory">
                <img
                  src={couple.bride.photo}
                  alt={couple.bride.name}
                  className="w-full h-full object-cover rounded-full shadow-inner"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-1 bg-maroon text-gold px-3 py-1 rounded-full text-xs font-serif font-bold border border-gold shadow-sm">
                The Bride
              </div>
            </div>

            {/* Bride Details */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-sans uppercase tracking-wider text-maroon-light bg-maroon/5 font-semibold mb-2">
              {couple.bride.label}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-dark">
              {couple.bride.name}
            </h3>
            <p className="font-telugu text-xl text-maroon font-semibold mb-3">
              {couple.bride.teluguName}
            </p>

            <div className="space-y-1 text-sm text-gray-700 font-serif border-t border-gold/20 pt-3">
              <p className="font-semibold text-gray-900">
                Daughter of {couple.bride.mother} & {couple.bride.father}
              </p>
              <p className="text-xs text-gray-600 italic">
                {couple.bride.familyDetails}
              </p>
            </div>

            <p className="text-xs text-gray-600 mt-4 leading-relaxed font-sans">
              {couple.bride.about}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

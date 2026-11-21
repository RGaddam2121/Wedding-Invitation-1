import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GaneshaIcon, CornerOrnament, GoldDivider } from './IndianDecorations';
import confetti from 'canvas-confetti';

interface OpeningInvitationProps {
  onOpen: () => void;
}

export const OpeningInvitation: React.FC<OpeningInvitationProps> = ({ onOpen }) => {
  const { couple, weddingDetails } = weddingData;

  const handleOpenClick = () => {
    // Shoot celebratory flower & gold confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C6A15B', '#781F35', '#FFF8E9', '#D9A6A6', '#647A54'],
    });

    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E9] to-[#F8EEDC] overflow-hidden"
    >
      {/* Background Floating Petals / Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-mandala"></div>

      {/* Main Royal Card Frame */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full max-w-xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E9] to-[#F4E7CE] rounded-2xl shadow-2xl border-4 border-gold/40 text-center flex flex-col items-center justify-center"
      >
        {/* Ornate Gold Inner Border */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl border border-gold/50 pointer-events-none"></div>

        {/* 4 Corner Ornaments */}
        <CornerOrnament position="top-left" className="absolute top-2 left-2 w-14 h-14 sm:w-16 sm:h-16" />
        <CornerOrnament position="top-right" className="absolute top-2 right-2 w-14 h-14 sm:w-16 sm:h-16" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-14 h-14 sm:w-16 sm:h-16" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-14 h-14 sm:w-16 sm:h-16" />

        {/* Auspicious Sacred Header */}
        <div className="mb-3 space-y-1">
          <div className="text-maroon font-serif text-lg tracking-widest font-semibold">ॐ</div>
          <p className="text-maroon font-serif text-sm tracking-widest uppercase">
            {weddingDetails.auspiciousTagline}
          </p>
          <p className="text-maroon font-telugu text-base sm:text-lg font-medium tracking-wide">
            {weddingDetails.teluguTagline}
          </p>
        </div>

        {/* Lord Ganesha Icon */}
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="my-3 p-3 rounded-full bg-cream/60 border border-gold/30 shadow-inner"
        >
          <GaneshaIcon className="w-20 h-20 sm:w-24 sm:h-24" />
        </motion.div>

        {/* Invitation Pre-text */}
        <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-maroon/80 font-medium mt-2">
          Wedding Invitation
        </p>

        {/* Couple Names */}
        <div className="my-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-maroon-dark">
            {couple.groom.name}
            <span className="inline-block mx-3 text-gold text-2xl sm:text-3xl font-normal">♥</span>
            {couple.bride.name}
          </h1>
          <p className="font-telugu text-xl sm:text-2xl text-maroon font-semibold mt-1">
            {couple.groom.teluguName} & {couple.bride.teluguName}
          </p>
        </div>

        <GoldDivider className="my-3" />

        {/* Wedding Date */}
        <div className="mb-6 space-y-1">
          <p className="font-serif text-base sm:text-lg text-gray-800 font-semibold tracking-wide">
            {weddingDetails.date}
          </p>
          <p className="text-xs sm:text-sm text-maroon-light font-medium tracking-wide">
            {weddingDetails.muhurthamTime}
          </p>
          <p className="text-xs text-gray-600 font-serif italic">
            {weddingDetails.venueName}, Hyderabad
          </p>
        </div>

        {/* Action Button: Open Invitation */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -3px rgba(120, 31, 53, 0.4)" }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenClick}
          className="relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-maroon via-maroon-light to-maroon text-ivory font-serif font-bold text-base sm:text-lg shadow-lg border border-gold/60 cursor-pointer group overflow-hidden"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
          <span className="relative flex items-center space-x-2">
            <span>✨</span>
            <span>Open Invitation</span>
            <span>✨</span>
          </span>
        </motion.button>

        <p className="text-[11px] text-gray-500 mt-4 tracking-wider uppercase font-sans">
          Touch to unfold the sacred celebrations
        </p>
      </motion.div>
    </motion.div>
  );
};

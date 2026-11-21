import React from 'react';
import { weddingData } from '../data/weddingData';
import { LotusIcon, GaneshaIcon, GoldDivider } from './IndianDecorations';

export const Footer: React.FC = () => {
  const { couple, weddingDetails } = weddingData;

  return (
    <footer className="bg-gradient-to-b from-[#521629] via-[#3B0C1A] to-[#25040E] text-ivory py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        {/* Emblem */}
        <div className="flex justify-center">
          <GaneshaIcon className="w-16 h-16 opacity-90" />
        </div>

        <div className="space-y-1">
          <p className="font-telugu text-xl sm:text-2xl text-gold-light font-semibold">
            {weddingDetails.teluguTagline}
          </p>
          <p className="font-serif text-sm tracking-widest text-gold-light/80 uppercase">
            {weddingDetails.auspiciousTagline}
          </p>
        </div>

        <GoldDivider className="my-6 max-w-xs mx-auto opacity-40" />

        <div className="space-y-2">
          <h3 className="font-serif text-3xl font-bold text-ivory">
            {couple.groom.name} & {couple.bride.name}
          </h3>
          <p className="font-telugu text-lg text-gold-light">
            {couple.groom.teluguName} & {couple.bride.teluguName}
          </p>
          <p className="text-xs text-ivory/70 font-sans tracking-widest uppercase">
            {weddingDetails.date} • Hyderabad
          </p>
        </div>

        <p className="text-xs text-ivory/50 font-serif italic max-w-md mx-auto pt-6 border-t border-gold/10">
          Crafted with love and auspicious devotion for our once-in-a-lifetime union.
        </p>
      </div>
    </footer>
  );
};

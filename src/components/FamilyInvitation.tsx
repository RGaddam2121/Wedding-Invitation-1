import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldDivider, KalashIcon } from './IndianDecorations';
import { Phone, MessageCircle } from 'lucide-react';

export const FamilyInvitation: React.FC = () => {
  const { family } = weddingData;

  return (
    <section id="family" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#F6EDE0] via-ivory to-[#FFFDF7] relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Sacred Kalash Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-block p-3 rounded-full bg-cream border border-gold/40 shadow-inner">
            <KalashIcon className="w-12 h-12" />
          </div>

          <span className="block text-xs font-sans uppercase tracking-[0.25em] text-maroon font-semibold">
            Traditional Greetings
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark">
            Invited By
          </h2>

          <p className="font-telugu text-lg sm:text-xl text-maroon font-medium">
            ఆహ్వానించువారు & బంధుమిత్రులు
          </p>

          <GoldDivider className="my-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Blessings from Ancestors */}
        <div className="my-8 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gold/30 shadow-sm max-w-xl mx-auto">
          <p className="text-xs uppercase font-sans tracking-widest text-maroon font-bold mb-3">
            With the divine blessings of our beloved ancestors
          </p>
          <div className="space-y-1.5 font-serif text-gray-800 text-sm sm:text-base">
            {family.blessingsFrom.map((ancestor, i) => (
              <p key={i} className="font-medium text-maroon-dark">
                {ancestor}
              </p>
            ))}
          </div>
        </div>

        {/* Groom & Bride Parents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-2xl mx-auto text-left">
          {/* Groom's Family */}
          <div className="p-6 rounded-2xl bg-white/80 border border-gold/40 shadow-md">
            <span className="text-xs uppercase tracking-wider text-maroon font-bold font-sans">
              Groom's Parents
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mt-2">
              {family.groomParents}
            </h3>
            <p className="text-xs text-gray-600 mt-1 font-serif italic">
              and all family members of Gaddam family
            </p>
          </div>

          {/* Bride's Family */}
          <div className="p-6 rounded-2xl bg-white/80 border border-gold/40 shadow-md">
            <span className="text-xs uppercase tracking-wider text-maroon font-bold font-sans">
              Bride's Parents
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mt-2">
              {family.brideParents}
            </h3>
            <p className="text-xs text-gray-600 mt-1 font-serif italic">
              and all family members of K. family
            </p>
          </div>
        </div>

        {/* Co-Invited By Section */}
        <div className="my-8 max-w-xl mx-auto">
          <h4 className="text-xs uppercase font-sans tracking-widest text-maroon font-bold mb-3">
            Co-Invited By
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-serif text-gray-800">
            {family.coInvitedBy.map((fam, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cream rounded-full border border-gold/30 text-gray-800 font-medium text-xs sm:text-sm"
              >
                {fam}
              </span>
            ))}
          </div>
        </div>

        {/* With Best Compliments From */}
        <div className="my-6">
          <p className="text-xs uppercase font-sans tracking-widest text-maroon font-bold mb-2">
            With Best Compliments From
          </p>
          <p className="font-serif text-gray-700 text-sm sm:text-base italic">
            Near & Dear Relatives, Friends, and Well-Wishers
          </p>
        </div>

        {/* Closing Warm Blessing Message */}
        <div className="mt-12 space-y-2">
          <p className="font-serif text-lg sm:text-xl text-maroon font-semibold">
            🌸 We look forward to celebrating with you and your family 🌸
          </p>
          <p className="font-telugu text-base text-gray-700">
            మీ ఆశీస్సులు మాకు శ్రీరామరక్ష! తప్పక విచ్చేసి నూతన దంపతులను ఆశీర్వదించగలరు.
          </p>
        </div>

        {/* Contact Family Phone & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={`tel:${family.contactPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-gold/50 text-maroon text-xs font-semibold shadow-sm hover:bg-gold/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {family.contactPhone}</span>
          </a>

          <a
            href={`https://wa.me/${family.contactWhatsApp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-emerald-800 text-xs font-semibold shadow-sm hover:bg-[#25D366]/20 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

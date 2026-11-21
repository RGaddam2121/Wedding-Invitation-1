import React from 'react';
import { motion } from 'framer-motion';
import { weddingData, WeddingEvent } from '../data/weddingData';
import { GoldDivider, LotusIcon } from './IndianDecorations';
import { Sparkles, Music, Utensils, MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

export const WeddingEvents: React.FC = () => {
  const { events } = weddingData;

  const renderIcon = (iconName: WeddingEvent['iconName']) => {
    switch (iconName) {
      case 'flower':
        return <Sparkles className="w-6 h-6 text-yellow-600" />;
      case 'music':
        return <Music className="w-6 h-6 text-pink-700" />;
      case 'sacred':
        return <LotusIcon className="w-8 h-8 text-maroon" />;
      case 'feast':
        return <Utensils className="w-6 h-6 text-leaf" />;
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FFFDF7] via-ivory to-[#F5EADB] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-maroon font-semibold">
            Program Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark mt-1">
            Wedding Celebrations
          </h2>
          <p className="font-telugu text-lg sm:text-xl text-maroon font-medium mt-1">
            వివాహ మహోత్సవ కార్యక్రమములు
          </p>
          <GoldDivider className="my-6 max-w-xs mx-auto" />
          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto font-serif italic">
            Each ritual carries profound spiritual sanctity, bringing two families and souls together in timeless harmony.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 sm:space-y-12">
          {events.map((event, index) => {
            const isSacred = event.id === 'muhurtham';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  isSacred
                    ? 'bg-gradient-to-br from-ivory-light via-cream to-[#FBE8D0] border-2 border-gold shadow-gold-lg'
                    : 'bg-white/80 backdrop-blur-sm border border-gold/40 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Sacred Badge for Muhurtham */}
                {isSacred && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon text-gold px-4 py-1 rounded-full text-xs font-serif font-bold tracking-widest border border-gold uppercase shadow-md flex items-center space-x-1">
                    <span>✦</span>
                    <span>Auspicious Sacred Muhurtham</span>
                    <span>✦</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Column: Icon & Event Title */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-cream border border-gold/40 flex items-center justify-center shrink-0 shadow-inner">
                      {renderIcon(event.iconName)}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-maroon-dark">
                        {event.name}
                      </h3>
                      {event.teluguName && (
                        <p className="font-telugu text-lg text-maroon font-semibold mt-0.5">
                          {event.teluguName}
                        </p>
                      )}
                      <p className="text-sm text-gray-700 mt-2 font-serif leading-relaxed max-w-xl">
                        {event.description}
                      </p>

                      {/* Muhurtham Vedic Astrological details */}
                      {event.details && (
                        <div className="mt-4 p-4 rounded-xl bg-maroon/5 border border-gold/40 space-y-1.5 font-telugu text-maroon text-sm">
                          <p className="font-bold text-maroon-dark">
                            నక్షత్రం: <span className="font-medium text-gray-800">{event.details.nakshatra}</span> | లగ్నం: <span className="font-medium text-gray-800">{event.details.lagnam}</span>
                          </p>
                          <p className="text-xs text-gray-700 font-sans">
                            {event.details.teluguDetails}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Date, Time, Venue, Maps Action */}
                  <div className="md:text-right shrink-0 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gold/30 pt-4 md:pt-0 md:pl-6 space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center md:justify-end space-x-2 text-sm font-semibold text-gray-900">
                        <Calendar className="w-4 h-4 text-maroon" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center md:justify-end space-x-2 text-sm font-medium text-maroon">
                        <Clock className="w-4 h-4 text-maroon" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 space-y-0.5 pt-2">
                      <div className="flex items-center md:justify-end space-x-1 font-semibold text-gray-800">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{event.venue}</span>
                      </div>
                      <p className="text-gray-500 italic max-w-xs md:ml-auto">
                        {event.address}
                      </p>
                    </div>

                    {event.dressCode && (
                      <p className="text-[11px] font-sans text-maroon-light tracking-wide pt-1">
                        Dress Code: <span className="font-medium text-gray-700">{event.dressCode}</span>
                      </p>
                    )}

                    <div className="pt-2">
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-maroon/10 hover:bg-maroon hover:text-white text-maroon border border-maroon/30 transition-all duration-200"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>View on Map</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './IndianDecorations';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { weddingDetails, events } = weddingData;

  // Filter out main unique venues for location cards
  const mainVenues = [
    {
      title: "Wedding Ceremony Venue",
      teluguTitle: "ప్రధాన కళ్యాణ వేదిక",
      name: weddingDetails.venueName,
      address: weddingDetails.venueAddress,
      teluguAddress: weddingDetails.venueTeluguAddress,
      timing: `${weddingDetails.date} • ${weddingDetails.muhurthamTime}`,
      mapUrl: weddingDetails.venueMapUrl,
      isPrimary: true,
    },
    {
      title: "Sangeet & Mehendi Celebration",
      teluguTitle: "సంగీత్ & మెహందీ వేదిక",
      name: "The Grand Royal Palace Banquet",
      address: "Road No. 12, Banjara Hills, Hyderabad, Telangana",
      teluguAddress: "బంజారాహిల్స్, హైదరాబాద్",
      timing: "Wednesday, December 9, 2026 • 06:30 PM",
      mapUrl: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
      isPrimary: false,
    },
  ];

  return (
    <section id="venue" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FFFDF7] via-ivory to-[#F6EDE0] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-maroon font-semibold">
            Directions & Venues
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark mt-1">
            Wedding Venue & Locations
          </h2>
          <p className="font-telugu text-lg sm:text-xl text-maroon font-medium mt-1">
            శుభ కళ్యాణ వేదిక & మార్గదర్శకములు
          </p>
          <GoldDivider className="my-6 max-w-xs mx-auto" />
          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto font-serif italic">
            Find simple routes and map directions to join us in blessing the couple.
          </p>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainVenues.map((venue, idx) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                venue.isPrimary
                  ? 'bg-gradient-to-b from-white to-[#FFF9EE] border-2 border-gold shadow-gold-lg'
                  : 'bg-white/80 border border-gold/40 shadow-lg'
              }`}
            >
              {venue.isPrimary && (
                <div className="absolute -top-3.5 left-6 bg-maroon text-gold px-3.5 py-1 rounded-full text-xs font-serif font-bold tracking-wider border border-gold shadow-sm">
                  ★ Main Muhurtham Venue
                </div>
              )}

              <div>
                <div className="flex items-center space-x-3 text-maroon mb-3 mt-1">
                  <div className="p-3 bg-cream rounded-xl border border-gold/40 text-maroon">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-maroon-light font-bold">
                      {venue.title}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      {venue.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">{venue.address}</p>
                      {venue.teluguAddress && (
                        <p className="font-telugu text-maroon text-xs mt-1">
                          {venue.teluguAddress}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-maroon font-serif italic pt-1">
                    {venue.timing}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-gold/20">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-maroon hover:bg-maroon-dark text-ivory font-serif font-semibold text-sm shadow-md transition-all duration-200 group"
                >
                  <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

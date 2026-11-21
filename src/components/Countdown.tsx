import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { useCountdown } from '../hooks/useCountdown';
import { GoldDivider } from './IndianDecorations';
import { CalendarPlus, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarUtils';

export const Countdown: React.FC = () => {
  const { weddingDetails } = weddingData;
  const timeLeft = useCountdown(weddingDetails.targetIsoDate);

  const handleGoogleCalendar = () => {
    const url = generateGoogleCalendarUrl({
      title: weddingDetails.title,
      description: `${weddingDetails.teluguTagline}\n${weddingDetails.teluguMuhurthamInfo}\nVenue: ${weddingDetails.venueName}`,
      location: weddingDetails.venueAddress,
      startDate: '20261210T044500Z', // 10:15 AM IST
      endDate: '20261210T093000Z',
    });
    window.open(url, '_blank');
  };

  const handleIcsDownload = () => {
    downloadIcsFile({
      title: weddingDetails.title,
      description: `${weddingDetails.teluguTagline}\n${weddingDetails.teluguMuhurthamInfo}`,
      location: weddingDetails.venueAddress,
      startIso: weddingDetails.targetIsoDate,
      endIso: '2026-12-10T15:00:00+05:30',
    });
  };

  const timeUnits = [
    { label: 'Days', telugu: 'రోజులు', value: timeLeft.days },
    { label: 'Hours', telugu: 'గంటలు', value: timeLeft.hours },
    { label: 'Minutes', telugu: 'నిమిషాలు', value: timeLeft.minutes },
    { label: 'Seconds', telugu: 'సెకన్లు', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#521629] via-[#781F35] to-[#521629] text-ivory relative overflow-hidden">
      {/* Decorative Traditional Border Patterns */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-gold-light font-semibold">
            Save The Sacred Date
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mt-2">
            Counting Down To Our Big Day
          </h2>

          <p className="font-telugu text-lg sm:text-xl text-gold-light font-medium mt-1">
            మహా శుభముహూర్తానికి ఎదురుచూస్తూ...
          </p>

          <GoldDivider className="my-6 max-w-xs mx-auto opacity-70" />

          {/* If the celebration has arrived */}
          {timeLeft.isStarted ? (
            <div className="my-10 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-gold/40 shadow-2xl">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-3 animate-spin-slow" />
              <h3 className="font-serif text-3xl font-bold text-gold">
                The Celebration Has Begun!
              </h3>
              <p className="font-telugu text-xl text-ivory mt-2">
                వివాహ మహోత్సవం ప్రారంభమైనది! మీ శుభాశీస్సులతో నూతన దంపతులను ఆశీర్వదించండి.
              </p>
            </div>
          ) : (
            /* Active Live Countdown Blocks */
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-10 max-w-2xl mx-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="bg-white/10 backdrop-blur-md border border-gold/40 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center relative group hover:border-gold transition-all duration-300"
                >
                  {/* Subtle Top Accent */}
                  <div className="w-8 h-1 bg-gold/50 rounded-full mb-2"></div>

                  <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>

                  <span className="text-xs sm:text-sm font-sans uppercase tracking-wider text-ivory/90 mt-2 font-medium">
                    {unit.label}
                  </span>

                  <span className="font-telugu text-xs text-gold-light/80 mt-0.5">
                    {unit.telugu}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Add to Calendar Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleGoogleCalendar}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-maroon-dark font-serif font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Add to Google Calendar</span>
            </button>

            <button
              onClick={handleIcsDownload}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory border border-gold/40 font-serif text-sm shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Download .iCal / Outlook</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

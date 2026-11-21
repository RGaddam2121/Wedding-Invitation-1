import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './IndianDecorations';
import { CheckCircle2, Send, Users, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RSVPSection: React.FC = () => {
  const { rsvp } = weddingData;
  const [guestName, setGuestName] = useState('');
  const [attendees, setAttendees] = useState('2');
  const [status, setStatus] = useState<'attending' | 'declined'>('attending');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!rsvp.enabled) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Trigger celebratory confetti on successful confirmation
    if (status === 'attending') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C6A15B', '#781F35', '#D9A6A6'],
      });
    }

    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FFFDF7] via-ivory to-[#F6EDE0] relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-maroon font-semibold">
            Celebrate With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-dark mt-1">
            RSVP & Greetings
          </h2>
          <p className="font-telugu text-lg text-maroon font-medium mt-1">
            మీ రాక మాకు ఆనందదాయకం
          </p>
          <GoldDivider className="my-4 max-w-xs mx-auto" />
          <p className="text-sm text-gray-600 font-serif italic">
            Kindly confirm your presence by {rsvp.deadline} to help us make comfortable dining and hospitality arrangements for your family.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border-2 border-gold/40 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-maroon-dark">
                Thank You, {guestName}!
              </h3>
              <p className="font-serif text-gray-700">
                {status === 'attending'
                  ? "We are thrilled and eagerly looking forward to welcoming you and your family!"
                  : "Thank you for letting us know and sending your warm wishes."}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs font-sans text-maroon underline cursor-pointer hover:text-maroon-dark"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name / Family Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Srikanth & Family"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gold/40 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-cream/30 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Number of Attendees
                  </label>
                  <div className="relative">
                    <select
                      value={attendees}
                      onChange={(e) => setAttendees(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gold/40 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-cream/30 text-sm appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5+">5+ (Whole Family)</option>
                    </select>
                    <Users className="w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Will You Attend?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus('attending')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        status === 'attending'
                          ? 'bg-maroon text-ivory border-maroon'
                          : 'bg-white text-gray-700 border-gold/40 hover:bg-cream'
                      }`}
                    >
                      ✓ Joyfully Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('declined')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        status === 'declined'
                          ? 'bg-gray-800 text-ivory border-gray-800'
                          : 'bg-white text-gray-700 border-gold/40 hover:bg-cream'
                      }`}
                    >
                      Regretfully No
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Heartfelt Blessings / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Leave your blessings and best wishes for the couple..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gold/40 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-cream/30 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-maroon via-maroon-light to-maroon text-ivory font-serif font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit RSVP & Blessings</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { weddingData } from './data/weddingData';
import { useAudio } from './hooks/useAudio';
import { OpeningInvitation } from './components/OpeningInvitation';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhotoGallery } from './components/PhotoGallery';
import { WeddingEvents } from './components/WeddingEvents';
import { Countdown } from './components/Countdown';
import { VenueSection } from './components/VenueSection';
import { FamilyInvitation } from './components/FamilyInvitation';
import { RSVPSection } from './components/RSVPSection';
import { ShareInvitation } from './components/ShareInvitation';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const { isPlaying, toggle, play } = useAudio(weddingData.music.audioUrl);

  const handleOpenInvitation = () => {
    setHasOpened(true);
    // User interacted with the button, so audio playback is compliant with browser autoplay policies
    play();
  };

  return (
    <div className="min-h-screen bg-ivory text-gray-800 font-sans selection:bg-gold/30 selection:text-maroon">
      {/* 1. Full-screen Opening Screen Cover */}
      <AnimatePresence>
        {!hasOpened && (
          <OpeningInvitation onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Main Website (Available once opened or smoothly displayed behind) */}
      {hasOpened && (
        <div className="relative animate-fadeIn">
          {/* Navigation Bar */}
          <Navigation />

          {/* Hero Couple Introduction */}
          <HeroSection />

          {/* Photo Gallery & Moments */}
          <PhotoGallery />

          {/* Wedding Events / Timeline */}
          <WeddingEvents />

          {/* Live Dynamic Countdown */}
          <Countdown />

          {/* Venue & Location Directions */}
          <VenueSection />

          {/* Traditional Family Invitation */}
          <FamilyInvitation />

          {/* RSVP Section */}
          <RSVPSection />

          {/* Share, QR Code & Print PDF */}
          <ShareInvitation />

          {/* Footer */}
          <Footer />

          {/* Floating Music Control */}
          <MusicPlayer
            isPlaying={isPlaying}
            onToggle={toggle}
            title={weddingData.music.title}
          />
        </div>
      )}
    </div>
  );
}

export default App;

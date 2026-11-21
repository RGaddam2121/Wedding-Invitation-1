import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  title: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle, title }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      <button
        onClick={onToggle}
        className={`p-3.5 rounded-full shadow-2xl border-2 transition-all duration-300 flex items-center justify-center cursor-pointer group ${
          isPlaying
            ? 'bg-maroon text-gold border-gold animate-pulse-slow'
            : 'bg-ivory text-maroon border-gold/60 hover:bg-white'
        }`}
        aria-label={isPlaying ? "Pause Background Music" : "Play Background Music"}
        title={isPlaying ? `Pause: ${title}` : `Play: ${title}`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 transition-transform group-hover:scale-110" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-500 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
};

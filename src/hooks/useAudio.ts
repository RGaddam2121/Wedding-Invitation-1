import { useState, useEffect, useRef } from 'react';

export function useAudio(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    const handleCanPlay = () => setIsReady(true);
    audio.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audioRef.current = null;
    };
  }, [url]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play prevented:", e);
      });
    }
  };

  const play = () => {
    if (!audioRef.current || isPlaying) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((e) => {
      console.warn("Autoplay was prevented by browser policy", e);
    });
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return { isPlaying, toggle, play, pause, isReady };
}

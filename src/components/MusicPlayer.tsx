import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free romantic piano track
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-111568.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed first):", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </motion.button>
  );
};

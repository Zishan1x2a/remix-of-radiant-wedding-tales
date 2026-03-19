import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  audioSrc?: string;
}

const MusicToggle = ({ audioSrc }: MusicToggleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    return () => {
      audioRef.current?.pause();
    };
  }, [audioSrc]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  if (!audioSrc) return null;

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-maroon border-2 border-gold flex items-center justify-center text-gold shadow-gold hover:bg-maroon-light transition-colors"
      onClick={toggleMusic}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  );
};

export default MusicToggle;

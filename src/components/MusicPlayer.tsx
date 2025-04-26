
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Play audio when component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    playAudio();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 p-3 bg-white/10 backdrop-blur-lg rounded-full shadow-lg z-40">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-forest-500/10"
        onClick={toggleMute}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-forest-600 dark:text-forest-400" />
        ) : (
          <Volume2 className="h-6 w-6 text-forest-600 dark:text-forest-400" />
        )}
      </Button>
      <div className="w-24">
        <Slider 
          value={[isMuted ? 0 : volume * 100]} 
          onValueChange={(value) => setVolume(value[0] / 100)}
          max={100} 
          step={1}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;

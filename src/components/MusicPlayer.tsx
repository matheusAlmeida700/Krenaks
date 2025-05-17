import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Music from "../../assets/songs/KrenakMaxakaliPatax.mp3";

const MusicPlayer = () => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(true); // Começar mutado
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(Music);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

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

  const toggleMute = async () => {
    if (!isPlaying && audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
        return;
      }
    }

    // Agora pode alternar mute
    setIsMuted((prev) => !prev);
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

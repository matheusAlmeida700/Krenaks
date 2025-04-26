
import { useState, useEffect } from 'react';
import { Loader, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoadingScreen = ({ onEnter }: { onEnter?: () => void }) => {
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnterButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-forest-900 to-forest-950 z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring animation */}
        <div className="absolute inset-0 rounded-full border-4 border-forest-400/30 animate-[spin_3s_linear_infinite]" />
        
        {/* Inner ring animation */}
        <div className="absolute inset-2 rounded-full border-4 border-t-forest-400 border-r-forest-400/50 border-b-forest-400/30 border-l-forest-400/10 animate-[spin_2s_linear_infinite]" />
        
        {/* Center content */}
        <div className="relative p-8">
          <Loader className="w-12 h-12 text-forest-400 animate-[spin_1s_linear_infinite]" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-forest-400/80 text-lg font-medium animate-pulse mb-4">
          Carregando...
        </p>
        
        {showEnterButton && (
          <Button 
            onClick={onEnter} 
            className="animate-fade-in flex items-center gap-2"
          >
            <LogIn className="h-5 w-5" />
            Entrar
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;


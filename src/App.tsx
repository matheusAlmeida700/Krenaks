
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference if no saved theme
    if (!savedTheme) {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPreference);
      localStorage.setItem('theme', systemPreference);
    } else {
      setTheme(savedTheme);
    }

    // Apply theme to document
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setCanEnter(true);
  };

  // Only render app when theme is determined
  if (theme === null) {
    return <div className="min-h-screen bg-white dark:bg-forest-950"></div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {(isLoading || !canEnter) && (
          <LoadingScreen onEnter={handleEnter} />
        )}
        <MusicPlayer />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


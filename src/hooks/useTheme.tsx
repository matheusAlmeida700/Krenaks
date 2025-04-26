
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  // Check for system preference or stored preference
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      
      // Check user preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    // Default to light theme
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}


import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 bg-secondary text-forest-700 dark:bg-forest-800 dark:text-forest-200 hover:bg-forest-100 dark:hover:bg-forest-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-forest-400"
      aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

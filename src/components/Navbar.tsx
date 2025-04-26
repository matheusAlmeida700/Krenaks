
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Região', href: '#region' },
    { name: 'Línguas', href: '#languages' },
    { name: 'História', href: '#history' },
    { name: 'Contribuições', href: '#contributions' },
    { name: 'Direitos', href: '#rights' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 py-3 
        ${isScrolled ? 'bg-white/90 dark:bg-forest-950/90 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-forest-500 text-white p-2 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M17 14c-5.7 0-10 4.1-10 8a32.2 32.2 0 0 1 10-4"></path>
                <path d="M7 14c-1.6 1.1-3 3.3-3 5.5 0 3.4 3.3 6.5 7 6.5a32.2 32.2 0 0 0-4-12z"></path>
                <circle cx="12" cy="5" r="3"></circle>
              </svg>
            </div>
            <span className="text-xl font-bold text-forest-800 dark:text-forest-200">Alma Verde Ancestral</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-forest-700 hover:text-forest-500 dark:text-forest-300 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-forest-800 dark:text-forest-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2 bg-white dark:bg-forest-900 shadow-md">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-forest-700 hover:text-forest-500 hover:bg-forest-50 dark:text-forest-300 dark:hover:text-white dark:hover:bg-forest-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

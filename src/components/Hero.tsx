
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 700, 1);
      const translateY = scrollPosition * 0.3; // Parallax effect
      
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-100 to-white dark:from-forest-900 dark:to-forest-950"
    >
      <div className="absolute inset-0 z-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-forest-pattern opacity-20 dark:opacity-10"></div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-forest-950"></div>
      </div>

      <div 
        ref={heroRef} 
        className="container mx-auto px-4 relative z-10 py-20 mt-16 transition-transform duration-300 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-forest-800 dark:text-forest-100">
            <span className="inline-block animate-fade-in">Alma</span>{" "}
            <span className="inline-block animate-fade-in" style={{animationDelay: "0.3s"}}>Verde</span>{" "}
            <span className="inline-block animate-fade-in" style={{animationDelay: "0.6s"}}>Ancestral</span>
          </h1>
          
          <div 
            className="indigenous-border inline-block animate-fade-in p-4 mb-12" 
            style={{animationDelay: "0.9s"}}
          >
            <p className="text-xl md:text-2xl text-forest-700 dark:text-forest-300 max-w-2xl mx-auto">
              Explore a rica herança dos povos originários do Brasil, 
              suas contribuições, culturas e os desafios contemporâneos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "1.2s"}}>
            <a 
              href="#region" 
              className="px-8 py-3 bg-forest-600 hover:bg-forest-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
            >
              Começar Jornada
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
            
            <a 
              href="#rights" 
              className="px-8 py-3 bg-transparent border-2 border-forest-600 text-forest-700 dark:text-forest-300 hover:bg-forest-600/10 font-medium rounded-lg transition-colors"
            >
              Saiba sobre os direitos
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#region" className="text-forest-800 dark:text-forest-300">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

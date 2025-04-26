
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GeographicRegion from '@/components/GeographicRegion';
import Languages from '@/components/Languages';
import Timeline from '@/components/Timeline';
import Contributions from '@/components/Contributions';
import RightsSection from '@/components/RightsSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href')!.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-forest-950">
      <CustomCursor />
      <Navbar />
      <Hero />
      <GeographicRegion />
      <Languages />
      <Timeline />
      <Contributions />
      <RightsSection />
      <Footer />
    </div>
  );
};

export default Index;

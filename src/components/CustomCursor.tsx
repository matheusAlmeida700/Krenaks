
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Track cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Track click state
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Hide cursor when leaving window
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Track when hovering over links and buttons
    const handleLinkHover = () => {
      const links = document.querySelectorAll('a, button');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    // Set up link hover detection after a delay to ensure DOM is ready
    const timer = setTimeout(handleLinkHover, 1000);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timer);
      
      // Clean up link event listeners
      document.querySelectorAll('a, button').forEach(link => {
        link.removeEventListener('mouseenter', () => setLinkHovered(true));
        link.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${clicked ? 'scale-75' : ''} ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'scale-150' : ''} animate-cursor-blink`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        backgroundColor: linkHovered ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
      }}
    />
  );
};

export default CustomCursor;

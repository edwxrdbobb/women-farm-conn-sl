import { useEffect } from 'react';
import { gsap } from 'gsap';

const SmoothScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      gsap.to(window, { scrollTo: { y: window.scrollY + 100, autoKill: false }, duration: 1 });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null; // This component does not render anything
};

export default SmoothScroll; 
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
  damping?: number; // Optional prop to customize damping
  frameRate?: number; // Optional prop to customize frame rate
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  damping = 0.09, // Default value if not provided
  frameRate = 1000 / 60 // Default to 60fps
}) => {
  // DOM references
  const scrollable = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  
  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  // Animation variables
  const animation = useRef<number | null>(null);
  const currentScrollY = useRef<number>(0);
  const targetScrollY = useRef<number>(0);
  
  useEffect(() => {
    // Get the scroll height to enable scrolling
    const setScrollHeight = (): void => {
      if (scrollable.current) {
        document.body.style.height = `${scrollable.current.getBoundingClientRect().height}px`;
      }
    };
    
    // Initialize and set initial height
    setScrollHeight();
    
    // Update heights on resize
    window.addEventListener('resize', setScrollHeight);
    
    // Start smooth scroll animation
    startAnimation();
    
    return () => {
      // Clean up
      stopAnimation();
      window.removeEventListener('resize', setScrollHeight);
      document.body.style.height = '';
    };
  }, []);
  
  // Track the target scroll position
  useEffect(() => {
    const handleScroll = (): void => {
      targetScrollY.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation functions
  const startAnimation = (): void => {
    // Cancel any existing animation
    stopAnimation();
    
    // Create animation loop
    const animateScroll = (): void => {
      // Calculate the distance between current and target
      const distance = targetScrollY.current - currentScrollY.current;
      
      // Apply damping to create smooth effect
      const delta = Math.abs(distance) < 0.1 
        ? 0 
        : distance * damping;
      
      // Update the current position
      if (delta !== 0 && scrollable.current) {
        currentScrollY.current += delta;
        // Apply the transform to create the scroll effect
        scrollable.current.style.transform = `translateY(${-currentScrollY.current}px)`;
        setScrollPosition(currentScrollY.current);
      }
      
      // Continue animation
      animation.current = window.setTimeout(animateScroll, frameRate);
    };
    
    // Start animation loop
    animateScroll();
  };
  
  const stopAnimation = (): void => {
    if (animation.current !== null) {
      clearTimeout(animation.current);
      animation.current = null;
    }
  };
  
  return (
    <div 
      className="smooth-scroll-wrapper" 
      ref={wrapper} 
      style={{ 
        position: 'fixed', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden' 
      }}
    >
      <div className="smooth-scroll" ref={scrollable}>
        {children}
      </div>
    </div>
  );
};

// Usage example with TypeScript
const App: React.FC = () => {
  return (
    <SmoothScroll damping={0.08} frameRate={1000/120}>
      <div style={{ padding: '20px' }}>
        <h1>Smooth Scrolling Content</h1>
        {/* Your page content goes here */}
        <div style={{ height: '100vh', background: '#f0f0f0', margin: '20px 0' }}>
          Section 1
        </div>
        <div style={{ height: '100vh', background: '#e0e0e0', margin: '20px 0' }}>
          Section 2
        </div>
        <div style={{ height: '100vh', background: '#d0d0d0', margin: '20px 0' }}>
          Section 3
        </div>
      </div>
    </SmoothScroll>
  );
};

export default App;
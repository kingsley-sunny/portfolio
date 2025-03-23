"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  damping?: number; // Optional prop to customize damping
  frameRate?: number; // Optional prop to customize frame rate
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  damping = 0.07, // Default value if not provided
}) => {
  // DOM references
  const scrollable = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // Animation variables
  const animationFrameId = useRef<number | null>(null);
  const currentScrollY = useRef<number>(0);
  const targetScrollY = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    // Get the scroll height to enable scrolling
    const setScrollHeight = (): void => {
      if (scrollable.current) {
        document.body.style.height = `${scrollable.current.getBoundingClientRect().height + 60}px`;
      }
    };

    // Initialize and set initial height
    setScrollHeight();

    // Update heights on resize
    window.addEventListener("resize", setScrollHeight);

    // Start smooth scroll animation
    startAnimation();

    return () => {
      // Clean up
      stopAnimation();
      window.removeEventListener("resize", setScrollHeight);
      document.body.style.height = "";
    };
  }, []);

  // Track the target scroll position
  useEffect(() => {
    const handleScroll = (): void => {
      targetScrollY.current = window.scrollY;
      if (!isScrolling.current) {
        startAnimation();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation functions
  const startAnimation = (): void => {
    // Set scrolling state to true
    isScrolling.current = true;

    // Animation loop using requestAnimationFrame
    const animateScroll = (): void => {
      // Calculate the distance between current and target
      const distance = targetScrollY.current - currentScrollY.current;

      // Apply damping to create smooth effect
      const delta = Math.abs(distance) < 0.1 ? 0 : distance * damping;

      // Update the current position
      if (delta !== 0 && scrollable.current) {
        currentScrollY.current += delta;
        // Apply the transform to create the scroll effect
        scrollable.current.style.transform = `translateY(${-currentScrollY.current}px)`;
        setScrollPosition(currentScrollY.current);

        // Continue animation
        animationFrameId.current = requestAnimationFrame(animateScroll);
      } else {
        // Stop animation when we've reached the target
        isScrolling.current = false;
      }
    };

    // Cancel any existing animation first
    stopAnimation();

    // Start animation loop with requestAnimationFrame
    animationFrameId.current = requestAnimationFrame(animateScroll);
  };

  const stopAnimation = (): void => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  return (
    <div
      className="fixed h-full w-full overflow-hidden border-b-8 border-white pb-52 scrollbar-thin"
      ref={wrapper}
    >
      <div className="scrollbar-thin" ref={scrollable}>
        {children}
      </div>
    </div>
  );
};

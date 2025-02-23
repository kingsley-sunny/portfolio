import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export const useScrollBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05, // Lower damping = faster response
        thumbMinSize: 20,
        // You could also modify acceleration or other settings if available
      });
      // Optionally, you could modify the scroll delta here by using plugins or intercepting events

      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, [scrollRef]);

  return scrollRef;
};

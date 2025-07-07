import { useRef, useEffect, useState, MutableRefObject } from "react";

interface UseElementOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useElementOnScreen = (
  options: UseElementOnScreenOptions
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Default to true for SSR (transparent toolbar)

    // Set initial visibility based on scroll position only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY === 0); // Set to false if scrolled
    }
  }, []);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
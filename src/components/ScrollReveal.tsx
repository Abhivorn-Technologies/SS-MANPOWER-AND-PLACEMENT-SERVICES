import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

// A shared observer to minimize browser overhead when dozens of components are revealed at once.
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isVisible: boolean) => void>();

const getSharedObserver = (threshold: number) => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observerCallbacks.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      { 
        threshold,
        rootMargin: '100px 0px' // Prepare animations before they enter the viewport
      }
    );
  }
  return sharedObserver;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'slide-up',
  delay = 0,
  duration = 1000,
  className = '',
  threshold = 0.1,
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const callback = (intersecting: boolean) => {
      if (intersecting) {
        setIsVisible(true);
        if (once && element) {
          getSharedObserver(threshold).unobserve(element);
          observerCallbacks.delete(element);
        }
      } else if (!once) {
        setIsVisible(intersecting);
      }
    };

    observerCallbacks.set(element, callback);
    getSharedObserver(threshold).observe(element);

    return () => {
      if (element) {
        getSharedObserver(threshold).unobserve(element);
        observerCallbacks.delete(element);
      }
    };
  }, [threshold, once]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'fade':
        return isVisible ? 'opacity-100' : 'opacity-0';
      case 'slide-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'slide-left':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case 'slide-right':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'scale':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getVariantStyles()} ${className} transition-all`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, transform', // Keep active for reactive animations
        backfaceVisibility: 'hidden', // Extra GPU hint
        transform: 'translate3d(0, 0, 0)' // Force GPU layer
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

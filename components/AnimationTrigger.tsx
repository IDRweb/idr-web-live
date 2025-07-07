import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const AnimationTrigger: React.FC = () => {
  const router = useRouter();

  const setupObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animate');
            if (animationClass) {
              entry.target.classList.add(animationClass);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach((element) => {
      observer.observe(element);
      element.classList.remove('slide-up');
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  };

  useEffect(() => {
    const cleanUp = setupObserver();

    const handleRouteChange = () => {
      cleanUp(); 
      setupObserver();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      cleanUp();
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default AnimationTrigger;

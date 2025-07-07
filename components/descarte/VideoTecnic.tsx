import React, { useEffect, useRef } from 'react';

// Declare Vimeo global type to avoid TypeScript errors
declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLIFrameElement, options?: any) => any;
    };
  }
}

const VideoTecnic: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load Vimeo Player API script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;

    // Log script loading status
    script.onload = () => {
      console.log('Vimeo Player API script loaded successfully');
      // Initialize Vimeo Player
      if (iframeRef.current && window.Vimeo) {
        try {
          const player = new window.Vimeo.Player(iframeRef.current);
          player.on('play', () => {
            console.log('Video is playing');
          });
        } catch (error) {
          console.error('Error initializing Vimeo Player:', error);
        }
      } else {
        console.error('Iframe or Vimeo API not available');
      }
    };
    script.onerror = () => {
      console.error('Failed to load Vimeo Player API script');
    };

    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        padding: '56.25% 0 0 0', // Matches Vimeo's responsive padding
        position: 'relative',
      }}
    >
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/1082373467?badge=0&autopause=0&player_id=0&app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title="Igualadina de Depuració i Restauració - Tractament d'aigües"
      ></iframe>
    </div>
  );
};

export default VideoTecnic;
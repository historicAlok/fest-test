import { useEffect, useState } from 'react';

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'show' | 'fade'>('show');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fade'), 2000);
    const doneTimer = setTimeout(() => onComplete(), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${phase}`}>
      <div className="intro-inner">
        <img src="/tastefeast-logo-removebg-preview.png" alt="Taste Feast" className="intro-logo" />
        <p className="intro-tagline">We Serve Memories.</p>
        <div className="intro-line" />
      </div>
    </div>
  );
}

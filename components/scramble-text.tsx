'use client';

import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#01';

export function ScrambleText({ 
  text, 
  className = '', 
  delay = 0,
  speed = 0.15,
  scrambleFrames = 15
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  speed?: number;
  scrambleFrames?: number;
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let timeout: NodeJS.Timeout;
    let frame: number;
    let iteration = -scrambleFrames;

    const animate = () => {
      setDisplayText((prev) => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      if (iteration >= text.length) {
        cancelAnimationFrame(frame);
        setDisplayText(text);
      } else {
        iteration += speed;
        frame = requestAnimationFrame(animate);
      }
    };

    timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [text, delay, speed, scrambleFrames, isMounted]);

  // To avoid hydration mismatch, render original text on server
  if (!isMounted) return <span className={className}>{text}</span>;

  return <span className={className}>{displayText}</span>;
}

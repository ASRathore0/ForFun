import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay, isInView]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const FloatingHearts = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-rose-200/40"
          style={{ left: `${heart.x}%` }}
          animate={{
            y: [0, -1000],
            x: [0, Math.sin(heart.id) * 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

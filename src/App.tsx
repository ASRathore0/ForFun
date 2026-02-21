/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingHearts } from './components/FloatingHearts';
import { TimelineNode } from './components/TimelineNode';
import { PasswordProtection, Countdown } from './components/Extras';
import { TypewriterText } from './components/TypewriterText';
import { storyChapters } from './data/story';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(true);
  const [showFinalMagic, setShowFinalMagic] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  const handleStartJourney = () => {
    const element = document.getElementById('chapter-1');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  if (locked) {
    return <PasswordProtection onUnlock={() => setLocked(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#fff0f5] overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-rose-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION */}
      <motion.section 
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/20 to-[#fff0f5] z-0" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 inline-block"
          >
            <Heart className="w-24 h-24 text-rose-400 fill-rose-200" strokeWidth={1} />
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-950 mb-6 tracking-tight">
            From Tuition <br />
            <span className="text-rose-500 italic">to Forever</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-rose-800/60 mb-12 max-w-lg mx-auto leading-relaxed">
            A story that began in 10th class and evolved into a beautiful 7-year journey.
          </p>

          <motion.button
            onClick={handleStartJourney}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium shadow-lg shadow-rose-200 hover:bg-rose-600 transition-all flex items-center gap-2 mx-auto"
          >
            Start Our Journey
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* TIMELINE SECTION */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 z-10">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 transform -translate-x-1/2" />

        <div className="space-y-12">
          {storyChapters.map((chapter, index) => (
            <div id={`chapter-${chapter.id}`} key={chapter.id}>
              <TimelineNode chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* FINAL SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-950 to-slate-950" />
        
        {/* Particles for final section */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="font-serif text-4xl md:text-6xl mb-12 leading-tight min-h-[160px]">
            <TypewriterText text="I promised you..." delay={0.5} className="block mb-4" />
            <span className="text-rose-400">
              <TypewriterText text="I will never leave you." delay={2.5} />
            </span>
          </div>

          <div className="font-sans text-xl md:text-2xl text-gray-300 mb-12 space-y-4 min-h-[80px]">
            <p><TypewriterText text="In this lifetime..." delay={4.5} /></p>
            <p><TypewriterText text="And every lifetime." delay={6} /></p>
          </div>

          <AnimatePresence>
            {!showFinalMagic ? (
              <motion.button
                onClick={() => setShowFinalMagic(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-rose-900 rounded-full font-serif text-xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all"
              >
                Forever Starts Now
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="flex justify-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-20 h-20 text-rose-500 fill-rose-500" />
                  </motion.div>
                </div>
                <p className="font-script text-4xl text-rose-300">Happy Anniversary My Love</p>
                
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 mt-8">
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Countdown to our next milestone</p>
                  <Countdown />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

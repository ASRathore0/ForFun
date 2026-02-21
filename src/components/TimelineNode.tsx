import React from 'react';
import { motion } from 'motion/react';
import { StoryChapter } from '../data/story';
import { Book, TrendingUp, Mail, Phone, Users, Moon, Heart, Film, MapPin } from 'lucide-react';

const icons = {
  book: Book,
  'trending-up': TrendingUp,
  mail: Mail,
  phone: Phone,
  users: Users,
  moon: Moon,
  heart: Heart,
  film: Film,
  'map-pin': MapPin,
};

interface TimelineNodeProps {
  chapter: StoryChapter;
  index: number;
}

export const TimelineNode = ({ chapter, index }: TimelineNodeProps) => {
  const Icon = chapter.icon ? icons[chapter.icon as keyof typeof icons] : Heart;
  const isEven = index % 2 === 0;
  
  // Theme styles
  const isDark = chapter.theme === 'dark';
  const isGold = chapter.theme === 'gold';
  
  const cardBg = isDark ? 'bg-slate-900 text-white' : isGold ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-white text-gray-800';
  const accentColor = isDark ? 'text-blue-300' : isGold ? 'text-amber-600' : 'text-rose-500';
  
  return (
    <motion.div 
      className={`relative flex items-center justify-center w-full mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Center Line Dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-rose-200 border-4 border-white shadow-lg z-10 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-rose-500" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <motion.div 
          className={`p-8 rounded-2xl shadow-xl border border-white/20 relative overflow-hidden ${cardBg}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background particles for specific themes */}
          {isDark && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse" 
                     style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0.3 }} />
              ))}
            </div>
          )}

          <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${isDark ? 'bg-white/10' : 'bg-rose-50'} ${accentColor}`}>
            <Icon size={24} />
          </div>
          
          <h3 className={`font-serif text-2xl mb-3 font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {chapter.title}
          </h3>
          
          <div className={`font-sans leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {chapter.text.split('\n').map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>

          {/* Decorative elements */}
          {chapter.icon === 'mail' && (
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
              <Mail size={100} />
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

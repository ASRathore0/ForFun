import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Lock, Calendar } from 'lucide-react';

export const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password for demo purposes - in a real app, this would be more secure or configurable
    // Allowing "love", "forever", or just empty for ease of use in this demo context if user didn't specify
    if (password.toLowerCase() === 'love' || password.toLowerCase() === 'forever' || password === '1234') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-50 p-4">
      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-rose-100"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-rose-100 rounded-full text-rose-500">
            <Lock size={32} />
          </div>
        </div>
        <h2 className="font-serif text-2xl text-gray-800 mb-2">Our Story</h2>
        <p className="text-gray-500 mb-6">Enter the password to open our memories.</p>
        <p className="text-xs text-gray-400 mb-4">(Try: love)</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-center tracking-widest"
            placeholder="Password"
            autoFocus
          />
          <motion.button
            type="submit"
            className="w-full py-3 bg-rose-500 text-white rounded-lg font-medium shadow-md hover:bg-rose-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Unlock
          </motion.button>
        </form>
        
        {error && (
          <motion.p 
            className="text-red-500 text-sm mt-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Incorrect password. Try again.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export const Countdown = () => {
  // Mock anniversary date - 1 year from now
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Set a target date (e.g., next Valentine's or Anniversary)
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 1);
    targetDate.setMonth(1); // Feb
    targetDate.setDate(14); // 14th
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8 mt-8 text-rose-900">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-serif font-bold tabular-nums">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider opacity-60">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

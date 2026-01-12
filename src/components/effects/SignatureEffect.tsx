import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  effect: 'blob-blue' | 'blob-amber' | 'glow';
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, className = '' }) => {
  if (effect === 'blob-blue') {
    return (
      <motion.div 
        className={`absolute w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none ${className}`}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    );
  }

  if (effect === 'blob-amber') {
    return (
      <motion.div 
        className={`absolute w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none ${className}`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
    );
  }

  return null;
};

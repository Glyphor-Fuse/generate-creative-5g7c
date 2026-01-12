import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'parallax' | 'text-reveal' | 'clip-reveal' | 'marquee' | 'sticky-progress';
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  intensity = 0.5
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, intensity * 200]);

  if (type === 'parallax') {
    return (
      <div ref={ref} className={`overflow-hidden h-full w-full ${className}`}>
        <motion.div style={{ y }} className="h-full w-full">
          {children}
        </motion.div>
      </div>
    );
  }

  // Default fallback for other types not explicitly used in this specific conversion but required by interface
  return <div className={className}>{children}</div>;
};

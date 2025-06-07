'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
  hover?: boolean;
  className?: string;
}

const intensityStyles = {
  light: 'bg-white/5 backdrop-blur-sm border-white/10',
  medium: 'bg-white/10 backdrop-blur-md border-white/20',
  strong: 'bg-white/15 backdrop-blur-lg border-white/30',
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, intensity = 'medium', hover = true, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-lg border backdrop-saturate-150',
          intensityStyles[intensity],
          className
        )}
        initial={{
          opacity: 0,
          scale: 0.9,
          backdropFilter: 'blur(0px)',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          backdropFilter: intensity === 'light' ? 'blur(4px)' : 
                         intensity === 'medium' ? 'blur(10px)' : 'blur(16px)',
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={hover ? {
          scale: 1.02,
          backdropFilter: intensity === 'light' ? 'blur(8px)' : 
                         intensity === 'medium' ? 'blur(14px)' : 'blur(20px)',
          transition: { duration: 0.2 },
        } : undefined}
        whileTap={hover ? { scale: 0.98 } : undefined}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
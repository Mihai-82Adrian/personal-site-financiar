'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  lines?: number;
  width?: string;
  height?: string;
}

export default function SkeletonLoader({
  className,
  variant = 'rectangular',
  lines = 1,
  width,
  height,
}: SkeletonLoaderProps) {
  const baseClasses = 'bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 animate-pulse';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full aspect-square',
    rectangular: 'rounded-md',
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              baseClasses,
              variantClasses.text,
              index === lines - 1 ? 'w-3/4' : 'w-full'
            )}
            style={{ width, height }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{ width, height }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
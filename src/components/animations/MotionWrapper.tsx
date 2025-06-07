'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'custom';
  delay?: number;
  duration?: number;
  stagger?: boolean;
  once?: boolean;
  className?: string;
}

const variants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
};

const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ 
    children, 
    variant = 'fadeInUp', 
    delay = 0, 
    duration,
    stagger = false,
    once = true,
    className,
    ...props 
  }, ref) => {
    const selectedVariant = variant === 'custom' ? props.variants : variants[variant];
    
    // Modify transition with custom delay and duration
    const modifiedVariant = selectedVariant && (duration || delay) ? {
      ...selectedVariant,
      visible: {
        ...selectedVariant.visible,
        transition: {
          ...(typeof selectedVariant.visible === 'object' && 'transition' in selectedVariant.visible ? selectedVariant.visible.transition : {}),
          ...(duration && { duration }),
          ...(delay && { delay }),
        },
      },
    } : selectedVariant;

    if (stagger) {
      return (
        <motion.div
          ref={ref}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, amount: 0.3 }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        variants={modifiedVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = 'MotionWrapper';

export default MotionWrapper;
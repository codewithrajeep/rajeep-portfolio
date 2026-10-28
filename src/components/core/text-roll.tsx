'use client';
import { motion, TargetAndTransition } from 'framer-motion';

export type TextRollProps = {
  children: string;
  className?: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  variants?: {
    enter: { initial: TargetAndTransition; animate: TargetAndTransition };
    exit: { initial: TargetAndTransition; animate: TargetAndTransition };
  };
  transition?: any;
};

export function TextRoll({
  children,
  className,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.05,
  getExitDelay = (i) => i * 0.05 + 0.1,
  variants,
  transition,
}: TextRollProps) {
  const defaultVariants = {
    enter: { initial: { y: 0 }, animate: { y: '100%' } },
    exit: { initial: { y: '-100%' }, animate: { y: 0 } },
  };

  const activeVariants = variants || defaultVariants;

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      {children.split('').map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={activeVariants.enter.initial as TargetAndTransition}
          animate={activeVariants.exit.animate as TargetAndTransition}
          transition={{ duration, delay: getEnterDelay(i), ...transition }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}
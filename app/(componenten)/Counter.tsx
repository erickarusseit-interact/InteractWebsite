'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
  value: number;
  fontSize?: number;
  fontWeight?: number;
  padding?: number;
  gap?: number;
  textColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function Counter({
  value,
  fontSize = 64,
  fontWeight = 600,
  padding = 0,
  gap = 0,
  textColor = 'white',
  gradientFrom,
  gradientTo,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('de-DE').format(Math.round(latest));
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  const style: React.CSSProperties = {
    fontSize,
    fontWeight,
    padding,
    letterSpacing: gap,
    color: textColor,
    fontVariantNumeric: 'tabular-nums',
  };

  if (gradientFrom && gradientTo) {
    style.background = `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`;
    style.WebkitBackgroundClip = 'text';
    style.WebkitTextFillColor = 'transparent';
    style.backgroundClip = 'text';
  }

  return <span ref={ref} style={style}>0</span>;
}

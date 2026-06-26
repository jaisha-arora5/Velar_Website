"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedProgressBarProps {
  progress: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedProgressBar({
  progress,
  className,
  style,
}: AnimatedProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  // Reset and animate when progress or intersection state changes (e.g. on mount or tab change)
  useEffect(() => {
    if (hasIntersected) {
      setWidth(0);
      const timer = setTimeout(() => setWidth(progress), 50);
      return () => clearTimeout(timer);
    }
  }, [progress, hasIntersected]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            setWidth(progress);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [progress]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        width: `${width}%`,
      }}
    />
  );
}

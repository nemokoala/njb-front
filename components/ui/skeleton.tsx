'use client';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useState } from 'react';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [isShow, setIsShow] = useState(false);
  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
      setTimeout(() => {
        setIsPulse(true);
      }, 1000);
    }, 500);
  }, []);

  return (
    <div
      className={cn(
        'rounded-md bg-primary/10 transition-opacity duration-1000',
        isShow ? 'opacity-100' : 'opacity-0',
        isPulse && 'animate-pulse',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };

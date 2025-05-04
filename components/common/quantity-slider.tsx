'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { WheelPicker } from './wheel-picker';

interface QuantitySliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const countArray = Array.from({ length: 100 }, (_, i) => i + 1).reverse();

export function QuantitySlider({ value, onChange, min = 1, max = 100 }: QuantitySliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef<number | null>(null);
  const startValue = useRef<number>(value);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startY.current = e.clientY;
    startValue.current = value;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    startValue.current = value;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const diff = (startY.current! - e.clientY) / 5;
    const newValue = Math.max(min, Math.min(max, Math.round(startValue.current + diff)));
    onChange(newValue);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const diff = (startY.current! - e.touches[0].clientY) / 5;
    const newValue = Math.max(min, Math.min(max, Math.round(startValue.current + diff)));
    onChange(newValue);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="flex items-center space-x-2">
      <WheelPicker orientation="horizontal" options={countArray} selected={value} onChange={onChange} />
    </div>
  );
}

import { useRef, useEffect, useMemo, useCallback } from 'react';
import { debounce, throttle } from 'lodash';
import { useDeviceType } from '@/hooks/use-device-type';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const WheelPicker = ({
  options,
  selected,
  onChange,
  orientation = 'vertical',
}: {
  options: number[];
  selected: number;
  onChange: (value: number) => void;
  orientation?: 'vertical' | 'horizontal';
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40;
  const isMounted = useRef(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // 옵션 배열의 앞과 뒤에 0을 추가
  const extendedOptions = useMemo(() => [0, ...options, 0], [options]);

  const handleScroll = throttle(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, extendedOptions.length - 1));
    const newValue = extendedOptions[clampedIndex + 1];
    if (newValue !== selected && newValue !== 0) {
      onChange(newValue);
    }

    // 스크롤 스냅 처리
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    timer.current = setTimeout(() => {
      containerRef.current?.scrollTo({
        top: clampedIndex * itemHeight,
        behavior: 'smooth',
      });
    }, 100);
  }, 50);

  // 마운트 시 선택된 값으로 스크롤 이동
  useEffect(() => {
    if (containerRef.current) {
      const selectedIndex = extendedOptions.findIndex((option) => option === selected);
      if (selectedIndex > 0) {
        // 0이 아닌 실제 옵션을 찾았을 때
        const itemHeight = 40; // 각 아이템 높이
        if (!isMounted.current) {
          containerRef.current.scrollTo({
            top: (selectedIndex - 1) * itemHeight,
            behavior: 'instant',
          });
          isMounted.current = true;
        }
      }
    }
  }, [selected, extendedOptions]);

  const upButton = useMemo(() => {
    return (
      <Button
        variant="outline"
        size="icon"
        type="button"
        className="w-full min-w-10"
        onClick={() => containerRef.current?.scrollTo({ top: containerRef.current.scrollTop - itemHeight })}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
    );
  }, [orientation]);

  const downButton = useMemo(() => {
    return (
      <Button
        variant="outline"
        size="icon"
        type="button"
        className="w-full min-w-10"
        onClick={() => containerRef.current?.scrollTo({ top: containerRef.current.scrollTop + itemHeight })}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    );
  }, [orientation]);

  return (
    <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row gap-4'} w-full items-center`}>
      {orientation === 'vertical' ? upButton : downButton}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-[120px] w-full min-w-16 overflow-y-scroll scroll-smooth rounded-lg border scrollbar-hide"
      >
        {extendedOptions.map((option, index) => (
          <div
            key={`${option}-${index}`}
            className={`flex h-10 snap-center items-center justify-center ${
              selected === option ? 'font-bold text-primary' : 'text-muted-foreground'
            } ${option === 0 ? 'opacity-0' : ''}`}
          >
            {option}
          </div>
        ))}
      </div>
      {orientation === 'vertical' ? downButton : upButton}
    </div>
  );
};

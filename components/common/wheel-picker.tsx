import { useRef, useEffect, useMemo, useCallback } from 'react';
import { debounce } from 'lodash';

export const WheelPicker = ({
  options,
  selected,
  onChange,
}: {
  options: number[];
  selected: number;
  onChange: (value: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 옵션 배열의 앞과 뒤에 0을 추가
  const extendedOptions = useMemo(() => [0, ...options, 0], [options]);

  const handleScroll = useCallback(
    debounce(() => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const itemHeight = 40; // 각 아이템 높이 (h-10)
      const index = Math.round(scrollTop / itemHeight);
      const clampedIndex = Math.max(0, Math.min(index, extendedOptions.length - 1));
      const newValue = extendedOptions[clampedIndex + 1];
      if (newValue !== selected && newValue !== 0) {
        onChange(newValue);
      }
    }, 300),
    [extendedOptions, onChange, selected],
  );

  // 컴포넌트 언마운트 시 디바운스 함수 취소
  useEffect(() => {
    return () => {
      handleScroll.cancel();
    };
  }, [handleScroll]);

  // 마운트 시 선택된 값으로 스크롤 이동
  useEffect(() => {
    if (containerRef.current) {
      const selectedIndex = extendedOptions.findIndex((option) => option === selected);
      if (selectedIndex > 0) {
        // 0이 아닌 실제 옵션을 찾았을 때
        const itemHeight = 40; // 각 아이템 높이
        containerRef.current.scrollTo({
          top: (selectedIndex - 1) * itemHeight,
          behavior: 'instant',
        });
      }
    }
  }, [selected, extendedOptions]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-[120px] w-16 snap-y snap-mandatory overflow-y-scroll scroll-smooth rounded-lg border scrollbar-hide"
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
  );
};

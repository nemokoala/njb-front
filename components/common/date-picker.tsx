import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { WheelPicker } from './wheel-picker';
import {
  getDaysInMonth,
  isValid,
  getYear,
  getMonth,
  getDate,
  isBefore,
  startOfDay,
  setHours,
  setSeconds,
  setMinutes,
} from 'date-fns';
import { UseFormReturn } from 'react-hook-form';
import { ItemFormData } from '@/lib/schema';
import { toast } from 'sonner';
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 21 }, (_, i) => currentYear + i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

const today = new Date();

export default function DatePicker({
  form,
  initialDate,
  setIsBottomSheetOpen,
}: {
  form: UseFormReturn<ItemFormData>;
  initialDate?: Date;
  setIsBottomSheetOpen: (isOpen: boolean) => void;
}) {
  const [year, setYear] = useState(getYear(initialDate || today));
  const [month, setMonth] = useState(getMonth(initialDate || today) + 1);
  const [day, setDay] = useState(getDate(initialDate || today));
  console.log(initialDate);
  const getDaysInMonthArray = (year: number, month: number): number[] => {
    const daysCount = getDaysInMonth(new Date(year, month - 1));
    return Array.from({ length: daysCount }, (_, i) => i + 1);
  };

  // 현재 선택된 년도와 월에 따라 일수 배열 생성
  const days = useMemo(() => getDaysInMonthArray(year, month), [year, month]);

  //   일수가 변경되었을 때 현재 선택된 일이 유효한지 확인하고 조정
  useEffect(() => {
    // 선택된 날짜가 유효한지 확인
    const isDateValid = isValid(new Date(year, month - 1, day));
    if (!isDateValid || day > days.length) {
      setDay(days.length);
    }
  }, [year, month, day, days.length]);

  const handleCancel = () => {
    setIsBottomSheetOpen(false);
  };

  const handleComplete = () => {
    let selectedDate = new Date(year, month - 1, day);
    // 시간을 정오로 설정
    selectedDate = setHours(selectedDate, 12);
    selectedDate = setMinutes(selectedDate, 0);
    selectedDate = setSeconds(selectedDate, 0);

    const today = startOfDay(new Date());

    if (isBefore(selectedDate, today)) {
      toast.error('오늘 이전의 날짜는 선택할 수 없습니다.');
      return;
    }
    form.setValue('expirationDate', selectedDate);
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="flex w-full max-w-screen-md flex-col items-center justify-center gap-6 rounded-t-3xl bg-white p-6">
      <div className="flex gap-4">
        <WheelPicker options={years} selected={year} onChange={setYear} />
        <WheelPicker options={months} selected={month} onChange={setMonth} />
        <WheelPicker options={days} selected={day} onChange={setDay} />
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={handleCancel}>
          취소
        </Button>
        <Button onClick={handleComplete}>완료</Button>
      </div>
    </div>
  );
}

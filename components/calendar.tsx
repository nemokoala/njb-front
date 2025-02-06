'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일
import { useItems } from '@/queries/query';
import { useEffect } from 'react';
import Item from './item';
dayjs.locale('ko'); // 전역 한국어 설정

export function Calendars() {
  const { data: items } = useItems();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addedItems = items?.filter(
    (item) => dayjs(item.createdAt).format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD'),
  );
  const expiredItems = items?.filter(
    (item) => dayjs(item.expiredAt).format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD'),
  );

  const showTitleContent = (date: Date, view: 'year' | 'month') => {
    const createdItemsMonth = items?.filter(
      (item) => dayjs(item.createdAt).format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD'),
    );
    const expiredItemsMonth = items?.filter(
      (item) => dayjs(item.expiredAt).format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD'),
    );

    const createdItemsYear = items?.filter(
      (item) => dayjs(item.createdAt).format('YYYY-MM') === dayjs(date).format('YYYY-MM'),
    );
    const expiredItemsYear = items?.filter(
      (item) => dayjs(item.expiredAt).format('YYYY-MM') === dayjs(date).format('YYYY-MM'),
    );

    if (view === 'month' && createdItemsMonth?.length === 0 && expiredItemsMonth?.length === 0) {
      return null;
    }
    if (view === 'year' && createdItemsYear?.length === 0 && expiredItemsYear?.length === 0) {
      return null;
    }

    const elements = [];
    if (view === 'month' && createdItemsMonth && createdItemsMonth.length > 0) {
      elements.push(
        <div key="created" className="w-full rounded-md bg-green-500 text-white">
          {createdItemsMonth.length}개
        </div>,
      );
    }
    if (view === 'month' && expiredItemsMonth && expiredItemsMonth.length > 0) {
      elements.push(
        <div key="expired" className="w-full rounded-md bg-red-500 text-white">
          {expiredItemsMonth.length}개
        </div>,
      );
    }
    if (view === 'year' && createdItemsYear && createdItemsYear.length > 0) {
      elements.push(
        <div key="created-year" className="w-full rounded-md bg-green-500 text-white">
          {createdItemsYear.length}개
        </div>,
      );
    }
    if (view === 'year' && expiredItemsYear && expiredItemsYear.length > 0) {
      elements.push(
        <div key="expired-year" className="w-full rounded-md bg-red-500 text-white">
          {expiredItemsYear.length}개
        </div>,
      );
    }

    return elements;
  };

  return (
    <div className="w-full">
      {selectedDate && dayjs(selectedDate as Date).format('YYYY년 MM월 DD일')}
      <Calendar
        locale="ko-KR"
        value={selectedDate}
        onChange={(value) => value && setSelectedDate(value as Date)}
        formatDay={(locale, date) => dayjs(date).format('D')}
        formatMonth={(locale, date) => dayjs(date).format('M월')}
        formatMonthYear={(locale, date) => dayjs(date).format('YYYY년 M월')}
        calendarType="gregory"
        tileContent={({ date, view }) => {
          return (
            <div className="flex w-full flex-col gap-1" key={dayjs(date).format('YYYY-MM-DD')}>
              {showTitleContent(date, view as 'year' | 'month')}
            </div>
          );
        }}
      />

      {selectedDate && addedItems && addedItems.length > 0 && (
        <>
          <p className="text-xl font-bold">추가한 항목</p>
          <div className="flex flex-col gap-2">
            {addedItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
      {selectedDate && expiredItems && expiredItems.length > 0 && (
        <>
          <p className="text-xl font-bold">만료된 항목</p>
          <div className="flex flex-col gap-2">
            {expiredItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

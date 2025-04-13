'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일
import { useItemsList } from '@/queries/refrigerator/queries';
import { useEffect } from 'react';
import Item from './item/item';
import { AnimatePresence, motion } from 'framer-motion';
import { useUrlQuery } from '@/hooks/use-url-query';
dayjs.locale('ko'); // 전역 한국어 설정

export function Calendars() {
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const { data: items, isLoading } = useItemsList(refrigeratorId);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addedItems = items?.filter(
    (item) => dayjs(item.registrationDate).format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD'),
  );
  const expiredItems = items?.filter(
    (item) => dayjs(item.expirationDate).format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD'),
  );

  const showTitleContent = (date: Date, view: 'year' | 'month') => {
    const createdItemsMonth = items?.filter(
      (item) => dayjs(item.registrationDate).format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD'),
    );
    const expiredItemsMonth = items?.filter(
      (item) => dayjs(item.expirationDate).format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD'),
    );

    const createdItemsYear = items?.filter(
      (item) => dayjs(item.registrationDate).format('YYYY-MM') === dayjs(date).format('YYYY-MM'),
    );
    const expiredItemsYear = items?.filter(
      (item) => dayjs(item.expirationDate).format('YYYY-MM') === dayjs(date).format('YYYY-MM'),
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
        <div key="created" className="w-full rounded-full border border-white bg-green-500 text-white">
          {createdItemsMonth.length}
        </div>,
      );
    }
    if (view === 'month' && expiredItemsMonth && expiredItemsMonth.length > 0) {
      elements.push(
        <div key="expired" className="w-full rounded-full bg-red-500 text-white">
          {expiredItemsMonth.length}
        </div>,
      );
    }
    if (view === 'year' && createdItemsYear && createdItemsYear.length > 0) {
      elements.push(
        <div key="created-year" className="w-full rounded-md bg-green-500 text-white">
          {createdItemsYear.length}
        </div>,
      );
    }
    if (view === 'year' && expiredItemsYear && expiredItemsYear.length > 0) {
      elements.push(
        <div key="expired-year" className="w-full rounded-md bg-red-500 text-white">
          {expiredItemsYear.length}
        </div>,
      );
    }

    return elements;
  };

  return (
    <div className="w-full space-y-4">
      <div className="my-2">
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
              <div className="flex w-full gap-0.5" key={dayjs(date).format('YYYY-MM-DD')}>
                {showTitleContent(date, view as 'year' | 'month')}
              </div>
            );
          }}
        />
      </div>

      <AnimatePresence>
        <motion.div
          key={dayjs(selectedDate).format('YYYY-MM-DD')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {selectedDate && addedItems && addedItems.length > 0 && (
            <div>
              <p className="mb-2 text-xl font-bold">추가한 항목</p>
              <div className="flex flex-col gap-3">
                {addedItems.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
          {selectedDate && expiredItems && expiredItems.length > 0 && (
            <div>
              <p className="mb-2 text-xl font-bold">만료된 항목</p>
              <div className="flex flex-col gap-3">
                {expiredItems.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
          {addedItems && expiredItems && addedItems.length === 0 && expiredItems.length === 0 && (
            <div className="my-4 flex h-full items-center justify-center">
              <p className="mb-2 text-xl font-bold text-gray-700">추가한 항목이 없습니다.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

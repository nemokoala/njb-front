'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, parseISO, isSameDay, isSameMonth } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useItemsList } from '@/queries/refrigerator/queries';
import Item from './item/item';
import { AnimatePresence, motion } from 'framer-motion';
import { useUrlQuery } from '@/hooks/use-url-query';
import { useUserStore } from '@/store/auth';
export function Calendars() {
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const user = useUserStore();
  const { data: items, isLoading } = useItemsList({ refrigeratorId, key: user.accessToken });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addedItems = items?.filter((item) => isSameDay(parseISO(item.registrationDate), selectedDate));
  const expiredItems = items?.filter((item) => isSameDay(parseISO(item.expirationDate), selectedDate));

  const showTitleContent = (date: Date, view: 'year' | 'month') => {
    const createdItemsMonth = items?.filter((item) => isSameDay(parseISO(item.registrationDate), date));
    const expiredItemsMonth = items?.filter((item) => isSameDay(parseISO(item.expirationDate), date));

    const createdItemsYear = items?.filter((item) => isSameMonth(parseISO(item.registrationDate), date));
    const expiredItemsYear = items?.filter((item) => isSameMonth(parseISO(item.expirationDate), date));

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
        <div key="created-year" className="w-full rounded-full bg-green-500 text-white">
          {createdItemsYear.length}
        </div>,
      );
    }
    if (view === 'year' && expiredItemsYear && expiredItemsYear.length > 0) {
      elements.push(
        <div key="expired-year" className="w-full rounded-full bg-red-500 text-white">
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
          formatDay={(locale, date) => format(date, 'd')}
          formatMonth={(locale, date) => format(date, 'M월', { locale: ko })}
          formatMonthYear={(locale, date) => format(date, 'yyyy년 M월', { locale: ko })}
          calendarType="gregory"
          tileContent={({ date, view }) => {
            return (
              <div className="flex w-full gap-0.5" key={format(date, 'yyyy-MM-dd')}>
                {showTitleContent(date, view as 'year' | 'month')}
              </div>
            );
          }}
        />
      </div>

      <AnimatePresence>
        <motion.div
          key={format(selectedDate, 'yyyy-MM-dd')}
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

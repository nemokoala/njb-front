'use client';

import type { Item } from '@/interfaces/item.interface';
import { differenceInDays, startOfDay, parseISO } from 'date-fns';
import { ImageOff } from 'lucide-react';
import { motion } from 'framer-motion';
import ItemPopover from './item-popover';
import Image from 'next/image';

export default function Item({ item }: { item: Item }) {
  const getProgressColor = (progress: number) => {
    if (progress > 50) return 'hsl(var(--primary))';
    if (progress > 25) return '#ff8000';
    return '#b40000';
  };
  const getDaysLeft = (expiredAt: string) => {
    const today = startOfDay(new Date());
    const expireDate = startOfDay(parseISO(expiredAt));

    const diffDays = differenceInDays(expireDate, today);

    return diffDays;
  };

  const getProgress = (expiredAt: string) => {
    const daysLeft = getDaysLeft(expiredAt);

    const progress = daysLeft * 10;
    // 0-100 사이 값으로 제한
    return Math.max(0, Math.min(100, progress));
  };

  const daysLeft = getDaysLeft(item.expirationDate);
  const progress = getProgress(item.expirationDate);

  return (
    <motion.div
      className="flex h-[90px] items-center rounded-lg border border-gray-200 bg-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={item.name}
    >
      <div className="h-full w-[90px] min-w-[90px] rounded-l-md bg-gray-200">
        {item.photoUrl ? (
          <Image
            src={item.photoUrl}
            alt={item.name}
            className="h-[88px] w-[89px] rounded-l-lg object-cover"
            width={90}
            height={88}
            sizes="88px"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-l-md bg-gray-200">
            <ImageOff className="h-1/2 w-1/2 text-gray-500" />
          </div>
        )}
      </div>
      <div className="flex h-full flex-1 flex-col px-3 py-2">
        <p className="h-6 text-lg font-bold">
          {item.name} ({item.quantity}개)
        </p>
        <div className="flex justify-between">
          {daysLeft >= 0 ? (
            <p
              className="text-md flex flex-col justify-end font-semibold"
              style={{ color: getProgressColor(progress) }}
            >
              D-{daysLeft}
            </p>
          ) : (
            <p className="flex flex-col justify-end text-sm font-semibold text-red-500">D+{Math.abs(daysLeft)}</p>
          )}
          <p className="text-right text-sm leading-[17px] text-gray-500">
            유통기한
            <br />
            {item.expirationDate}
          </p>
        </div>
        <div className="relative mt-1">
          <div className="absolute h-2 w-full rounded-md bg-gray-200" />
          <div className="absolute flex w-full justify-between">
            {Array.from({ length: 11 }, (_, index) => (
              <div
                key={index}
                className={`h-2 w-0.5 rounded-none bg-gray-300 ${index === 0 || index === 10 ? 'opacity-0' : ''}`}
              />
            ))}
          </div>

          {progress > 0 ? (
            <motion.div
              className="absolute h-2 origin-left rounded-md bg-red-500"
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                backgroundColor: getProgressColor(progress),
              }}
            />
          ) : (
            <motion.div
              className="absolute h-2 w-full origin-left rounded-md border border-red-500"
              initial={{ opacity: 0, width: '100%' }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>
      <ItemPopover item={item} />
    </motion.div>
  );
}

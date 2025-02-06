import type { Item } from '@/interfaces/item.interface';
import dayjs from 'dayjs';
import { Ellipsis } from 'lucide-react';

export default function Item({ item }: { item: Item }) {
  const getProgressColor = (progress: number) => {
    if (progress > 50) return 'var(--primary)';
    if (progress > 25) return '#ff8000';
    return '#b40000';
  };
  const getDaysLeft = (expiredAt: string) => {
    const today = dayjs().startOf('day');

    const expireDate = dayjs(expiredAt).startOf('day');

    const diffDays = expireDate.diff(today, 'day');

    return diffDays;
  };

  const getProgress = (createdAt: string, expiredAt: string) => {
    const daysLeft = getDaysLeft(expiredAt);

    const progress = daysLeft * 10;
    // 0-100 사이 값으로 제한
    return Math.max(0, Math.min(100, progress));
  };

  const daysLeft = getDaysLeft(item.expiredAt);
  const progress = getProgress(item.createdAt, item.expiredAt);
  return (
    <div className="flex h-[100px] items-center rounded-lg bg-white">
      <div className="h-[100px] w-[100px] min-w-[100px] rounded-l-md bg-gray-200">
        <img src={item.imgUrl} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex h-full flex-1 flex-col px-3 py-2">
        <p className="text-lg font-bold">{item.name}</p>
        <div className="flex justify-between">
          {daysLeft >= 0 ? (
            <p className="flex flex-col justify-end text-sm" style={{ color: getProgressColor(progress) }}>
              {daysLeft}일 남음
            </p>
          ) : (
            <p className="flex flex-col justify-end text-sm text-red-500">{Math.abs(daysLeft)}일 지남</p>
          )}
          <p className="text-right text-sm leading-[17px] text-gray-500">
            유통기한
            <br />
            {item.expiredAt}
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
          <div
            className="animate-grow-width absolute h-2 origin-left rounded-md bg-red-500"
            style={{
              width: `${progress}%`,
              // left: `${100 - progress}%`,
              backgroundColor: getProgressColor(progress),
            }}
          />
        </div>
      </div>
      <button className="ml-1.5 mr-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
        <Ellipsis className="h-4 w-4 text-blue-500" />
      </button>
    </div>
  );
}

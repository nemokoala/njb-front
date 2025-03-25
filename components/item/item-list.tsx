'use client';

import { useState } from 'react';
import Item from '@/components/item/item';
import { useItemsList } from '@/queries/refrigerator/queries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '../ui/skeleton';
import { useUrlQuery } from '@/hooks/use-url-query';

export default function ItemList() {
  const [sortBy, setSortBy] = useState<'name' | 'expiredAt' | 'createdAt'>('expiredAt');
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const { data: items, isLoading } = useItemsList(refrigeratorId);

  return (
    <>
      {/* <p className="mt-8 text-4xl font-bold text-black">냉장고를 잘 부탁해</p> */}
      <div className="mt-6 flex justify-end gap-2">
        <Select value={sortBy} onValueChange={(value) => setSortBy(value as typeof sortBy)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="정렬 기준 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="expiredAt">유통기한순</SelectItem>
            <SelectItem value="name">이름순</SelectItem>
            <SelectItem value="createdAt">등록일순</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} className="h-[100px]" />)
          : items?.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
}
